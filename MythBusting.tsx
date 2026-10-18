import { Lightbulb, X, Check } from 'lucide-react';

export function MythBusting() {
  const myths = [
    {
      myth: 'All period pain is normal',
      truth: 'While some cramping is common, severe pain that interferes with daily activities is NOT normal. It could indicate endometriosis, fibroids, or other conditions that need medical attention.',
      category: 'Periods',
      gradient: 'from-[#F4C2C2] to-[#FADEDE]',
    },
    {
      myth: 'PCOS means you can\'t get pregnant',
      truth: 'PCOS can make conception more challenging, but many women with PCOS do get pregnant, especially with proper management, lifestyle changes, and sometimes medical support. It doesn\'t mean infertility.',
      category: 'PCOS',
      gradient: 'from-[#B8A4D9] to-[#D4C5F9]',
    },
    {
      myth: 'Milk and dairy always cause fibroids',
      truth: 'There\'s no strong scientific evidence that dairy directly causes fibroids. While some women may benefit from reducing dairy (especially if they have estrogen dominance), blanket avoidance isn\'t necessary for everyone.',
      category: 'Nutrition',
      gradient: 'from-[#F4D8A4] to-[#FADEC5]',
    },
    {
      myth: 'You can\'t exercise on your period',
      truth: 'Exercise during your period is safe and can actually help reduce cramps and improve mood. Listen to your body—gentle movement like yoga or walking is great, and some women feel fine doing intense workouts.',
      category: 'Exercise',
      gradient: 'from-[#B8D9C7] to-[#D4EDDF]',
    },
    {
      myth: 'PMS is all in your head',
      truth: 'PMS is a real condition caused by hormonal fluctuations. Changes in estrogen and progesterone affect neurotransmitters like serotonin, leading to real physical and emotional symptoms.',
      category: 'Hormones',
      gradient: 'from-[#E8B4E8] to-[#F5D9F5]',
    },
    {
      myth: 'Irregular periods always mean PCOS',
      truth: 'While irregular periods can be a sign of PCOS, they can also be caused by stress, thyroid issues, excessive exercise, being underweight, perimenopause, or other hormonal imbalances.',
      category: 'Periods',
      gradient: 'from-[#F4C2C2] to-[#FADEDE]',
    },
    {
      myth: 'Hormone testing needs to be done fasting',
      truth: 'Most sex hormone tests (estrogen, progesterone, testosterone) don\'t require fasting. However, insulin and glucose tests do require fasting for accuracy.',
      category: 'Testing',
      gradient: 'from-[#A8C5E8] to-[#C8DDEC]',
    },
    {
      myth: 'Birth control fixes hormonal imbalances',
      truth: 'Birth control can manage symptoms by regulating cycles and reducing androgens, but it doesn\'t "fix" the underlying hormonal imbalance. Symptoms often return after stopping.',
      category: 'Treatment',
      gradient: 'from-[#D9B8D9] to-[#EDC8ED]',
    },
    {
      myth: 'You can\'t get pregnant right after your period',
      truth: 'If you have a short cycle and/or long period, you can ovulate shortly after your period ends. Sperm can survive up to 5 days, so unprotected sex during your period could lead to pregnancy.',
      category: 'Fertility',
      gradient: 'from-[#F4C2D8] to-[#FADEE8]',
    },
    {
      myth: 'Soy is bad for hormones',
      truth: 'Moderate soy consumption is safe for most women. Soy contains phytoestrogens which are much weaker than human estrogen and may actually have protective effects against some cancers.',
      category: 'Nutrition',
      gradient: 'from-[#F4D8A4] to-[#FADEC5]',
    },
    {
      myth: 'Menopause happens overnight',
      truth: 'Menopause is a gradual process. Perimenopause (the transition) can last 4-10 years before the final menstrual period. Hormones fluctuate significantly during this time.',
      category: 'Menopause',
      gradient: 'from-[#A8C5E8] to-[#C8DDEC]',
    },
    {
      myth: 'You need to detox your hormones',
      truth: 'Your liver and kidneys naturally detoxify your body, including hormones. While supporting liver health with nutrition is beneficial, expensive "hormone detoxes" are usually unnecessary.',
      category: 'Wellness',
      gradient: 'from-[#B8D9C7] to-[#D4EDDF]',
    },
    {
      myth: 'Heavy periods are genetic and can\'t be helped',
      truth: 'While genetics can play a role, heavy bleeding can often be managed or treated. Causes include hormonal imbalances, fibroids, thyroid issues, or bleeding disorders—all of which have treatment options.',
      category: 'Periods',
      gradient: 'from-[#F4C2C2] to-[#FADEDE]',
    },
    {
      myth: 'Testosterone is only a male hormone',
      truth: 'Women produce testosterone too! It\'s important for libido, muscle mass, bone density, and energy. Problems arise when levels are too high OR too low.',
      category: 'Hormones',
      gradient: 'from-[#E8B4E8] to-[#F5D9F5]',
    },
    {
      myth: 'You should track your cycle only if trying to conceive',
      truth: 'Cycle tracking benefits all women! It helps you understand your patterns, predict PMS, optimize workouts and nutrition, detect irregularities early, and understand your hormonal health.',
      category: 'Tracking',
      gradient: 'from-[#B8A4D9] to-[#D4C5F9]',
    },
    {
      myth: 'Acne after 20 means bad hygiene',
      truth: 'Adult acne is usually hormonal, not hygiene-related. It\'s often caused by high androgens, estrogen fluctuations, or insulin resistance—especially acne along the jawline and chin.',
      category: 'Skin',
      gradient: 'from-[#F4C2D8] to-[#FADEE8]',
    },
  ];

  const categories = [...new Set(myths.map(m => m.category))];

  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-bold text-[#2D1B4E] mb-2">Myth Busting</h2>
      <p className="text-[#7C5BA7] mb-6">
        Separating facts from fiction about hormones and women's health
      </p>

      <div className="space-y-4">
        {myths.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-5 shadow-sm border border-[#F4C2C2]/10"
          >
            {/* Category Badge */}
            <div className="mb-3">
              <span className={`inline-block px-3 py-1 bg-gradient-to-r ${item.gradient} text-white text-xs font-medium rounded-full`}>
                {item.category}
              </span>
            </div>

            {/* Myth */}
            <div className="mb-3 p-4 bg-[#F4C2C2]/10 rounded-2xl border-l-4 border-[#E87A7A]">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#E87A7A] flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-[#E87A7A] uppercase mb-1">
                    Myth
                  </div>
                  <p className="text-sm font-medium text-[#2D1B4E]">
                    {item.myth}
                  </p>
                </div>
              </div>
            </div>

            {/* Truth */}
            <div className="p-4 bg-[#B8D9C7]/10 rounded-2xl border-l-4 border-[#5BA77C]">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#5BA77C] flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-[#5BA77C] uppercase mb-1">
                    Truth
                  </div>
                  <p className="text-sm text-[#7C5BA7] leading-relaxed">
                    {item.truth}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Notice */}
      <div className="mt-6 bg-gradient-to-br from-[#B8A4D9]/10 to-[#D4C5F9]/10 rounded-3xl p-5 border border-[#B8A4D9]/20">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-[#7C5BA7] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-[#2D1B4E] mb-1">Stay Informed</h4>
            <p className="text-sm text-[#7C5BA7] leading-relaxed">
              Misinformation about women's health is everywhere. Always look for evidence-based information and consult healthcare professionals for medical advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
