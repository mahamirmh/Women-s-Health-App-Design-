import { TrendingUp, Sparkles } from 'lucide-react';

export function Insights() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl text-[#4A4458] mb-1">Your Hormones Today</h1>
        <p className="text-[#827B8D]">Understanding your cycle</p>
        <p className="text-[10px] text-[#B8A4D9] mt-1.5 flex items-center gap-1">
          <Sparkles className="w-3 h-3" strokeWidth={2} />
          Powered by AI • Live pattern detection
        </p>
      </div>

      {/* Main Insight Card */}
      <div className="bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] rounded-[32px] p-8 mb-6 shadow-lg text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[32px] animate-pulse" />
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 animate-pulse">
              <Sparkles className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl">Hormonal Insight</h2>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Estrogen is dipping and progesterone is rising. You may feel more introspective or sensitive today.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What This Means */}
      <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
        <h3 className="text-lg text-[#4A4458] mb-4">What this means</h3>
        <p className="text-[#827B8D] text-sm leading-relaxed mb-4">
          During the luteal phase, progesterone becomes the dominant hormone. This can make you feel more inward-focused and calmer. It's a natural part of your cycle.
        </p>
        <div className="bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2] rounded-2xl p-4">
          <p className="text-sm text-[#4A4458]">
            <span className="font-medium">Remember:</span> Your body isn't broken. This is normal.
          </p>
        </div>
      </div>

      {/* What Helps Today */}
      <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
        <h3 className="text-lg text-[#4A4458] mb-4">What helps today</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#EAE4F5] to-[#D4C5F9] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm">🧘‍♀️</span>
            </div>
            <div>
              <p className="text-[#4A4458] font-medium text-sm mb-1">Gentle movement</p>
              <p className="text-[#827B8D] text-sm">Yoga, stretching, or light walks work best</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#EAE4F5] to-[#D4C5F9] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm">🌙</span>
            </div>
            <div>
              <p className="text-[#4A4458] font-medium text-sm mb-1">Earlier bedtime</p>
              <p className="text-[#827B8D] text-sm">Your body may need extra rest right now</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#EAE4F5] to-[#D4C5F9] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-sm">🥗</span>
            </div>
            <div>
              <p className="text-[#4A4458] font-medium text-sm mb-1">Magnesium-rich foods</p>
              <p className="text-[#827B8D] text-sm">Dark leafy greens, nuts, and seeds</p>
            </div>
          </div>
        </div>
      </div>

      {/* Patterns */}
      <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
        <h3 className="text-lg text-[#4A4458] mb-4">Your patterns</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#B8A4D9] mt-2 flex-shrink-0" />
            <p className="text-sm text-[#827B8D] leading-relaxed">
              You typically feel more tired 2-3 days before your period
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#F4C2C2] mt-2 flex-shrink-0" />
            <p className="text-sm text-[#827B8D] leading-relaxed">
              Your energy peaks during ovulation — perfect for challenging workouts
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-[#D4C5F9] mt-2 flex-shrink-0" />
            <p className="text-sm text-[#827B8D] leading-relaxed">
              Sleep quality improves significantly in your follicular phase
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#EAE4F5]">
          <p className="text-[#827B8D] text-sm mb-2">Avg Cycle</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl text-[#4A4458]">28d</p>
            <div className="flex items-center gap-1 text-[#B8A4D9] text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+0</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-[#EAE4F5]">
          <p className="text-[#827B8D] text-sm mb-2">Mood Score</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl text-[#4A4458]">4.2/5</p>
            <div className="flex items-center gap-1 text-[#B8A4D9] text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>+0.3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 text-center">
        <p className="text-xs text-[#827B8D] leading-relaxed">
          Insights are educational, not medical advice.<br />
          Always consult a healthcare provider for concerns.
        </p>
      </div>
    </div>
  );
}