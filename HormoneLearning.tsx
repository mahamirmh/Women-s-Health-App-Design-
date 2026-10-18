import { useState } from 'react';
import { Brain, ChevronRight, TrendingUp, TrendingDown, Heart, Zap, Shield, Flame, Moon, Activity } from 'lucide-react';

interface Hormone {
  id: string;
  name: string;
  tagline: string;
  icon: typeof Brain;
  gradient: string;
  textColor: string;
  whatItDoes: string[];
  highSymptoms: string[];
  lowSymptoms: string[];
  lifestyleSupport: string[];
  foodsToSupport: string[];
  labTests: string[];
}

export function HormoneLearning() {
  const [selectedHormone, setSelectedHormone] = useState<string | null>(null);

  const hormones: Hormone[] = [
    {
      id: 'estrogen',
      name: 'Estrogen',
      tagline: 'The Growth & Confidence Hormone',
      icon: Zap,
      gradient: 'from-[#F4C2C2] to-[#FADEDE]',
      textColor: 'text-[#E87A7A]',
      whatItDoes: [
        'Builds up your uterine lining during the follicular phase',
        'Boosts confidence, energy, and mental clarity',
        'Supports bone health and cardiovascular function',
        'Helps maintain healthy skin and hair',
        'Enhances mood and promotes feelings of well-being',
      ],
      highSymptoms: [
        'Heavy periods',
        'Breast tenderness',
        'Mood swings',
        'Bloating',
        'Weight gain around hips and thighs',
        'Fibrocystic breasts',
      ],
      lowSymptoms: [
        'Irregular or absent periods',
        'Hot flashes',
        'Vaginal dryness',
        'Low libido',
        'Fatigue and brain fog',
        'Bone loss',
      ],
      lifestyleSupport: [
        'Regular exercise (especially strength training)',
        'Maintain healthy body fat percentage',
        'Reduce stress with mindfulness practices',
        'Limit alcohol consumption',
        'Get 7-9 hours of quality sleep',
        'Reduce exposure to endocrine disruptors',
      ],
      foodsToSupport: [
        'Flaxseeds and sesame seeds (phytoestrogens)',
        'Cruciferous vegetables (broccoli, cauliflower)',
        'Berries high in antioxidants',
        'Healthy fats (avocado, olive oil)',
        'Fiber-rich foods',
        'Probiotic-rich foods (yogurt, kimchi)',
      ],
      labTests: [
        'Estradiol (E2)',
        'Estrone (E1)',
        'Estriol (E3)',
        'FSH (Follicle Stimulating Hormone)',
      ],
    },
    {
      id: 'progesterone',
      name: 'Progesterone',
      tagline: 'The Calm & Sleep Hormone',
      icon: Moon,
      gradient: 'from-[#B8A4D9] to-[#D4C5F9]',
      textColor: 'text-[#7C5BA7]',
      whatItDoes: [
        'Prepares the uterus for pregnancy during the luteal phase',
        'Calms the nervous system and promotes sleep',
        'Balances estrogen levels',
        'Supports thyroid function',
        'Helps regulate body temperature',
      ],
      highSymptoms: [
        'Drowsiness and fatigue',
        'Bloating',
        'Breast swelling',
        'Mood changes',
        'Decreased libido',
      ],
      lowSymptoms: [
        'Anxiety and irritability',
        'Insomnia',
        'Spotting between periods',
        'Heavy or irregular periods',
        'PMS symptoms',
        'Difficulty staying pregnant',
      ],
      lifestyleSupport: [
        'Stress management (yoga, meditation)',
        'Avoid over-exercising',
        'Maintain healthy cholesterol levels',
        'Get adequate vitamin B6',
        'Support liver health',
        'Limit caffeine in the luteal phase',
      ],
      foodsToSupport: [
        'Vitamin B6-rich foods (chickpeas, bananas)',
        'Magnesium-rich foods (dark chocolate, nuts)',
        'Zinc sources (pumpkin seeds, shellfish)',
        'Vitamin C foods (citrus, bell peppers)',
        'Healthy fats for hormone production',
        'Dark leafy greens',
      ],
      labTests: [
        'Serum Progesterone',
        'Day 21 Progesterone (for ovulation confirmation)',
      ],
    },
    {
      id: 'testosterone',
      name: 'Testosterone',
      tagline: 'The Energy & Drive Hormone',
      icon: Flame,
      gradient: 'from-[#F4D8A4] to-[#FADEC5]',
      textColor: 'text-[#C8954A]',
      whatItDoes: [
        'Supports muscle growth and strength',
        'Boosts libido and sexual desire',
        'Enhances energy and motivation',
        'Contributes to bone density',
        'Affects mood and confidence',
      ],
      highSymptoms: [
        'Acne and oily skin',
        'Excess facial/body hair (hirsutism)',
        'Hair loss on scalp',
        'Irregular periods',
        'Weight gain',
        'Mood changes and aggression',
      ],
      lowSymptoms: [
        'Low libido',
        'Fatigue and low energy',
        'Difficulty building muscle',
        'Depression',
        'Brain fog',
        'Reduced motivation',
      ],
      lifestyleSupport: [
        'Resistance training and HIIT',
        'Get adequate sleep',
        'Manage stress levels',
        'Maintain healthy body weight',
        'Reduce sugar intake',
        'Avoid excessive endurance exercise',
      ],
      foodsToSupport: [
        'Zinc-rich foods (oysters, beef)',
        'Vitamin D sources (fatty fish, eggs)',
        'Healthy fats (nuts, avocado)',
        'Cruciferous vegetables',
        'Pomegranate',
        'Ginger',
      ],
      labTests: [
        'Total Testosterone',
        'Free Testosterone',
        'DHEA-S',
        'Androstenedione',
      ],
    },
    {
      id: 'cortisol',
      name: 'Cortisol',
      tagline: 'The Stress Response Hormone',
      icon: Shield,
      gradient: 'from-[#A8C5E8] to-[#C8DDEC]',
      textColor: 'text-[#5B8AB8]',
      whatItDoes: [
        'Manages stress response (fight or flight)',
        'Regulates blood sugar levels',
        'Controls inflammation',
        'Influences sleep-wake cycle',
        'Affects metabolism and energy',
      ],
      highSymptoms: [
        'Weight gain (especially belly fat)',
        'Difficulty sleeping',
        'Anxiety and irritability',
        'High blood pressure',
        'Weak immune system',
        'Sugar cravings',
      ],
      lowSymptoms: [
        'Chronic fatigue',
        'Low blood pressure',
        'Dizziness when standing',
        'Salt cravings',
        'Difficulty handling stress',
        'Depression',
      ],
      lifestyleSupport: [
        'Practice stress-reduction techniques',
        'Get 7-9 hours of sleep',
        'Avoid caffeine late in the day',
        'Regular exercise (not excessive)',
        'Time in nature',
        'Mindfulness and meditation',
      ],
      foodsToSupport: [
        'Adaptogenic herbs (ashwagandha, holy basil)',
        'Omega-3 fatty acids (salmon, walnuts)',
        'Dark chocolate (in moderation)',
        'Foods high in vitamin C',
        'Green tea',
        'Probiotic foods',
      ],
      labTests: [
        'Morning Cortisol',
        'Cortisol Awakening Response (CAR)',
        '4-Point Salivary Cortisol',
        'ACTH',
      ],
    },
    {
      id: 'insulin',
      name: 'Insulin',
      tagline: 'The Blood Sugar Regulator',
      icon: Activity,
      gradient: 'from-[#B8D9C7] to-[#D4EDDF]',
      textColor: 'text-[#5BA77C]',
      whatItDoes: [
        'Regulates blood sugar levels',
        'Controls energy storage',
        'Affects appetite and cravings',
        'Influences fat storage',
        'Interacts with other hormones',
      ],
      highSymptoms: [
        'Weight gain (especially around abdomen)',
        'Intense sugar cravings',
        'Fatigue after meals',
        'Brain fog',
        'Frequent urination',
        'Increased thirst',
      ],
      lowSymptoms: [
        'Shakiness and trembling',
        'Sweating',
        'Rapid heartbeat',
        'Anxiety',
        'Hunger',
        'Confusion',
      ],
      lifestyleSupport: [
        'Regular physical activity',
        'Eat balanced meals with protein',
        'Avoid refined carbs and sugars',
        'Practice intermittent fasting (if appropriate)',
        'Get adequate sleep',
        'Manage stress levels',
      ],
      foodsToSupport: [
        'High-fiber foods (vegetables, legumes)',
        'Lean proteins',
        'Healthy fats (avocado, nuts)',
        'Cinnamon',
        'Apple cider vinegar',
        'Low glycemic index foods',
      ],
      labTests: [
        'Fasting Insulin',
        'Fasting Glucose',
        'HbA1c (average blood sugar)',
        'HOMA-IR (insulin resistance index)',
      ],
    },
    {
      id: 'oxytocin',
      name: 'Oxytocin',
      tagline: 'The Love & Bonding Hormone',
      icon: Heart,
      gradient: 'from-[#F4C2D8] to-[#FADEE8]',
      textColor: 'text-[#E87AA8]',
      whatItDoes: [
        'Promotes bonding and trust',
        'Reduces stress and anxiety',
        'Supports labor and breastfeeding',
        'Enhances mood and social connection',
        'Helps with wound healing',
      ],
      highSymptoms: [
        'Generally not problematic',
        'May lead to oversensitivity in some contexts',
      ],
      lowSymptoms: [
        'Difficulty bonding',
        'Social withdrawal',
        'Increased stress sensitivity',
        'Postpartum challenges',
        'Reduced empathy',
      ],
      lifestyleSupport: [
        'Physical touch (hugs, massage)',
        'Spend time with loved ones',
        'Pet therapy',
        'Acts of kindness',
        'Eye contact and deep conversations',
        'Listen to music',
      ],
      foodsToSupport: [
        'Vitamin D sources',
        'Vitamin C foods',
        'Magnesium-rich foods',
        'Foods that promote gut health',
        'Dark chocolate',
        'Figs',
      ],
      labTests: [
        'Not commonly tested',
        'Research-level assays available',
      ],
    },
    {
      id: 'thyroid',
      name: 'Thyroid Hormones',
      tagline: 'The Metabolism Controllers',
      icon: Zap,
      gradient: 'from-[#D9B8D9] to-[#EDC8ED]',
      textColor: 'text-[#A77CA7]',
      whatItDoes: [
        'Regulate metabolism and energy production',
        'Control body temperature',
        'Affect heart rate and digestion',
        'Influence mood and cognitive function',
        'Support growth and development',
      ],
      highSymptoms: [
        'Weight loss despite normal eating',
        'Rapid heartbeat',
        'Anxiety and nervousness',
        'Heat intolerance',
        'Tremors',
        'Insomnia',
      ],
      lowSymptoms: [
        'Unexplained weight gain',
        'Fatigue and sluggishness',
        'Cold intolerance',
        'Dry skin and hair',
        'Depression',
        'Constipation',
      ],
      lifestyleSupport: [
        'Get adequate sleep',
        'Manage stress effectively',
        'Avoid excessive soy products',
        'Regular exercise',
        'Limit exposure to toxins',
        'Support gut health',
      ],
      foodsToSupport: [
        'Iodine-rich foods (seaweed, fish)',
        'Selenium sources (Brazil nuts, eggs)',
        'Zinc foods (shellfish, meat)',
        'Iron-rich foods (spinach, red meat)',
        'Vitamin A foods (sweet potato, carrots)',
        'Vitamin D sources',
      ],
      labTests: [
        'TSH (Thyroid Stimulating Hormone)',
        'Free T3',
        'Free T4',
        'Thyroid antibodies (TPO, TG)',
        'Reverse T3',
      ],
    },
  ];

  const selectedHormoneData = hormones.find(h => h.id === selectedHormone);

  if (selectedHormoneData) {
    const Icon = selectedHormoneData.icon;
    return (
      <div className="px-6 py-6">
        <button
          onClick={() => setSelectedHormone(null)}
          className="mb-6 text-[#7C5BA7] hover:text-[#5B4080] transition-colors flex items-center gap-2"
        >
          <ChevronRight className="w-5 h-5 rotate-180" />
          <span>Back to All Hormones</span>
        </button>

        {/* Hormone Header */}
        <div className={`bg-gradient-to-br ${selectedHormoneData.gradient} rounded-3xl p-6 mb-6 shadow-lg`}>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-1">{selectedHormoneData.name}</h2>
              <p className="text-white/90 text-sm">{selectedHormoneData.tagline}</p>
            </div>
          </div>
        </div>

        {/* What It Does */}
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-sm border border-[#F4C2C2]/10">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Brain className="w-5 h-5 text-[#7C5BA7]" />
            What This Hormone Does
          </h3>
          <ul className="space-y-2">
            {selectedHormoneData.whatItDoes.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* High Symptoms */}
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-sm border border-[#F4C2C2]/10">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#E87A7A]" />
            When Levels Are Too High
          </h3>
          <ul className="space-y-2">
            {selectedHormoneData.highSymptoms.map((symptom, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E87A7A] mt-1.5 flex-shrink-0" />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Low Symptoms */}
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-sm border border-[#F4C2C2]/10">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-[#5B8AB8]" />
            When Levels Are Too Low
          </h3>
          <ul className="space-y-2">
            {selectedHormoneData.lowSymptoms.map((symptom, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B8AB8] mt-1.5 flex-shrink-0" />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lifestyle Support */}
        <div className="bg-gradient-to-br from-[#B8D9C7]/10 to-[#D4EDDF]/10 rounded-3xl p-6 mb-4 border border-[#B8D9C7]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#5BA77C]" />
            Lifestyle Support
          </h3>
          <ul className="space-y-2">
            {selectedHormoneData.lifestyleSupport.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5BA77C] mt-1.5 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Foods to Support */}
        <div className="bg-gradient-to-br from-[#F4D8A4]/10 to-[#FADEC5]/10 rounded-3xl p-6 mb-4 border border-[#F4D8A4]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#C8954A]" />
            Foods That Support Balance
          </h3>
          <ul className="space-y-2">
            {selectedHormoneData.foodsToSupport.map((food, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8954A] mt-1.5 flex-shrink-0" />
                <span>{food}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lab Tests */}
        <div className="bg-gradient-to-br from-[#E8B4E8]/10 to-[#F5D9F5]/10 rounded-3xl p-6 border border-[#E8B4E8]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#B87AB8]" />
            Related Lab Tests
          </h3>
          <ul className="space-y-2">
            {selectedHormoneData.labTests.map((test, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B87AB8] mt-1.5 flex-shrink-0" />
                <span>{test}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-bold text-[#2D1B4E] mb-2">Core Hormones</h2>
      <p className="text-[#7C5BA7] mb-6">
        Learn how these essential hormones affect your daily life
      </p>

      <div className="grid gap-4">
        {hormones.map((hormone) => {
          const Icon = hormone.icon;
          return (
            <button
              key={hormone.id}
              onClick={() => setSelectedHormone(hormone.id)}
              className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all transform hover:scale-[1.01] active:scale-[0.99] text-left border border-[#F4C2C2]/10"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${hormone.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#2D1B4E] mb-0.5">{hormone.name}</h3>
                  <p className="text-sm text-[#7C5BA7]">{hormone.tagline}</p>
                </div>
                <ChevronRight className={`w-5 h-5 ${hormone.textColor} flex-shrink-0`} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
