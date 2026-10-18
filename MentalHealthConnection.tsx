import { Heart, Brain, Moon, Zap, TrendingUp } from 'lucide-react';

export function MentalHealthConnection() {
  const connections = [
    {
      topic: 'Hormones & Anxiety',
      icon: Brain,
      gradient: 'from-[#E8B4E8] to-[#F5D9F5]',
      overview: 'Hormonal fluctuations significantly impact anxiety levels throughout your cycle.',
      keyPoints: [
        'Low progesterone in the luteal phase can increase anxiety',
        'Estrogen affects serotonin (the "feel-good" neurotransmitter)',
        'Cortisol (stress hormone) can disrupt sex hormones',
        'Thyroid imbalances often present with anxiety symptoms',
        'PMDD (Premenstrual Dysphoric Disorder) causes severe anxiety',
      ],
      supportStrategies: [
        'Track anxiety patterns with your cycle',
        'Practice stress-reduction techniques (meditation, breathwork)',
        'Ensure adequate magnesium and B vitamins',
        'Limit caffeine, especially in luteal phase',
        'Consider therapy alongside hormonal support',
        'Get regular exercise (releases endorphins)',
      ],
    },
    {
      topic: 'Hormones & Depression',
      icon: Heart,
      gradient: 'from-[#A8C5E8] to-[#C8DDEC]',
      overview: 'Depression and hormones are deeply connected through neurotransmitter pathways.',
      keyPoints: [
        'Estrogen helps produce serotonin and dopamine',
        'Low estrogen (perimenopause, postpartum) can trigger depression',
        'Thyroid dysfunction is a common cause of depression',
        'Progesterone has calming effects via GABA receptors',
        'Hormonal birth control can affect mood in some women',
      ],
      supportStrategies: [
        'Get comprehensive hormone testing if depression persists',
        'Ensure adequate vitamin D levels (acts like a hormone)',
        'Omega-3 fatty acids support brain health',
        'Regular sunlight exposure',
        'Don\'t hesitate to seek professional mental health support',
        'Consider how hormonal changes coincide with mood changes',
      ],
    },
    {
      topic: 'Brain Fog & Cognitive Function',
      icon: Zap,
      gradient: 'from-[#F4D8A4] to-[#FADEC5]',
      overview: 'Hormones play a crucial role in memory, focus, and mental clarity.',
      keyPoints: [
        'Estrogen supports memory and cognitive function',
        'Brain fog is common during perimenopause due to dropping estrogen',
        'Thyroid hormones regulate brain metabolism',
        'Cortisol affects memory formation and recall',
        'Blood sugar fluctuations cause brain fog',
      ],
      supportStrategies: [
        'Stabilize blood sugar with balanced meals',
        'Stay hydrated throughout the day',
        'Get adequate sleep (7-9 hours)',
        'Consider adaptogens for stress support',
        'Exercise regularly to boost blood flow to brain',
        'Manage stress effectively',
      ],
    },
    {
      topic: 'Sleep & Hormones',
      icon: Moon,
      gradient: 'from-[#B8A4D9] to-[#D4C5F9]',
      overview: 'Hormones regulate sleep patterns, and poor sleep disrupts hormones.',
      keyPoints: [
        'Progesterone has sedative effects and promotes sleep',
        'Low progesterone in luteal phase can cause insomnia',
        'Melatonin production is affected by estrogen',
        'Cortisol should be low at night (stress disrupts this)',
        'Night sweats from hormonal changes disrupt sleep',
      ],
      supportStrategies: [
        'Keep bedroom cool (especially if experiencing night sweats)',
        'Establish consistent sleep schedule',
        'Limit screen time before bed',
        'Consider magnesium before bed',
        'Avoid large meals and alcohol close to bedtime',
        'Create a calming bedtime routine',
      ],
    },
    {
      topic: 'Motivation & Drive',
      icon: TrendingUp,
      gradient: 'from-[#B8D9C7] to-[#D4EDDF]',
      overview: 'Your motivation and energy naturally fluctuate with your hormonal cycle.',
      keyPoints: [
        'Testosterone supports motivation and drive',
        'Estrogen peaks = highest energy and motivation (around ovulation)',
        'Progesterone rise = desire to slow down and rest',
        'Dopamine fluctuates with estrogen throughout cycle',
        'Low thyroid = chronic low motivation and fatigue',
      ],
      supportStrategies: [
        'Sync your goals and tasks with your cycle',
        'Don\'t fight your natural rhythms',
        'Schedule challenging tasks during follicular/ovulation',
        'Allow rest during menstrual and late luteal phases',
        'Set realistic expectations for yourself',
        'Celebrate small wins to boost dopamine',
      ],
    },
    {
      topic: 'Emotional Sensitivity & PMS',
      icon: Heart,
      gradient: 'from-[#F4C2C2] to-[#FADEDE]',
      overview: 'Premenstrual emotional changes are real and hormonally driven.',
      keyPoints: [
        'Dropping estrogen and progesterone before period affect mood',
        'Serotonin levels decrease in late luteal phase',
        'Some women are more sensitive to hormonal fluctuations',
        'PMDD is a severe form affecting 3-8% of women',
        'Emotional sensitivity can be a valid signal from your body',
      ],
      supportStrategies: [
        'Track emotional patterns to validate your experience',
        'Increase self-care in the week before your period',
        'Communicate your needs to loved ones',
        'Consider supplements: B6, magnesium, evening primrose oil',
        'Reduce stress and obligations during this time',
        'Seek help if PMS is severe (PMDD treatment is available)',
      ],
    },
  ];

  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-bold text-[#2D1B4E] mb-2">Mental Health & Hormones</h2>
      <p className="text-[#7C5BA7] mb-6">
        Understanding how hormones affect your mind, mood, and emotions
      </p>

      {/* Introduction */}
      <div className="bg-gradient-to-br from-[#B8A4D9]/10 to-[#D4C5F9]/10 rounded-3xl p-5 mb-6 border border-[#B8A4D9]/20">
        <h3 className="font-semibold text-[#2D1B4E] mb-2">Your Brain is a Hormonal Organ</h3>
        <p className="text-sm text-[#7C5BA7] leading-relaxed">
          Your brain has hormone receptors throughout. Estrogen, progesterone, testosterone, thyroid hormones, and cortisol all significantly influence neurotransmitters like serotonin, dopamine, and GABA—which control your mood, motivation, sleep, and mental clarity. Understanding this connection helps you recognize that your emotional patterns are valid and often physiological.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-4">
        {connections.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.topic}
              className="bg-white rounded-3xl p-6 shadow-sm border border-[#F4C2C2]/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#2D1B4E]">{item.topic}</h3>
              </div>

              <p className="text-sm text-[#7C5BA7] mb-4 leading-relaxed">
                {item.overview}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#2D1B4E] text-sm mb-2">
                    Key Points
                  </h4>
                  <ul className="space-y-1.5">
                    {item.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`bg-gradient-to-br ${item.gradient} bg-opacity-10 rounded-2xl p-4`}>
                  <h4 className="font-semibold text-[#2D1B4E] text-sm mb-2">
                    Support Strategies
                  </h4>
                  <ul className="space-y-1.5">
                    {item.supportStrategies.map((strategy, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5BA77C] mt-1.5 flex-shrink-0" />
                        <span>{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* When to Seek Help */}
      <div className="mt-6 bg-gradient-to-br from-[#E87A7A]/10 to-[#F4C2C2]/10 rounded-3xl p-5 border border-[#E87A7A]/20">
        <h4 className="font-semibold text-[#2D1B4E] mb-2">When to Seek Professional Help</h4>
        <p className="text-sm text-[#7C5BA7] leading-relaxed mb-3">
          While hormonal fluctuations can affect mental health, severe or persistent symptoms require professional support. Seek help if you experience:
        </p>
        <ul className="space-y-1 text-sm text-[#7C5BA7]">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E87A7A] mt-1.5 flex-shrink-0" />
            <span>Suicidal thoughts or self-harm urges</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E87A7A] mt-1.5 flex-shrink-0" />
            <span>Depression or anxiety that interferes with daily life</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E87A7A] mt-1.5 flex-shrink-0" />
            <span>Symptoms that don't improve with lifestyle changes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E87A7A] mt-1.5 flex-shrink-0" />
            <span>Severe PMS/PMDD affecting relationships or work</span>
          </li>
        </ul>
      </div>

      {/* Integration Note */}
      <div className="mt-4 bg-gradient-to-br from-[#B8A4D9]/10 to-[#D4C5F9]/10 rounded-3xl p-5 border border-[#B8A4D9]/20">
        <h4 className="font-semibold text-[#2D1B4E] mb-2">Holistic Approach</h4>
        <p className="text-sm text-[#7C5BA7] leading-relaxed">
          Mental health support and hormonal health work together. Therapy, medication (when needed), and hormonal balance strategies can all be part of your wellness toolkit. There's no shame in needing support in any area.
        </p>
      </div>
    </div>
  );
}
