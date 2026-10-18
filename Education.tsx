import { BookOpen, Heart, Brain, Moon } from 'lucide-react';

export function Education() {
  const topics = [
    {
      category: 'Understanding Your Cycle',
      icon: Heart,
      color: 'from-[#F4C2C2] to-[#FADEDE]',
      articles: [
        {
          title: 'The 4 Phases of Your Menstrual Cycle',
          duration: '5 min read',
          description: 'Learn how hormones change throughout your cycle and what that means for your body and mind.',
        },
        {
          title: 'Why You Feel Different Each Week',
          duration: '4 min read',
          description: 'Your hormones affect everything — mood, energy, appetite, and more. Here\'s why.',
        },
        {
          title: 'Tracking Your Cycle: Beyond Just Period Days',
          duration: '6 min read',
          description: 'What to track and why it matters for understanding your unique rhythm.',
        },
      ],
    },
    {
      category: 'Hormones Explained',
      icon: Brain,
      color: 'from-[#B8A4D9] to-[#D4C5F9]',
      articles: [
        {
          title: 'Estrogen: The Growth Hormone',
          duration: '5 min read',
          description: 'How estrogen builds you up during the first half of your cycle.',
        },
        {
          title: 'Progesterone: The Calm Hormone',
          duration: '5 min read',
          description: 'Why progesterone makes you want to slow down and rest.',
        },
        {
          title: 'Hormone Imbalances: What\'s Normal vs. What\'s Not',
          duration: '7 min read',
          description: 'When to trust your cycle and when to talk to a doctor.',
        },
      ],
    },
    {
      category: 'PMS & Symptoms',
      icon: Moon,
      color: 'from-[#D4C5F9] to-[#EAE4F5]',
      articles: [
        {
          title: 'PMS Is Real (And You\'re Not Imagining It)',
          duration: '6 min read',
          description: 'The science behind premenstrual symptoms and what actually helps.',
        },
        {
          title: 'Natural Remedies for Cramps',
          duration: '4 min read',
          description: 'Evidence-based ways to reduce menstrual pain without medication.',
        },
        {
          title: 'Mood Changes: Hormones vs. Mental Health',
          duration: '8 min read',
          description: 'Understanding the difference and when to seek support.',
        },
      ],
    },
    {
      category: 'Fertility & Reproduction',
      icon: BookOpen,
      color: 'from-[#FADEDE] to-[#F4C2C2]',
      articles: [
        {
          title: 'Understanding Your Fertile Window',
          duration: '6 min read',
          description: 'When you can and can\'t get pregnant during your cycle.',
        },
        {
          title: 'Cervical Mucus: What It Tells You',
          duration: '5 min read',
          description: 'How to read your body\'s natural fertility signs.',
        },
        {
          title: 'PCOS, Endometriosis, and Other Conditions',
          duration: '10 min read',
          description: 'Common reproductive health conditions explained simply.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7] p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl text-[#4A4458] mb-1">Education</h1>
        <p className="text-[#827B8D]">Understanding your body</p>
      </div>

      {/* Welcome Card */}
      <div className="bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] rounded-[28px] p-6 mb-8 shadow-lg text-white">
        <h2 className="text-xl mb-3">Learn Your Body's Language</h2>
        <p className="text-white/90 leading-relaxed">
          Your cycle is more than just your period. It's a monthly pattern of hormonal changes that affect your energy, mood, appetite, and more. Understanding it changes everything.
        </p>
      </div>

      {/* Topics */}
      <div className="space-y-6">
        {topics.map((topic, topicIndex) => {
          const Icon = topic.icon;
          return (
            <div key={topicIndex}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg text-[#4A4458]">{topic.category}</h3>
              </div>

              {/* Articles */}
              <div className="space-y-3 mb-6">
                {topic.articles.map((article, articleIndex) => (
                  <button
                    key={articleIndex}
                    className="w-full bg-white rounded-[24px] p-5 shadow-sm border border-[#EAE4F5] hover:border-[#B8A4D9] transition-all text-left"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-[#4A4458] font-medium pr-4 flex-1">
                        {article.title}
                      </h4>
                      <span className="text-xs text-[#B8A4D9] whitespace-nowrap">
                        {article.duration}
                      </span>
                    </div>
                    <p className="text-sm text-[#827B8D] leading-relaxed">
                      {article.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Coming Soon */}
      <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-[28px] p-6 text-center">
        <div className="text-4xl mb-3">📚</div>
        <h3 className="text-lg text-[#4A4458] mb-2">More Topics Coming Soon</h3>
        <p className="text-sm text-[#827B8D]">
          We're adding new educational content every week
        </p>
      </div>

      {/* Note */}
      <div className="mt-8 text-center">
        <p className="text-xs text-[#827B8D] leading-relaxed">
          All content is science-backed and written for clarity.<br />
          Medical review by licensed healthcare professionals.
        </p>
      </div>
    </div>
  );
}
