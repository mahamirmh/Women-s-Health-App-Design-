import { GraduationCap, Lock, Play, CheckCircle, Clock } from 'lucide-react';

export function HealthCourses() {
  const courses = [
    {
      title: 'Understanding PCOS in 7 Days',
      duration: '7 lessons',
      time: '20 min total',
      level: 'Beginner',
      gradient: 'from-[#B8A4D9] to-[#D4C5F9]',
      isPremium: false,
      progress: 0,
      lessons: [
        'Day 1: What is PCOS?',
        'Day 2: Common symptoms and diagnosis',
        'Day 3: Insulin resistance explained',
        'Day 4: Nutrition for PCOS',
        'Day 5: Exercise and lifestyle',
        'Day 6: Managing symptoms naturally',
        'Day 7: Working with your doctor',
      ],
    },
    {
      title: 'Hormones & Weight Management',
      duration: '5 lessons',
      time: '25 min total',
      level: 'Intermediate',
      gradient: 'from-[#B8D9C7] to-[#D4EDDF]',
      isPremium: true,
      progress: 0,
      lessons: [
        'How hormones affect weight',
        'Insulin resistance and fat storage',
        'Cortisol and belly fat',
        'Thyroid and metabolism',
        'Cycle-based eating strategies',
      ],
    },
    {
      title: 'Hormones & Fertility',
      duration: '6 lessons',
      time: '30 min total',
      level: 'Intermediate',
      gradient: 'from-[#F4C2C2] to-[#FADEDE]',
      isPremium: true,
      progress: 0,
      lessons: [
        'Understanding your fertile window',
        'Ovulation and hormones',
        'Cervical mucus tracking',
        'Common fertility challenges',
        'When to seek help',
        'Supporting fertility naturally',
      ],
    },
    {
      title: 'Hormones & Mental Health',
      duration: '5 lessons',
      time: '22 min total',
      level: 'Beginner',
      gradient: 'from-[#E8B4E8] to-[#F5D9F5]',
      isPremium: false,
      progress: 0,
      lessons: [
        'The hormone-mood connection',
        'Estrogen and serotonin',
        'Progesterone and anxiety',
        'PMS and PMDD',
        'Natural mood support strategies',
      ],
    },
    {
      title: 'Mastering Your Menstrual Cycle',
      duration: '4 lessons',
      time: '18 min total',
      level: 'Beginner',
      gradient: 'from-[#F4D8A4] to-[#FADEC5]',
      isPremium: false,
      progress: 0,
      lessons: [
        'The 4 phases explained',
        'Tracking your cycle effectively',
        'Cycle syncing basics',
        'When cycles are irregular',
      ],
    },
    {
      title: 'Perimenopause & Menopause Guide',
      duration: '8 lessons',
      time: '35 min total',
      level: 'Intermediate',
      gradient: 'from-[#A8C5E8] to-[#C8DDEC]',
      isPremium: true,
      progress: 0,
      lessons: [
        'What is perimenopause?',
        'Common symptoms and timeline',
        'Hormonal changes explained',
        'Managing hot flashes naturally',
        'Sleep and mood support',
        'Bone health and exercise',
        'Nutrition for menopause',
        'HRT: pros and cons',
      ],
    },
    {
      title: 'Thyroid Health Essentials',
      duration: '6 lessons',
      time: '28 min total',
      level: 'Intermediate',
      gradient: 'from-[#D9B8D9] to-[#EDC8ED]',
      isPremium: true,
      progress: 0,
      lessons: [
        'Understanding thyroid function',
        'Hypothyroidism vs. hyperthyroidism',
        'Hashimoto\'s disease',
        'Lab tests explained',
        'Nutrition for thyroid health',
        'Lifestyle support strategies',
      ],
    },
    {
      title: 'Balancing Blood Sugar',
      duration: '5 lessons',
      time: '20 min total',
      level: 'Beginner',
      gradient: 'from-[#F4C2D8] to-[#FADEE8]',
      isPremium: false,
      progress: 0,
      lessons: [
        'Why blood sugar matters',
        'Signs of dysregulation',
        'Insulin resistance basics',
        'Eating for stable blood sugar',
        'Exercise and glucose',
      ],
    },
  ];

  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-bold text-[#2D1B4E] mb-2">Health Courses</h2>
      <p className="text-[#7C5BA7] mb-6">
        Short, science-based courses to deepen your hormonal health knowledge
      </p>

      <div className="space-y-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-5 shadow-sm border border-[#F4C2C2]/10"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-[#2D1B4E]">{course.title}</h3>
                  {course.isPremium && (
                    <Lock className="w-4 h-4 text-[#7C5BA7]" />
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-[#7C5BA7]">
                  <span className="flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {course.time}
                  </span>
                  <span className="px-2 py-0.5 bg-[#B8A4D9]/10 rounded-full">
                    {course.level}
                  </span>
                </div>
              </div>
            </div>

            {/* Lessons */}
            <div className="space-y-2 mb-4">
              {course.lessons.map((lesson, lessonIndex) => (
                <div
                  key={lessonIndex}
                  className="flex items-center gap-2 text-sm text-[#7C5BA7] bg-[#FAF8FF] rounded-xl p-2"
                >
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-[#7C5BA7]">
                      {lessonIndex + 1}
                    </span>
                  </div>
                  <span>{lesson}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            {course.isPremium ? (
              <button className="w-full bg-gradient-to-r from-[#7C5BA7] to-[#B8A4D9] text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
                <Lock className="w-4 h-4" />
                Premium Course
              </button>
            ) : (
              <button className="w-full bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
                <Play className="w-4 h-4" />
                Start Course
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Coming Soon */}
      <div className="mt-6 bg-gradient-to-br from-[#B8A4D9]/10 to-[#D4C5F9]/10 rounded-3xl p-5 border border-[#B8A4D9]/20">
        <h4 className="font-semibold text-[#2D1B4E] mb-2">More Courses Coming Soon</h4>
        <p className="text-sm text-[#7C5BA7] leading-relaxed">
          We're constantly adding new educational content. Premium members get early access to all new courses!
        </p>
      </div>
    </div>
  );
}
