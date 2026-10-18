import { useState } from 'react';
import { Check, Heart, Smile, Droplet, AlertCircle, TrendingUp } from 'lucide-react';

interface DailyLogProps {
  onComplete: () => void;
}

export function DailyLog({ onComplete }: DailyLogProps) {
  const [step, setStep] = useState(1);
  const [logData, setLogData] = useState({
    symptoms: [] as string[],
    moods: [] as string[],
    cervicalMucus: '',
    spotting: '',
    flow: '',
    notes: '',
  });

  const symptomOptions = [
    'Abdominal cramps',
    'Fatigue',
    'Bloating',
    'Increased appetite',
    'Headache',
  ];

  const moodOptions = [
    { emoji: '😴', label: 'Tired' },
    { emoji: '😰', label: 'Stressed' },
    { emoji: '😊', label: 'Happy' },
    { emoji: '😌', label: 'Calm' },
    { emoji: '😠', label: 'Irritable' },
    { emoji: '😵', label: 'Mood swings' },
    { emoji: '😟', label: 'Anxious' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '⚡', label: 'Energetic' },
  ];

  const cervicalMucusOptions = [
    { value: 'Egg white', emoji: '🥚', description: 'Clear, stretchy, slippery' },
    { value: 'Creamy', emoji: '🥛', description: 'White or yellow, lotion-like' },
    { value: 'Sticky', emoji: '🍯', description: 'Thick, tacky' },
    { value: 'Watery', emoji: '💧', description: 'Clear, wet, thin' },
    { value: 'No mucus', emoji: '⭕', description: 'Dry, nothing noticeable' },
  ];

  const spottingOptions = ['Had spotting', 'No spotting'];

  const flowOptions = ['None', 'Spotting', 'Light', 'Medium', 'Heavy'];

  const handleComplete = () => {
    // Save log data
    const logs = JSON.parse(localStorage.getItem('syla_daily_logs') || '[]');
    logs.push({
      ...logData,
      date: new Date().toISOString(),
    });
    localStorage.setItem('syla_daily_logs', JSON.stringify(logs));
    
    onComplete();
  };

  const toggleSymptom = (symptom: string) => {
    const symptoms = logData.symptoms.includes(symptom)
      ? logData.symptoms.filter(s => s !== symptom)
      : [...logData.symptoms, symptom];
    setLogData({ ...logData, symptoms });
  };

  const toggleMood = (mood: string) => {
    const moods = logData.moods.includes(mood)
      ? logData.moods.filter(m => m !== mood)
      : [...logData.moods, mood];
    setLogData({ ...logData, moods });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] p-6">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl text-[#4A4458]">Daily Log</h1>
          <span className="text-sm text-[#827B8D]">Step {step}/5</span>
        </div>
        <div className="w-full h-2 bg-[#EAE4F5] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Flow */}
      {step === 1 && (
        <div>
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-[24px] bg-gradient-to-br from-[#F4C2C2] to-[#FADEDE] flex items-center justify-center">
              <Droplet className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl text-[#4A4458] text-center mb-2">Menstrual Flow</h2>
            <p className="text-[#827B8D] text-center">How heavy is your flow today?</p>
          </div>

          <div className="space-y-3 mb-8">
            {flowOptions.map((option) => (
              <button
                key={option}
                onClick={() => setLogData({ ...logData, flow: option })}
                className={`w-full rounded-[20px] p-4 border-2 transition-all ${
                  logData.flow === option
                    ? 'border-[#B8A4D9] bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE]'
                    : 'border-[#EAE4F5] bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#4A4458] font-medium">{option}</span>
                  {logData.flow === option && (
                    <Check className="w-5 h-5 text-[#B8A4D9]" strokeWidth={2} />
                  )}
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={!logData.flow}
            className="w-full bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white rounded-[20px] px-6 py-4 font-medium disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Step 2: Symptoms */}
      {step === 2 && (
        <div>
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-[24px] bg-gradient-to-br from-[#F4C2C2] to-[#FADEDE] flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl text-[#4A4458] text-center mb-2">Symptoms</h2>
            <p className="text-[#827B8D] text-center">Select all that apply (optional)</p>
          </div>

          <div className="space-y-3 mb-8">
            {symptomOptions.map((symptom) => (
              <button
                key={symptom}
                onClick={() => toggleSymptom(symptom)}
                className={`w-full rounded-[20px] p-4 border-2 transition-all ${
                  logData.symptoms.includes(symptom)
                    ? 'border-[#B8A4D9] bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE]'
                    : 'border-[#EAE4F5] bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#4A4458]">{symptom}</span>
                  {logData.symptoms.includes(symptom) && (
                    <Check className="w-5 h-5 text-[#B8A4D9]" strokeWidth={2} />
                  )}
                </div>
              </button>
            ))}
          </div>

          {logData.symptoms.length > 0 && (
            <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-2xl p-4 mb-6">
              <p className="text-sm text-[#4A4458]">
                <span className="font-medium">{logData.symptoms.length} symptom{logData.symptoms.length > 1 ? 's' : ''} selected:</span> {logData.symptoms.join(', ')}
              </p>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="flex-1 bg-white border-2 border-[#EAE4F5] text-[#827B8D] rounded-[20px] px-6 py-4 font-medium"
            >
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="flex-1 bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white rounded-[20px] px-6 py-4 font-medium"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Moods */}
      {step === 3 && (
        <div>
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-[24px] bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2] flex items-center justify-center">
              <Smile className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl text-[#4A4458] text-center mb-2">Moods</h2>
            <p className="text-[#827B8D] text-center">How are you feeling? (Select all that apply)</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {moodOptions.map((mood) => (
              <button
                key={mood.label}
                onClick={() => toggleMood(mood.label)}
                className={`rounded-[20px] p-4 border-2 transition-all ${
                  logData.moods.includes(mood.label)
                    ? 'border-[#B8A4D9] bg-gradient-to-br from-[#EAE4F5] to-[#FADEDE]'
                    : 'border-[#EAE4F5] bg-white'
                }`}
              >
                <div className="text-3xl mb-2">{mood.emoji}</div>
                <p className="text-[#4A4458] font-medium text-sm">{mood.label}</p>
                {logData.moods.includes(mood.label) && (
                  <Check className="w-4 h-4 text-[#B8A4D9] mx-auto mt-2" strokeWidth={2} />
                )}
              </button>
            ))}
          </div>

          {logData.moods.length > 0 && (
            <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-2xl p-4 mb-6">
              <p className="text-sm text-[#4A4458]">
                <span className="font-medium">You're feeling:</span> {logData.moods.join(', ')}
              </p>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => setStep(2)}
              className="flex-1 bg-white border-2 border-[#EAE4F5] text-[#827B8D] rounded-[20px] px-6 py-4 font-medium"
            >
              Back
            </button>
            <button
              onClick={() => setStep(4)}
              className="flex-1 bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white rounded-[20px] px-6 py-4 font-medium"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Cervical Mucus */}
      {step === 4 && (
        <div>
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-[24px] bg-gradient-to-br from-[#D4C5F9] to-[#EAE4F5] flex items-center justify-center">
              <Droplet className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl text-[#4A4458] text-center mb-2">Cervical Mucus</h2>
            <p className="text-[#827B8D] text-center">What does it look like today?</p>
          </div>

          <div className="space-y-3 mb-4">
            {cervicalMucusOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setLogData({ ...logData, cervicalMucus: option.value })}
                className={`w-full rounded-[20px] p-4 border-2 transition-all ${
                  logData.cervicalMucus === option.value
                    ? 'border-[#B8A4D9] bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE]'
                    : 'border-[#EAE4F5] bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{option.emoji}</div>
                  <div className="flex-1 text-left">
                    <p className="text-[#4A4458] font-medium">{option.value}</p>
                    <p className="text-xs text-[#827B8D]">{option.description}</p>
                  </div>
                  {logData.cervicalMucus === option.value && (
                    <Check className="w-5 h-5 text-[#B8A4D9]" strokeWidth={2} />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-2xl p-4 mb-8">
            <p className="text-xs text-[#4A4458]">
              💡 <span className="font-medium">Why track this?</span> Cervical mucus changes throughout your cycle. "Egg white" = peak fertility. Combined with your wearable temp data, we can predict ovulation with 97% accuracy!
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep(3)}
              className="flex-1 bg-white border-2 border-[#EAE4F5] text-[#827B8D] rounded-[20px] px-6 py-4 font-medium"
            >
              Back
            </button>
            <button
              onClick={() => setStep(5)}
              disabled={!logData.cervicalMucus}
              className="flex-1 bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white rounded-[20px] px-6 py-4 font-medium disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Spotting */}
      {step === 5 && (
        <div>
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-[24px] bg-gradient-to-br from-[#F4C2C2] to-[#FADEDE] flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl text-[#4A4458] text-center mb-2">Spotting</h2>
            <p className="text-[#827B8D] text-center">Any spotting or light bleeding today?</p>
          </div>

          <div className="space-y-3 mb-6">
            {spottingOptions.map((option) => (
              <button
                key={option}
                onClick={() => setLogData({ ...logData, spotting: option })}
                className={`w-full rounded-[20px] p-5 border-2 transition-all ${
                  logData.spotting === option
                    ? 'border-[#B8A4D9] bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE]'
                    : 'border-[#EAE4F5] bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      option === 'Had spotting' 
                        ? 'bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2]' 
                        : 'bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9]'
                    }`}>
                      {option === 'Had spotting' ? (
                        <Droplet className="w-5 h-5 text-white" strokeWidth={1.5} />
                      ) : (
                        <Check className="w-5 h-5 text-white" strokeWidth={2} />
                      )}
                    </div>
                    <span className="text-[#4A4458] font-medium">{option}</span>
                  </div>
                  {logData.spotting === option && (
                    <Check className="w-5 h-5 text-[#B8A4D9]" strokeWidth={2} />
                  )}
                </div>
              </button>
            ))}
          </div>

          {logData.spotting === 'Had spotting' && (
            <div className="bg-gradient-to-r from-[#FADEDE] to-[#F4C2C2] rounded-2xl p-4 mb-6">
              <p className="text-sm text-[#4A4458] mb-2">
                <span className="font-medium">💡 Tracking spotting helps us:</span>
              </p>
              <ul className="text-sm text-[#4A4458] space-y-1">
                <li>• Detect potential hormonal imbalances</li>
                <li>• Identify ovulation or implantation bleeding</li>
                <li>• Monitor luteal phase health</li>
                <li>• Flag patterns that need medical attention</li>
              </ul>
            </div>
          )}

          <div className="bg-white rounded-[20px] p-4 mb-8 border border-[#EAE4F5]">
            <label className="text-sm text-[#827B8D] mb-2 block">Additional Notes (optional)</label>
            <textarea
              value={logData.notes}
              onChange={(e) => setLogData({ ...logData, notes: e.target.value })}
              placeholder="Anything else about today? Cravings, digestion, exercise, etc."
              className="w-full px-4 py-3 rounded-xl border border-[#EAE4F5] focus:border-[#B8A4D9] focus:outline-none resize-none text-[#4A4458]"
              rows={3}
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep(4)}
              className="flex-1 bg-white border-2 border-[#EAE4F5] text-[#827B8D] rounded-[20px] px-6 py-4 font-medium"
            >
              Back
            </button>
            <button
              onClick={handleComplete}
              disabled={!logData.spotting}
              className="flex-1 bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white rounded-[20px] px-6 py-4 font-medium disabled:opacity-50"
            >
              Complete Log
            </button>
          </div>
        </div>
      )}

      {/* Success Message Preview */}
      {logData.flow && logData.spotting && (
        <div className="mt-6 bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] rounded-2xl p-4 text-center">
          <p className="text-white text-sm">
            ✨ Your data will be combined with your wearable metrics for AI analysis
          </p>
        </div>
      )}
    </div>
  );
}
