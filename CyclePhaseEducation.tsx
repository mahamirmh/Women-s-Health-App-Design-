import { useState } from 'react';
import { Calendar, TrendingUp, TrendingDown, Battery, Utensils, Dumbbell, Brain, Heart, Droplet, Sparkles, Sun, Flame, Moon, Briefcase, Users, Coffee, Home } from 'lucide-react';

interface CyclePhase {
  id: string;
  name: string;
  days: string;
  tagline: string;
  icon: typeof Sun;
  gradient: string;
  energyLevel: number;
  hormonalChanges: string[];
  moodPatterns: string[];
  productivityTips: string[];
  exerciseSuggestions: string[];
  nutritionTips: string[];
  selfCareTips: string[];
  cycleSyncingTips: string[];
  stressManagement: string[];
}

export function CyclePhaseEducation() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  const phases: CyclePhase[] = [
    {
      id: 'menstrual',
      name: 'Menstrual Phase',
      days: 'Days 1-5',
      tagline: 'Rest & Renewal',
      icon: Moon,
      gradient: 'from-[#A8C5E8] to-[#C8DDEC]',
      energyLevel: 2,
      hormonalChanges: [
        'Estrogen and progesterone are at their lowest',
        'Prostaglandins trigger uterine contractions',
        'Iron levels may drop due to blood loss',
        'Body is shedding the uterine lining',
        'Immune system may be slightly compromised',
      ],
      moodPatterns: [
        'Lower energy and motivation',
        'May feel more introspective and reflective',
        'Relief as PMS symptoms fade',
        'Need for rest and quiet time',
        'Emotional sensitivity and heightened intuition',
        'Potential for creative insights',
      ],
      productivityTips: [
        'Schedule lighter tasks and administrative work',
        'Use this time for reflection and planning',
        'Don\'t push yourself too hard - honor low energy',
        'Focus on organizing and tidying your space',
        'Review goals and set intentions for the new cycle',
        'Delegate when possible',
      ],
      exerciseSuggestions: [
        'Gentle yoga and stretching',
        'Light walking in nature',
        'Restorative yoga practices',
        'Swimming (if comfortable)',
        'Yin yoga for deep relaxation',
        'Avoid intense HIIT or heavy lifting',
      ],
      nutritionTips: [
        'Iron-rich foods (red meat, spinach, lentils)',
        'Vitamin C to enhance iron absorption (citrus, bell peppers)',
        'Warming foods (soups, stews, bone broth)',
        'Stay well hydrated with herbal teas',
        'Foods rich in omega-3s to reduce inflammation',
        'Dark chocolate for magnesium (70%+ cacao)',
        'Avoid excessive caffeine and alcohol',
      ],
      selfCareTips: [
        'Use heat pads for cramps',
        'Take warm baths with Epsom salt',
        'Get extra sleep (8-9 hours)',
        'Practice gentle self-massage',
        'Journal your thoughts and feelings',
        'Watch comfort movies or read',
        'Say no to social obligations if needed',
      ],
      cycleSyncingTips: [
        'This is your winter season - embrace rest',
        'Perfect time to evaluate what worked last cycle',
        'Avoid scheduling important presentations or events',
        'Work from home if possible',
        'Focus on tasks that don\'t require high energy',
        'Practice self-compassion and patience',
      ],
      stressManagement: [
        'Deep breathing exercises',
        'Meditation or mindfulness practices',
        'Gentle movement to ease cramps',
        'Limit screen time before bed',
        'Create a cozy, comfortable environment',
      ],
    },
    {
      id: 'follicular',
      name: 'Follicular Phase',
      days: 'Days 6-14',
      tagline: 'Energy & New Beginnings',
      icon: Sun,
      gradient: 'from-[#F4D8A4] to-[#FADEC5]',
      energyLevel: 4,
      hormonalChanges: [
        'Estrogen rises steadily throughout this phase',
        'FSH (Follicle Stimulating Hormone) stimulates follicle development',
        'Testosterone gradually increases',
        'Body prepares for ovulation',
        'Cervical mucus becomes more fertile',
      ],
      moodPatterns: [
        'Increasing energy and optimism',
        'Enhanced mental clarity and focus',
        'Boosted confidence and self-esteem',
        'Social and outgoing nature',
        'Creative and motivated mindset',
        'Positive outlook on life',
      ],
      productivityTips: [
        'Perfect time to start new projects',
        'Schedule important meetings and presentations',
        'Brainstorm creative solutions',
        'Network and build connections',
        'Take on challenging tasks',
        'Learn new skills or take courses',
      ],
      exerciseSuggestions: [
        'High-intensity interval training (HIIT)',
        'Strength training and weight lifting',
        'Running and cardio workouts',
        'Try new workout classes or activities',
        'Push your fitness limits',
        'Group fitness for social energy',
      ],
      nutritionTips: [
        'Lean proteins for muscle building (chicken, fish, tofu)',
        'Fresh fruits and vegetables',
        'Whole grains for sustained energy (quinoa, oats)',
        'Probiotic foods (yogurt, kefir, kimchi)',
        'Light, energizing meals',
        'Green smoothies with leafy greens',
        'Fermented foods for gut health',
      ],
      selfCareTips: [
        'Try new experiences and adventures',
        'Schedule social activities with friends',
        'Book that presentation or job interview',
        'Spring clean your space',
        'Set ambitious goals for the month',
        'Experiment with your style and appearance',
      ],
      cycleSyncingTips: [
        'This is your spring season - plant seeds for new ideas',
        'Best time for job interviews or important meetings',
        'Schedule creative brainstorming sessions',
        'Say yes to social invitations',
        'Start new habits or routines',
        'Take calculated risks',
      ],
      stressManagement: [
        'Channel high energy into productive activities',
        'Morning workouts to start the day energized',
        'Social connection for emotional support',
        'Creative outlets like art or writing',
      ],
    },
    {
      id: 'ovulation',
      name: 'Ovulation',
      days: 'Days 14-17',
      tagline: 'Peak Power & Connection',
      icon: Flame,
      gradient: 'from-[#F4C2C2] to-[#FADEDE]',
      energyLevel: 5,
      hormonalChanges: [
        'Estrogen peaks at its highest point',
        'LH (Luteinizing Hormone) surge triggers egg release',
        'Testosterone at its highest level',
        'Most fertile window of the cycle',
        'Increased pheromone production',
      ],
      moodPatterns: [
        'Peak confidence and charisma',
        'Heightened libido and sexual energy',
        'Strong communication skills',
        'Magnetic energy and attractiveness',
        'Outgoing and highly expressive',
        'Emotionally resilient',
      ],
      productivityTips: [
        'Schedule your most important presentations',
        'Have crucial conversations and negotiations',
        'Network and build valuable connections',
        'Close deals and make important decisions',
        'Lead meetings and take charge of initiatives',
        'Public speaking or performance opportunities',
      ],
      exerciseSuggestions: [
        'Maximum intensity workouts',
        'Competitive sports and activities',
        'Heavy lifting sessions',
        'Dance classes and Zumba',
        'Push for personal records',
        'Challenging endurance activities',
      ],
      nutritionTips: [
        'Antioxidant-rich foods (berries, dark leafy greens)',
        'Foods that support detoxification (cruciferous vegetables)',
        'Raw fruits and vegetables',
        'Lighter meals to avoid feeling sluggish',
        'Stay very well hydrated',
        'Fiber to help process excess estrogen',
        'Colorful plant-based foods',
      ],
      selfCareTips: [
        'Embrace social opportunities fully',
        'Wear your favorite outfits - you\'ll feel amazing',
        'Schedule dates or quality time with partner',
        'Public speaking or performance engagements',
        'Creative pursuits and self-expression',
        'Celebrate your achievements',
      ],
      cycleSyncingTips: [
        'This is your summer season - shine bright',
        'Perfect timing for first dates or romantic gestures',
        'Schedule photoshoots or video calls',
        'Host events or lead group activities',
        'Ask for that raise or promotion',
        'Make your boldest moves',
      ],
      stressManagement: [
        'High energy activities to channel power',
        'Social gatherings for connection',
        'Express yourself creatively',
        'Celebrate wins and successes',
      ],
    },
    {
      id: 'luteal',
      name: 'Luteal Phase',
      days: 'Days 18-28',
      tagline: 'Nesting & Completion',
      icon: Sparkles,
      gradient: 'from-[#B8A4D9] to-[#D4C5F9]',
      energyLevel: 3,
      hormonalChanges: [
        'Progesterone rises steadily after ovulation',
        'Estrogen fluctuates then gradually drops',
        'Body prepares for potential pregnancy',
        'PMS symptoms may emerge in late luteal phase',
        'Body temperature increases slightly',
        'Serotonin levels may decrease',
      ],
      moodPatterns: [
        'Energy starts high then gradually decreases',
        'Increased need for comfort and routine',
        'May experience mood swings (especially late phase)',
        'Desire for nesting and organization',
        'Possible irritability and sensitivity',
        'Need for alone time increases',
        'Cravings intensify (especially for carbs and sweets)',
      ],
      productivityTips: [
        'Focus on completing existing projects',
        'Organize and systematize workflows',
        'Detail-oriented tasks and editing',
        'Administrative work and paperwork',
        'Wrap up loose ends before next cycle',
        'Prepare and plan for the upcoming cycle',
      ],
      exerciseSuggestions: [
        'Moderate cardio and jogging',
        'Pilates and barre classes',
        'Power yoga and vinyasa',
        'Walking and hiking in nature',
        'Swimming for gentle full-body movement',
        'Reduce intensity in late luteal phase',
      ],
      nutritionTips: [
        'Complex carbohydrates (sweet potato, quinoa, brown rice)',
        'Magnesium-rich foods (leafy greens, nuts, seeds)',
        'Foods high in B vitamins (whole grains, eggs)',
        'Healthy fats to support progesterone (avocado, olive oil)',
        'Calcium-rich foods (dairy, almonds, sesame)',
        'Limit caffeine and alcohol (especially late phase)',
        'Dark leafy greens to combat bloating',
      ],
      selfCareTips: [
        'Honor your need for downtime and rest',
        'Create cozy, comfortable environments',
        'Practice stress management techniques',
        'Get adequate sleep (7-8 hours minimum)',
        'Gentle movement and stretching',
        'Prepare for upcoming menstruation',
        'Set boundaries with social commitments',
      ],
      cycleSyncingTips: [
        'This is your autumn season - harvest and complete',
        'Perfect time to finish projects and tasks',
        'Avoid starting new major initiatives',
        'Focus on details and quality control',
        'Clear your schedule for menstruation week',
        'Practice saying no to preserve energy',
      ],
      stressManagement: [
        'Magnesium supplements or Epsom salt baths',
        'Gentle yoga and stretching',
        'Journaling to process emotions',
        'Reduce commitments in late luteal phase',
        'Meditation and breathwork',
      ],
    },
  ];

  const selectedPhaseData = phases.find(p => p.id === selectedPhase);

  if (selectedPhaseData) {
    const Icon = selectedPhaseData.icon;
    return (
      <div className="px-6 py-6">
        <button
          onClick={() => setSelectedPhase(null)}
          className="mb-6 text-[#7C5BA7] hover:text-[#5B4080] transition-colors"
        >
          ← Back to All Phases
        </button>

        {/* Phase Header */}
        <div className={`bg-gradient-to-br ${selectedPhaseData.gradient} rounded-3xl p-6 mb-6 shadow-lg`}>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-white/80 text-sm font-medium mb-1">{selectedPhaseData.days}</div>
              <h2 className="text-2xl font-bold text-white mb-1">{selectedPhaseData.name}</h2>
              <p className="text-white/90 text-sm">{selectedPhaseData.tagline}</p>
            </div>
          </div>

          {/* Energy Level */}
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/80 text-sm font-medium">Energy Level</span>
              <span className="text-white font-bold">{selectedPhaseData.energyLevel}/5</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`flex-1 h-2 rounded-full ${
                    level <= selectedPhaseData.energyLevel
                      ? 'bg-white'
                      : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Hormonal Changes */}
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-sm border border-[#F4C2C2]/10">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#7C5BA7]" />
            Hormonal Changes
          </h3>
          <ul className="space-y-2">
            {selectedPhaseData.hormonalChanges.map((change, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                <span>{change}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mood Patterns */}
        <div className="bg-white rounded-3xl p-6 mb-4 shadow-sm border border-[#F4C2C2]/10">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Brain className="w-5 h-5 text-[#E87AA8]" />
            Mood Changes
          </h3>
          <ul className="space-y-2">
            {selectedPhaseData.moodPatterns.map((mood, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E87AA8] mt-1.5 flex-shrink-0" />
                <span>{mood}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Productivity Tips */}
        <div className="bg-gradient-to-br from-[#F4D8A4]/10 to-[#FADEC5]/10 rounded-3xl p-6 mb-4 border border-[#F4D8A4]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#C8954A]" />
            Productivity Patterns
          </h3>
          <ul className="space-y-2">
            {selectedPhaseData.productivityTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8954A] mt-1.5 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exercise Suggestions */}
        <div className="bg-gradient-to-br from-[#B8D9C7]/10 to-[#D4EDDF]/10 rounded-3xl p-6 mb-4 border border-[#B8D9C7]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-[#5BA77C]" />
            Exercise Suggestions
          </h3>
          <ul className="space-y-2">
            {selectedPhaseData.exerciseSuggestions.map((exercise, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5BA77C] mt-1.5 flex-shrink-0" />
                <span>{exercise}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nutrition Tips */}
        <div className="bg-gradient-to-br from-[#F4C2C2]/10 to-[#FADEDE]/10 rounded-3xl p-6 mb-4 border border-[#F4C2C2]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-[#E87A7A]" />
            Nutrition Tips
          </h3>
          <ul className="space-y-2">
            {selectedPhaseData.nutritionTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E87A7A] mt-1.5 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cycle Syncing Tips */}
        <div className="bg-gradient-to-br from-[#B8A4D9]/10 to-[#D4C5F9]/10 rounded-3xl p-6 mb-4 border border-[#B8A4D9]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#7C5BA7]" />
            Cycle Syncing Strategy
          </h3>
          <ul className="space-y-2">
            {selectedPhaseData.cycleSyncingTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stress Management */}
        <div className="bg-gradient-to-br from-[#E8B4E8]/10 to-[#F5D9F5]/10 rounded-3xl p-6 mb-4 border border-[#E8B4E8]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#B87AB8]" />
            Stress Management
          </h3>
          <ul className="space-y-2">
            {selectedPhaseData.stressManagement.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B87AB8] mt-1.5 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Self-Care Tips */}
        <div className="bg-gradient-to-br from-[#F4D8A4]/10 to-[#FADEC5]/10 rounded-3xl p-6 border border-[#F4D8A4]/20">
          <h3 className="font-semibold text-[#2D1B4E] mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#C8954A]" />
            Self-Care Tips
          </h3>
          <ul className="space-y-2">
            {selectedPhaseData.selfCareTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-[#7C5BA7]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8954A] mt-1.5 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl font-bold text-[#2D1B4E] mb-2">The 4 Cycle Phases</h2>
      <p className="text-[#7C5BA7] mb-6">
        Master cycle syncing to optimize your energy, productivity, and well-being
      </p>

      {/* Cycle Diagram */}
      <div className="bg-gradient-to-br from-[#B8A4D9]/10 to-[#D4C5F9]/10 rounded-3xl p-6 mb-6 border border-[#B8A4D9]/20">
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] mb-3">
            <Droplet className="w-10 h-10 text-white" />
          </div>
          <h3 className="font-semibold text-[#2D1B4E] mb-1">Understanding Your Cycle</h3>
          <p className="text-sm text-[#7C5BA7]">
            Your menstrual cycle is typically 28 days, but anywhere from 21-35 days is normal
          </p>
        </div>
      </div>

      {/* Phase Cards */}
      <div className="grid gap-4">
        {phases.map((phase) => {
          const Icon = phase.icon;
          return (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all transform hover:scale-[1.01] active:scale-[0.99] text-left border border-[#F4C2C2]/10"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[#2D1B4E]">{phase.name}</h3>
                    <span className="text-xs text-[#7C5BA7] bg-[#B8A4D9]/10 px-2 py-0.5 rounded-full">
                      {phase.days}
                    </span>
                  </div>
                  <p className="text-sm text-[#7C5BA7] mb-2">{phase.tagline}</p>
                  <div className="flex items-center gap-2">
                    <Battery className="w-4 h-4 text-[#7C5BA7]" />
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          className={`w-2 h-2 rounded-full ${
                            level <= phase.energyLevel
                              ? 'bg-[#B8A4D9]'
                              : 'bg-[#B8A4D9]/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* What is Cycle Syncing */}
      <div className="mt-6 bg-white rounded-3xl p-6 shadow-sm border border-[#F4C2C2]/10">
        <h3 className="font-semibold text-[#2D1B4E] mb-3">What is Cycle Syncing?</h3>
        <p className="text-sm text-[#7C5BA7] leading-relaxed mb-3">
          Cycle syncing is the practice of aligning your lifestyle with your hormonal fluctuations throughout the month. By understanding what's happening in your body during each phase, you can:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-[#7C5BA7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
            <span>Optimize your workouts for better results and recovery</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-[#7C5BA7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
            <span>Schedule important tasks when you're naturally more productive</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-[#7C5BA7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
            <span>Eat foods that support your hormones in each phase</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-[#7C5BA7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
            <span>Better understand your moods and energy levels</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-[#7C5BA7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
            <span>Reduce PMS symptoms and hormonal imbalances</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-[#7C5BA7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
            <span>Work with your body instead of against it</span>
          </li>
        </ul>
      </div>

      {/* App Suggestion Card */}
      <div className="mt-4 bg-gradient-to-br from-[#E87AA8]/10 to-[#F4C2C2]/10 rounded-3xl p-5 border border-[#E87AA8]/20">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-[#E87AA8] flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-[#2D1B4E] mb-1">Syla Tracks This For You!</h4>
            <p className="text-sm text-[#7C5BA7] leading-relaxed">
              Based on where you are in your cycle, Syla AI provides personalized recommendations for exercise, nutrition, and lifestyle adjustments. Track your symptoms to get even more accurate insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}