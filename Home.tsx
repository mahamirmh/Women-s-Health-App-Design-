import { Activity, Calendar, Heart, Plus, Sparkles, Bluetooth, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HomeProps {
  onNavigate: (screen: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const [userName, setUserName] = useState('');
  const [greeting, setGreeting] = useState('Good morning');
  const [healthConditions, setHealthConditions] = useState<string[]>([]);

  useEffect(() => {
    // Get user name from localStorage
    const name = localStorage.getItem('syla_user_name') || '';
    setUserName(name);

    // Get health conditions from localStorage
    const conditions = localStorage.getItem('syla_health_conditions');
    if (conditions) {
      try {
        setHealthConditions(JSON.parse(conditions));
      } catch (e) {
        setHealthConditions([]);
      }
    }

    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  const cycleDay = 24;
  const cycleLength = 28;
  const progress = (cycleDay / cycleLength) * 100;

  // Combined wearable + log data
  const combinedData = {
    wearable: {
      hrv: 62,
      hrvBaseline: 75,
      sleep: 6.5,
      temperature: 37.1,
      temperatureBaseline: 36.8,
      restingHR: 68,
      restingHRBaseline: 62,
    },
    todayLog: {
      energy: 5,
      mood: 'okay',
      flow: 'None',
      symptoms: ['Fatigue', 'Cravings'],
    },
    aiDetection: {
      phase: 'Luteal',
      day: 24,
      confidence: 94,
      nextPeriod: 4,
    },
  };

  // Get condition-specific insight
  const getConditionInsight = () => {
    if (healthConditions.includes('PCOS')) {
      return {
        title: "PCOS-Aware Insight",
        message: "Your cycle varies between 32–45 days, and ovulation may not be consistent. We're focusing on your symptom patterns and blood sugar management rather than strict dates. Your energy crashes and cravings suggest blood sugar dips — consider pairing carbs with protein today. 💜",
        tip: "Women with PCOS often experience insulin resistance. Strength training and stress reduction can help manage symptoms better than restrictive dieting."
      };
    }
    
    if (healthConditions.includes('Fibroids')) {
      return {
        title: "Fibroid-Aware Insight",
        message: "We're closely monitoring your flow patterns. If bleeding becomes heavier or you experience increased fatigue or dizziness, these could be signs of low iron. Consider iron-rich foods and consult your healthcare provider if symptoms persist.",
        tip: "Your heavy flow days may increase cycle to cycle. We'll alert you to significant patterns that warrant medical discussion."
      };
    }
    
    if (healthConditions.includes('High blood pressure')) {
      return {
        title: "Heart Health Insight",
        message: "Your stress levels have been elevated for several days. Chronic stress can impact blood pressure. Consider breathwork, light yoga, or a gentle walk today. Remember to take your medication if prescribed.",
        tip: "Mind-body connection matters: We track stress, headaches, and sleep to help you manage blood pressure holistically."
      };
    }
    
    if (healthConditions.includes('Type 1 diabetes') || healthConditions.includes('Type 2 diabetes') || healthConditions.includes('Insulin resistance')) {
      return {
        title: "Blood Sugar Insight",
        message: "Your low energy tends to happen 2–3 hours after high-carb meals. This suggests blood sugar fluctuations. Would you like meal suggestions that stabilize glucose throughout the day?",
        tip: "Hormonal changes affect insulin sensitivity throughout your cycle. We're tracking these patterns to help you adjust accordingly."
      };
    }
    
    if (healthConditions.includes('Perimenopause') || healthConditions.includes('Menopause')) {
      return {
        title: "Hormonal Balance Insight",
        message: "Your hot flashes increased after nights with poor sleep. Improving sleep quality may reduce symptom intensity. Your body is transitioning, and rest is crucial for managing this change with grace.",
        tip: "We're tracking hot flashes, sleep quality, mood, joint pain, and brain fog to identify patterns unique to your transition."
      };
    }
    
    // Default luteal phase insight
    return {
      title: "Today's Hormonal Insight",
      message: "Progesterone is rising while estrogen dips. This hormonal shift is why you might feel more introspective, crave comfort foods, or need extra rest. Your body isn't broken — it's working exactly as it should. 🌙",
      tip: "What helps now: Gentle movement, magnesium-rich foods, and honoring your need for slower pace. This phase is about restoration, not pushing through."
    };
  };

  const conditionInsight = getConditionInsight();

  return (
    <div className="min-h-screen bg-[#FAF9F7] p-6">
      {/* Personalized Header with Emotional Hook */}
      <div className="mb-6">
        <h1 className="text-3xl text-[#4A4458] mb-2">
          {greeting}{userName ? `, ${userName}` : ''} 🌸
        </h1>
        <p className="text-[#827B8D] text-base leading-relaxed">
          You're in your <span className="text-[#B8A4D9] font-medium">luteal phase</span> — energy may feel lower today. That's completely natural. 💜
        </p>
        <p className="text-[10px] text-[#B8A4D9] mt-1.5 flex items-center gap-1">
          <Sparkles className="w-3 h-3" strokeWidth={2} />
          Powered by AI
        </p>
      </div>

      {/* Today's Hormonal Insight - Prominent & Alive */}
      <div className="bg-gradient-to-br from-[#B8A4D9] via-[#C5B3E6] to-[#D4C5F9] rounded-[32px] p-6 mb-6 shadow-xl relative overflow-hidden">
        {/* Animated background pulse */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[32px] animate-pulse" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center animate-pulse">
              <Sparkles className="w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">Today's Hormonal Insight</h3>
              <p className="text-white/80 text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                AI analyzing your patterns
              </p>
            </div>
          </div>
          
          <p className="text-white text-base leading-relaxed mb-4">
            <span className="font-medium">Progesterone is rising</span> while estrogen dips. This hormonal shift is why you might feel more introspective, crave comfort foods, or need extra rest. Your body isn't broken — it's working exactly as it should. 🌙
          </p>
          
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4">
            <p className="text-white/90 text-sm leading-relaxed">
              <span className="font-medium">What helps now:</span> Gentle movement, magnesium-rich foods, and honoring your need for slower pace. This phase is about restoration, not pushing through.
            </p>
          </div>
        </div>
      </div>

      {/* Wearable Status Banner */}
      <button
        onClick={() => onNavigate('wearable')}
        className="w-full bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] rounded-[24px] p-4 mb-6 shadow-lg hover:shadow-xl transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Bluetooth className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <p className="text-white font-medium text-sm">Syla Band Connected</p>
            </div>
            <p className="text-white/80 text-xs">Syncing biometric data • Tap to view details</p>
          </div>
          <TrendingUp className="w-5 h-5 text-white" strokeWidth={1.5} />
        </div>
      </button>

      {/* Main Cycle Card */}
      <div className="bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] rounded-[32px] p-8 mb-6 shadow-lg">
        <div className="flex flex-col items-center">
          <div className="relative w-44 h-44 mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="88"
                cy="88"
                r="80"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="88"
                cy="88"
                r="80"
                stroke="white"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${progress * 5.03} 503`}
                strokeLinecap="round"
              />
            </svg>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="text-sm opacity-80 mb-1">Day</p>
              <p className="text-6xl font-light mb-1">{cycleDay}</p>
              <p className="text-sm opacity-80">of {cycleLength}</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm px-6 py-2.5 rounded-full">
            <p className="text-white font-medium">Luteal Phase</p>
          </div>
        </div>
      </div>

      {/* Daily Insight Card */}
      <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2] flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg text-[#4A4458]">AI Insight</h3>
              <div className="px-2 py-0.5 rounded-full bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9]">
                <p className="text-[10px] text-white font-medium">{combinedData.aiDetection.confidence}% confident</p>
              </div>
            </div>
            <p className="text-[#827B8D] text-sm leading-relaxed mb-3">
              Based on your wearable data (low HRV: {combinedData.wearable.hrv}ms, elevated temp: +0.3°C) combined with your logged symptoms (fatigue, cravings), you're definitely in your luteal phase. Your body is asking for rest and complex carbs—honor that! 💜
            </p>
            <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl px-4 py-2">
              <p className="text-xs text-[#4A4458]">
                <span className="font-medium">Why we know:</span> Temperature elevated, HRV dropped 17%, resting HR up 6 bpm, plus your reported fatigue—all classic luteal markers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Combined Data Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-[20px] p-4 shadow-sm border border-[#EAE4F5]">
          <div className="text-2xl mb-2">💜</div>
          <p className="text-xs text-[#827B8D] mb-1">HRV</p>
          <p className="text-lg text-[#B8A4D9] font-medium">{combinedData.wearable.hrv}ms</p>
          <p className="text-[10px] text-[#827B8D]">vs {combinedData.wearable.hrvBaseline}ms baseline</p>
        </div>

        <div className="bg-white rounded-[20px] p-4 shadow-sm border border-[#EAE4F5]">
          <div className="text-2xl mb-2">😊</div>
          <p className="text-xs text-[#827B8D] mb-1">Mood</p>
          <p className="text-lg text-[#B8A4D9] capitalize">{combinedData.todayLog.mood}</p>
          <p className="text-[10px] text-[#827B8D]">You logged</p>
        </div>

        <div className="bg-white rounded-[20px] p-4 shadow-sm border border-[#EAE4F5]">
          <div className="text-2xl mb-2">🌙</div>
          <p className="text-xs text-[#827B8D] mb-1">Sleep</p>
          <p className="text-lg text-[#B8A4D9]">{combinedData.wearable.sleep}h</p>
          <p className="text-[10px] text-[#827B8D]">From wearable</p>
        </div>
      </div>

      {/* How Data Combines */}
      <div className="bg-gradient-to-br from-[#EAE4F5] to-[#FADEDE] rounded-[24px] p-5 mb-6">
        <h3 className="text-[#4A4458] font-medium mb-3 flex items-center gap-2">
          <span className="text-lg">🔬</span>
          How we detect your phase
        </h3>
        <div className="space-y-2 text-sm text-[#4A4458]">
          <div className="flex items-start gap-2">
            <span className="text-[#B8A4D9]">•</span>
            <p><span className="font-medium">Wearable:</span> HRV low, temp up, HR elevated</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#B8A4D9]">•</span>
            <p><span className="font-medium">Your logs:</span> Fatigue, cravings, okay mood</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#B8A4D9]">•</span>
            <p><span className="font-medium">AI analysis:</span> Cross-references = Luteal phase, day {combinedData.aiDetection.day}</p>
          </div>
        </div>
      </div>

      {/* Log Today Button */}
      <button 
        onClick={() => onNavigate('daily-log')}
        className="w-full bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] rounded-[24px] p-6 shadow-lg hover:shadow-xl transition-all mb-6"
      >
        <div className="flex items-center justify-center gap-3 text-white">
          <Plus className="w-6 h-6" strokeWidth={2} />
          <span className="text-lg font-medium">Log Today's Check-In</span>
        </div>
      </button>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button 
          onClick={() => onNavigate('nutrition')}
          className="bg-white rounded-[20px] p-5 shadow-sm border border-[#EAE4F5] hover:border-[#B8A4D9] transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2] flex items-center justify-center mb-3 mx-auto">
            <span className="text-2xl">🥗</span>
          </div>
          <p className="text-[#4A4458] font-medium text-sm text-center mb-1">Nutrition</p>
          <p className="text-xs text-[#827B8D] text-center">Phase-based eating</p>
        </button>

        <button 
          onClick={() => onNavigate('fitness')}
          className="bg-white rounded-[20px] p-5 shadow-sm border border-[#EAE4F5] hover:border-[#B8A4D9] transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center mb-3 mx-auto">
            <span className="text-2xl">💪</span>
          </div>
          <p className="text-[#4A4458] font-medium text-sm text-center mb-1">Fitness</p>
          <p className="text-xs text-[#827B8D] text-center">Move with cycle</p>
        </button>

        <button 
          onClick={() => onNavigate('insights')}
          className="bg-white rounded-[20px] p-5 shadow-sm border border-[#EAE4F5] hover:border-[#B8A4D9] transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EAE4F5] to-[#D4C5F9] flex items-center justify-center mb-3 mx-auto">
            <Sparkles className="w-5 h-5 text-[#B8A4D9]" strokeWidth={1.5} />
          </div>
          <p className="text-[#4A4458] font-medium text-sm text-center mb-1">Insights</p>
          <p className="text-xs text-[#827B8D] text-center">Your patterns</p>
        </button>

        <button 
          onClick={() => onNavigate('education')}
          className="bg-white rounded-[20px] p-5 shadow-sm border border-[#EAE4F5] hover:border-[#B8A4D9] transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2] flex items-center justify-center mb-3 mx-auto">
            <span className="text-2xl">📚</span>
          </div>
          <p className="text-[#4A4458] font-medium text-sm text-center mb-1">Learn</p>
          <p className="text-xs text-[#827B8D] text-center">Understand your body</p>
        </button>
      </div>

      {/* Next Period */}
      <div className="bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2] rounded-[28px] p-6 shadow-sm">
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-12 rounded-xl bg-white/40 backdrop-blur-sm flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <p className="text-white/80 text-sm mb-0.5">Next Period</p>
            <p className="text-white text-xl">In {combinedData.aiDetection.nextPeriod} days</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm">
            <p className="text-white text-xs font-medium">{combinedData.aiDetection.confidence}%</p>
          </div>
        </div>
        <p className="text-white/80 text-xs">
          Based on your temperature pattern, HRV trend, and 6-month cycle history
        </p>
      </div>

      {/* Gentle Reminder */}
      <div className="mt-6 text-center">
        <p className="text-sm text-[#827B8D] leading-relaxed">
          💜 Your body has a rhythm. Trust it.
        </p>
      </div>
    </div>
  );
}