import { FlaskConical, Calendar, Info, TrendingUp } from 'lucide-react';

export function LabTestEducation() {
  const labTests = [
    {
      name: 'Estradiol (E2)',
      category: 'Sex Hormones',
      gradient: 'from-[#F4C2C2] to-[#FADEDE]',
      whatItMeasures: 'The main form of estrogen in reproductive years',
      normalRange: 'Follicular: 30-100 pg/mL | Ovulation: 100-400 pg/mL | Luteal: 50-200 pg/mL',
      whenToTest: 'Day 3 of cycle for baseline, Day 14-21 for mid-luteal',
      whatAbnormalMeans: {
        high: 'May indicate estrogen dominance, ovarian tumors, or pregnancy',
        low: 'May indicate menopause, PCOS, ovarian failure, or excessive exercise',
      },
    },
    {
      name: 'Progesterone',
      category: 'Sex Hormones',
      gradient: 'from-[#B8A4D9] to-[#D4C5F9]',
      whatItMeasures: 'Hormone that rises after ovulation',
      normalRange: 'Follicular: <1 ng/mL | Luteal: >10 ng/mL (confirms ovulation)',
      whenToTest: 'Day 21 of a 28-day cycle (7 days after suspected ovulation)',
      whatAbnormalMeans: {
        high: 'Pregnancy, ovarian cysts, or certain medications',
        low: 'Lack of ovulation, luteal phase deficiency, early menopause',
      },
    },
    {
      name: 'FSH (Follicle Stimulating Hormone)',
      category: 'Pituitary Hormones',
      gradient: 'from-[#A8C5E8] to-[#C8DDEC]',
      whatItMeasures: 'Hormone that stimulates egg development',
      normalRange: 'Follicular: 3-10 mIU/mL | Ovulation: 4-25 mIU/mL | Luteal: 1-9 mIU/mL',
      whenToTest: 'Day 2-5 of cycle',
      whatAbnormalMeans: {
        high: 'Ovarian failure, menopause, PCOS',
        low: 'Pituitary dysfunction, being on birth control',
      },
    },
    {
      name: 'LH (Luteinizing Hormone)',
      category: 'Pituitary Hormones',
      gradient: 'from-[#E8B4E8] to-[#F5D9F5]',
      whatItMeasures: 'Hormone that triggers ovulation',
      normalRange: 'Follicular: 1-18 mIU/mL | Ovulation: 24-105 mIU/mL | Luteal: 0.4-20 mIU/mL',
      whenToTest: 'Day 2-5 of cycle, or daily for ovulation tracking',
      whatAbnormalMeans: {
        high: 'PCOS (especially if LH:FSH ratio >2:1), menopause',
        low: 'Pituitary dysfunction, being underweight',
      },
    },
    {
      name: 'Total Testosterone',
      category: 'Androgens',
      gradient: 'from-[#F4D8A4] to-[#FADEC5]',
      whatItMeasures: 'Both bound and unbound testosterone',
      normalRange: '15-70 ng/dL in women',
      whenToTest: 'Anytime, but ideally morning',
      whatAbnormalMeans: {
        high: 'PCOS, adrenal disorders, ovarian tumors',
        low: 'Adrenal insufficiency, menopause, low libido',
      },
    },
    {
      name: 'Free Testosterone',
      category: 'Androgens',
      gradient: 'from-[#F4D8A4] to-[#FADEC5]',
      whatItMeasures: 'Biologically active testosterone',
      normalRange: '0.3-1.9 ng/dL in women',
      whenToTest: 'Anytime, but ideally morning',
      whatAbnormalMeans: {
        high: 'PCOS, hirsutism, acne',
        low: 'Low libido, fatigue, difficulty building muscle',
      },
    },
    {
      name: 'DHEA-S',
      category: 'Androgens',
      gradient: 'from-[#F4D8A4] to-[#FADEC5]',
      whatItMeasures: 'Androgen produced by adrenal glands',
      normalRange: '35-430 μg/dL (varies by age)',
      whenToTest: 'Anytime',
      whatAbnormalMeans: {
        high: 'Adrenal hyperplasia, PCOS, adrenal tumors',
        low: 'Adrenal insufficiency, aging',
      },
    },
    {
      name: 'TSH (Thyroid Stimulating Hormone)',
      category: 'Thyroid',
      gradient: 'from-[#B8D9C7] to-[#D4EDDF]',
      whatItMeasures: 'Pituitary signal to thyroid gland',
      normalRange: '0.4-4.0 mIU/L (optimal: 0.5-2.0)',
      whenToTest: 'Anytime, preferably morning',
      whatAbnormalMeans: {
        high: 'Hypothyroidism (underactive thyroid)',
        low: 'Hyperthyroidism (overactive thyroid)',
      },
    },
    {
      name: 'Free T3 & Free T4',
      category: 'Thyroid',
      gradient: 'from-[#B8D9C7] to-[#D4EDDF]',
      whatItMeasures: 'Active thyroid hormones',
      normalRange: 'T4: 0.8-1.8 ng/dL | T3: 2.3-4.2 pg/mL',
      whenToTest: 'Anytime',
      whatAbnormalMeans: {
        high: 'Hyperthyroidism, thyroiditis',
        low: 'Hypothyroidism, nutritional deficiencies',
      },
    },
    {
      name: 'Fasting Insulin',
      category: 'Metabolic',
      gradient: 'from-[#D9B8D9] to-[#EDC8ED]',
      whatItMeasures: 'Insulin levels after fasting',
      normalRange: '<5 μIU/mL (optimal), <25 μIU/mL (normal)',
      whenToTest: 'After 8-12 hour fast',
      whatAbnormalMeans: {
        high: 'Insulin resistance, prediabetes, PCOS',
        low: 'Rare; possible pancreatic insufficiency',
      },
    },
    {
      name: 'Fasting Glucose',
      category: 'Metabolic',
      gradient: 'from-[#D9B8D9] to-[#EDC8ED]',
      whatItMeasures: 'Blood sugar after fasting',
      normalRange: '70-99 mg/dL (optimal: 70-85)',
      whenToTest: 'After 8-12 hour fast',
      whatAbnormalMeans: {
        high: 'Prediabetes (100-125), diabetes (>126), insulin resistance',
        low: 'Hypoglycemia, adrenal issues',
      },
    },
    {
      name: 'HbA1c',
      category: 'Metabolic',
      gradient: 'from-[#D9B8D9] to-[#EDC8ED]',
      whatItMeasures: 'Average blood sugar over 3 months',
      normalRange: '<5.7% (optimal: <5.3%)',
      whenToTest: 'Anytime',
      whatAbnormalMeans: {
        high: 'Prediabetes (5.7-6.4%), diabetes (>6.5%)',
        low: 'Generally not concerning',
      },
    },
    {
      name: 'Prolactin',
      category: 'Pituitary Hormones',
      gradient: 'from-[#F4C2D8] to-[#FADEE8]',
      whatItMeasures: 'Hormone related to milk production',
      normalRange: '2-29 ng/mL in non-pregnant women',
      whenToTest: 'Anytime, ideally morning',
      whatAbnormalMeans: {
        high: 'Pituitary tumor, hypothyroidism, stress, certain medications',
        low: 'Pituitary insufficiency',
      },
    },
    {
      name: 'AMH (Anti-Müllerian Hormone)',
      category: 'Ovarian Reserve',
      gradient: 'from-[#B8A4D9] to-[#D4C5F9]',
      whatItMeasures: 'Egg reserve and ovarian function',
      normalRange: '>1 ng/mL (good reserve), <1 (low reserve)',
      whenToTest: 'Anytime',
      whatAbnormalMeans: {
        high: 'PCOS, good ovarian reserve',
        low: 'Diminished ovarian reserve, approaching menopause',
      },
    },
  ];

  const categories = [...new Set(labTests.map(test => test.category))];

  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-bold text-[#2D1B4E] mb-2">Lab Test Guide</h2>
      <p className="text-[#7C5BA7] mb-6">
        Understand your hormone test results and what they mean
      </p>

      {/* General Testing Tips */}
      <div className="bg-gradient-to-br from-[#B8A4D9]/10 to-[#D4C5F9]/10 rounded-3xl p-5 mb-6 border border-[#B8A4D9]/20">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-[#7C5BA7] flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-[#2D1B4E] mb-2">Testing Tips</h3>
            <ul className="space-y-1 text-sm text-[#7C5BA7]">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                <span>Timing matters! Many hormones should be tested on specific cycle days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                <span>Morning tests are often more accurate for hormones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                <span>Birth control can affect results—discuss with your provider</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                <span>Request a copy of your results for your records</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tests by Category */}
      {categories.map((category) => (
        <div key={category} className="mb-6">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-[#7C5BA7]" />
            {category}
          </h3>
          <div className="space-y-3">
            {labTests
              .filter(test => test.category === category)
              .map((test) => (
                <div
                  key={test.name}
                  className="bg-white rounded-3xl p-5 shadow-sm border border-[#F4C2C2]/10"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${test.gradient} flex items-center justify-center flex-shrink-0`}>
                      <FlaskConical className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#2D1B4E]">{test.name}</h4>
                      <p className="text-sm text-[#7C5BA7] mt-0.5">{test.whatItMeasures}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-[#7C5BA7]" />
                        <span className="font-medium text-[#2D1B4E]">Normal Range</span>
                      </div>
                      <p className="text-[#7C5BA7] ml-6">{test.normalRange}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4 text-[#7C5BA7]" />
                        <span className="font-medium text-[#2D1B4E]">When to Test</span>
                      </div>
                      <p className="text-[#7C5BA7] ml-6">{test.whenToTest}</p>
                    </div>

                    <div className="pt-2 border-t border-[#F4C2C2]/20">
                      <p className="font-medium text-[#2D1B4E] mb-2">What Abnormal Results Mean:</p>
                      <div className="space-y-1.5 ml-2">
                        <div className="flex items-start gap-2">
                          <span className="text-[#E87A7A] font-medium min-w-[40px]">High:</span>
                          <span className="text-[#7C5BA7]">{test.whatAbnormalMeans.high}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#5B8AB8] font-medium min-w-[40px]">Low:</span>
                          <span className="text-[#7C5BA7]">{test.whatAbnormalMeans.low}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Important Note */}
      <div className="mt-6 bg-gradient-to-br from-[#E87A7A]/10 to-[#F4C2C2]/10 rounded-3xl p-5 border border-[#E87A7A]/20">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-[#E87A7A] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-[#2D1B4E] mb-1">Work With Your Provider</h4>
            <p className="text-sm text-[#7C5BA7] leading-relaxed">
              Lab ranges can vary between labs, and what's "optimal" may differ from what's "normal." Always discuss your results with a qualified healthcare provider who can interpret them in context of your symptoms and health history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
