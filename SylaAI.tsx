import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Activity, AlertCircle, TrendingUp, Droplet } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  category?: 'hormonal' | 'phase' | 'imbalance' | 'general';
  hasWarning?: boolean;
}

export function SylaAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm Syla AI, your hormonal health expert. I'm trained to understand your cycle phases, hormones, and detect potential imbalances. I analyze your wearable data, daily logs, and symptoms to provide personalized guidance.\n\nI can help with:\n• Understanding your current hormone levels\n• Phase-specific advice (nutrition, fitness, self-care)\n• Detecting hormonal imbalances\n• Explaining symptoms in context of your cycle\n• When to see a healthcare provider\n\nWhat would you like to know?",
      timestamp: new Date(),
      category: 'general',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Current user data (from wearable + logs)
  const userData = {
    phase: 'Luteal',
    day: 24,
    wearable: {
      hrv: 62,
      hrvBaseline: 75,
      temperature: 37.1,
      tempBaseline: 36.8,
      restingHR: 68,
      hrBaseline: 62,
      sleep: 6.5,
      sleepQuality: 72,
    },
    todayLog: {
      symptoms: ['Abdominal cramps', 'Fatigue', 'Bloating'],
      moods: ['Tired', 'Calm'],
      cervicalMucus: 'Creamy',
      spotting: false,
      energy: 5,
      flow: 'None',
    },
    hormones: {
      progesterone: 'High',
      estrogen: 'Moderate-Low',
      testosterone: 'Low',
      cortisol: 'Elevated',
    },
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI Response Generator trained on hormonal health
  const generateAiResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Hormonal imbalance detection
    const detectImbalance = () => {
      const { hrv, hrvBaseline, restingHR, hrBaseline, sleep } = userData.wearable;
      const { symptoms, moods } = userData.todayLog;
      
      // High cortisol detection
      if (hrv < hrvBaseline * 0.75 && restingHR > hrBaseline + 8 && moods.includes('Stressed')) {
        return {
          hasImbalance: true,
          type: 'High Cortisol',
          message: `⚠️ **Potential Hormonal Imbalance Detected: High Cortisol**\n\nI'm seeing a pattern that suggests elevated stress hormones:\n\n**Evidence:**\n• HRV significantly low (${hrv}ms vs ${hrvBaseline}ms baseline) = -${Math.round(((hrvBaseline - hrv) / hrvBaseline) * 100)}%\n• Resting HR elevated (${restingHR} vs ${hrBaseline} baseline) = +${restingHR - hrBaseline} bpm\n• You logged: Stressed, Tired, Fatigue\n• Sleep quality: ${userData.wearable.sleepQuality}% (suboptimal)\n\n**What's happening:**\nHigh cortisol (your stress hormone) is interfering with your reproductive hormones. Even though you're in luteal phase, chronic stress can:\n• Suppress progesterone production\n• Delay or skip ovulation next cycle\n• Worsen PMS symptoms\n• Disrupt sleep (which you're experiencing)\n\n**Immediate Actions:**\n1. **Prioritize sleep**: Aim for 9 hours tonight\n2. **Adaptogenic herbs**: Ashwagandha, Rhodiola (consult provider first)\n3. **Reduce caffeine**: Switch to herbal tea after 2pm\n4. **Gentle movement only**: Skip HIIT, do restorative yoga\n5. **Magnesium glycinate**: 400mg before bed\n6. **Deep breathing**: 5 min, 3x daily\n\n**When to see a doctor:**\nIf this pattern continues for 2+ weeks, get cortisol levels tested (morning + evening saliva test).\n\nYour body is asking for REST. Listen. 💜`,
        };
      }

      // Progesterone deficiency
      if (userData.phase === 'Luteal' && userData.wearable.temperature < userData.wearable.tempBaseline + 0.2) {
        return {
          hasImbalance: true,
          type: 'Low Progesterone',
          message: `⚠️ **Possible Low Progesterone**\n\nYour luteal phase temperature should be elevated, but I'm seeing:\n• Temperature: ${userData.wearable.temperature}°C (only +${(userData.wearable.temperature - userData.wearable.tempBaseline).toFixed(1)}°C from baseline)\n• Expected: At least +0.3-0.5°C elevation\n\n**Why this matters:**\nProgesterone raises body temperature after ovulation. A weak temperature rise can indicate:\n• Low progesterone production\n• Luteal phase defect\n• Weak ovulation\n\n**Common causes:**\n• Chronic stress\n• Nutrient deficiencies (Vitamin B6, C, Magnesium, Zinc)\n• Thyroid imbalance\n• Low cholesterol (progesterone is made from cholesterol!)\n\n**What helps:**\n• Vitamin B6: 50-100mg daily\n• Eat healthy fats (avocado, nuts, olive oil)\n• Reduce alcohol\n• Chasteberry (Vitex) - consult provider\n• Track for 2-3 more cycles to confirm pattern\n\n**Next steps:**\nIf this continues, ask your doctor for day 21 progesterone blood test (7 days after ovulation).\n\nNormal range: >10 ng/mL\nOptimal: 15-25 ng/mL`,
        };
      }

      return { hasImbalance: false, type: '', message: '' };
    };

    // Phase-specific hormone education
    if (lowerMessage.includes('hormone') || lowerMessage.includes('progesterone') || lowerMessage.includes('estrogen')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: `**Your Current Hormone Profile (Day ${userData.day} - ${userData.phase} Phase)**\n\n🟣 **Progesterone: ${userData.hormones.progesterone}**\n• This is your dominant hormone right now\n• Made by the corpus luteum (leftover follicle after ovulation)\n• Peak: 7 days after ovulation (around day 21 of 28-day cycle)\n\n**What it's doing in your body:**\n✓ Raising body temperature to ${userData.wearable.temperature}°C (+0.3°C)\n✓ Thickening uterine lining for potential pregnancy\n✓ Calming your nervous system (GABA-like effect)\n✓ Increasing appetite (you logged this!)\n✓ Causing water retention → bloating you're feeling\n✓ Lowering HRV to ${userData.wearable.hrv}ms (energy conservation mode)\n\n**Supporting progesterone:**\n• Vitamin B6, C, Zinc, Magnesium\n• Healthy fats (it's made from cholesterol)\n• Manage stress (cortisol competes with progesterone)\n• Moderate exercise (not intense)\n\n💗 **Estrogen: ${userData.hormones.estrogen}**\n• Dropping from its ovulation peak\n• This decline + high progesterone = classic PMS trigger\n\n**Effects of dropping estrogen:**\n• Lower serotonin → mood changes\n• Less collagen production → skin changes\n• Reduced energy (which you're experiencing)\n• Craving carbs (to boost serotonin)\n\n**Supporting estrogen:**\n• Phytoestrogens (flax seeds, soy)\n• B vitamins\n• Cruciferous veggies (broccoli, kale) for healthy estrogen metabolism\n\n⚡ **Testosterone: ${userData.hormones.testosterone}**\n• At its lowest point in luteal phase\n• Explains lower energy and libido\n\n💛 **Cortisol: ${userData.hormones.cortisol}**\n• Your wearable shows signs of elevation (low HRV, high HR)\n• Can interfere with progesterone if chronically high\n\n**Bottom line:** Your hormone levels are appropriate for day ${userData.day}, but your stress response (cortisol) needs attention. Focus on rest, not pushing through. 🌸`,
        timestamp: new Date(),
        category: 'hormonal',
      };
    }

    // Cervical mucus analysis
    if (lowerMessage.includes('mucus') || lowerMessage.includes('discharge') || lowerMessage.includes('cervical')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: `**Cervical Mucus Analysis**\n\nYou logged: **${userData.todayLog.cervicalMucus}** mucus today.\n\n**What this means in ${userData.phase} Phase (Day ${userData.day}):**\n\n"Creamy" mucus is PERFECT for luteal phase! Here's why:\n\n🔬 **The Science:**\nAfter ovulation, high progesterone makes cervical mucus:\n• Thick and creamy (not stretchy)\n• Forms a "plug" to block sperm\n• Protects potential embryo\n• Creates barrier against bacteria\n\n**Mucus Guide by Phase:**\n\n🌱 **Follicular Phase (Days 1-13):**\n• Early: Sticky or no mucus\n• Mid: Creamy\n• Late: More watery as estrogen rises\n\n🥚 **Ovulation (Days 14-16):**\n• Egg white = PRIME fertility!\n• Clear, stretchy, slippery\n• High estrogen peak\n• Nourishes and transports sperm\n\n🍂 **Luteal Phase (Days 17-28) - YOU ARE HERE:**\n• Creamy or sticky ✓ (This is you!)\n• White/yellow tinge is normal\n• Amount decreases\n• High progesterone effect\n\n⚠️ **See a doctor if you notice:**\n• Green or gray color\n• Foul odor\n• Itching or burning\n• Cottage cheese texture (yeast)\n\n**Pro tip:** Your cervical mucus + wearable temperature data gives you 97% ovulation detection accuracy. You're tracking perfectly! 🌟`,
        timestamp: new Date(),
        category: 'phase',
      };
    }

    // Symptom analysis
    if (lowerMessage.includes('cramp') || lowerMessage.includes('pain') || lowerMessage.includes('symptom')) {
      const imbalance = detectImbalance();
      if (imbalance.hasImbalance) {
        return {
          id: Date.now().toString(),
          type: 'ai',
          content: imbalance.message,
          timestamp: new Date(),
          category: 'imbalance',
          hasWarning: true,
        };
      }

      return {
        id: Date.now().toString(),
        type: 'ai',
        content: `**Symptom Analysis - Day ${userData.day} (${userData.phase} Phase)**\n\nYou've logged:\n${userData.todayLog.symptoms.map(s => `• ${s}`).join('\n')}\n\n**Hormonal Explanation:**\n\n🔴 **Abdominal Cramps (Luteal Phase)**\n**Hormone responsible:** Prostaglandins (triggered by progesterone)\n\nWhy it happens:\n• Your uterus is preparing to shed its lining\n• Prostaglandins cause muscle contractions\n• Progesterone withdrawal (if no pregnancy) triggers this\n\n**Natural relief:**\n• Magnesium: 400mg daily (relaxes smooth muscle)\n• Omega-3s: 2000mg daily (anti-prostaglandin)\n• Heat therapy: 20 min on lower abdomen\n• Ginger tea: Natural anti-inflammatory\n• Avoid dairy (increases prostaglandins)\n\n😴 **Fatigue**\n**Hormones responsible:** Progesterone + Dropping Estrogen\n\nWhy it happens:\n• Progesterone is sedating (acts on GABA receptors)\n• Your metabolism is 5-10% higher (burning more calories at rest)\n• Lower estrogen = less serotonin = less energy\n• Your wearable confirms: Sleep quality only ${userData.wearable.sleepQuality}%\n\n**Natural solutions:**\n• Earlier bedtime (your body NEEDS more sleep now)\n• Iron-rich foods (beef, spinach, pumpkin seeds)\n• B-complex vitamins\n• Reduce caffeine (stresses adrenals more)\n• 20-min power nap if possible\n\n🎈 **Bloating**\n**Hormone responsible:** Progesterone + Aldosterone\n\nWhy it happens:\n• Progesterone slows digestion (relaxes smooth muscle)\n• Increased aldosterone = water retention\n• Peaked 5-7 days before period (that's NOW)\n\n**Natural solutions:**\n• Reduce salt intake\n• Dandelion tea (natural diuretic)\n• Potassium-rich foods (banana, sweet potato)\n• Avoid carbonated drinks\n• Gentle yoga twists\n• Probiotics (support gut motility)\n\n**Your Mood Context:**\nYou logged: ${userData.todayLog.moods.join(', ')}\n\nTired + Calm is actually IDEAL for luteal phase! You're honoring your body's need for rest instead of fighting it. This is hormonal wisdom. 💜\n\n**⚠️ When to worry:**\nYour symptoms are NORMAL for day ${userData.day}. See a doctor if:\n• Cramps are debilitating (can't function)\n• Fatigue doesn't improve with rest\n• Bloating is severe or one-sided\n• Symptoms suddenly change from your usual pattern`,
        timestamp: new Date(),
        category: 'phase',
      };
    }

    // Mood and mental health
    if (lowerMessage.includes('mood') || lowerMessage.includes('anxious') || lowerMessage.includes('irritable') || lowerMessage.includes('emotional')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: `**Mood & Hormones - Day ${userData.day}**\n\nToday you're feeling: **${userData.todayLog.moods.join(', ')}**\n\n**The Hormonal Connection:**\n\n🧠 **How Hormones Affect Your Brain:**\n\n**Estrogen** (currently ${userData.hormones.estrogen}):\n• Boosts serotonin production → happiness, calm\n• Increases dopamine receptors → motivation, reward\n• Enhances BDNF → brain plasticity, learning\n• DECLINING now = why you might feel more tired/flat\n\n**Progesterone** (currently ${userData.hormones.progesterone}):\n• Metabolizes into allopregnanolone → GABA-like calming effect\n• This is why you feel CALM (you logged this!)\n• But can also cause brain fog, sluggishness\n• Sedating effect explains TIRED mood\n\n**Cortisol** (elevated based on your HRV):\n• Your wearable shows: HRV ${userData.wearable.hrv}ms (${Math.round(((userData.wearable.hrvBaseline - userData.wearable.hrv) / userData.wearable.hrvBaseline) * 100)}% below baseline)\n• This suggests stress response is activated\n• Can amplify negative moods\n• Interferes with sleep quality\n\n**Why "Tired" + "Calm" Makes Sense:**\nThis combination is TYPICAL for luteal phase!\n• Progesterone is doing its job (calm)\n• But metabolic demands are higher (tired)\n• It's your body asking for rest, not laziness\n\n**Supporting Healthy Mood in Luteal:**\n\n🥗 **Nutrition:**\n• Complex carbs (boost serotonin): Oats, sweet potato, quinoa\n• Magnesium (calm nervous system): 400mg daily\n• Omega-3s (brain health): Salmon, walnuts, flax\n• B6 (neurotransmitter production): 50-100mg\n• Dark chocolate (magnesium + mood boost): 70%+ cacao\n\n💊 **Supplements:**\n• Evening Primrose Oil: 1000-1500mg (for PMS mood)\n• L-Theanine: 200mg (calm without sedation)\n• Vitamin D: If deficient (check levels)\n\n🧘‍♀️ **Lifestyle:**\n• Morning sunlight (regulates circadian rhythm)\n• Gentle movement (yoga, walks - releases endorphins)\n• Journaling (your luteal phase brain is introspective)\n• Say NO to extra commitments (protect energy)\n• Early bedtime (progesterone makes you sleepy for a reason)\n\n**⚠️ When to Seek Help:**\nYour mood is NORMAL for this phase. But see a healthcare provider if you experience:\n• Severe depression or suicidal thoughts\n• Panic attacks\n• Mood swings that disrupt relationships/work\n• Symptoms that don't improve when period starts\n• Pattern of PMDD (Premenstrual Dysphoric Disorder)\n\n**Remember:** You're not "too sensitive" or "crazy." Your brain is responding to real hormonal shifts. Honoring this instead of fighting it is self-care. 🌸`,
        timestamp: new Date(),
        category: 'hormonal',
      };
    }

    // Spotting analysis
    if (lowerMessage.includes('spot') || lowerMessage.includes('bleeding') || lowerMessage.includes('brown discharge')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: `**Spotting Analysis**\n\nYou logged: **${userData.todayLog.spotting ? 'Had spotting' : 'No spotting'}** today (Day ${userData.day}).\n\n**Spotting on Day ${userData.day} - What It Could Mean:**\n\n${userData.todayLog.spotting ? `\n🩸 **Luteal Phase Spotting (Day ${userData.day}):**\n\n**Possible Causes:**\n\n1️⃣ **Progesterone Breakthrough Bleeding (Most Common)**\n• Your progesterone may be starting to drop early\n• Normal if 1-3 days before period\n• Concerning if >5 days before period\n\n2️⃣ **Implantation Bleeding** (if trying to conceive)\n• Occurs 6-12 days after ovulation\n• Light pink or brown spotting\n• Your wearable would show: Sustained high temp + elevated HR\n• Consider pregnancy test if period is late\n\n3️⃣ **Low Progesterone**\n• Your temperature: ${userData.wearable.temperature}°C (should be >0.3°C above baseline)\n• If spotting + weak temp rise = possible luteal phase defect\n• Get day 21 progesterone test\n\n4️⃣ **Hormonal Imbalance**\n• High estrogen relative to progesterone\n• Can cause endometrial instability\n• Common with stress, PCOS, perimenopause\n\n**What to Track:**\n• Color: Pink (fresh), Brown (old), Red (active)\n• Amount: Panty liner vs. pad needed\n• Duration: How many days\n• Timing: When in cycle it happens\n\n**When to See a Doctor:**\n🚨 **Urgent:**\n• Heavy bleeding (soaking pad in <2 hours)\n• Severe pain\n• Dizziness or fainting\n\n⚠️ **Soon:**\n• Spotting for >3 days\n• Spotting every cycle mid-luteal\n• Spotting + unusual discharge/odor\n• Spotting after menopause\n• Spotting + positive pregnancy test\n\n**Natural Support:**\n• Vitamin C: 500mg 2x daily (strengthens capillaries)\n• Iron: If bleeding is regular (prevent anemia)\n• Vitex/Chasteberry: May help regulate (consult provider)\n• Track temp + spotting for 3 cycles to see pattern` : `\n✅ **No Spotting - Normal for Day ${userData.day}!**\n\nThis is expected in mid-luteal phase. Your progesterone should be high and stable, maintaining the uterine lining.\n\n**Healthy Luteal Phase Signs (You Have These!):**\n✓ No spotting\n✓ Elevated temperature (${userData.wearable.temperature}°C)\n✓ Creamy cervical mucus\n✓ Progesterone symptoms (fatigue, bloating, calm mood)\n\nYour hormone balance looks good based on this data! Keep tracking. 🌟`}`,
        timestamp: new Date(),
        category: 'phase',
        hasWarning: userData.todayLog.spotting,
      };
    }

    // Imbalance detection
    if (lowerMessage.includes('imbalance') || lowerMessage.includes('something wrong') || lowerMessage.includes('abnormal')) {
      const imbalance = detectImbalance();
      if (imbalance.hasImbalance) {
        return {
          id: Date.now().toString(),
          type: 'ai',
          content: imbalance.message,
          timestamp: new Date(),
          category: 'imbalance',
          hasWarning: true,
        };
      }

      return {
        id: Date.now().toString(),
        type: 'ai',
        content: `**Hormonal Balance Check - Day ${userData.day}**\n\nI've analyzed your complete data:\n\n✅ **Looking Good:**\n• Temperature elevation confirms ovulation occurred\n• HRV pattern matches luteal phase\n• Symptoms align with progesterone dominance\n• Mood is appropriate for phase\n\n⚠️ **Areas to Monitor:**\n• HRV is ${Math.round(((userData.wearable.hrvBaseline - userData.wearable.hrv) / userData.wearable.hrvBaseline) * 100)}% below baseline\n• Sleep quality at ${userData.wearable.sleepQuality}% (could be better)\n• These suggest some stress response activation\n\n**Recommendation:**\nYour hormones are functioning normally for luteal phase, but your stress response (cortisol) needs attention. Focus on:\n• Stress management\n• Sleep optimization (8-9 hours)\n• Gentle exercise only\n• Magnesium supplementation\n\nTrack for 2-3 more cycles. If HRV stays consistently low or symptoms worsen, consider:\n• Cortisol testing (4-point saliva test)\n• Thyroid panel (TSH, Free T3, Free T4)\n• Sex hormone panel (Estrogen, Progesterone, Testosterone)\n\nYou're doing great by tracking! This gives us early detection. 💜`,
        timestamp: new Date(),
        category: 'imbalance',
      };
    }

    // Default comprehensive response
    return {
      id: Date.now().toString(),
      type: 'ai',
      content: `I understand you're asking about "${userMessage}".\n\n**Based on Your Current Data:**\n\n📍 **Phase:** Day ${userData.day} - ${userData.phase} Phase\n🧬 **Dominant Hormone:** Progesterone (${userData.hormones.progesterone})\n📊 **Wearable Signals:**\n• HRV: ${userData.wearable.hrv}ms (baseline: ${userData.wearable.hrvBaseline}ms)\n• Temperature: ${userData.wearable.temperature}°C (+${(userData.wearable.temperature - userData.wearable.tempBaseline).toFixed(1)}°C)\n• Resting HR: ${userData.wearable.restingHR} bpm (baseline: ${userData.wearable.hrBaseline} bpm)\n\n📝 **Your Logs Today:**\n• Symptoms: ${userData.todayLog.symptoms.join(', ')}\n• Mood: ${userData.todayLog.moods.join(', ')}\n• Cervical Mucus: ${userData.todayLog.cervicalMucus}\n\n**I can help you understand:**\n\n🔬 **Hormones:** Ask about progesterone, estrogen, cortisol, testosterone, or how they work\n\n📅 **Phase-Specific:** Nutrition, fitness, or self-care for your ${userData.phase} phase\n\n⚖️ **Imbalances:** Signs of PCOS, thyroid issues, cortisol dysregulation, estrogen dominance\n\n🩺 **Symptoms:** Why you're experiencing specific symptoms and what helps\n\n💭 **Mood:** How hormones affect mental health and what to do\n\n🔍 **Cervical Mucus:** What it means and fertility tracking\n\nWhat specific aspect would you like me to explain?`,
      timestamp: new Date(),
      category: 'general',
    };
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = generateAiResponse(input);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] p-6 rounded-b-[32px] shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h1 className="text-xl text-white">Syla AI</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-white/90 text-sm">Hormonal Health Expert</p>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <p className="text-white/80 text-xs mb-3">Your current profile:</p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-white/70 text-[10px] mb-0.5">Phase</p>
              <p className="text-white text-sm font-medium">{userData.phase} • Day {userData.day}</p>
            </div>
            <div>
              <p className="text-white/70 text-[10px] mb-0.5">Dominant Hormone</p>
              <p className="text-white text-sm font-medium">Progesterone</p>
            </div>
            <div>
              <p className="text-white/70 text-[10px] mb-0.5">HRV Status</p>
              <p className="text-white text-sm font-medium">{userData.wearable.hrv}ms (Low)</p>
            </div>
            <div>
              <p className="text-white/70 text-[10px] mb-0.5">Today's Mood</p>
              <p className="text-white text-sm font-medium">{userData.todayLog.moods[0]}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-[20px] px-5 py-3 ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white'
                  : message.hasWarning
                  ? 'bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2] border-2 border-[#F4C2C2]'
                  : 'bg-white border border-[#EAE4F5]'
              }`}
            >
              {message.hasWarning && (
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#F4C2C2]/30">
                  <AlertCircle className="w-5 h-5 text-[#4A4458]" strokeWidth={2} />
                  <p className="text-sm font-medium text-[#4A4458]">Health Alert</p>
                </div>
              )}
              
              {message.category && message.type === 'ai' && !message.hasWarning && (
                <div className="flex items-center gap-2 mb-2">
                  {message.category === 'hormonal' && <Activity className="w-4 h-4 text-[#B8A4D9]" strokeWidth={1.5} />}
                  {message.category === 'phase' && <TrendingUp className="w-4 h-4 text-[#B8A4D9]" strokeWidth={1.5} />}
                  {message.category === 'imbalance' && <AlertCircle className="w-4 h-4 text-[#F4C2C2]" strokeWidth={1.5} />}
                  {message.category === 'general' && <Sparkles className="w-4 h-4 text-[#B8A4D9]" strokeWidth={1.5} />}
                  <p className="text-[10px] font-medium text-[#827B8D] uppercase tracking-wide">
                    {message.category}
                  </p>
                </div>
              )}
              
              <p className={`text-sm leading-relaxed whitespace-pre-line ${
                message.type === 'user' ? 'text-white' : 'text-[#4A4458]'
              }`}>
                {message.content}
              </p>
              
              <p className={`text-[10px] mt-2 ${
                message.type === 'user' ? 'text-white/70' : 'text-[#827B8D]'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-[#EAE4F5] rounded-[20px] px-5 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#B8A4D9] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-[#B8A4D9] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-[#B8A4D9] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      <div className="px-6 pb-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {[
            'Explain my hormones',
            'Why am I tired?',
            'Cervical mucus meaning',
            'Check for imbalances',
            'Mood support tips',
          ].map((question) => (
            <button
              key={question}
              onClick={() => {
                setInput(question);
                setTimeout(sendMessage, 100);
              }}
              className="px-4 py-2 rounded-full bg-white border border-[#EAE4F5] text-sm text-[#827B8D] hover:border-[#B8A4D9] hover:text-[#B8A4D9] transition-all whitespace-nowrap flex-shrink-0"
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 bg-white/90 backdrop-blur-xl border-t border-[#EAE4F5]">
        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about hormones, symptoms, imbalances..."
              className="flex-1 px-5 py-3 rounded-[20px] border border-[#EAE4F5] focus:border-[#B8A4D9] focus:outline-none bg-white text-[#4A4458] placeholder:text-[#827B8D]"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="w-12 h-12 rounded-[20px] bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5 text-white" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
