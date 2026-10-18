import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Activity, TrendingUp, AlertCircle } from 'lucide-react';

interface AiChatProps {
  isPremium: boolean;
}

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  hasAbnormality?: boolean;
  wearableData?: {
    hrv: number;
    sleepHours: number;
    bloodOxygen: number;
    restingHR: number;
  };
}

export function AiChat({ isPremium }: AiChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm your Syla AI assistant. I analyze your cycle data, symptoms, and (when connected) wearable metrics to provide personalized insights. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock wearable data (would come from actual device integration)
  const currentWearableData = {
    hrv: 62, // Heart Rate Variability (ms) - Low indicates stress/luteal phase
    sleepHours: 6.5,
    bloodOxygen: 97,
    restingHR: 68,
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // AI Response Generator (Mock - would use trained model in production)
  const generateAiResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Abnormality detection based on wearable data + symptoms
    const detectAbnormality = () => {
      const { hrv, sleepHours, restingHR } = currentWearableData;
      
      // Detection logic (simplified - real model would be much more sophisticated)
      if (hrv < 50 && sleepHours < 6) {
        return {
          hasAbnormality: true,
          message: "I've noticed something important: Your HRV is lower than your baseline (62ms vs. your usual 75ms) and you're getting less sleep than needed. Combined with being on day 24 of your cycle, this suggests your body is under stress.\n\n⚠️ **Recommendation**: This pattern, if it continues, could impact your next cycle. Consider:\n• Prioritizing 8 hours of sleep tonight\n• Reducing intense workouts this week\n• Adding magnesium-rich foods (almonds, dark chocolate)\n• Practicing 10 minutes of deep breathing before bed\n\nIf this continues for 3+ days, I recommend checking in with your healthcare provider."
        };
      }
      
      if (restingHR > 75 && lowerMessage.includes('tired')) {
        return {
          hasAbnormality: true,
          message: "I'm seeing elevated resting heart rate (68bpm, up from your 62bpm baseline) combined with fatigue. This could indicate:\n\n• Early pregnancy (if applicable)\n• Onset of illness\n• Overtraining\n• High stress levels\n\nGiven you're in your luteal phase, some elevation is normal, but this is higher than expected. Monitor for the next 24 hours and consult a doctor if it persists or you develop other symptoms."
        };
      }
      
      return { hasAbnormality: false, message: '' };
    };

    // Context-aware responses
    if (lowerMessage.includes('cramp') || lowerMessage.includes('pain')) {
      const abnormality = detectAbnormality();
      if (abnormality.hasAbnormality) {
        return {
          id: Date.now().toString(),
          type: 'ai',
          content: abnormality.message,
          timestamp: new Date(),
          hasAbnormality: true,
          wearableData: currentWearableData,
        };
      }
      
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: "I see you're experiencing cramps. Based on your data:\n\n**Your Current State:**\n• Day 24 of cycle (Luteal phase)\n• HRV: 62ms (slightly low - indicates body preparing for menstruation)\n• Sleep: 6.5 hours (could be better)\n\n**What helps now:**\n• Heat therapy (heating pad for 20 min)\n• Magnesium supplements (300-400mg)\n• Gentle yoga or walking\n• Anti-inflammatory foods (ginger tea, turmeric)\n\n**Why this happens:**\nProstaglandins cause uterine contractions. Your lower HRV suggests your nervous system is already stressed, which can intensify cramping.\n\nWould you like specific yoga poses or recipes?",
        timestamp: new Date(),
        wearableData: currentWearableData,
      };
    }

    if (lowerMessage.includes('tired') || lowerMessage.includes('energy')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: "Looking at your complete picture:\n\n**Wearable Data:**\n• Sleep: 6.5 hours (below your 7.5hr optimal)\n• HRV: 62ms (indicating recovery stress)\n• Resting HR: 68bpm (normal for luteal phase)\n\n**Cycle Context:**\nYou're on day 24 (luteal phase) when progesterone naturally causes:\n• Lower energy\n• Increased need for rest\n• Higher body temperature\n• Greater sleep requirements\n\n**My Recommendation:**\n1. Aim for 8-9 hours sleep tonight\n2. Reduce workout intensity 30%\n3. Eat complex carbs (sweet potato, quinoa)\n4. Take a 20-min nap if possible\n\nYour fatigue is **normal and expected**. Your body isn't lazy—it's preparing for menstruation. Honor this need for rest. 💜",
        timestamp: new Date(),
        wearableData: currentWearableData,
      };
    }

    if (lowerMessage.includes('period') || lowerMessage.includes('menstrual')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: "Based on your tracking and wearable data:\n\n**Predicted Period Start:** In 4 days (March 6)\n**Confidence:** 94% (based on 6-month average)\n\n**Your body is showing typical pre-menstrual signs:**\n• HRV dropping (62ms vs 75ms mid-cycle)\n• Sleep quality decreasing\n• Body temp up 0.3°C\n\n**Prepare by:**\n• Stock up on iron-rich foods\n• Have heating pad ready\n• Plan lighter workouts\n• Schedule important tasks for after your period\n\n**Heads up:** Your HRV pattern suggests this period may be slightly heavier than last month. Stay hydrated and monitor iron intake.",
        timestamp: new Date(),
        wearableData: currentWearableData,
      };
    }

    if (lowerMessage.includes('wearable') || lowerMessage.includes('device')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: "🌸 **Syla Wearable Integration** (Coming Soon)\n\nI can already see some demo data, but here's what the full integration will track:\n\n**Continuous Monitoring:**\n• Heart Rate Variability (HRV)\n• Sleep stages (deep, REM, light)\n• Resting heart rate\n• Blood oxygen levels\n• Body temperature\n• Activity levels\n\n**Smart Detection:**\n• Ovulation prediction (97% accuracy)\n• Period arrival within 12-hour window\n• Abnormal patterns flagging\n• Stress vs. hormonal changes\n• Sleep quality correlation with cycle\n\n**Current Mock Data:**\n• HRV: 62ms\n• Sleep: 6.5 hours\n• SpO2: 97%\n• Resting HR: 68bpm\n\nWant to join the waitlist for the Syla Band? ⌚✨",
        timestamp: new Date(),
        wearableData: currentWearableData,
      };
    }

    if (lowerMessage.includes('pregnant') || lowerMessage.includes('pregnancy')) {
      return {
        id: Date.now().toString(),
        type: 'ai',
        content: "**Important:** I can notice patterns that *might* indicate early pregnancy, but I'm not a replacement for a pregnancy test or doctor.\n\n**What I'm seeing:**\n• Resting HR: 68bpm (slightly elevated)\n• HRV: 62ms (lower than mid-cycle)\n• You're on day 24 (implantation window)\n\n**Possible early signs:**\n• Sustained elevated basal body temperature\n• Resting heart rate 5-10bpm above baseline\n• HRV changes\n• Unusual fatigue\n\n**Next steps:**\n1. Wait until day 28 (expected period)\n2. Take home pregnancy test if period is late\n3. Continue tracking all symptoms\n4. Consult healthcare provider\n\nI'll monitor your patterns closely. Remember: only a test can confirm pregnancy. 🌸",
        timestamp: new Date(),
        hasAbnormality: true,
        wearableData: currentWearableData,
      };
    }

    // Default response
    return {
      id: Date.now().toString(),
      type: 'ai',
      content: `I understand you're asking about "${userMessage}". I analyze:\n\n• Your cycle tracking data\n• Symptom patterns\n• Wearable metrics (HRV, sleep, HR, SpO2)\n• Population data from thousands of cycles\n\nBased on this, I can help with:\n✨ Predicting your next period\n📊 Detecting unusual patterns\n💡 Phase-specific recommendations\n⚠️ Identifying potential health concerns\n🎯 Optimizing nutrition and fitness\n\nWhat specific aspect would you like to explore?`,
      timestamp: new Date(),
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

    // Simulate AI thinking time
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
              <p className="text-white/90 text-sm">Online • Trained on 500K+ cycles</p>
            </div>
          </div>
        </div>

        {/* Current Wearable Data Preview */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <p className="text-white/80 text-xs mb-3">Real-time wearable data:</p>
          <div className="grid grid-cols-4 gap-3">
            <div className="text-center">
              <Activity className="w-4 h-4 text-white/80 mx-auto mb-1" strokeWidth={1.5} />
              <p className="text-white text-sm font-medium">{currentWearableData.hrv}ms</p>
              <p className="text-white/70 text-[10px]">HRV</p>
            </div>
            <div className="text-center">
              <span className="text-white/80 text-lg mb-1 block">💤</span>
              <p className="text-white text-sm font-medium">{currentWearableData.sleepHours}h</p>
              <p className="text-white/70 text-[10px]">Sleep</p>
            </div>
            <div className="text-center">
              <span className="text-white/80 text-lg mb-1 block">🫁</span>
              <p className="text-white text-sm font-medium">{currentWearableData.bloodOxygen}%</p>
              <p className="text-white/70 text-[10px]">SpO₂</p>
            </div>
            <div className="text-center">
              <span className="text-white/80 text-lg mb-1 block">❤️</span>
              <p className="text-white text-sm font-medium">{currentWearableData.restingHR}</p>
              <p className="text-white/70 text-[10px]">HR</p>
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
              className={`max-w-[80%] rounded-[20px] px-5 py-3 ${
                message.type === 'user'
                  ? 'bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white'
                  : message.hasAbnormality
                  ? 'bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2] border-2 border-[#F4C2C2]'
                  : 'bg-white border border-[#EAE4F5]'
              }`}
            >
              {message.hasAbnormality && (
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#F4C2C2]/30">
                  <AlertCircle className="w-5 h-5 text-[#4A4458]" strokeWidth={2} />
                  <p className="text-sm font-medium text-[#4A4458]">Abnormality Detected</p>
                </div>
              )}
              
              <p className={`text-sm leading-relaxed whitespace-pre-line ${
                message.type === 'user' ? 'text-white' : 'text-[#4A4458]'
              }`}>
                {message.content}
              </p>
              
              {message.wearableData && (
                <div className="mt-3 pt-3 border-t border-[#EAE4F5] grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <p className="text-[10px] text-[#827B8D] mb-0.5">HRV</p>
                    <p className="text-xs font-medium text-[#4A4458]">{message.wearableData.hrv}ms</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-[#827B8D] mb-0.5">Sleep</p>
                    <p className="text-xs font-medium text-[#4A4458]">{message.wearableData.sleepHours}h</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-[#827B8D] mb-0.5">SpO₂</p>
                    <p className="text-xs font-medium text-[#4A4458]">{message.wearableData.bloodOxygen}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-[#827B8D] mb-0.5">HR</p>
                    <p className="text-xs font-medium text-[#4A4458]">{message.wearableData.restingHR}</p>
                  </div>
                </div>
              )}
              
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

      {/* Input */}
      <div className="p-4 bg-white/90 backdrop-blur-xl border-t border-[#EAE4F5]">
        <div className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about your cycle, symptoms, or patterns..."
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
          
          {!isPremium && (
            <p className="text-xs text-[#827B8D] text-center mt-3">
              💎 Upgrade to Premium for unlimited AI conversations
            </p>
          )}
        </div>
      </div>
    </div>
  );
}