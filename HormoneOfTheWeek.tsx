import { Sparkles, Calendar, TrendingUp, Heart, Lightbulb, ChevronRight } from 'lucide-react';

export function HormoneOfTheWeek() {
  // Current week's hormone (in a real app, this would rotate weekly)
  const currentWeek = {
    week: 'Week 1',
    hormone: 'Cortisol',
    tagline: 'The Stress Response Hormone',
    gradient: 'from-[#A8C5E8] to-[#C8DDEC]',
    quickFacts: [
      'Produced by your adrenal glands',
      'Peaks in the morning to wake you up',
      'Should drop at night for sleep',
      'Essential for survival (fight or flight)',
      'Chronic stress keeps it elevated',
    ],
    thisWeekTip: 'Try taking 3 deep breaths before each meal this week. This simple practice signals your nervous system to relax and can help lower cortisol levels.',
    funFact: 'Cortisol is sometimes called the "vampire hormone" because it can suppress other hormones like thyroid, progesterone, and growth hormone when chronically elevated!',
  };

  const upcomingHormones = [
    {
      week: 'Week 2',
      hormone: 'Estrogen',
      tagline: 'The Confidence Hormone',
      gradient: 'from-[#F4C2C2] to-[#FADEDE]',
      status: 'Coming Next Week',
    },
    {
      week: 'Week 3',
      hormone: 'Insulin',
      tagline: 'The Energy Storage Hormone',
      gradient: 'from-[#B8D9C7] to-[#D4EDDF]',
      status: 'Coming Soon',
    },
    {
      week: 'Week 4',
      hormone: 'Progesterone',
      tagline: 'The Calming Hormone',
      gradient: 'from-[#B8A4D9] to-[#D4C5F9]',
      status: 'Coming Soon',
    },
    {
      week: 'Week 5',
      hormone: 'Testosterone',
      tagline: 'The Drive Hormone',
      gradient: 'from-[#F4D8A4] to-[#FADEC5]',
      status: 'Coming Soon',
    },
    {
      week: 'Week 6',
      hormone: 'Thyroid (T3 & T4)',
      tagline: 'The Metabolism Controllers',
      gradient: 'from-[#D9B8D9] to-[#EDC8ED]',
      status: 'Coming Soon',
    },
    {
      week: 'Week 7',
      hormone: 'Melatonin',
      tagline: 'The Sleep Hormone',
      gradient: 'from-[#E8B4E8] to-[#F5D9F5]',
      status: 'Coming Soon',
    },
    {
      week: 'Week 8',
      hormone: 'Leptin & Ghrelin',
      tagline: 'The Hunger Hormones',
      gradient: 'from-[#F4C2D8] to-[#FADEE8]',
      status: 'Coming Soon',
    },
  ];

  return (
    <div className="px-6 py-6">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-6 h-6 text-[#B87AB8]" />
          <h2 className="text-2xl font-bold text-[#2D1B4E]">Hormone of the Week</h2>
        </div>
        <p className="text-[#7C5BA7]">
          Learn about one hormone each week with practical tips and insights
        </p>
      </div>

      {/* Current Week's Hormone */}
      <div className={`bg-gradient-to-br ${currentWeek.gradient} rounded-3xl p-6 mb-6 shadow-lg text-white`}>
        <div className="flex items-center justify-between mb-4">
          <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
            {currentWeek.week} • Current
          </div>
          <Calendar className="w-5 h-5" />
        </div>

        <h3 className="text-2xl font-bold mb-1">{currentWeek.hormone}</h3>
        <p className="text-white/90 text-sm mb-4">{currentWeek.tagline}</p>

        <div className="pt-4 border-t border-white/20">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Quick Facts
          </h4>
          <ul className="space-y-2">
            {currentWeek.quickFacts.map((fact, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 flex-shrink-0" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* This Week's Action Tip */}
      <div className="bg-gradient-to-br from-[#B8A4D9]/10 to-[#D4C5F9]/10 rounded-3xl p-5 mb-4 border border-[#B8A4D9]/20">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-[#2D1B4E] mb-1">This Week's Action</h4>
            <p className="text-sm text-[#7C5BA7] leading-relaxed">
              {currentWeek.thisWeekTip}
            </p>
          </div>
        </div>
      </div>

      {/* Fun Fact */}
      <div className="bg-gradient-to-br from-[#F4D8A4]/10 to-[#FADEC5]/10 rounded-3xl p-5 mb-6 border border-[#F4D8A4]/20">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4D8A4] to-[#FADEC5] flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-[#2D1B4E] mb-1">Fun Fact</h4>
            <p className="text-sm text-[#7C5BA7] leading-relaxed">
              {currentWeek.funFact}
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Hormones */}
      <div>
        <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#7C5BA7]" />
          Coming Up
        </h3>
        <div className="space-y-2">
          {upcomingHormones.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-sm border border-[#F4C2C2]/10"
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0`}>
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs text-[#7C5BA7] font-medium">{item.week}</span>
                    <span className="text-xs text-[#7C5BA7]">•</span>
                    <span className="text-xs text-[#7C5BA7]">{item.status}</span>
                  </div>
                  <h4 className="font-semibold text-[#2D1B4E] text-sm">{item.hormone}</h4>
                  <p className="text-xs text-[#7C5BA7]">{item.tagline}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#B8A4D9] opacity-30" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-6 bg-gradient-to-br from-[#E8B4E8]/10 to-[#F5D9F5]/10 rounded-3xl p-5 border border-[#E8B4E8]/20">
        <h4 className="font-semibold text-[#2D1B4E] mb-2">How It Works</h4>
        <p className="text-sm text-[#7C5BA7] leading-relaxed mb-3">
          Each week, we spotlight a different hormone with easy-to-understand information and actionable tips. This helps you build hormonal health knowledge gradually without feeling overwhelmed.
        </p>
        <p className="text-sm text-[#7C5BA7] leading-relaxed">
          <strong className="text-[#2D1B4E]">Pro tip:</strong> Set a reminder to check back each week, or enable notifications to get your weekly hormone lesson delivered right to you!
        </p>
      </div>
    </div>
  );
}
