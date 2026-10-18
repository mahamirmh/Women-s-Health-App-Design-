import { Moon, Coffee, Dumbbell, Brain, Apple, Calendar } from 'lucide-react';

export function LifestyleTracker() {
  const lifestyleFactors = [
    {
      factor: 'Sleep',
      icon: Moon,
      gradient: 'from-[#B8A4D9] to-[#D4C5F9]',
      hormoneImpact: [
        'Poor sleep increases cortisol (stress hormone)',
        'Disrupts leptin and ghrelin (hunger hormones)',
        'Lowers growth hormone production',
        'Reduces insulin sensitivity',
        'Affects estrogen and progesterone balance',
      ],
      recommendations: [
        'Aim for 7-9 hours of quality sleep',
        'Keep consistent sleep schedule',
        'Avoid blue light 1-2 hours before bed',
        'Keep bedroom cool and dark',
        'Avoid caffeine after 2 PM',
      ],
    },
    {
      factor: 'Stress',
      icon: Brain,
      gradient: 'from-[#F4C2C2] to-[#FADEDE]',
      hormoneImpact: [
        'Chronic stress elevates cortisol',
        'High cortisol can suppress progesterone',
        'Can disrupt menstrual cycles',
        'Affects thyroid function',
        'Impacts blood sugar regulation',
      ],
      recommendations: [
        'Practice daily stress management (meditation, yoga)',
        'Set boundaries and learn to say no',
        'Take regular breaks throughout the day',
        'Connect with supportive people',
        'Consider adaptogens (ashwagandha, rhodiola)',
      ],
    },
    {
      factor: 'Exercise',
      icon: Dumbbell,
      gradient: 'from-[#B8D9C7] to-[#D4EDDF]',
      hormoneImpact: [
        'Improves insulin sensitivity',
        'Helps balance cortisol levels',
        'Supports healthy estrogen metabolism',
        'Boosts endorphins and mood',
        'Over-exercising can disrupt hormones',
      ],
      recommendations: [
        'Mix cardio and strength training',
        'Don\'t over-exercise (can raise cortisol)',
        'Match intensity to your cycle phase',
        'Rest days are essential',
        'Find movement you enjoy',
      ],
    },
    {
      factor: 'Caffeine',
      icon: Coffee,
      gradient: 'from-[#F4D8A4] to-[#FADEC5]',
      hormoneImpact: [
        'Increases cortisol production',
        'Can worsen estrogen dominance',
        'May affect thyroid function',
        'Disrupts sleep if consumed late',
        'Can increase anxiety in sensitive individuals',
      ],
      recommendations: [
        'Limit to 1-2 cups per day',
        'Avoid after 2 PM',
        'Don\'t drink on empty stomach',
        'Reduce during luteal phase if you have PMS',
        'Consider decaf or herbal alternatives',
      ],
    },
    {
      factor: 'Diet & Nutrition',
      icon: Apple,
      gradient: 'from-[#E8B4E8] to-[#F5D9F5]',
      hormoneImpact: [
        'Blood sugar spikes disrupt insulin',
        'Low-fat diets can lower hormones',
        'Nutrient deficiencies affect hormone production',
        'Fiber supports estrogen elimination',
        'Protein stabilizes blood sugar',
      ],
      recommendations: [
        'Eat balanced meals with protein, fat, and fiber',
        'Include healthy fats (avocado, nuts, olive oil)',
        'Eat plenty of vegetables',
        'Limit refined sugar and processed foods',
        'Don\'t skip meals or under-eat',
      ],
    },
    {
      factor: 'Fasting',
      icon: Calendar,
      gradient: 'from-[#A8C5E8] to-[#C8DDEC]',
      hormoneImpact: [
        'Can improve insulin sensitivity',
        'May disrupt cycles if too aggressive',
        'Can increase cortisol if done excessively',
        'Effects vary by cycle phase',
        'Not recommended for everyone',
      ],
      recommendations: [
        'Start with gentle 12-14 hour overnight fast',
        'Avoid during menstrual and late luteal phases',
        'Don\'t combine with intense exercise',
        'Listen to your body',
        'Not recommended if underweight or with eating disorders',
      ],
    },
  ];

  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-bold text-[#2D1B4E] mb-2">Lifestyle & Hormones</h2>
      <p className="text-[#7C5BA7] mb-6">
        Understand how your daily habits affect your hormonal health
      </p>

      <div className="space-y-4">
        {lifestyleFactors.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.factor}
              className="bg-white rounded-3xl p-6 shadow-sm border border-[#F4C2C2]/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#2D1B4E]">{item.factor}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#2D1B4E] text-sm mb-2">
                    How It Affects Your Hormones
                  </h4>
                  <ul className="space-y-1.5">
                    {item.hormoneImpact.map((impact, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`bg-gradient-to-br ${item.gradient} bg-opacity-10 rounded-2xl p-4`}>
                  <h4 className="font-semibold text-[#2D1B4E] text-sm mb-2">
                    Recommendations
                  </h4>
                  <ul className="space-y-1.5">
                    {item.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5BA77C] mt-1.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Integration Notice */}
      <div className="mt-6 bg-gradient-to-br from-[#B8A4D9]/10 to-[#D4C5F9]/10 rounded-3xl p-5 border border-[#B8A4D9]/20">
        <h4 className="font-semibold text-[#2D1B4E] mb-2">Track Your Lifestyle</h4>
        <p className="text-sm text-[#7C5BA7] leading-relaxed">
          Use Syla's Daily Log to track these lifestyle factors and see how they affect your symptoms and cycle. Our AI can identify patterns and provide personalized recommendations.
        </p>
      </div>
    </div>
  );
}
