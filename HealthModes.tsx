import { Heart, Activity, Droplet, Zap, Flame, Moon, ArrowLeft, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HealthModesProps {
  onBack: () => void;
}

export function HealthModes({ onBack }: HealthModesProps) {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  useEffect(() => {
    // Load current health conditions
    const conditions = localStorage.getItem('syla_health_conditions');
    if (conditions) {
      try {
        setSelectedConditions(JSON.parse(conditions));
      } catch (e) {
        setSelectedConditions([]);
      }
    }
  }, []);

  const healthConditions = [
    {
      id: 'PCOS',
      name: 'PCOS',
      icon: Zap,
      color: 'from-[#B8A4D9] to-[#D4C5F9]',
      description: 'Polycystic Ovary Syndrome',
      features: [
        'Irregular cycle tracking',
        'Insulin resistance coaching',
        'Blood sugar management',
        'Weight-neutral guidance',
      ],
    },
    {
      id: 'Fibroids',
      name: 'Fibroids',
      icon: Droplet,
      color: 'from-[#F4C2C2] to-[#FADEDE]',
      description: 'Uterine Fibroids',
      features: [
        'Heavy flow pattern tracking',
        'Anemia risk alerts',
        'Iron level monitoring',
        'Pain management tips',
      ],
    },
    {
      id: 'High blood pressure',
      name: 'High Blood Pressure',
      icon: Heart,
      color: 'from-[#FADEDE] to-[#F4C2C2]',
      description: 'Hypertension Management',
      features: [
        'Stress level tracking',
        'Blood pressure insights',
        'Exercise moderation',
        'Medication reminders',
      ],
    },
    {
      id: 'Type 1 diabetes',
      name: 'Type 1 Diabetes',
      icon: Activity,
      color: 'from-[#D4C5F9] to-[#B8A4D9]',
      description: 'Type 1 Diabetes',
      features: [
        'Glucose tracking',
        'Meal timing insights',
        'Energy pattern analysis',
        'Insulin sensitivity tracking',
      ],
    },
    {
      id: 'Type 2 diabetes',
      name: 'Type 2 Diabetes',
      icon: Activity,
      color: 'from-[#D4C5F9] to-[#B8A4D9]',
      description: 'Type 2 Diabetes',
      features: [
        'Blood sugar stabilization',
        'Carb management coaching',
        'Exercise recommendations',
        'Meal planning support',
      ],
    },
    {
      id: 'Insulin resistance',
      name: 'Insulin Resistance',
      icon: Flame,
      color: 'from-[#FADEDE] to-[#D4C5F9]',
      description: 'Insulin Resistance',
      features: [
        'Blood sugar monitoring',
        'Nutritional guidance',
        'Energy crash prevention',
        'Lifestyle optimization',
      ],
    },
    {
      id: 'Perimenopause',
      name: 'Perimenopause',
      icon: Moon,
      color: 'from-[#B8A4D9] to-[#FADEDE]',
      description: 'Perimenopausal Transition',
      features: [
        'Hot flash tracking',
        'Sleep quality monitoring',
        'Mood pattern analysis',
        'Brain fog tracking',
      ],
    },
    {
      id: 'Menopause',
      name: 'Menopause',
      icon: Moon,
      color: 'from-[#D4C5F9] to-[#F4C2C2]',
      description: 'Menopausal Support',
      features: [
        'Hormonal balance mode',
        'Symptom pattern tracking',
        'Night sweats monitoring',
        'Joint pain insights',
      ],
    },
  ];

  const toggleCondition = (conditionId: string) => {
    setSelectedConditions(prev => {
      const isSelected = prev.includes(conditionId);
      let newConditions: string[];
      
      if (isSelected) {
        newConditions = prev.filter(id => id !== conditionId);
      } else {
        newConditions = [...prev, conditionId];
      }
      
      // Remove "None" and "Prefer not to say" if adding a condition
      newConditions = newConditions.filter(id => id !== 'None' && id !== 'Prefer not to say');
      
      // Save to localStorage
      localStorage.setItem('syla_health_conditions', JSON.stringify(newConditions));
      
      return newConditions;
    });
  };

  const clearAll = () => {
    setSelectedConditions(['None']);
    localStorage.setItem('syla_health_conditions', JSON.stringify(['None']));
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] p-6 rounded-b-[32px] shadow-lg mb-6">
        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5 text-white" strokeWidth={1.5} />
          </button>
          <div className="flex-1">
            <h1 className="text-xl text-white">Health Modes</h1>
            <p className="text-white/90 text-sm">Personalized condition-aware insights</p>
          </div>
        </div>
        
        <p className="text-[10px] text-white/80 flex items-center gap-1">
          <Sparkles className="w-3 h-3" strokeWidth={2} />
          AI adapts to your unique health profile
        </p>
      </div>

      <div className="px-6">
        {/* Info Card */}
        <div className="bg-gradient-to-br from-[#EAE4F5] to-[#FADEDE] rounded-[24px] p-5 mb-6">
          <h3 className="text-[#4A4458] font-medium mb-2 flex items-center gap-2">
            <span className="text-lg">💜</span>
            What are Health Modes?
          </h3>
          <p className="text-sm text-[#827B8D] leading-relaxed mb-3">
            Health Modes transform Syla from a period tracker into a comprehensive hormonal health intelligence platform. Select your conditions to receive specialized insights, tracking, and recommendations.
          </p>
          <p className="text-xs text-[#4A4458]">
            <span className="font-medium">Your privacy:</span> All data stays on your device. We never share your health information.
          </p>
        </div>

        {/* Selected Count */}
        {selectedConditions.length > 0 && !selectedConditions.includes('None') && !selectedConditions.includes('Prefer not to say') && (
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-[#827B8D]">
              {selectedConditions.length} condition{selectedConditions.length !== 1 ? 's' : ''} selected
            </p>
            <button
              onClick={clearAll}
              className="text-sm text-[#B8A4D9] hover:text-[#4A4458] transition-colors"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Health Conditions Grid */}
        <div className="space-y-4 mb-6">
          {healthConditions.map((condition) => {
            const Icon = condition.icon;
            const isSelected = selectedConditions.includes(condition.id);

            return (
              <button
                key={condition.id}
                onClick={() => toggleCondition(condition.id)}
                className={`w-full bg-white rounded-[24px] p-5 shadow-sm transition-all ${
                  isSelected
                    ? 'border-2 border-[#B8A4D9] shadow-lg'
                    : 'border-2 border-[#EAE4F5] hover:border-[#D4C5F9]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${condition.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`font-medium ${isSelected ? 'text-[#B8A4D9]' : 'text-[#4A4458]'}`}>
                        {condition.name}
                      </h3>
                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-[#B8A4D9] flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-xs text-[#827B8D] mb-3">{condition.description}</p>
                    
                    {isSelected && (
                      <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl p-3 space-y-1.5">
                        {condition.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1 flex-shrink-0" />
                            <p className="text-xs text-[#4A4458]">{feature}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* None Option */}
        <button
          onClick={clearAll}
          className={`w-full rounded-[24px] p-5 shadow-sm transition-all mb-4 ${
            selectedConditions.includes('None') || selectedConditions.length === 0
              ? 'bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] text-white'
              : 'bg-white border-2 border-[#EAE4F5] text-[#4A4458] hover:border-[#D4C5F9]'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <p className="font-medium mb-1">None of these apply</p>
              <p className={`text-sm ${selectedConditions.includes('None') || selectedConditions.length === 0 ? 'text-white/80' : 'text-[#827B8D]'}`}>
                Standard cycle tracking mode
              </p>
            </div>
            {(selectedConditions.includes('None') || selectedConditions.length === 0) && (
              <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
        </button>

        {/* Help Text */}
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#EAE4F5] mb-6">
          <p className="text-xs text-[#827B8D] leading-relaxed text-center">
            <span className="font-medium text-[#4A4458]">Need help?</span><br />
            Syla AI can provide personalized guidance based on your selected health modes. Ask questions anytime through the AI chat.
          </p>
        </div>

        {/* Educational Note */}
        <div className="bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2] rounded-[24px] p-5">
          <p className="text-xs text-white text-center leading-relaxed">
            <span className="font-medium">Important:</span> Syla provides educational insights and pattern tracking. Always consult your healthcare provider for medical diagnosis and treatment decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
