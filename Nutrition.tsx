import { useState } from 'react';
import { Apple, Leaf, Zap, Sun, Moon, TrendingUp, Sparkles, MessageCircle } from 'lucide-react';

export function Nutrition() {
  const [selectedPhase, setSelectedPhase] = useState<'menstrual' | 'follicular' | 'ovulation' | 'luteal'>('luteal');

  const nutritionData = {
    menstrual: {
      name: 'Menstrual Phase',
      days: '1-5',
      color: 'from-[#F4C2C2] to-[#FADEDE]',
      icon: Moon,
      emoji: '🌙',
      hormones: {
        estrogen: 'Low',
        progesterone: 'Low',
        testosterone: 'Rising',
      },
      why: 'Your body is shedding the uterine lining, which requires significant energy and nutrients. All sex hormones are at their lowest, so you need nutrient-dense foods to support regeneration and replenish what you lose through bleeding.',
      focus: [
        'Replenish iron lost through bleeding',
        'Reduce inflammation and cramping',
        'Support energy during low hormone phase',
        'Boost immunity during vulnerable time',
      ],
      keyNutrients: [
        {
          name: 'Iron',
          why: 'You lose 30-40mg of iron per period. Low iron = fatigue, brain fog, weakness.',
          sources: 'Red meat, liver, spinach, lentils, pumpkin seeds',
          amount: '18mg+ daily during period',
        },
        {
          name: 'Vitamin C',
          why: 'Increases iron absorption by 300%. Also strengthens blood vessels to reduce heavy flow.',
          sources: 'Citrus, bell peppers, strawberries, kiwi',
          amount: '500mg with iron-rich meals',
        },
        {
          name: 'Omega-3 Fatty Acids',
          why: 'Reduces prostaglandins (cramping chemicals). Natural anti-inflammatory.',
          sources: 'Salmon, sardines, walnuts, flax seeds, chia',
          amount: '2-3g daily (1-2 servings fatty fish)',
        },
        {
          name: 'Magnesium',
          why: 'Relaxes uterine muscles, reduces cramping. Supports serotonin production.',
          sources: 'Dark chocolate, almonds, spinach, black beans',
          amount: '400mg daily',
        },
        {
          name: 'Zinc',
          why: 'Supports testosterone production (which is trying to rise). Immune function.',
          sources: 'Oysters, beef, pumpkin seeds, chickpeas',
          amount: '8-11mg daily',
        },
      ],
      mealPlan: {
        breakfast: [
          '🍳 Spinach & mushroom omelet with avocado',
          '🥣 Oatmeal with walnuts, chia seeds, berries',
          '🥞 Buckwheat pancakes with almond butter',
        ],
        lunch: [
          '🥗 Kale salad with grilled salmon, quinoa, pumpkin seeds',
          '🍲 Lentil soup with spinach and tomatoes',
          '🌯 Turkey wrap with hummus and dark leafy greens',
        ],
        dinner: [
          '🥩 Grass-fed steak with roasted sweet potato & broccoli',
          '🐟 Baked cod with lemon, asparagus, wild rice',
          '🍛 Chickpea curry with spinach over brown rice',
        ],
        snacks: [
          '🍫 Dark chocolate (70%+) with almonds',
          '🥤 Smoothie: spinach, banana, almond butter, chia',
          '🥜 Trail mix: pumpkin seeds, walnuts, dried figs',
        ],
      },
      avoid: [
        '☕ Excess caffeine (increases cramps)',
        '🧂 High sodium (worsens bloating)',
        '🥛 Dairy (increases prostaglandins for some)',
        '🍷 Alcohol (impairs liver detox)',
        '🍰 Refined sugar (inflammation spikes)',
      ],
      supplements: [
        'Iron bisglycinate: 25mg daily',
        'Magnesium glycinate: 400mg before bed',
        'Omega-3: 2000mg daily',
        'Vitamin B6: 50mg (reduces cramps)',
        'Ginger root: 500mg 3x daily (anti-inflammatory)',
      ],
    },
    follicular: {
      name: 'Follicular Phase',
      days: '6-13',
      color: 'from-[#B8A4D9] to-[#D4C5F9]',
      icon: Sun,
      emoji: '🌱',
      hormones: {
        estrogen: 'Rising',
        progesterone: 'Low',
        testosterone: 'Rising',
      },
      why: 'Estrogen is steadily rising, bringing energy, mental clarity, and metabolism. This is your body\'s "growth phase" - follicles are maturing, your uterine lining is rebuilding, and your brain is sharp. You need foods that support estrogen production and healthy estrogen metabolism.',
      focus: [
        'Support healthy estrogen production',
        'Fuel increased energy and metabolism',
        'Support follicle maturation for ovulation',
        'Promote healthy estrogen detoxification',
      ],
      keyNutrients: [
        {
          name: 'B Vitamins (especially B6, B12, Folate)',
          why: 'Required for estrogen production and metabolism. B6 helps liver detox excess estrogen.',
          sources: 'Eggs, chicken, salmon, leafy greens, nutritional yeast',
          amount: 'B6: 50mg, B12: 2.4mcg, Folate: 400mcg',
        },
        {
          name: 'Phytoestrogens',
          why: 'Plant compounds that gently support estrogen receptors without overwhelming them.',
          sources: 'Flax seeds, sesame seeds, soy (tempeh, edamame)',
          amount: '1-2 tbsp ground flax daily',
        },
        {
          name: 'Cruciferous Vegetables',
          why: 'Contain DIM & I3C which support healthy estrogen metabolism. Prevent estrogen dominance.',
          sources: 'Broccoli, cauliflower, Brussels sprouts, kale, cabbage',
          amount: '1-2 cups daily',
        },
        {
          name: 'Protein',
          why: 'Building blocks for hormones. Supports muscle growth (testosterone rising). Stabilizes blood sugar.',
          sources: 'Chicken, fish, eggs, legumes, Greek yogurt',
          amount: '25-30g per meal',
        },
        {
          name: 'Healthy Fats',
          why: 'Cholesterol is the precursor to ALL sex hormones. Essential for hormone production.',
          sources: 'Avocado, olive oil, nuts, seeds, fatty fish',
          amount: '30-35% of daily calories',
        },
      ],
      mealPlan: {
        breakfast: [
          '🍳 Veggie scramble with broccoli, peppers, feta',
          '🥑 Avocado toast with poached eggs & sauerkraut',
          '🥣 Greek yogurt parfait with flax seeds & berries',
        ],
        lunch: [
          '🥗 Buddha bowl: quinoa, chickpeas, kale, tahini dressing',
          '🐟 Grilled salmon with roasted Brussels sprouts',
          '🌯 Tempeh wrap with hummus, sprouts, veggies',
        ],
        dinner: [
          '🍗 Baked chicken with cauliflower rice & avocado',
          '🥘 Stir-fry: tofu, broccoli, edamame, sesame seeds',
          '🍝 Zucchini noodles with pesto, cherry tomatoes',
        ],
        snacks: [
          '🥜 Energy balls: flax, almond butter, dates',
          '🥕 Hummus with raw veggies (carrots, broccoli)',
          '🥤 Green smoothie: kale, banana, flax, almond milk',
        ],
      },
      avoid: [
        '🥩 Conventionally raised meat (contains hormones)',
        '🥤 BPA plastics (endocrine disruptor)',
        '🍷 Excess alcohol (impairs estrogen metabolism)',
        '🍰 High sugar (blood sugar spikes affect hormones)',
      ],
      supplements: [
        'B-Complex: High quality, methylated forms',
        'DIM: 100-200mg (supports estrogen metabolism)',
        'Vitamin D3: 2000-4000 IU (hormone regulation)',
        'Probiotics: Support gut estrogen metabolism',
      ],
    },
    ovulation: {
      name: 'Ovulation Phase',
      days: '14-16',
      color: 'from-[#FADEDE] to-[#F4C2C2]',
      icon: Zap,
      emoji: '⚡',
      hormones: {
        estrogen: 'PEAK',
        progesterone: 'Starting to Rise',
        testosterone: 'PEAK',
      },
      why: 'This is your POWER PHASE! All three sex hormones are surging. Estrogen peaks to trigger ovulation, testosterone peaks for libido, and progesterone starts rising. You have maximum energy, strength, confidence, and mental clarity. Fuel this with nutrient-dense foods to support the massive hormonal surge.',
      focus: [
        'Support the LH surge and egg release',
        'Maximize energy from peak hormones',
        'Support healthy progesterone transition',
        'Antioxidants to protect egg quality',
      ],
      keyNutrients: [
        {
          name: 'Antioxidants (Vitamin E, Selenium, CoQ10)',
          why: 'Protect the egg from oxidative damage during release. Support egg quality and fertility.',
          sources: 'Sunflower seeds, Brazil nuts, almonds, spinach, sweet potato',
          amount: 'Vitamin E: 15mg, Selenium: 55mcg, CoQ10: 100mg',
        },
        {
          name: 'Zinc',
          why: 'Critical for ovulation and egg maturation. Supports testosterone (which is peaking).',
          sources: 'Oysters (highest!), beef, pumpkin seeds, hemp seeds',
          amount: '8-11mg daily, more if TTC',
        },
        {
          name: 'Vitamin C',
          why: 'Supports progesterone production (transitioning now). Antioxidant for egg quality.',
          sources: 'Citrus, strawberries, bell peppers, kiwi',
          amount: '500-1000mg daily',
        },
        {
          name: 'Complex Carbohydrates',
          why: 'You have peak energy and can handle more carbs. Supports serotonin (mood boost).',
          sources: 'Sweet potato, quinoa, oats, wild rice, fruit',
          amount: '45-50% of calories',
        },
        {
          name: 'Healthy Fats',
          why: 'Supports the massive hormone production happening now. Especially important for progesterone rise.',
          sources: 'Avocado, nuts, seeds, olive oil, fatty fish',
          amount: '30-35% of calories',
        },
      ],
      mealPlan: {
        breakfast: [
          '🥞 Sweet potato pancakes with almond butter & berries',
          '🍳 Veggie omelet with spinach, peppers, avocado',
          '🥣 Overnight oats with Brazil nuts, strawberries, chia',
        ],
        lunch: [
          '🥗 Power salad: spinach, quinoa, chickpeas, sunflower seeds, citrus dressing',
          '🍤 Shrimp bowl with brown rice, avocado, mango',
          '🌯 Turkey wrap with hummus, sprouts, bell peppers',
        ],
        dinner: [
          '🥩 Grass-fed beef with roasted sweet potato & broccoli',
          '🐟 Salmon with wild rice, asparagus, lemon',
          '🍝 Pasta with pesto, pine nuts, cherry tomatoes',
        ],
        snacks: [
          '🌰 Brazil nuts (2-3 for selenium)',
          '🍓 Strawberries with dark chocolate',
          '🥤 Smoothie: mango, spinach, hemp seeds, coconut water',
        ],
      },
      avoid: [
        '🍷 Alcohol (impairs ovulation)',
        '☕ Excess caffeine (may interfere with ovulation)',
        '🌾 Inflammatory oils (vegetable, canola)',
        '🍬 Processed foods (disrupt hormones)',
      ],
      supplements: [
        'CoQ10: 100-200mg (egg quality)',
        'Vitamin E: 400 IU (antioxidant)',
        'Vitamin C: 1000mg (progesterone support)',
        'Evening Primrose Oil: 1500mg (cervical mucus)',
        'L-Arginine: 3-6g (blood flow to ovaries)',
      ],
    },
    luteal: {
      name: 'Luteal Phase',
      days: '17-28',
      color: 'from-[#FADEDE] to-[#F4C2C2]',
      icon: Leaf,
      emoji: '🍂',
      hormones: {
        estrogen: 'Moderate then Dropping',
        progesterone: 'HIGH (Dominant)',
        testosterone: 'Low',
      },
      why: 'Progesterone is DOMINANT now, which increases your body temperature, metabolism, and need for rest. It also increases insulin resistance, making blood sugar control harder. Your body is preparing for either pregnancy or menstruation. You need foods that stabilize blood sugar, support progesterone, and reduce PMS symptoms.',
      focus: [
        'Stabilize blood sugar (insulin resistance peaks)',
        'Support high progesterone levels',
        'Reduce PMS symptoms (mood, cramps, bloating)',
        'Prepare body for menstruation or pregnancy',
      ],
      keyNutrients: [
        {
          name: 'Magnesium',
          why: 'THE MOST IMPORTANT luteal nutrient. Reduces cramps, anxiety, insomnia. Supports progesterone.',
          sources: 'Dark chocolate, almonds, spinach, pumpkin seeds, black beans',
          amount: '400-600mg daily (most women deficient)',
        },
        {
          name: 'B6 (Pyridoxine)',
          why: 'Reduces PMS mood symptoms. Supports progesterone production. Helps neurotransmitters.',
          sources: 'Chicken, fish, potatoes, chickpeas, bananas',
          amount: '50-100mg daily (especially for PMS)',
        },
        {
          name: 'Complex Carbohydrates',
          why: 'Combat increased insulin resistance. Boost serotonin (mood). Satisfy increased appetite.',
          sources: 'Sweet potato, quinoa, oats, brown rice, beans',
          amount: '45-50% of calories, especially if craving',
        },
        {
          name: 'Calcium',
          why: 'Reduces PMS symptoms by 48% in studies. Supports muscle relaxation.',
          sources: 'Dairy, sardines (with bones), kale, fortified plant milk',
          amount: '1000-1200mg daily',
        },
        {
          name: 'Fiber',
          why: 'Helps liver eliminate excess estrogen. Prevents constipation (progesterone slows digestion).',
          sources: 'Vegetables, fruits, whole grains, legumes, flax',
          amount: '25-30g daily',
        },
      ],
      mealPlan: {
        breakfast: [
          '🥣 Oatmeal with banana, almond butter, dark chocolate chips',
          '🥞 Sweet potato toast with avocado & poached eggs',
          '🍳 Scramble with spinach, mushrooms, whole grain toast',
        ],
        lunch: [
          '🍲 Black bean soup with kale and sweet potato',
          '🥗 Quinoa bowl with roasted veggies, chickpeas, tahini',
          '🌯 Whole grain wrap with hummus, turkey, spinach',
        ],
        dinner: [
          '🐟 Baked salmon with roasted Brussels sprouts, brown rice',
          '🍛 Lentil dal with spinach over quinoa',
          '🍝 Whole grain pasta with ground turkey, marinara, kale',
        ],
        snacks: [
          '🍫 Dark chocolate (70%+) with almonds',
          '🍌 Banana with almond butter',
          '🥤 Smoothie: banana, spinach, cacao, almond milk, flax',
        ],
      },
      avoid: [
        '☕ Excess caffeine (worsens anxiety, cramps)',
        '🧂 High sodium (increases bloating)',
        '🍷 Alcohol (worsens PMS, impairs sleep)',
        '🍰 Refined sugar (blood sugar crashes worse)',
        '🥤 Carbonated drinks (increase bloating)',
      ],
      supplements: [
        'Magnesium glycinate: 400-600mg daily',
        'Vitamin B6: 50-100mg daily',
        'Calcium: 1000mg daily',
        'Evening Primrose Oil: 1000-1500mg (PMS)',
        'Vitex (Chasteberry): 400mg (progesterone support)',
        'L-Theanine: 200mg (calm, no sedation)',
      ],
    },
  };

  const phase = nutritionData[selectedPhase];
  const PhaseIcon = phase.icon;

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-6">
      {/* Header */}
      <div className={`bg-gradient-to-br ${phase.color} p-6 rounded-b-[32px] shadow-lg mb-6`}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Apple className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-xl text-white">Phase-Based Nutrition</h1>
            <p className="text-white/90 text-sm">Eat to support your hormones</p>
          </div>
        </div>
        
        <p className="text-[10px] text-white/80 flex items-center gap-1 mb-4">
          <Sparkles className="w-3 h-3" strokeWidth={2} />
          Powered by AI • Personalized to your cycle
        </p>

        {/* Phase Pills */}
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(nutritionData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setSelectedPhase(key as any)}
              className={`rounded-2xl p-3 transition-all ${
                selectedPhase === key
                  ? 'bg-white shadow-lg'
                  : 'bg-white/20 backdrop-blur-sm border border-white/30'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{data.emoji}</span>
                <p className={`text-sm font-medium ${
                  selectedPhase === key ? 'text-[#4A4458]' : 'text-white'
                }`}>
                  {data.name.split(' ')[0]}
                </p>
              </div>
              <p className={`text-xs ${
                selectedPhase === key ? 'text-[#827B8D]' : 'text-white/80'
              }`}>
                Days {data.days}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="px-6">
        {/* Current Hormones */}
        <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
              <PhaseIcon className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-lg text-[#4A4458]">{phase.name}</h2>
              <p className="text-sm text-[#827B8D]">Days {phase.days} of cycle</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-2xl p-4 mb-4">
            <p className="text-sm font-medium text-[#4A4458] mb-2">Active Hormones:</p>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <p className="text-xs text-[#827B8D] mb-1">Estrogen</p>
                <p className="text-sm text-[#4A4458] font-medium">{phase.hormones.estrogen}</p>
              </div>
              <div>
                <p className="text-xs text-[#827B8D] mb-1">Progesterone</p>
                <p className="text-sm text-[#4A4458] font-medium">{phase.hormones.progesterone}</p>
              </div>
              <div>
                <p className="text-xs text-[#827B8D] mb-1">Testosterone</p>
                <p className="text-sm text-[#4A4458] font-medium">{phase.hormones.testosterone}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF9F7] rounded-2xl p-4">
            <p className="text-sm font-medium text-[#4A4458] mb-2">🧬 Why Diet Matters Now:</p>
            <p className="text-sm text-[#827B8D] leading-relaxed">{phase.why}</p>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
          <h3 className="text-lg text-[#4A4458] mb-4">Nutritional Focus</h3>
          <div className="space-y-2">
            {phase.focus.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                <p className="text-sm text-[#827B8D]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Nutrients */}
        <div className="mb-6">
          <h3 className="text-lg text-[#4A4458] mb-4">Key Nutrients for {phase.name}</h3>
          <div className="space-y-3">
            {phase.keyNutrients.map((nutrient, index) => (
              <div key={index} className="bg-white rounded-[24px] p-5 shadow-sm border border-[#EAE4F5]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[#4A4458] font-medium">{nutrient.name}</h4>
                  <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE]">
                    <p className="text-xs text-[#4A4458] font-medium">{nutrient.amount}</p>
                  </div>
                </div>
                <p className="text-sm text-[#827B8D] mb-3">{nutrient.why}</p>
                <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl px-4 py-2">
                  <p className="text-xs text-[#4A4458]">
                    <span className="font-medium">Best sources:</span> {nutrient.sources}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Meal Plan */}
        <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
          <h3 className="text-lg text-[#4A4458] mb-4">Sample Meal Plan</h3>
          
          {Object.entries(phase.mealPlan).map(([meal, options]) => (
            <div key={meal} className="mb-4 last:mb-0">
              <p className="text-sm font-medium text-[#4A4458] mb-2 capitalize">{meal}:</p>
              <div className="space-y-2">
                {(options as string[]).map((option, index) => (
                  <div key={index} className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl px-4 py-2">
                    <p className="text-sm text-[#4A4458]">{option}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Foods to Avoid */}
        <div className="bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2] rounded-[28px] p-6 mb-6 shadow-lg">
          <h3 className="text-white text-lg mb-3">⚠️ Minimize During {phase.name}</h3>
          <div className="space-y-2">
            {phase.avoid.map((item, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
                <p className="text-sm text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Supplements */}
        <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
          <h3 className="text-lg text-[#4A4458] mb-3">Recommended Supplements</h3>
          <p className="text-xs text-[#827B8D] mb-4">Consult healthcare provider before starting</p>
          <div className="space-y-2">
            {phase.supplements.map((supplement, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                <p className="text-sm text-[#827B8D]">{supplement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ask Syla AI */}
        <div className="bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] rounded-[28px] p-6 shadow-lg text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <h3 className="text-white text-lg mb-2">Want More Personalized Guidance?</h3>
          <p className="text-white/90 text-sm mb-4 leading-relaxed">
            Ask Syla AI about specific foods, recipes, meal timing, or how to address your unique symptoms through nutrition.
          </p>
          <button className="w-full bg-white text-[#B8A4D9] rounded-[20px] px-6 py-3 font-medium hover:shadow-xl transition-all flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" strokeWidth={2} />
            Ask Syla AI
          </button>
        </div>
      </div>
    </div>
  );
}