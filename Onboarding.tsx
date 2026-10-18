import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    regularCycles: '',
    lastPeriod: '',
    cycleLength: '28',
    periodLength: '5',
    goals: [] as string[],
    healthConditions: [] as string[],
  });

  const goals = [
    'Hormonal balance',
    'PMS & cramps',
    'Energy & productivity',
    'Sleep',
    'Mental health & mood',
    'Fitness & body confidence',
  ];

  const healthConditions = [
    'PCOS',
    'Fibroids',
    'High blood pressure',
    'Type 1 diabetes',
    'Type 2 diabetes',
    'Insulin resistance',
    'Perimenopause',
    'Menopause',
    'None',
    'Prefer not to say',
  ];

  const toggleGoal = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }));
  };

  const toggleHealthCondition = (condition: string) => {
    setFormData(prev => {
      let newConditions = [...prev.healthConditions];
      
      // If "None" or "Prefer not to say" is selected, clear all others
      if (condition === 'None' || condition === 'Prefer not to say') {
        newConditions = [condition];
      } else {
        // Remove "None" and "Prefer not to say" if another condition is selected
        newConditions = newConditions.filter(c => c !== 'None' && c !== 'Prefer not to say');
        
        if (newConditions.includes(condition)) {
          newConditions = newConditions.filter(c => c !== condition);
        } else {
          newConditions.push(condition);
        }
      }
      
      return { ...prev, healthConditions: newConditions };
    });
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
    else {
      // Save user data to localStorage
      if (formData.name) {
        localStorage.setItem('syla_user_name', formData.name);
      }
      localStorage.setItem('syla_health_conditions', JSON.stringify(formData.healthConditions));
      onComplete();
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EAE4F5] via-[#FFFCF9] to-[#FADEDE] flex flex-col">
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
        {/* Progress Bar */}
        {step > 0 && (
          <div className="pt-6 px-6">
            <div className="h-1 bg-white/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#B8A4D9] to-[#F4C2C2] rounded-full transition-all duration-500"
                style={{ width: `${((step) / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 flex items-center justify-center px-6 py-12">
          {step === 0 && (
            <div className="text-center space-y-8 animate-fade-in">
              <div className="text-7xl mb-4">🌸</div>
              <div className="space-y-4">
                <h1 className="text-4xl">Welcome to Syla</h1>
                <p className="text-xl text-[#827B8D] leading-relaxed max-w-sm mx-auto">
                  Your body has a rhythm.
                  <br />
                  Let's understand it together.
                </p>
              </div>
              <div className="pt-8 space-y-4">
                <button
                  onClick={nextStep}
                  className="w-full bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white py-4 px-8 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  Get Started
                </button>
                <button className="w-full text-[#827B8D] py-3 font-medium">
                  I already have an account
                </button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="w-full space-y-8 animate-fade-in">
              <div className="text-center space-y-2">
                <h2 className="text-3xl">About You</h2>
                <p className="text-[#827B8D]">Help us personalize your experience</p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-[#4A4458] mb-2 text-sm">Name (optional)</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#EAE4F5] focus:border-[#B8A4D9] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#4A4458] mb-2 text-sm">Age (optional)</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="Enter your age"
                    className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#EAE4F5] focus:border-[#B8A4D9] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#4A4458] mb-2 text-sm">Height (optional)</label>
                    <input
                      type="text"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                      placeholder="cm"
                      className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#EAE4F5] focus:border-[#B8A4D9] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#4A4458] mb-2 text-sm">Weight (optional)</label>
                    <input
                      type="text"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      placeholder="kg"
                      className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#EAE4F5] focus:border-[#B8A4D9] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#4A4458] mb-3 text-sm">Are your cycles regular?</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Yes', 'No', 'Not sure'].map((option) => (
                      <button
                        key={option}
                        onClick={() => setFormData({ ...formData, regularCycles: option })}
                        className={`py-3 px-4 rounded-2xl border-2 transition-all ${
                          formData.regularCycles === option
                            ? 'border-[#B8A4D9] bg-[#EAE4F5] text-[#B8A4D9]'
                            : 'border-[#EAE4F5] text-[#827B8D]'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#827B8D] text-center pt-2">
                  💜 Syla never shames or pressures
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="w-full space-y-8 animate-fade-in">
              <div className="text-center space-y-2">
                <h2 className="text-3xl">Cycle Setup</h2>
                <p className="text-[#827B8D]">Let's understand your rhythm</p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="w-48 h-48 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="#EAE4F5"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray="200 553"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#B8A4D9" />
                          <stop offset="100%" stopColor="#F4C2C2" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-6xl mb-2">{formData.cycleLength}</p>
                        <p className="text-sm text-[#827B8D]">days</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[#4A4458] mb-2">First day of last period</label>
                  <input
                    type="date"
                    value={formData.lastPeriod}
                    onChange={(e) => setFormData({ ...formData, lastPeriod: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#EAE4F5] focus:border-[#B8A4D9] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#4A4458] mb-3">Average cycle length</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="21"
                      max="35"
                      value={formData.cycleLength}
                      onChange={(e) => setFormData({ ...formData, cycleLength: e.target.value })}
                      className="flex-1 h-2 bg-gradient-to-r from-[#B8A4D9] to-[#F4C2C2] rounded-full appearance-none cursor-pointer"
                    />
                    <span className="text-[#B8A4D9] font-medium w-12">{formData.cycleLength} d</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[#4A4458] mb-3">Period length</label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="3"
                      max="7"
                      value={formData.periodLength}
                      onChange={(e) => setFormData({ ...formData, periodLength: e.target.value })}
                      className="flex-1 h-2 bg-gradient-to-r from-[#B8A4D9] to-[#F4C2C2] rounded-full appearance-none cursor-pointer"
                    />
                    <span className="text-[#B8A4D9] font-medium w-12">{formData.periodLength} d</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="w-full space-y-8 animate-fade-in">
              <div className="text-center space-y-2">
                <h2 className="text-3xl">Your Goals</h2>
                <p className="text-[#827B8D]">What do you want help with?</p>
              </div>

              <div className="space-y-3">
                {goals.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    className={`w-full px-6 py-4 rounded-2xl border-2 text-left transition-all ${
                      formData.goals.includes(goal)
                        ? 'border-[#B8A4D9] bg-[#EAE4F5]'
                        : 'border-[#EAE4F5] bg-white hover:border-[#D4C5F9]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={formData.goals.includes(goal) ? 'text-[#B8A4D9]' : 'text-[#4A4458]'}>
                        {goal}
                      </span>
                      {formData.goals.includes(goal) && (
                        <div className="w-6 h-6 rounded-full bg-[#B8A4D9] flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <p className="text-xs text-[#827B8D] text-center">
                ✨ This is how AI personalizes your experience
              </p>
            </div>
          )}

          {step === 4 && (
            <div className="w-full space-y-8 animate-fade-in">
              <div className="text-center space-y-2">
                <h2 className="text-3xl">Health Conditions</h2>
                <p className="text-[#827B8D]">Do you have any health conditions?</p>
              </div>

              <div className="space-y-3">
                {healthConditions.map((condition) => (
                  <button
                    key={condition}
                    onClick={() => toggleHealthCondition(condition)}
                    className={`w-full px-6 py-4 rounded-2xl border-2 text-left transition-all ${
                      formData.healthConditions.includes(condition)
                        ? 'border-[#B8A4D9] bg-[#EAE4F5]'
                        : 'border-[#EAE4F5] bg-white hover:border-[#D4C5F9]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={formData.healthConditions.includes(condition) ? 'text-[#B8A4D9]' : 'text-[#4A4458]'}>
                        {condition}
                      </span>
                      {formData.healthConditions.includes(condition) && (
                        <div className="w-6 h-6 rounded-full bg-[#B8A4D9] flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <p className="text-xs text-[#827B8D] text-center">
                ✨ This helps us provide more accurate recommendations
              </p>
            </div>
          )}

          {step === 5 && (
            <div className="text-center space-y-8 animate-fade-in">
              <div className="text-7xl mb-4">💜</div>
              <div className="space-y-4">
                <h2 className="text-3xl">You're all set</h2>
                <p className="text-xl text-[#827B8D] leading-relaxed max-w-sm mx-auto">
                  Syla will learn with you — day by day.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        {step > 0 && (
          <div className="px-6 pb-8 flex gap-4">
            {step < 4 && (
              <button
                onClick={prevStep}
                className="w-14 h-14 rounded-full bg-white border-2 border-[#EAE4F5] flex items-center justify-center hover:border-[#B8A4D9] transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-[#827B8D]" />
              </button>
            )}
            <button
              onClick={nextStep}
              className="flex-1 bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              {step === 5 ? 'Go to Dashboard' : 'Continue'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}