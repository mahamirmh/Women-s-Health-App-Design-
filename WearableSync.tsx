import { useState } from 'react';
import { Bluetooth, Check, Activity, Moon, Thermometer, Heart, Droplet, TrendingUp, AlertCircle } from 'lucide-react';

export function WearableSync() {
  const [isConnected, setIsConnected] = useState(true);
  
  // Mock real-time wearable data (would come from actual device via Bluetooth)
  const wearableData = {
    hrv: {
      current: 62,
      baseline: 75,
      trend: 'decreasing',
      lastUpdated: '2 min ago',
    },
    sleep: {
      total: 6.5,
      deep: 1.2,
      rem: 1.8,
      light: 3.5,
      quality: 72,
      lastNight: true,
    },
    temperature: {
      current: 37.1,
      baseline: 36.8,
      trend: 'elevated',
      lastUpdated: '5 min ago',
    },
    heartRate: {
      resting: 68,
      baseline: 62,
      current: 72,
      lastUpdated: '1 min ago',
    },
    bloodOxygen: {
      current: 97,
      avg24h: 98,
      lastUpdated: '3 min ago',
    },
    activity: {
      steps: 4842,
      activeMinutes: 28,
      calories: 1456,
    },
  };

  // AI-detected insights from wearable data
  const detectedPhase = {
    phase: 'Luteal',
    day: 24,
    confidence: 94,
    indicators: [
      { metric: 'HRV', status: 'Low (62ms vs 75ms baseline)', meaning: 'Indicates progesterone dominance' },
      { metric: 'Temperature', status: 'Elevated (+0.3°C)', meaning: 'Confirms luteal phase' },
      { metric: 'Resting HR', status: 'Slightly elevated', meaning: 'Normal for progesterone rise' },
      { metric: 'Sleep quality', status: '72% (reduced)', meaning: 'Typical luteal phase pattern' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl text-[#4A4458] mb-1">Wearable Integration</h1>
        <p className="text-[#827B8D]">Real-time cycle detection</p>
      </div>

      {/* Connection Status */}
      <div className={`rounded-[28px] p-6 mb-6 shadow-lg ${
        isConnected 
          ? 'bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9]' 
          : 'bg-gradient-to-br from-[#827B8D] to-[#A39DAB]'
      }`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Bluetooth className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-white font-medium">Syla Band</h3>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`} />
                <p className="text-white/90 text-sm">{isConnected ? 'Connected' : 'Disconnected'}</p>
              </div>
            </div>
          </div>
          <div className="text-white/90 text-sm">82% 🔋</div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <p className="text-white/80 text-xs mb-3">Syncing continuously</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-300" strokeWidth={2} />
              <span className="text-white text-xs">Heart Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-300" strokeWidth={2} />
              <span className="text-white text-xs">HRV</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-300" strokeWidth={2} />
              <span className="text-white text-xs">Sleep</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-300" strokeWidth={2} />
              <span className="text-white text-xs">Temperature</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-300" strokeWidth={2} />
              <span className="text-white text-xs">SpO₂</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-300" strokeWidth={2} />
              <span className="text-white text-xs">Activity</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Phase Detection */}
      <div className="bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2] rounded-[28px] p-6 mb-6 shadow-lg">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center">
            <Thermometer className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <div className="flex-1">
            <h3 className="text-white text-lg mb-1">AI-Detected Phase</h3>
            <p className="text-white/90 text-sm">Combined wearable + log analysis</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm">
            <p className="text-white text-xs font-medium">{detectedPhase.confidence}% confident</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 mb-4">
          <div className="flex items-baseline gap-2 mb-2">
            <h2 className="text-3xl text-[#4A4458]">{detectedPhase.phase} Phase</h2>
            <span className="text-[#827B8D]">Day {detectedPhase.day}</span>
          </div>
          <p className="text-sm text-[#827B8D]">Detected automatically from your biometric signals</p>
        </div>

        <div className="space-y-2">
          <p className="text-white/80 text-sm mb-3">Why we know you're in {detectedPhase.phase}:</p>
          {detectedPhase.indicators.map((indicator, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30">
              <div className="flex items-start justify-between mb-2">
                <p className="text-white font-medium text-sm">{indicator.metric}</p>
                <TrendingUp className="w-4 h-4 text-white/70" strokeWidth={1.5} />
              </div>
              <p className="text-white/90 text-xs mb-1">{indicator.status}</p>
              <p className="text-white/70 text-xs">{indicator.meaning}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Real-Time Metrics */}
      <div className="mb-6">
        <h3 className="text-lg text-[#4A4458] mb-4">Live Biometric Data</h3>
        
        {/* HRV */}
        <div className="bg-white rounded-[24px] p-5 mb-3 shadow-sm border border-[#EAE4F5]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <p className="text-2xl text-[#4A4458]">{wearableData.hrv.current}ms</p>
                <span className="text-sm text-[#827B8D]">HRV</span>
              </div>
              <p className="text-sm text-[#827B8D] mb-2">
                Baseline: {wearableData.hrv.baseline}ms • {wearableData.hrv.lastUpdated}
              </p>
              <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl px-4 py-2">
                <p className="text-xs text-[#4A4458]">
                  <span className="font-medium">What this means:</span> Lower HRV indicates your parasympathetic nervous system is less active—typical during luteal phase when progesterone dominates. Your body is conserving energy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sleep */}
        <div className="bg-white rounded-[24px] p-5 mb-3 shadow-sm border border-[#EAE4F5]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4C5F9] to-[#EAE4F5] flex items-center justify-center">
              <Moon className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <p className="text-2xl text-[#4A4458]">{wearableData.sleep.total}h</p>
                <span className="text-sm text-[#827B8D]">Total Sleep</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div>
                  <p className="text-xs text-[#827B8D]">Deep</p>
                  <p className="text-sm text-[#4A4458] font-medium">{wearableData.sleep.deep}h</p>
                </div>
                <div>
                  <p className="text-xs text-[#827B8D]">REM</p>
                  <p className="text-sm text-[#4A4458] font-medium">{wearableData.sleep.rem}h</p>
                </div>
                <div>
                  <p className="text-xs text-[#827B8D]">Light</p>
                  <p className="text-sm text-[#4A4458] font-medium">{wearableData.sleep.light}h</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl px-4 py-2">
                <p className="text-xs text-[#4A4458]">
                  <span className="font-medium">Quality score: {wearableData.sleep.quality}%</span> • Sleep quality often decreases in luteal phase due to elevated body temperature and progesterone effects. Aim for 8-9 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Temperature */}
        <div className="bg-white rounded-[24px] p-5 mb-3 shadow-sm border border-[#EAE4F5]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2] flex items-center justify-center">
              <Thermometer className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <p className="text-2xl text-[#4A4458]">{wearableData.temperature.current}°C</p>
                <span className="text-sm text-[#827B8D]">Body Temp</span>
              </div>
              <p className="text-sm text-[#827B8D] mb-2">
                Baseline: {wearableData.temperature.baseline}°C • {wearableData.temperature.lastUpdated}
              </p>
              <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl px-4 py-2">
                <p className="text-xs text-[#4A4458]">
                  <span className="font-medium">Elevated +0.3°C:</span> Confirms ovulation occurred and you're now in luteal phase. Progesterone raises your basal body temperature and keeps it elevated until your period.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Heart Rate */}
        <div className="bg-white rounded-[24px] p-5 mb-3 shadow-sm border border-[#EAE4F5]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F4C2C2] to-[#FADEDE] flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <p className="text-2xl text-[#4A4458]">{wearableData.heartRate.resting} bpm</p>
                <span className="text-sm text-[#827B8D]">Resting HR</span>
              </div>
              <p className="text-sm text-[#827B8D] mb-2">
                Baseline: {wearableData.heartRate.baseline} bpm • {wearableData.heartRate.lastUpdated}
              </p>
              <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl px-4 py-2">
                <p className="text-xs text-[#4A4458]">
                  <span className="font-medium">+6 bpm from baseline:</span> Normal luteal phase elevation. Progesterone increases metabolic rate and cardiovascular workload slightly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Blood Oxygen */}
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#EAE4F5]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center">
              <Droplet className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <p className="text-2xl text-[#4A4458]">{wearableData.bloodOxygen.current}%</p>
                <span className="text-sm text-[#827B8D]">SpO₂</span>
              </div>
              <p className="text-sm text-[#827B8D] mb-2">
                24h average: {wearableData.bloodOxygen.avg24h}% • {wearableData.bloodOxygen.lastUpdated}
              </p>
              <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl px-4 py-2">
                <p className="text-xs text-[#4A4458]">
                  <span className="font-medium">Healthy range:</span> Normal blood oxygen saturation. Helps us detect if fatigue is from poor oxygenation vs. hormonal changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] rounded-[28px] p-6 shadow-lg">
        <h3 className="text-white text-lg mb-4">How Wearable + Logs Work Together</h3>
        
        <div className="space-y-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white font-medium mb-2">1. Wearable tracks continuously</p>
            <p className="text-white/90 text-sm">
              HRV, temperature, heart rate, sleep, and activity 24/7 without you thinking about it.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white font-medium mb-2">2. You log symptoms daily</p>
            <p className="text-white/90 text-sm">
              Mood, energy, flow, cramps, cravings—the things only you can report.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white font-medium mb-2">3. AI combines both datasets</p>
            <p className="text-white/90 text-sm">
              Our model cross-references biometric patterns with your symptoms to detect your exact cycle phase and day.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white font-medium mb-2">4. Personalized insights</p>
            <p className="text-white/90 text-sm">
              Recommendations are tailored to YOUR body's signals, not just generic cycle day counting.
            </p>
          </div>
        </div>
      </div>

      {/* Sync Note */}
      <div className="mt-6 text-center">
        <p className="text-sm text-[#827B8D]">
          Last synced: Just now • Next sync: Continuous
        </p>
      </div>
    </div>
  );
}