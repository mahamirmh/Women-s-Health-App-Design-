import { Check, Crown, Lock, Sparkles, Apple, Dumbbell, BookOpen, MessageCircle, TrendingUp, Zap } from 'lucide-react';

interface PremiumProps {
  feature: string;
  onUpgrade: () => void;
}

export function Premium({ feature, onUpgrade }: PremiumProps) {
  const isUpsellPage = feature === 'Premium';

  if (!isUpsellPage) {
    // Feature-locked screen
    return (
      <div className="min-h-screen bg-[#FAF9F7] p-6 flex flex-col items-center justify-center">
        <div className="max-w-sm w-full">
          {/* Lock Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-[28px] bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center shadow-lg">
            <Lock className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>

          {/* Message */}
          <h2 className="text-2xl text-[#4A4458] text-center mb-3">
            {feature} is Premium
          </h2>
          <p className="text-[#827B8D] text-center mb-8 leading-relaxed">
            Unlock personalized {feature.toLowerCase()} along with all premium features to get the most out of Syla.
          </p>

          {/* Quick Benefits */}
          <div className="bg-white rounded-[24px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
            <p className="text-sm font-medium text-[#4A4458] mb-4">Included in Premium:</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <p className="text-sm text-[#827B8D]">{feature}</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <p className="text-sm text-[#827B8D]">Unlimited AI conversations</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <p className="text-sm text-[#827B8D]">Wearable device integration</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
                <p className="text-sm text-[#827B8D]">Abnormality detection</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onUpgrade}
            className="w-full bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white rounded-[24px] px-6 py-4 hover:shadow-xl transition-all font-medium mb-3"
          >
            See Premium Plans
          </button>

          <button className="w-full text-[#827B8D] text-sm hover:text-[#4A4458] transition-colors">
            Not now
          </button>
        </div>
      </div>
    );
  }

  // Full premium/billing page
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('annual');

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#B8A4D9] via-[#D4C5F9] to-[#FADEDE] p-6 rounded-b-[32px] shadow-lg mb-6">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-[24px] bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Crown className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
        </div>
        <h1 className="text-3xl text-white text-center mb-2">Syla Premium</h1>
        <p className="text-white/90 text-center leading-relaxed">
          Unlock your full hormonal intelligence
        </p>
      </div>

      <div className="px-6">
        {/* Plan Toggle */}
        <div className="bg-white rounded-[24px] p-2 mb-6 shadow-sm border border-[#EAE4F5] inline-flex mx-auto block w-full max-w-sm">
          <button
            onClick={() => setSelectedPlan('monthly')}
            className={`flex-1 py-3 px-4 rounded-[20px] transition-all font-medium ${
              selectedPlan === 'monthly'
                ? 'bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white shadow-md'
                : 'text-[#827B8D]'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelectedPlan('annual')}
            className={`flex-1 py-3 px-4 rounded-[20px] transition-all font-medium relative ${
              selectedPlan === 'annual'
                ? 'bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white shadow-md'
                : 'text-[#827B8D]'
            }`}
          >
            Annual
            <span className="absolute -top-2 -right-2 bg-[#F4C2C2] text-white text-[10px] px-2 py-0.5 rounded-full">
              Save 40%
            </span>
          </button>
        </div>

        {/* Pricing Card */}
        <div className="bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] rounded-[28px] p-6 mb-6 shadow-xl text-white">
          <div className="text-center mb-6">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-5xl font-light">
                ${selectedPlan === 'monthly' ? '12.99' : '7.99'}
              </span>
              <span className="text-white/80">/month</span>
            </div>
            {selectedPlan === 'annual' && (
              <p className="text-white/90 text-sm">Billed annually at $95.88</p>
            )}
          </div>

          <button
            onClick={onUpgrade}
            className="w-full bg-white text-[#B8A4D9] rounded-[20px] px-6 py-4 hover:shadow-xl transition-all font-medium mb-3"
          >
            Start 7-Day Free Trial
          </button>

          <p className="text-white/80 text-xs text-center">
            Cancel anytime. No commitment.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          <h3 className="text-lg text-[#4A4458] mb-4">Everything in Premium:</h3>

          {[
            {
              icon: Apple,
              title: 'Phase-Based Nutrition Guide',
              description: 'Personalized meal plans for each cycle phase',
            },
            {
              icon: Dumbbell,
              title: 'Cycle-Synced Fitness Plans',
              description: 'Workouts that adapt to your hormones',
            },
            {
              icon: BookOpen,
              title: 'Complete Hormonal Education',
              description: 'Science-backed articles and courses',
            },
            {
              icon: Sparkles,
              title: 'Unlimited AI Conversations',
              description: 'Chat anytime with your personal AI assistant',
            },
            {
              icon: TrendingUp,
              title: 'Advanced Pattern Recognition',
              description: 'AI detects trends and abnormalities',
            },
            {
              icon: Zap,
              title: 'Wearable Integration',
              description: 'HRV, sleep, heart rate, blood oxygen tracking',
            },
            {
              icon: MessageCircle,
              title: 'Priority Support',
              description: '24/7 access to our care team',
            },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-[20px] p-4 shadow-sm border border-[#EAE4F5]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EAE4F5] to-[#FADEDE] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#B8A4D9]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#4A4458] font-medium mb-1">{feature.title}</p>
                    <p className="text-sm text-[#827B8D]">{feature.description}</p>
                  </div>
                  <Check className="w-5 h-5 text-[#B8A4D9] flex-shrink-0" strokeWidth={2} />
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-[28px] p-6 shadow-sm border border-[#EAE4F5] mb-6">
          <h3 className="text-lg text-[#4A4458] mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <p className="text-[#4A4458] font-medium mb-2">Can I cancel anytime?</p>
              <p className="text-sm text-[#827B8D]">
                Yes! Cancel anytime from your profile settings. No questions asked.
              </p>
            </div>
            <div>
              <p className="text-[#4A4458] font-medium mb-2">What about my data?</p>
              <p className="text-sm text-[#827B8D]">
                All health data is encrypted and HIPAA-compliant. We never sell your data.
              </p>
            </div>
            <div>
              <p className="text-[#4A4458] font-medium mb-2">How does the trial work?</p>
              <p className="text-sm text-[#827B8D]">
                7 days completely free. You won't be charged until the trial ends. Cancel before then and pay nothing.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-sm text-[#827B8D]">Secure payments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <span className="text-sm text-[#827B8D]">Money-back guarantee</span>
            </div>
          </div>
          <p className="text-xs text-[#827B8D]">
            Join 50,000+ women tracking with Syla
          </p>
        </div>
      </div>
    </div>
  );
}

function useState<T>(initialValue: T): [T, (value: T) => void] {
  return [initialValue, () => {}];
}
