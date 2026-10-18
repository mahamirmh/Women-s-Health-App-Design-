import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

export function HormoneDetail() {
  // This would be dynamic based on detected phase from wearable + logs
  const currentPhase = 'Luteal';
  
  const phaseData = {
    Luteal: {
      color: 'from-[#FADEDE] to-[#F4C2C2]',
      emoji: '🍂',
      hormones: [
        {
          name: 'Progesterone',
          level: 'High & Rising',
          trend: 'up',
          role: 'The calming, nourishing hormone',
          effects: [
            'Increases body temperature (+0.3-0.5°C)',
            'Lowers HRV as body conserves energy',
            'Raises resting heart rate slightly',
            'Increases appetite and cravings for complex carbs',
            'Promotes relaxation and introspection',
            'Can disrupt sleep quality',
            'Thickens uterine lining',
          ],
          wearableMarkers: [
            { metric: 'Temperature', expected: '+0.3-0.5°C from baseline' },
            { metric: 'HRV', expected: 'Decreases 10-20%' },
            { metric: 'Resting HR', expected: 'Increases 5-10 bpm' },
            { metric: 'Sleep quality', expected: 'May decrease' },
          ],
          support: [
            'Eat complex carbohydrates (sweet potato, oats, quinoa)',
            'Increase magnesium intake (almonds, dark chocolate, spinach)',
            'Prioritize 8-9 hours of sleep',
            'Do moderate, calming exercise (yoga, pilates, walks)',
            'Stay hydrated (progesterone can cause water retention)',
          ],
        },
        {
          name: 'Estrogen',
          level: 'Moderate & Declining',
          trend: 'down',
          role: 'The energy and growth hormone',
          effects: [
            'Dropping from ovulation peak',
            'Lower levels contribute to PMS symptoms',
            'Affects serotonin production (mood changes)',
            'Influences skin and hair condition',
          ],
          wearableMarkers: [
            { metric: 'Energy levels', expected: 'Lower than follicular/ovulation' },
            { metric: 'Mood', expected: 'May be more variable' },
          ],
          support: [
            'B vitamins for mood support',
            'Omega-3s to reduce inflammation',
            'Gentle exercise to boost endorphins',
          ],
        },
      ],
      symptoms: {
        normal: [
          'Increased appetite and cravings',
          'Slight bloating',
          'Tender breasts',
          'Lower energy than ovulation phase',
          'More introspective mood',
          'Preference for rest and routine',
          'Thicker cervical fluid',
        ],
        warning: [
          'Severe mood swings or depression',
          'Extreme fatigue despite rest',
          'Very painful breast tenderness',
          'Significant anxiety or panic',
          'Insomnia lasting multiple nights',
        ],
      },
      wearableData: {
        detected: {
          hrv: 62,
          temp: 37.1,
          restingHR: 68,
          sleep: 6.5,
        },
        interpretation: 'Your wearable confirms luteal phase: Temperature elevated (+0.3°C), HRV decreased to 62ms (from 75ms baseline), and resting HR increased to 68 bpm. This is exactly what we expect when progesterone is dominant.',
      },
    },
  };

  const data = phaseData[currentPhase as keyof typeof phaseData];

  return (
    <div className="min-h-screen bg-[#FAF9F7] p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl text-[#4A4458] mb-1">Hormone Deep Dive</h1>
        <p className="text-[#827B8D]">Your {currentPhase} Phase hormones</p>
      </div>

      {/* Phase Banner */}
      <div className={`bg-gradient-to-br ${data.color} rounded-[28px] p-6 mb-6 shadow-lg text-white`}>
        <div className="text-5xl mb-3 text-center">{data.emoji}</div>
        <h2 className="text-2xl text-center mb-2">{currentPhase} Phase</h2>
        <p className="text-white/90 text-center text-sm">
          Detected from your wearable + daily logs
        </p>
      </div>

      {/* Wearable Confirmation */}
      <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          <h3 className="text-lg text-[#4A4458]">What Your Wearable Shows</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl p-3">
            <p className="text-xs text-[#827B8D] mb-1">HRV</p>
            <p className="text-xl text-[#4A4458] font-medium">{data.wearableData.detected.hrv}ms</p>
            <p className="text-[10px] text-[#827B8D]">Baseline: 75ms</p>
          </div>
          <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl p-3">
            <p className="text-xs text-[#827B8D] mb-1">Temperature</p>
            <p className="text-xl text-[#4A4458] font-medium">{data.wearableData.detected.temp}°C</p>
            <p className="text-[10px] text-[#827B8D]">Baseline: 36.8°C</p>
          </div>
          <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl p-3">
            <p className="text-xs text-[#827B8D] mb-1">Resting HR</p>
            <p className="text-xl text-[#4A4458] font-medium">{data.wearableData.detected.restingHR} bpm</p>
            <p className="text-[10px] text-[#827B8D]">Baseline: 62 bpm</p>
          </div>
          <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl p-3">
            <p className="text-xs text-[#827B8D] mb-1">Sleep</p>
            <p className="text-xl text-[#4A4458] font-medium">{data.wearableData.detected.sleep}h</p>
            <p className="text-[10px] text-[#827B8D]">Average: 7.5h</p>
          </div>
        </div>

        <div className="bg-[#FAF9F7] rounded-xl p-4">
          <p className="text-sm text-[#4A4458] leading-relaxed">
            {data.wearableData.interpretation}
          </p>
        </div>
      </div>

      {/* Hormones */}
      {data.hormones.map((hormone, index) => (
        <div key={index} className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl text-[#4A4458] mb-1">{hormone.name}</h3>
              <p className="text-sm text-[#827B8D]">{hormone.role}</p>
            </div>
            <div className="flex items-center gap-2">
              {hormone.trend === 'up' ? (
                <TrendingUp className="w-5 h-5 text-[#B8A4D9]" strokeWidth={2} />
              ) : (
                <TrendingDown className="w-5 h-5 text-[#F4C2C2]" strokeWidth={2} />
              )}
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE]">
                <p className="text-xs text-[#4A4458] font-medium">{hormone.level}</p>
              </div>
            </div>
          </div>

          {/* Effects */}
          <div className="mb-4">
            <p className="text-sm font-medium text-[#4A4458] mb-3">What it does in your body:</p>
            <div className="space-y-2">
              {hormone.effects.map((effect, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-[#827B8D]">{effect}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Wearable Markers */}
          <div className="mb-4">
            <p className="text-sm font-medium text-[#4A4458] mb-3">How wearable detects it:</p>
            <div className="space-y-2">
              {hormone.wearableMarkers.map((marker, i) => (
                <div key={i} className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl p-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-[#4A4458] font-medium">{marker.metric}</p>
                    <p className="text-xs text-[#827B8D]">{marker.expected}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <p className="text-sm font-medium text-[#4A4458] mb-3">How to support it:</p>
            <div className="space-y-2">
              {hormone.support.map((tip, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F4C2C2] mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-[#827B8D]">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Normal vs Warning Symptoms */}
      <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
        <h3 className="text-lg text-[#4A4458] mb-4">Symptom Check</h3>
        
        <div className="mb-4">
          <p className="text-sm font-medium text-[#4A4458] mb-3 flex items-center gap-2">
            <span className="text-lg">✅</span> Normal for this phase:
          </p>
          <div className="space-y-2">
            {data.symptoms.normal.map((symptom, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                <p className="text-sm text-[#827B8D]">{symptom}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#FADEDE] to-[#F4C2C2] rounded-xl p-4">
          <p className="text-sm font-medium text-[#4A4458] mb-3 flex items-center gap-2">
            <span className="text-lg">⚠️</span> Talk to a doctor if you experience:
          </p>
          <div className="space-y-2">
            {data.symptoms.warning.map((symptom, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4A4458] mt-1.5 flex-shrink-0" />
                <p className="text-sm text-[#4A4458]">{symptom}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] rounded-[28px] p-6 shadow-lg text-white text-center">
        <p className="leading-relaxed">
          💜 Your hormones aren't making you crazy—they're giving you information. Listen to them. Honor them. Work with them, not against them.
        </p>
      </div>
    </div>
  );
}
