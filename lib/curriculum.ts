import { Module, Lesson, Quiz } from '@/types';

export const curriculumData: Module[] = [
  {
    id: '1',
    module_number: 1,
    title: 'Foundations of Global-Indian Leadership',
    description: 'Understanding leadership principles in the context of Indian and global business environments',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    module_number: 2,
    title: 'Personality & Self-Awareness',
    description: 'Developing self-knowledge and understanding your leadership style',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    module_number: 3,
    title: 'Ethics & Values in Leadership',
    description: 'Building ethical foundations for sustainable leadership',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    module_number: 4,
    title: 'Team Building & Collaboration',
    description: 'Creating high-performing teams in diverse environments',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    module_number: 5,
    title: 'Strategic Vision & Planning',
    description: 'Developing and executing strategic initiatives',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '6',
    module_number: 6,
    title: 'Communication Mastery',
    description: 'Effective communication across cultures and contexts',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '7',
    module_number: 7,
    title: 'Change Management & Innovation',
    description: 'Leading organizations through transformation',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '8',
    module_number: 8,
    title: 'Decision Making & Problem Solving',
    description: 'Critical thinking and data-driven decision making',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '9',
    module_number: 9,
    title: 'Emotional Intelligence & Resilience',
    description: 'Building emotional competence for leadership success',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '10',
    module_number: 10,
    title: 'Leadership in Practice',
    description: 'Case studies and real-world application',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// Sample lessons for Module 1 (will be similar structure for all modules)
export const getLessonsForModule = (moduleId: string): Lesson[] => {
  const lessonTemplates = [
    {
      title: 'Introduction to Leadership Fundamentals',
      content: `Leadership is the art of influencing and guiding individuals or groups toward achieving common goals. In the Indian and global business context, effective leadership combines traditional values with modern management practices.

Indian organizations value relationship-building, hierarchical respect, and consensus-driven decision making. Global leaders must balance these cultural nuances with universal leadership principles like vision, integrity, and accountability.

Successful leaders in today's multicultural workplaces understand that leadership is not about position but about influence. They inspire teams through authentic communication, demonstrate empathy, and create inclusive environments where diverse perspectives thrive.

The Indian workplace is unique in its blend of traditional respect for authority and emerging democratic leadership styles. Modern Indian leaders must navigate family businesses, startup cultures, and multinational corporations while maintaining cultural sensitivity.

Leadership development is a continuous journey requiring self-reflection, learning, and adaptation to changing business environments.`,
    },
    {
      title: 'Cultural Intelligence in Indian Context',
      content: `Cultural intelligence (CQ) is critical for leaders operating in India's diverse business landscape. India's 28 states, multiple languages, and varied business practices require leaders to adapt their approach based on regional and organizational contexts.

In North India, business relationships often emphasize direct communication and quick decision-making. South Indian business culture may prioritize detailed planning and consensus. Understanding these regional differences enhances leadership effectiveness.

Multinational leaders in India must balance global standards with local expectations. This includes respecting hierarchical structures while encouraging innovation, honoring traditional festival celebrations while maintaining productivity, and adapting communication styles to diverse audiences.

Indian business culture values personal relationships. Leaders invest time in building trust before focusing solely on transactions. Team lunches, informal conversations, and celebrating milestones strengthen organizational bonds.

Developing cultural intelligence enables leaders to navigate India's complex business environment successfully while maintaining authenticity and respect for diverse perspectives.`,
    },
    {
      title: 'Vision and Purpose in Leadership',
      content: `A clear vision provides direction and motivation for teams. Indian leaders increasingly recognize the importance of articulating compelling organizational purposes that inspire commitment beyond financial rewards.

Companies like Tata Group exemplify purpose-driven leadership, balancing profit with social responsibility. Leaders communicate vision through storytelling, connecting organizational goals with individual aspirations and societal impact.

In the Indian context, vision often encompasses dharma—righteous duty—creating meaning beyond commercial success. Leaders articulate how their organization contributes to community development, environmental sustainability, or national progress.

Effective vision communication requires consistency across channels. Leaders reinforce vision through town halls, team meetings, performance reviews, and daily interactions. They translate abstract vision into concrete goals that teams can understand and pursue.

Purpose-driven leadership attracts and retains talented professionals who seek meaningful work. Indian millennials and Gen Z particularly value organizations whose missions align with their personal values and social consciousness.`,
    },
    {
      title: 'Building Trust and Credibility',
      content: `Trust forms the foundation of effective leadership. In Indian business culture, trust develops through consistent behavior, transparent communication, and demonstrated competence over time.

Leaders build credibility by honoring commitments, admitting mistakes, and showing vulnerability when appropriate. Indian professionals particularly value leaders who acknowledge team contributions publicly and take responsibility for failures privately.

Transparent decision-making processes enhance trust. While Indian organizations traditionally feature hierarchical structures, modern leaders involve teams in decisions affecting them, explaining rationale and considering diverse perspectives before finalizing choices.

Personal integrity significantly impacts leadership credibility. Leaders who demonstrate ethical behavior in challenging situations earn deep respect and loyalty from their teams, creating cultures where trust enables high performance and innovation.

Building trust requires patience and consistency. Leaders invest time in individual relationships, understand team members' aspirations, and support their growth, creating psychological safety where people feel valued and respected.`,
    },
    {
      title: 'Servant Leadership Philosophy',
      content: `Servant leadership prioritizes team development and well-being over personal advancement. This philosophy resonates with Indian cultural values of seva (selfless service) and collective welfare.

Servant leaders ask "How can I help my team succeed?" rather than "How can my team help me succeed?" They remove obstacles, provide resources, mentor team members, and celebrate others' achievements.

In practice, servant leadership means accessible leaders who listen actively, respond to concerns promptly, and demonstrate genuine care for team members' professional and personal growth. This approach builds fierce loyalty and commitment.

Indian organizations implementing servant leadership principles report higher employee engagement, reduced attrition, and improved innovation. Team members feel empowered to take initiatives knowing their leaders support their development and recognize contributions.

Servant leadership challenges traditional command-and-control approaches. Leaders facilitate rather than dictate, trust rather than micromanage, and develop others rather than accumulating power, creating sustainable organizational success.`,
    },
    {
      title: 'Adaptive Leadership Skills',
      content: `Adaptive leadership enables leaders to navigate uncertainty and guide organizations through complex challenges. India's rapidly evolving business environment demands leaders who embrace change and help teams adapt effectively.

Adaptive leaders diagnose situations accurately, distinguishing between technical problems requiring expertise and adaptive challenges requiring behavioral change. They mobilize teams to experiment, learn from failures, and adjust approaches based on feedback.

During India's digital transformation, adaptive leaders help traditional businesses embrace technology while preserving core values. They manage resistance, communicate urgency, and celebrate incremental progress toward transformation goals.

Effective adaptive leadership balances maintaining stability with driving change. Leaders preserve aspects of organizational culture worth retaining while evolving practices that no longer serve changing customer needs and market conditions.

Developing adaptive capacity requires continuous learning, comfort with ambiguity, and willingness to challenge assumptions. Leaders model learning agility, encouraging teams to question status quo and explore innovative solutions.`,
    },
    {
      title: 'Leadership Presence and Communication',
      content: `Leadership presence combines confidence, authenticity, and communication skills that inspire trust and influence. In Indian business contexts, presence includes both verbal and non-verbal communication adapted to diverse audiences.

Effective leaders communicate with clarity and conviction while remaining approachable. They articulate ideas persuasively in presentations, facilitate productive discussions in meetings, and engage meaningfully in one-on-one conversations.

Non-verbal communication significantly impacts presence. Leaders demonstrate confidence through posture, eye contact, and gestures while remaining culturally sensitive. In India, respectful listening and appropriate pauses convey thoughtfulness and consideration.

Authentic communication builds stronger connections than polished perfection. Leaders share relevant personal experiences, express appropriate emotions, and admit uncertainty when facing complex challenges, making them relatable and trustworthy.

Developing leadership presence requires self-awareness, practice, and feedback. Leaders refine communication styles through public speaking, executive coaching, and mindful observation of how messages land with diverse audiences.`,
    },
    {
      title: 'Delegation and Empowerment',
      content: `Effective delegation multiplies leadership impact by developing team capabilities and freeing leaders for strategic priorities. Indian leaders sometimes struggle with delegation due to cultural emphasis on personal responsibility and perfectionism.

Strategic delegation involves matching tasks to team members' developmental needs, providing clear expectations and autonomy, and offering support without micromanaging. Leaders delegate outcomes, not just tasks, encouraging creative problem-solving.

Empowerment requires trust and tolerance for different approaches. Leaders resist the urge to intervene prematurely when team members execute tasks differently than they would, understanding that growth comes from navigating challenges independently.

Creating accountability structures supports effective delegation. Leaders establish clear success criteria, schedule check-ins at appropriate intervals, and provide feedback that balances recognition of progress with constructive guidance.

Cultural sensitivity matters in delegation. Indian team members may initially seek more direction than Western counterparts. Leaders gradually increase autonomy as confidence grows, adjusting their approach to individual and cultural contexts.`,
    },
    {
      title: 'Mentoring and Developing Others',
      content: `Leadership legacy lies in developing others to surpass our own achievements. Indian business culture values guru-shishya (teacher-student) relationships, making mentoring a natural extension of leadership responsibility.

Effective mentors invest time understanding mentees' aspirations, strengths, and development areas. They share experiences, provide perspective, and ask questions that stimulate reflection rather than prescribing solutions.

Formal mentoring programs create structured development opportunities. Leaders mentor rising talent across organizational levels, transferring knowledge, expanding networks, and providing sponsors hip that accelerates career progression.

Reverse mentoring benefits leaders too. Younger team members offer insights about technology, emerging trends, and evolving workplace expectations, keeping senior leaders connected to changing realities and fresh perspectives.

Creating a mentoring culture multiplies organizational capabilities. When leaders prioritize developing others, they create pipelines of capable leaders who continue this tradition, ensuring sustainable organizational success.`,
    },
    {
      title: 'Leadership Reflection and Growth',
      content: `Continuous self-reflection distinguishes great leaders from merely good ones. Indian philosophical traditions emphasize introspection (swadhyaya) as a path to wisdom, applicable to modern leadership development.

Reflection involves regularly examining decisions, behaviors, and outcomes with honest self-assessment. Leaders identify patterns in their responses, recognize blind spots, and commit to specific improvements.

Seeking feedback accelerates growth. Leaders create safe channels for colleagues to share observations, listen without defensiveness, and act on insights gained. 360-degree feedback processes provide comprehensive perspectives.

Leadership journaling helps process experiences and track development over time. Recording challenging situations, responses, and lessons learned creates a personal knowledge base for navigating future complexity.

Investing in continuous learning through reading, courses, and peer discussions keeps leaders evolving. The most effective leaders remain perpetual students, curious about new ideas and committed to personal and professional growth throughout their careers.`,
    },
  ];

  return lessonTemplates.map((template, index) => ({
    id: `${moduleId}-${index + 1}`,
    module_id: moduleId,
    lesson_number: index + 1,
    title: template.title,
    content: template.content,
    word_count: template.content.split(' ').length,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }));
};

// Quiz generator for lessons
export const getQuizForLesson = (lessonId: string): Quiz => {
  const quizQuestions = [
    {
      id: `${lessonId}-q1`,
      lesson_id: lessonId,
      question: 'What is the primary characteristic of effective leadership in multicultural workplaces?',
      options: [
        'Strict adherence to one leadership style',
        'Balancing cultural nuances with universal principles',
        'Avoiding all cultural considerations',
        'Following only Western leadership models',
      ],
      correct_answer: 1,
      order: 1,
    },
    {
      id: `${lessonId}-q2`,
      lesson_id: lessonId,
      question: 'In the Indian business context, what is crucial for building strong professional relationships?',
      options: [
        'Focusing purely on transactions',
        'Avoiding personal conversations',
        'Investing time in building trust and personal connections',
        'Maintaining strict professional distance',
      ],
      correct_answer: 2,
      order: 2,
    },
    {
      id: `${lessonId}-q3`,
      lesson_id: lessonId,
      question: 'What does servant leadership primarily focus on?',
      options: [
        'Personal advancement and power',
        'Team development and well-being',
        'Strict control and micromanagement',
        'Individual achievement over team success',
      ],
      correct_answer: 1,
      order: 3,
    },
    {
      id: `${lessonId}-q4`,
      lesson_id: lessonId,
      question: 'Why is adaptive leadership important in modern business environments?',
      options: [
        'To maintain rigid processes',
        'To resist all changes',
        'To navigate uncertainty and guide teams through complex challenges',
        'To avoid innovation',
      ],
      correct_answer: 2,
      order: 4,
    },
    {
      id: `${lessonId}-q5`,
      lesson_id: lessonId,
      question: 'What is the key benefit of continuous self-reflection for leaders?',
      options: [
        'Avoiding all feedback',
        'Maintaining current behaviors',
        'Identifying patterns and committing to improvements',
        'Ignoring personal development',
      ],
      correct_answer: 2,
      order: 5,
    },
  ];

  return {
    id: `quiz-${lessonId}`,
    lesson_id: lessonId,
    questions: quizQuestions,
    passing_score: 3,
    created_at: new Date().toISOString(),
  };
};
