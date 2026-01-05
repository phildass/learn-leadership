'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { curriculumData, getLessonsForModule, getQuizForLesson } from '@/lib/curriculum';

export default function LessonPage() {
  const [user, setUser] = useState<any>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const router = useRouter();
  const params = useParams();
  const moduleId = params?.moduleId as string;
  const lessonId = params?.lessonId as string;

  const currentModule = curriculumData.find((m) => m.id === moduleId);
  const lessons = currentModule ? getLessonsForModule(currentModule.id) : [];
  const lesson = lessons.find((l) => l.id === lessonId);
  const quiz = lesson ? getQuizForLesson(lesson.id) : null;

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/sign-in');
      } else {
        setUser(user);
      }
    };
    checkAuth();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex,
    });
  };

  const handleQuizSubmit = () => {
    if (!quiz) return;

    let correct = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct_answer) {
        correct++;
      }
    });

    setQuizScore(correct);
    setQuizCompleted(true);
  };

  const isPassed = quizCompleted && quizScore >= (quiz?.passing_score || 3);

  const getNextLesson = () => {
    const currentIndex = lessons.findIndex((l) => l.id === lessonId);
    if (currentIndex < lessons.length - 1) {
      return lessons[currentIndex + 1];
    }
    return null;
  };

  const nextLesson = getNextLesson();

  if (!user || !currentModule || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="text-2xl font-bold text-primary-600">
            Learn Leadership
          </Link>
          <div className="flex items-center gap-4">
            <Link href={`/modules/${moduleId}`} className="text-sm text-gray-600 hover:text-gray-900">
              Back to Module
            </Link>
            <span className="text-sm text-gray-600">{user?.email}</span>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {!showQuiz ? (
          <>
            <div className="mb-8">
              <div className="text-sm text-primary-600 font-semibold mb-2">
                Module {currentModule.module_number} • Lesson {lesson.lesson_number}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{lesson.title}</h1>
            </div>

            <div className="bg-white rounded-lg shadow p-8 mb-8">
              <div className="prose max-w-none">
                {lesson.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link
                href={`/modules/${moduleId}`}
                className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
              >
                ← Back to Module
              </Link>
              <button
                onClick={() => setShowQuiz(true)}
                className="px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
              >
                Take Quiz →
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Lesson Quiz</h2>
              <p className="text-gray-600">
                Answer at least {quiz?.passing_score} out of {quiz?.questions.length} questions correctly to pass
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-8 mb-8">
              {!quizCompleted ? (
                <>
                  <div className="space-y-8">
                    {quiz?.questions.map((question, qIndex) => (
                      <div key={question.id} className="pb-8 border-b last:border-b-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          {qIndex + 1}. {question.question}
                        </h3>
                        <div className="space-y-2">
                          {question.options.map((option, oIndex) => (
                            <label
                              key={oIndex}
                              className="flex items-start p-3 border rounded cursor-pointer hover:bg-gray-50 transition"
                            >
                              <input
                                type="radio"
                                name={`question-${qIndex}`}
                                value={oIndex}
                                checked={selectedAnswers[qIndex] === oIndex}
                                onChange={() => handleAnswerSelect(qIndex, oIndex)}
                                className="mt-1 mr-3"
                              />
                              <span className="text-gray-700">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setShowQuiz(false)}
                      className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
                    >
                      ← Back to Lesson
                    </button>
                    <button
                      onClick={handleQuizSubmit}
                      disabled={Object.keys(selectedAnswers).length !== quiz?.questions.length}
                      className="px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit Quiz
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <div className={`text-6xl mb-4 ${isPassed ? 'text-green-600' : 'text-red-600'}`}>
                    {isPassed ? '✓' : '✗'}
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isPassed ? 'text-green-600' : 'text-red-600'}`}>
                    {isPassed ? 'Congratulations!' : 'Not Quite There'}
                  </h3>
                  <p className="text-xl text-gray-700 mb-8">
                    You scored {quizScore} out of {quiz?.questions.length}
                  </p>
                  {isPassed ? (
                    <div>
                      <p className="text-gray-600 mb-6">
                        You&apos;ve successfully completed this lesson!
                      </p>
                      <div className="flex gap-4 justify-center">
                        {nextLesson ? (
                          <Link
                            href={`/modules/${moduleId}/${nextLesson.id}`}
                            className="px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
                          >
                            Next Lesson →
                          </Link>
                        ) : (
                          <Link
                            href="/modules"
                            className="px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
                          >
                            Back to Modules
                          </Link>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-600 mb-6">
                        You need at least {quiz?.passing_score} correct answers to pass. Review the lesson and try again.
                      </p>
                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={() => {
                            setQuizCompleted(false);
                            setSelectedAnswers({});
                            setShowQuiz(false);
                          }}
                          className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition"
                        >
                          Review Lesson
                        </button>
                        <button
                          onClick={() => {
                            setQuizCompleted(false);
                            setSelectedAnswers({});
                          }}
                          className="px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition"
                        >
                          Retry Quiz
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
