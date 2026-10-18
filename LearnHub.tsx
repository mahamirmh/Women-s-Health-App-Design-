import { useState } from 'react';
import { 
  BookOpen, 
  Brain, 
  Activity, 
  Stethoscope, 
  Search,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Heart,
  Calendar,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { HormoneLearning } from './learn/HormoneLearning';
import { CyclePhaseEducation } from './learn/CyclePhaseEducation';
import { ConditionEducation } from './learn/ConditionEducation';
import { SymptomInsights } from './learn/SymptomInsights';
import { LifestyleTracker } from './learn/LifestyleTracker';
import { LabTestEducation } from './learn/LabTestEducation';
import { HealthCourses } from './learn/HealthCourses';
import { MythBusting } from './learn/MythBusting';
import { MentalHealthConnection } from './learn/MentalHealthConnection';
import { HormoneOfTheWeek } from './learn/HormoneOfTheWeek';

type LearnSection = 
  | 'hub' 
  | 'hormones' 
  | 'cycle-phases' 
  | 'conditions' 
  | 'symptom-insights'
  | 'lifestyle'
  | 'lab-tests'
  | 'courses'
  | 'myths'
  | 'mental-health'
  | 'hormone-weekly';

export function LearnHub() {
  const [currentSection, setCurrentSection] = useState<LearnSection>('hub');

  const sections = [
    {
      id: 'hormones' as LearnSection,
      title: 'Hormone Learning Hub',
      description: 'Understand the core hormones that affect your daily life',
      icon: Brain,
      gradient: 'from-[#B8A4D9] to-[#D4C5F9]',
      textColor: 'text-[#7C5BA7]',
    },
    {
      id: 'cycle-phases' as LearnSection,
      title: 'Cycle Phase Education',
      description: 'Master the 4 phases of your menstrual cycle',
      icon: Calendar,
      gradient: 'from-[#F4C2C2] to-[#FADEDE]',
      textColor: 'text-[#E87A7A]',
    },
    {
      id: 'conditions' as LearnSection,
      title: 'Health Conditions',
      description: 'Learn about PCOS, fibroids, endometriosis & more',
      icon: Stethoscope,
      gradient: 'from-[#A8C5E8] to-[#C8DDEC]',
      textColor: 'text-[#5B8AB8]',
    },
    {
      id: 'symptom-insights' as LearnSection,
      title: 'Symptom Insights',
      description: 'AI-powered tool to understand your symptoms',
      icon: Search,
      gradient: 'from-[#E8B4E8] to-[#F5D9F5]',
      textColor: 'text-[#B87AB8]',
      badge: 'AI Powered',
    },
    {
      id: 'lifestyle' as LearnSection,
      title: 'Lifestyle & Hormones',
      description: 'How sleep, stress, diet affect your hormones',
      icon: Activity,
      gradient: 'from-[#B8D9C7] to-[#D4EDDF]',
      textColor: 'text-[#5BA77C]',
    },
    {
      id: 'lab-tests' as LearnSection,
      title: 'Lab Test Guide',
      description: 'Understand your hormone test results',
      icon: FlaskConical,
      gradient: 'from-[#F4D8A4] to-[#FADEC5]',
      textColor: 'text-[#C8954A]',
    },
    {
      id: 'courses' as LearnSection,
      title: 'Health Courses',
      description: 'Short learning modules on key topics',
      icon: GraduationCap,
      gradient: 'from-[#D9B8D9] to-[#EDC8ED]',
      textColor: 'text-[#A77CA7]',
      badge: 'New',
    },
    {
      id: 'myths' as LearnSection,
      title: 'Myth Busting',
      description: 'Separate facts from fiction about hormones',
      icon: Lightbulb,
      gradient: 'from-[#F4C2D8] to-[#FADEE8]',
      textColor: 'text-[#E87AA8]',
    },
    {
      id: 'mental-health' as LearnSection,
      title: 'Mental Health',
      description: 'How hormones affect mood, anxiety & brain fog',
      icon: Heart,
      gradient: 'from-[#C7B8D9] to-[#DED4ED]',
      textColor: 'text-[#8A7CA7]',
    },
  ];

  if (currentSection !== 'hub') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FAF8FF] via-white to-[#FFF5F8] pb-24">
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-[#F4C2C2]/20">
          <div className="px-6 py-4">
            <button
              onClick={() => setCurrentSection('hub')}
              className="flex items-center gap-2 text-[#7C5BA7] hover:text-[#5B4080] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Learn Hub</span>
            </button>
          </div>
        </div>

        {currentSection === 'hormones' && <HormoneLearning />}
        {currentSection === 'cycle-phases' && <CyclePhaseEducation />}
        {currentSection === 'conditions' && <ConditionEducation />}
        {currentSection === 'symptom-insights' && <SymptomInsights />}
        {currentSection === 'lifestyle' && <LifestyleTracker />}
        {currentSection === 'lab-tests' && <LabTestEducation />}
        {currentSection === 'courses' && <HealthCourses />}
        {currentSection === 'myths' && <MythBusting />}
        {currentSection === 'mental-health' && <MentalHealthConnection />}
        {currentSection === 'hormone-weekly' && <HormoneOfTheWeek />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8FF] via-white to-[#FFF5F8] pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#2D1B4E]">Learn Hub</h1>
            <p className="text-sm text-[#7C5BA7]">Science-based hormonal education</p>
          </div>
        </div>
      </div>

      {/* Featured: Hormone of the Week */}
      <div className="px-6 mb-6">
        <button
          onClick={() => setCurrentSection('hormone-weekly')}
          className="w-full bg-gradient-to-br from-[#7C5BA7] to-[#B8A4D9] rounded-3xl p-6 text-white text-left shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">Featured</span>
            </div>
            <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
              Weekly
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Hormone of the Week</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Learn about one hormone each week with practical tips and insights
          </p>
        </button>
      </div>

      {/* Main Sections Grid */}
      <div className="px-6">
        <h2 className="text-lg font-semibold text-[#2D1B4E] mb-4">Explore Topics</h2>
        <div className="grid gap-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id)}
                className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition-all transform hover:scale-[1.01] active:scale-[0.99] text-left border border-[#F4C2C2]/10"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[#2D1B4E]">{section.title}</h3>
                      {section.badge && (
                        <span className={`px-2 py-0.5 ${section.gradient} bg-gradient-to-r text-white text-xs font-medium rounded-full`}>
                          {section.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#7C5BA7] leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* AI Notice */}
      <div className="px-6 mt-6">
        <div className="bg-gradient-to-br from-[#E8B4E8]/10 to-[#F5D9F5]/10 rounded-3xl p-5 border border-[#E8B4E8]/20">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#B87AB8] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#2D1B4E] mb-1">Powered by AI</h4>
              <p className="text-sm text-[#7C5BA7] leading-relaxed">
                Our educational content is enhanced with AI-driven insights, personalized to your cycle phase and health profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
