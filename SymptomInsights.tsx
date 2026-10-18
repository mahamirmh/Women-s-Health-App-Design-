import { useState } from 'react';
import { Search, Sparkles, AlertCircle, TrendingUp, CheckCircle, Brain, Info } from 'lucide-react';

interface Symptom {
  id: string;
  name: string;
  category: string;
}

export function SymptomInsights() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showInsights, setShowInsights] = useState(false);

  const symptoms: Symptom[] = [
    // Physical Symptoms
    { id: 'fatigue', name: 'Fatigue', category: 'Physical' },
    { id: 'acne', name: 'Acne', category: 'Physical' },
    { id: 'irregular-periods', name: 'Irregular Periods', category: 'Physical' },
    { id: 'heavy-bleeding', name: 'Heavy Bleeding', category: 'Physical' },
    { id: 'hair-loss', name: 'Hair Loss', category: 'Physical' },
    { id: 'weight-gain', name: 'Weight Gain', category: 'Physical' },
    { id: 'bloating', name: 'Bloating', category: 'Physical' },
    { id: 'cramps', name: 'Severe Cramps', category: 'Physical' },
    { id: 'breast-tenderness', name: 'Breast Tenderness', category: 'Physical' },
    { id: 'headaches', name: 'Headaches', category: 'Physical' },
    { id: 'hot-flashes', name: 'Hot Flashes', category: 'Physical' },
    { id: 'night-sweats', name: 'Night Sweats', category: 'Physical' },
    
    // Emotional/Mental
    { id: 'anxiety', name: 'Anxiety', category: 'Emotional' },
    { id: 'depression', name: 'Depression', category: 'Emotional' },
    { id: 'mood-swings', name: 'Mood Swings', category: 'Emotional' },
    { id: 'irritability', name: 'Irritability', category: 'Emotional' },
    { id: 'brain-fog', name: 'Brain Fog', category: 'Emotional' },
    { id: 'low-motivation', name: 'Low Motivation', category: 'Emotional' },
    
    // Metabolic
    { id: 'sugar-cravings', name: 'Sugar Cravings', category: 'Metabolic' },
    { id: 'difficulty-losing-weight', name: 'Difficulty Losing Weight', category: 'Metabolic' },
    { id: 'low-energy', name: 'Low Energy', category: 'Metabolic' },
    
    // Other
    { id: 'sleep-issues', name: 'Sleep Issues', category: 'Other' },
    { id: 'low-libido', name: 'Low Libido', category: 'Other' },
    { id: 'digestive-issues', name: 'Digestive Issues', category: 'Other' },
  ];

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptomId)
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
    setShowInsights(false);
  };

  const getInsights = () => {
    if (selectedSymptoms.length === 0) return null;

    // AI-driven pattern recognition
    const hasAndrogensPattern = 
      selectedSymptoms.includes('acne') && 
      selectedSymptoms.includes('irregular-periods') && 
      (selectedSymptoms.includes('weight-gain') || selectedSymptoms.includes('hair-loss'));

    const hasLowProgesterone = 
      selectedSymptoms.includes('anxiety') && 
      selectedSymptoms.includes('sleep-issues') && 
      selectedSymptoms.includes('irregular-periods');

    const hasInsulinResistance = 
      selectedSymptoms.includes('weight-gain') && 
      selectedSymptoms.includes('sugar-cravings') && 
      selectedSymptoms.includes('fatigue');

    const hasLowEstrogen = 
      selectedSymptoms.includes('hot-flashes') || 
      selectedSymptoms.includes('night-sweats') || 
      (selectedSymptoms.includes('fatigue') && selectedSymptoms.includes('low-libido'));

    const hasHighEstrogen = 
      selectedSymptoms.includes('heavy-bleeding') && 
      selectedSymptoms.includes('breast-tenderness') && 
      selectedSymptoms.includes('bloating');

    const hasThyroidIssues = 
      selectedSymptoms.includes('fatigue') && 
      selectedSymptoms.includes('weight-gain') && 
      selectedSymptoms.includes('brain-fog');

    const hasHighCortisol = 
      selectedSymptoms.includes('anxiety') && 
      selectedSymptoms.includes('sleep-issues') && 
      selectedSymptoms.includes('weight-gain');

    return {
      hasAndrogensPattern,
      hasLowProgesterone,
      hasInsulinResistance,
      hasLowEstrogen,
      hasHighEstrogen,
      hasThyroidIssues,
      hasHighCortisol,
    };
  };

  const insights = getInsights();

  const categorySymptoms = {
    Physical: symptoms.filter(s => s.category === 'Physical'),
    Emotional: symptoms.filter(s => s.category === 'Emotional'),
    Metabolic: symptoms.filter(s => s.category === 'Metabolic'),
    Other: symptoms.filter(s => s.category === 'Other'),
  };

  return (
    <div className="px-6 py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#2D1B4E] mb-2">Symptom Insights</h2>
        <p className="text-[#7C5BA7] mb-4">
          Select your symptoms to discover possible hormonal patterns
        </p>

        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E8B4E8] to-[#F5D9F5] text-white px-4 py-2 rounded-full text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          AI-Powered Analysis
        </div>
      </div>

      {/* Symptom Selection */}
      {Object.entries(categorySymptoms).map(([category, categoryItems]) => (
        <div key={category} className="mb-6">
          <h3 className="font-semibold text-[#2D1B4E] mb-3">{category} Symptoms</h3>
          <div className="grid grid-cols-2 gap-2">
            {categoryItems.map((symptom) => {
              const isSelected = selectedSymptoms.includes(symptom.id);
              return (
                <button
                  key={symptom.id}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={`p-3 rounded-2xl text-sm font-medium transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] text-white shadow-md'
                      : 'bg-white text-[#7C5BA7] border border-[#F4C2C2]/20 hover:border-[#B8A4D9]/40'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {isSelected && <CheckCircle className="w-4 h-4" />}
                    <span>{symptom.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Analyze Button */}
      {selectedSymptoms.length > 0 && (
        <button
          onClick={() => setShowInsights(true)}
          className="w-full bg-gradient-to-r from-[#7C5BA7] to-[#B8A4D9] text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Brain className="w-5 h-5" />
          Analyze My Symptoms ({selectedSymptoms.length})
        </button>
      )}

      {/* AI Insights */}
      {showInsights && insights && selectedSymptoms.length > 0 && (
        <div className="mt-6 space-y-4">
          <div className="bg-gradient-to-br from-[#E8B4E8]/10 to-[#F5D9F5]/10 rounded-3xl p-5 border border-[#E8B4E8]/20">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#B87AB8]" />
              <h3 className="font-semibold text-[#2D1B4E]">AI Analysis Results</h3>
            </div>
            <p className="text-sm text-[#7C5BA7] leading-relaxed mb-4">
              Based on your selected symptoms, here are possible hormonal patterns. Remember, this is educational guidance only—consult a healthcare provider for diagnosis.
            </p>
          </div>

          {/* Possible Patterns */}
          {insights.hasAndrogensPattern && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#F4C2C2]/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#2D1B4E] mb-1">Possible Androgen Imbalance</h4>
                  <p className="text-sm text-[#7C5BA7] mb-3">
                    Your symptoms suggest possible high androgens, which may indicate PCOS or androgen excess.
                  </p>
                  <div className="text-xs text-[#7C5BA7] space-y-1">
                    <p><strong>What to do:</strong></p>
                    <ul className="list-disc list-inside space-y-0.5 ml-2">
                      <li>Consider testing: Total/Free Testosterone, DHEA-S, LH/FSH</li>
                      <li>Focus on low-glycemic diet and regular exercise</li>
                      <li>Consult with a healthcare provider about PCOS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {insights.hasLowProgesterone && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#F4C2C2]/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#2D1B4E] mb-1">Possible Low Progesterone</h4>
                  <p className="text-sm text-[#7C5BA7] mb-3">
                    Your symptoms suggest low progesterone, especially during the luteal phase.
                  </p>
                  <div className="text-xs text-[#7C5BA7] space-y-1">
                    <p><strong>What to do:</strong></p>
                    <ul className="list-disc list-inside space-y-0.5 ml-2">
                      <li>Track your cycle to confirm ovulation</li>
                      <li>Consider Day 21 progesterone test</li>
                      <li>Focus on stress management and adequate sleep</li>
                      <li>Increase foods rich in B6, magnesium, and zinc</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {insights.hasInsulinResistance && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#F4C2C2]/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B8D9C7] to-[#D4EDDF] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#2D1B4E] mb-1">Possible Insulin Resistance</h4>
                  <p className="text-sm text-[#7C5BA7] mb-3">
                    Your symptoms suggest possible insulin resistance or blood sugar dysregulation.
                  </p>
                  <div className="text-xs text-[#7C5BA7] space-y-1">
                    <p><strong>What to do:</strong></p>
                    <ul className="list-disc list-inside space-y-0.5 ml-2">
                      <li>Get fasting insulin and glucose tested</li>
                      <li>Reduce refined carbs and sugar intake</li>
                      <li>Add strength training and post-meal walks</li>
                      <li>Consider intermittent fasting (with medical guidance)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {insights.hasLowEstrogen && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#F4C2C2]/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4C2C2] to-[#FADEDE] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#2D1B4E] mb-1">Possible Low Estrogen</h4>
                  <p className="text-sm text-[#7C5BA7] mb-3">
                    Your symptoms suggest low estrogen, which may be related to perimenopause, over-exercise, or low body weight.
                  </p>
                  <div className="text-xs text-[#7C5BA7] space-y-1">
                    <p><strong>What to do:</strong></p>
                    <ul className="list-disc list-inside space-y-0.5 ml-2">
                      <li>Get estradiol and FSH tested</li>
                      <li>Ensure adequate calorie and fat intake</li>
                      <li>Avoid over-exercising</li>
                      <li>Consult about perimenopause if over 40</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {insights.hasHighEstrogen && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#F4C2C2]/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4C2C2] to-[#FADEDE] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#2D1B4E] mb-1">Possible Estrogen Dominance</h4>
                  <p className="text-sm text-[#7C5BA7] mb-3">
                    Your symptoms suggest high estrogen relative to progesterone.
                  </p>
                  <div className="text-xs text-[#7C5BA7] space-y-1">
                    <p><strong>What to do:</strong></p>
                    <ul className="list-disc list-inside space-y-0.5 ml-2">
                      <li>Increase cruciferous vegetables (support estrogen metabolism)</li>
                      <li>Support liver health</li>
                      <li>Increase fiber intake</li>
                      <li>Limit alcohol and xenoestrogen exposure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {insights.hasThyroidIssues && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#F4C2C2]/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A8C5E8] to-[#C8DDEC] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#2D1B4E] mb-1">Possible Thyroid Dysfunction</h4>
                  <p className="text-sm text-[#7C5BA7] mb-3">
                    Your symptoms suggest possible hypothyroidism (underactive thyroid).
                  </p>
                  <div className="text-xs text-[#7C5BA7] space-y-1">
                    <p><strong>What to do:</strong></p>
                    <ul className="list-disc list-inside space-y-0.5 ml-2">
                      <li>Get comprehensive thyroid panel (TSH, Free T3, Free T4, antibodies)</li>
                      <li>Ensure adequate iodine, selenium, and zinc</li>
                      <li>Manage stress and prioritize sleep</li>
                      <li>See an endocrinologist if tests are abnormal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {insights.hasHighCortisol && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#F4C2C2]/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F4D8A4] to-[#FADEC5] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[#2D1B4E] mb-1">Possible High Cortisol</h4>
                  <p className="text-sm text-[#7C5BA7] mb-3">
                    Your symptoms suggest chronic stress and elevated cortisol levels.
                  </p>
                  <div className="text-xs text-[#7C5BA7] space-y-1">
                    <p><strong>What to do:</strong></p>
                    <ul className="list-disc list-inside space-y-0.5 ml-2">
                      <li>Prioritize stress management techniques</li>
                      <li>Improve sleep quality and duration</li>
                      <li>Consider adaptogenic herbs (ashwagandha, rhodiola)</li>
                      <li>Reduce caffeine intake</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* No clear patterns */}
          {!insights.hasAndrogensPattern && 
           !insights.hasLowProgesterone && 
           !insights.hasInsulinResistance && 
           !insights.hasLowEstrogen && 
           !insights.hasHighEstrogen && 
           !insights.hasThyroidIssues && 
           !insights.hasHighCortisol && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#F4C2C2]/10">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#7C5BA7] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-[#2D1B4E] mb-1">No Clear Pattern Detected</h4>
                  <p className="text-sm text-[#7C5BA7]">
                    Your symptoms don't match a specific hormonal pattern. This could be normal cycle variations, or you may need more comprehensive evaluation. Consider keeping a symptom diary and consulting with a healthcare provider.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="bg-gradient-to-br from-[#E87A7A]/10 to-[#F4C2C2]/10 rounded-3xl p-5 border border-[#E87A7A]/20">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#E87A7A] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-[#2D1B4E] mb-1">Important Reminder</h4>
                <p className="text-sm text-[#7C5BA7] leading-relaxed">
                  This tool provides educational insights based on symptom patterns. It is NOT a diagnosis. Always consult with a qualified healthcare provider for proper evaluation, testing, and treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
