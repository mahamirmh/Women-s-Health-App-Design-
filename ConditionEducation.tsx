import { useState } from 'react';
import { Stethoscope, AlertCircle, Heart, TrendingDown, Utensils, Activity, Calendar, ChevronRight, Shield, Zap } from 'lucide-react';

interface Condition {
  id: string;
  name: string;
  tagline: string;
  icon: typeof Heart;
  gradient: string;
  symptoms: string[];
  hormoneImbalance: string[];
  lifestyleSupport: string[];
  whenToSeeDoctor: string[];
  dietaryTips: string[];
  commonTests: string[];
  exerciseRecommendations: string[];
  supplementSuggestions: string[];
}

export function ConditionEducation() {
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);

  const conditions: Condition[] = [
    {
      id: 'pcos',
      name: 'PCOS',
      tagline: 'Polycystic Ovary Syndrome',
      icon: Activity,
      gradient: 'from-[#B8A4D9] to-[#D4C5F9]',
      symptoms: [
        'Irregular or absent periods (oligomenorrhea or amenorrhea)',
        'Excess facial and body hair (hirsutism)',
        'Acne and oily skin',
        'Weight gain or difficulty losing weight',
        'Thinning hair on the scalp (male pattern baldness)',
        'Dark skin patches (acanthosis nigricans)',
        'Difficulty getting pregnant',
        'Skin tags around neck or armpits',
      ],
      hormoneImbalance: [
        'High androgens (testosterone, DHEA-S)',
        'Insulin resistance and elevated insulin levels',
        'Elevated LH to FSH ratio (often 3:1)',
        'Low progesterone due to irregular ovulation',
        'Possible thyroid involvement (higher TSH)',
        'Low SHBG (Sex Hormone Binding Globulin)',
      ],
      lifestyleSupport: [
        'Regular exercise, especially strength training (3-5x per week)',
        'Maintain healthy weight through balanced nutrition',
        'Stress management techniques (meditation, yoga)',
        'Adequate sleep (7-9 hours nightly)',
        'Limit sugar and refined carbohydrates',
        'Consider intermittent fasting (consult doctor first)',
        'Reduce exposure to endocrine disruptors',
      ],
      whenToSeeDoctor: [
        'Periods are absent for 3+ months',
        'Irregular cycles for more than 6 months',
        'Difficulty conceiving after 6-12 months of trying',
        'Excessive hair growth or rapid hair loss',
        'Severe acne that doesn\'t respond to treatment',
        'Signs of diabetes (excessive thirst, frequent urination, fatigue)',
        'Sudden weight gain of more than 10 pounds',
      ],
      dietaryTips: [
        'Low glycemic index foods (whole grains, legumes)',
        'Anti-inflammatory diet rich in vegetables',
        'Lean proteins with each meal (fish, chicken, legumes)',
        'Healthy fats (avocado, nuts, olive oil, fatty fish)',
        'Fiber-rich vegetables (broccoli, Brussels sprouts)',
        'Limit dairy and gluten (if sensitive)',
        'Cinnamon and spearmint tea to reduce androgens',
        'Avoid processed foods and trans fats',
      ],
      commonTests: [
        'Fasting insulin and fasting glucose',
        'Total and free testosterone',
        'DHEA-S (Dehydroepiandrosterone Sulfate)',
        'LH and FSH levels',
        'Thyroid panel (TSH, free T3, free T4)',
        'Pelvic ultrasound (to check for cysts)',
        '2-hour glucose tolerance test',
        'HbA1c (glycated hemoglobin)',
      ],
      exerciseRecommendations: [
        'Strength training 3-4 times per week',
        'Moderate cardio (avoid excessive high-intensity)',
        'Walking after meals to improve insulin sensitivity',
        'Yoga for stress reduction and hormone balance',
        'HIIT in moderation (2x per week max)',
        'Resistance band exercises',
      ],
      supplementSuggestions: [
        'Inositol (Myo-inositol and D-chiro-inositol)',
        'Berberine for insulin sensitivity',
        'N-Acetyl Cysteine (NAC)',
        'Vitamin D3',
        'Omega-3 fatty acids',
        'Magnesium',
        'Chromium',
        'Spearmint tea (anti-androgenic)',
      ],
    },
    {
      id: 'fibroids',
      name: 'Fibroids',
      tagline: 'Uterine Fibroids',
      icon: Heart,
      gradient: 'from-[#F4C2C2] to-[#FADEDE]',
      symptoms: [
        'Heavy menstrual bleeding (menorrhagia)',
        'Prolonged periods (>7 days)',
        'Pelvic pain or pressure',
        'Frequent urination',
        'Difficulty emptying bladder completely',
        'Constipation',
        'Backache or leg pains',
        'Pain during intercourse (dyspareunia)',
        'Enlarged abdomen',
      ],
      hormoneImbalance: [
        'Estrogen dominance (excess estrogen)',
        'Low progesterone relative to estrogen',
        'Impaired estrogen metabolism in the liver',
        'Possible thyroid dysfunction',
        'Elevated prolactin in some cases',
      ],
      lifestyleSupport: [
        'Maintain healthy weight (obesity increases risk)',
        'Regular moderate exercise (30-60 minutes daily)',
        'Stress reduction practices (deep breathing, meditation)',
        'Reduce xenoestrogen exposure (plastics, chemicals)',
        'Support liver health for estrogen metabolism',
        'Consider castor oil packs on abdomen',
        'Avoid excessive alcohol consumption',
      ],
      whenToSeeDoctor: [
        'Severe pelvic pain or cramping',
        'Extremely heavy bleeding (changing pad every hour)',
        'Bleeding between periods or after menopause',
        'Difficulty getting pregnant or recurrent miscarriages',
        'Sudden rapid growth of fibroids',
        'Severe anemia from blood loss (fatigue, dizziness)',
        'Urinary retention or severe constipation',
      ],
      dietaryTips: [
        'Cruciferous vegetables (broccoli, kale, cauliflower)',
        'Flaxseeds for hormone balance (1-2 tablespoons daily)',
        'Foods rich in iron to combat anemia (red meat, spinach)',
        'Anti-inflammatory foods (turmeric, ginger)',
        'Limit red meat and alcohol',
        'Reduce processed foods and refined sugars',
        'Green tea (contains EGCG)',
        'Organic produce to avoid pesticides',
      ],
      commonTests: [
        'Pelvic ultrasound (transvaginal or abdominal)',
        'MRI for detailed imaging',
        'Estrogen and progesterone levels',
        'CBC (Complete Blood Count) to check for anemia',
        'Thyroid panel (TSH, free T3, free T4)',
        'Hysteroscopy (if needed)',
        'Liver function tests',
      ],
      exerciseRecommendations: [
        'Gentle to moderate cardio (walking, swimming)',
        'Yoga and stretching',
        'Low-impact exercises',
        'Pelvic floor exercises',
        'Avoid very high-intensity workouts if bleeding heavily',
      ],
      supplementSuggestions: [
        'Vitex (Chasteberry) for progesterone support',
        'DIM (Diindolylmethane) for estrogen metabolism',
        'Vitamin D3',
        'Iron (if anemic)',
        'Turmeric/Curcumin',
        'Green tea extract',
        'B-complex vitamins',
      ],
    },
    {
      id: 'endometriosis',
      name: 'Endometriosis',
      tagline: 'Endometrial Tissue Outside Uterus',
      icon: AlertCircle,
      gradient: 'from-[#E8B4E8] to-[#F5D9F5]',
      symptoms: [
        'Severe menstrual cramps (dysmenorrhea)',
        'Chronic pelvic pain',
        'Pain during or after intercourse',
        'Pain with bowel movements or urination during period',
        'Heavy menstrual bleeding or bleeding between periods',
        'Fatigue and exhaustion',
        'Digestive issues (bloating, nausea, diarrhea)',
        'Infertility or difficulty conceiving',
        'Lower back pain',
      ],
      hormoneImbalance: [
        'Estrogen dominance',
        'Inflammation and immune system dysfunction',
        'Prostaglandin imbalance',
        'Progesterone resistance',
        'Elevated inflammatory markers',
      ],
      lifestyleSupport: [
        'Anti-inflammatory diet and lifestyle',
        'Gentle exercise (yoga, swimming, walking)',
        'Heat therapy for pain management',
        'Stress management and relaxation techniques',
        'Pelvic floor physical therapy',
        'Adequate rest during flares',
        'Support groups for emotional well-being',
      ],
      whenToSeeDoctor: [
        'Severe pain that affects daily activities',
        'Pain not relieved by over-the-counter medication',
        'Difficulty conceiving after 6-12 months',
        'Painful bowel movements or urination during period',
        'Chronic fatigue impacting quality of life',
        'Heavy bleeding with clots',
        'Symptoms of internal bleeding (rare)',
      ],
      dietaryTips: [
        'Anti-inflammatory foods (turmeric, ginger, leafy greens)',
        'Omega-3 rich foods (salmon, sardines, walnuts)',
        'Avoid trans fats and processed foods',
        'Limit red meat and dairy (may increase inflammation)',
        'Plenty of vegetables and fruits',
        'Gluten-free diet (may help some women)',
        'Limit alcohol and caffeine',
        'Foods rich in magnesium',
      ],
      commonTests: [
        'Pelvic exam',
        'Ultrasound or MRI (to check for cysts)',
        'Laparoscopy (definitive diagnosis - gold standard)',
        'CA-125 blood test (not diagnostic but can indicate severity)',
        'Hormone panels',
      ],
      exerciseRecommendations: [
        'Gentle yoga and stretching',
        'Swimming and water exercises',
        'Walking',
        'Pilates (modified)',
        'Avoid high-impact exercises during flares',
        'Pelvic floor relaxation exercises',
      ],
      supplementSuggestions: [
        'Omega-3 fatty acids (high-quality fish oil)',
        'Turmeric/Curcumin',
        'NAC (N-Acetyl Cysteine)',
        'Magnesium',
        'Vitamin D3',
        'Probiotics',
        'Resveratrol',
        'B-complex vitamins',
      ],
    },
    {
      id: 'thyroid',
      name: 'Thyroid Disorders',
      tagline: 'Hypothyroidism & Hyperthyroidism',
      icon: Activity,
      gradient: 'from-[#A8C5E8] to-[#C8DDEC]',
      symptoms: [
        'Hypothyroid: Weight gain, fatigue, cold intolerance, constipation',
        'Hyperthyroid: Weight loss, anxiety, heat intolerance, rapid heartbeat',
        'Hair loss or thinning',
        'Irregular menstrual cycles',
        'Dry skin (hypo) or excessive sweating (hyper)',
        'Changes in mood (depression or anxiety)',
        'Brain fog and memory issues',
        'Muscle weakness',
      ],
      hormoneImbalance: [
        'Low T3 and T4 (hypothyroid)',
        'High T3 and T4 (hyperthyroid)',
        'Elevated TSH (hypothyroid)',
        'Low TSH (hyperthyroid)',
        'Possible autoimmune involvement (Hashimoto\'s, Graves\')',
        'Reverse T3 elevation (stress-related)',
      ],
      lifestyleSupport: [
        'Manage stress effectively (crucial for thyroid health)',
        'Get adequate sleep (7-9 hours)',
        'Avoid excessive soy products',
        'Regular moderate exercise',
        'Support gut health with probiotics',
        'Limit exposure to environmental toxins',
        'Avoid goitrogens if hypothyroid (raw cruciferous veggies)',
      ],
      whenToSeeDoctor: [
        'Unexplained weight changes (gain or loss)',
        'Persistent fatigue despite adequate rest',
        'Heart palpitations or irregular heartbeat',
        'Severe mood changes (depression, anxiety)',
        'Difficulty regulating body temperature',
        'Swelling in the neck (goiter)',
        'Changes in menstrual cycle',
        'Family history of thyroid disease',
      ],
      dietaryTips: [
        'Selenium-rich foods (Brazil nuts, fish, eggs)',
        'Iodine sources (seaweed, fish) - if not autoimmune',
        'Zinc and iron-rich foods',
        'Avoid excessive raw cruciferous vegetables (if hypo)',
        'Gluten-free diet (especially for Hashimoto\'s)',
        'Anti-inflammatory foods',
        'Limit processed foods',
        'Cook cruciferous vegetables before eating',
      ],
      commonTests: [
        'TSH (Thyroid Stimulating Hormone)',
        'Free T3 and Free T4',
        'Thyroid antibodies (TPO, Thyroglobulin)',
        'Reverse T3',
        'Thyroid ultrasound',
        'Complete thyroid panel',
      ],
      exerciseRecommendations: [
        'Moderate exercise (avoid overtraining)',
        'Strength training',
        'Walking and light cardio',
        'Yoga for stress reduction',
        'Avoid excessive high-intensity exercise (can stress thyroid)',
      ],
      supplementSuggestions: [
        'Selenium (200mcg daily)',
        'Zinc',
        'Vitamin D3',
        'Iron (if deficient)',
        'Magnesium',
        'B-complex vitamins',
        'Ashwagandha (for hypothyroid)',
        'L-tyrosine (for hypothyroid)',
      ],
    },
    {
      id: 'menopause',
      name: 'Menopause & Perimenopause',
      tagline: 'Natural Hormonal Transition',
      icon: Calendar,
      gradient: 'from-[#F4D8A4] to-[#FADEC5]',
      symptoms: [
        'Irregular periods (perimenopause)',
        'Hot flashes and night sweats',
        'Sleep disturbances and insomnia',
        'Mood changes (irritability, depression, anxiety)',
        'Vaginal dryness',
        'Decreased libido',
        'Weight gain (especially around abdomen)',
        'Brain fog and memory issues',
        'Joint pain and muscle aches',
      ],
      hormoneImbalance: [
        'Declining estrogen levels',
        'Declining progesterone levels',
        'FSH levels rise significantly',
        'Fluctuating hormones during perimenopause',
        'Lower testosterone',
      ],
      lifestyleSupport: [
        'Regular weight-bearing exercise for bone health',
        'Strength training to maintain muscle mass',
        'Stress management (meditation, deep breathing)',
        'Quality sleep hygiene practices',
        'Stay socially connected',
        'Practice mindfulness and self-compassion',
        'Layer clothing for hot flashes',
      ],
      whenToSeeDoctor: [
        'Severe hot flashes affecting quality of life',
        'Vaginal bleeding after 12 months without period',
        'Severe mood changes or depression',
        'Painful intercourse',
        'Concerns about bone health or osteoporosis',
        'Interest in hormone replacement therapy (HRT)',
        'Severe insomnia',
      ],
      dietaryTips: [
        'Calcium-rich foods for bone health (dairy, leafy greens)',
        'Vitamin D sources (fatty fish, fortified foods)',
        'Phytoestrogen foods (flax, soy, legumes)',
        'Omega-3 fatty acids',
        'Plenty of fruits and vegetables',
        'Limit caffeine and alcohol (can worsen symptoms)',
        'Stay well hydrated',
        'Protein at every meal',
      ],
      commonTests: [
        'FSH levels (elevated in menopause)',
        'Estradiol (low)',
        'AMH (Anti-Müllerian Hormone)',
        'Bone density scan (DEXA)',
        'Thyroid panel',
        'Lipid panel',
        'Vitamin D levels',
      ],
      exerciseRecommendations: [
        'Weight-bearing exercises (walking, jogging)',
        'Strength training 2-3 times per week',
        'Balance exercises to prevent falls',
        'Yoga for flexibility and stress relief',
        'Swimming',
        'Dancing',
      ],
      supplementSuggestions: [
        'Calcium (1200mg daily)',
        'Vitamin D3 (2000-4000 IU)',
        'Magnesium',
        'Black cohosh for hot flashes',
        'Omega-3 fatty acids',
        'Vitamin E',
        'Evening primrose oil',
        'Maca root',
      ],
    },
    {
      id: 'insulin-resistance',
      name: 'Insulin Resistance',
      tagline: 'Metabolic & Hormonal Imbalance',
      icon: TrendingDown,
      gradient: 'from-[#B8D9C7] to-[#D4EDDF]',
      symptoms: [
        'Weight gain (especially around abdomen)',
        'Difficulty losing weight despite efforts',
        'Intense sugar and carbohydrate cravings',
        'Fatigue after meals (postprandial fatigue)',
        'Brain fog and difficulty concentrating',
        'Dark skin patches (acanthosis nigricans on neck, armpits)',
        'Skin tags',
        'Irregular periods',
        'High blood pressure',
      ],
      hormoneImbalance: [
        'Chronically high insulin levels',
        'Elevated blood sugar',
        'High androgens (in women)',
        'Low SHBG (Sex Hormone Binding Globulin)',
        'Disrupted cortisol patterns',
        'Inflammation markers elevated',
      ],
      lifestyleSupport: [
        'Regular exercise, especially after meals',
        'Strength training to build muscle mass',
        'Intermittent fasting (if appropriate - consult doctor)',
        'Stress management to reduce cortisol',
        'Adequate sleep (7-9 hours nightly)',
        'Weight loss if overweight (even 5-10% helps)',
        'Avoid sitting for long periods',
      ],
      whenToSeeDoctor: [
        'Fasting blood sugar over 100 mg/dL',
        'HbA1c over 5.7% (prediabetes range)',
        'Family history of type 2 diabetes',
        'Signs of prediabetes or diabetes',
        'Difficulty managing weight despite lifestyle changes',
        'PCOS diagnosis',
        'Dark skin patches appearing',
      ],
      dietaryTips: [
        'Low glycemic index foods',
        'Balanced meals with protein, healthy fat, and fiber',
        'Limit refined carbohydrates and sugars',
        'Healthy fats (avocado, nuts, olive oil, fatty fish)',
        'Cinnamon and apple cider vinegar before meals',
        'Plenty of non-starchy vegetables',
        'Avoid processed foods and sugary drinks',
        'Eat protein first at meals',
      ],
      commonTests: [
        'Fasting insulin (ideal <5 μIU/mL)',
        'Fasting glucose (ideal <100 mg/dL)',
        'HbA1c (glycated hemoglobin)',
        'HOMA-IR index (measures insulin resistance)',
        'Lipid panel (triglycerides often elevated)',
        'C-peptide',
      ],
      exerciseRecommendations: [
        'Strength training 3-4 times per week',
        '10-15 minute walks after meals',
        'HIIT 2-3 times per week',
        'Daily movement (aim for 10,000 steps)',
        'Resistance band exercises',
      ],
      supplementSuggestions: [
        'Berberine (500mg 2-3x daily)',
        'Chromium picolinate',
        'Alpha-lipoic acid',
        'Magnesium',
        'Cinnamon extract',
        'Omega-3 fatty acids',
        'Vitamin D3',
        'Inositol',
      ],
    },
    {
      id: 'hormonal-acne',
      name: 'Hormonal Acne',
      tagline: 'Acne Related to Hormone Fluctuations',
      icon: AlertCircle,
      gradient: 'from-[#F4C2D8] to-[#FADEE8]',
      symptoms: [
        'Acne along jawline, chin, and lower face',
        'Deep, cystic breakouts (painful nodules)',
        'Acne that worsens before menstrual period',
        'Adult-onset acne (starting after age 25)',
        'Oily skin, especially in T-zone',
        'Acne that doesn\'t respond to typical treatments',
        'Flares during ovulation or luteal phase',
      ],
      hormoneImbalance: [
        'High androgens (testosterone, DHEA-S)',
        'Estrogen dominance or fluctuations',
        'High insulin and insulin resistance',
        'Cortisol imbalance (stress)',
        'Low progesterone',
      ],
      lifestyleSupport: [
        'Gentle, non-comedogenic skincare routine',
        'Stress management practices',
        'Adequate sleep (7-9 hours)',
        'Regular exercise (helps balance hormones)',
        'Clean pillowcases frequently (2-3x per week)',
        'Avoid touching face throughout the day',
        'Consider acne-safe makeup and products',
      ],
      whenToSeeDoctor: [
        'Severe cystic acne',
        'Acne causing scarring or hyperpigmentation',
        'Acne not improving with lifestyle changes after 3 months',
        'Signs of PCOS or other hormonal imbalances',
        'Acne significantly affecting self-esteem',
        'Sudden onset of severe acne',
      ],
      dietaryTips: [
        'Low glycemic diet (avoid sugar spikes)',
        'Limit or eliminate dairy products',
        'Anti-inflammatory foods (berries, leafy greens)',
        'Zinc-rich foods (oysters, pumpkin seeds)',
        'Foods high in omega-3s (salmon, walnuts)',
        'Probiotic foods for gut health (yogurt, kefir, kimchi)',
        'Limit sugar and processed foods',
        'Stay well hydrated',
      ],
      commonTests: [
        'Total and free testosterone',
        'DHEA-S (Dehydroepiandrosterone Sulfate)',
        'Estradiol and progesterone (day 21 of cycle)',
        'Fasting insulin and glucose',
        'Thyroid panel (TSH, free T3, free T4)',
        'LH and FSH',
      ],
      exerciseRecommendations: [
        'Regular moderate exercise',
        'Yoga for stress reduction',
        'Walking or jogging',
        'Strength training',
        'Avoid excessive sweating without immediate cleansing',
      ],
      supplementSuggestions: [
        'Zinc (30-50mg daily)',
        'Omega-3 fatty acids',
        'DIM (for estrogen metabolism)',
        'Vitamin D3',
        'Probiotics',
        'Spearmint tea (anti-androgenic)',
        'NAC (N-Acetyl Cysteine)',
        'Vitamin A (consult doctor)',
      ],
    },
  ];

  const selectedConditionData = conditions.find(c => c.id === selectedCondition);

  if (selectedConditionData) {
    const Icon = selectedConditionData.icon;
    return (
      <div className="px-6 py-6">
        <button
          onClick={() => setSelectedCondition(null)}
          className="mb-6 text-[#7C5BA7] hover:text-[#5B4080] transition-colors"
        >
          ← Back to All Conditions
        </button>

        {/* Condition Header */}
        <div className={`bg-gradient-to-br ${selectedConditionData.gradient} rounded-3xl p-6 mb-6 shadow-lg`}>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-1">{selectedConditionData.name}</h2>
              <p className="text-white/90 text-sm">{selectedConditionData.tagline}</p>
            </div>
          </div>
        </div>

        {/* Symptoms */}
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-sm border border-[#F4C2C2]/10">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#E87A7A]" />
            Common Symptoms
          </h3>
          <ul className="space-y-2">
            {selectedConditionData.symptoms.map((symptom, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E87A7A] mt-1.5 flex-shrink-0" />
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hormone Imbalance */}
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-sm border border-[#F4C2C2]/10">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#7C5BA7]" />
            Hormone Imbalances Involved
          </h3>
          <ul className="space-y-2">
            {selectedConditionData.hormoneImbalance.map((imbalance, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C5BA7] mt-1.5 flex-shrink-0" />
                <span>{imbalance}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lifestyle Support */}
        <div className="bg-gradient-to-br from-[#B8D9C7]/10 to-[#D4EDDF]/10 rounded-3xl p-6 mb-4 border border-[#B8D9C7]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#5BA77C]" />
            Lifestyle Support Strategies
          </h3>
          <ul className="space-y-2">
            {selectedConditionData.lifestyleSupport.map((strategy, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5BA77C] mt-1.5 flex-shrink-0" />
                <span>{strategy}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dietary Tips */}
        <div className="bg-gradient-to-br from-[#F4D8A4]/10 to-[#FADEC5]/10 rounded-3xl p-6 mb-4 border border-[#F4D8A4]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-[#C8954A]" />
            Dietary Recommendations
          </h3>
          <ul className="space-y-2">
            {selectedConditionData.dietaryTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8954A] mt-1.5 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* When to See a Doctor */}
        <div className="bg-gradient-to-br from-[#E87A7A]/10 to-[#F4C2C2]/10 rounded-3xl p-6 mb-4 border border-[#E87A7A]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-[#E87A7A]" />
            When to See a Doctor
          </h3>
          <ul className="space-y-2">
            {selectedConditionData.whenToSeeDoctor.map((reason, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E87A7A] mt-1.5 flex-shrink-0" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Common Tests */}
        <div className="bg-gradient-to-br from-[#B8A4D9]/10 to-[#D4C5F9]/10 rounded-3xl p-6 border border-[#B8A4D9]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#7C5BA7]" />
            Common Diagnostic Tests
          </h3>
          <ul className="space-y-2">
            {selectedConditionData.commonTests.map((test, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C5BA7] mt-1.5 flex-shrink-0" />
                <span>{test}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exercise Recommendations */}
        <div className="bg-gradient-to-br from-[#F4C2C2]/10 to-[#FADEDE]/10 rounded-3xl p-6 mb-4 border border-[#F4C2C2]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#E87A7A]" />
            Exercise Recommendations
          </h3>
          <ul className="space-y-2">
            {selectedConditionData.exerciseRecommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E87A7A] mt-1.5 flex-shrink-0" />
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Supplement Suggestions */}
        <div className="bg-gradient-to-br from-[#B8A4D9]/10 to-[#D4C5F9]/10 rounded-3xl p-6 border border-[#B8A4D9]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#7C5BA7]" />
            Supplement Suggestions
          </h3>
          <ul className="space-y-2">
            {selectedConditionData.supplementSuggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C5BA7] mt-1.5 flex-shrink-0" />
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-bold text-[#2D1B4E] mb-2">Health Conditions</h2>
      <p className="text-[#7C5BA7] mb-6">
        Learn about common hormonal and reproductive health conditions
      </p>

      <div className="grid gap-4">
        {conditions.map((condition) => {
          const Icon = condition.icon;
          return (
            <button
              key={condition.id}
              onClick={() => setSelectedCondition(condition.id)}
              className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all transform hover:scale-[1.01] active:scale-[0.99] text-left border border-[#F4C2C2]/10"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${condition.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#2D1B4E] mb-0.5">{condition.name}</h3>
                  <p className="text-sm text-[#7C5BA7]">{condition.tagline}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#7C5BA7] flex-shrink-0" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Important Notice */}
      <div className="mt-6 bg-gradient-to-br from-[#E87A7A]/10 to-[#F4C2C2]/10 rounded-3xl p-5 border border-[#E87A7A]/20">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#E87A7A] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-[#2D1B4E] mb-1">Important Notice</h4>
            <p className="text-sm text-[#7C5BA7] leading-relaxed">
              This information is for educational purposes only and should not replace professional medical advice. Always consult with a healthcare provider for diagnosis and treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}