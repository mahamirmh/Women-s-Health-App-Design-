import { useState, useEffect } from 'react';
import { Login } from '@/app/components/Login';
import { Onboarding } from '@/app/components/Onboarding';
import { Home } from '@/app/components/Home';
import { Nutrition } from '@/app/components/Nutrition';
import { Fitness } from '@/app/components/Fitness';
import { LearnHub } from '@/app/components/LearnHub';
import { Insights } from '@/app/components/Insights';
import { SylaAI } from '@/app/components/SylaAI';
import { Profile } from '@/app/components/Profile';
import { AiChat } from '@/app/components/AiChat';
import { Premium } from '@/app/components/Premium';
import { WearableSync } from '@/app/components/WearableSync';
import { DailyLog } from '@/app/components/DailyLog';
import { HealthModes } from '@/app/components/HealthModes';
import { Home as HomeIcon, Apple, Dumbbell, BookOpen, Sparkles, MessageCircle, User } from 'lucide-react';

type Screen = 'login' | 'onboarding' | 'home' | 'nutrition' | 'fitness' | 'education' | 'insights' | 'syla-ai' | 'profile' | 'ai-chat' | 'premium' | 'wearable' | 'daily-log' | 'health-modes';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [isPremium, setIsPremium] = useState(true); // Premium unlocked by default

  useEffect(() => {
    // Check login and premium status
    const loggedIn = localStorage.getItem('syla_logged_in') === 'true';
    const onboarded = localStorage.getItem('syla_onboarding_complete') === 'true';
    
    // Set premium to true by default (unlocked)
    localStorage.setItem('syla_premium', 'true');
    
    setIsLoggedIn(loggedIn);
    setOnboardingComplete(onboarded);
    setIsPremium(true); // Always set to true

    if (loggedIn && onboarded) {
      setCurrentScreen('home');
    } else if (loggedIn && !onboarded) {
      setCurrentScreen('onboarding');
    } else {
      setCurrentScreen('login');
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('syla_logged_in', 'true');
    setCurrentScreen('onboarding');
  };

  const completeOnboarding = () => {
    setOnboardingComplete(true);
    localStorage.setItem('syla_onboarding_complete', 'true');
    setCurrentScreen('home');
  };

  const handlePremiumUpgrade = () => {
    setIsPremium(true);
    localStorage.setItem('syla_premium', 'true');
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setOnboardingComplete(false);
    setIsPremium(false);
    localStorage.clear();
    setCurrentScreen('login');
  };

  const renderScreen = () => {
    if (!isLoggedIn) {
      return <Login onLogin={handleLogin} />;
    }

    if (!onboardingComplete) {
      return <Onboarding onComplete={completeOnboarding} />;
    }

    switch (currentScreen) {
      case 'home':
        return <Home onNavigate={setCurrentScreen} />;
      case 'nutrition':
        return isPremium ? <Nutrition /> : <Premium feature="Nutrition Guide" onUpgrade={() => setCurrentScreen('premium')} />;
      case 'fitness':
        return isPremium ? <Fitness /> : <Premium feature="Fitness Guide" onUpgrade={() => setCurrentScreen('premium')} />;
      case 'education':
        return isPremium ? <LearnHub /> : <Premium feature="Hormonal Education" onUpgrade={() => setCurrentScreen('premium')} />;
      case 'insights':
        return <Insights />;
      case 'syla-ai':
        return <SylaAI />;
      case 'profile':
        return <Profile isPremium={isPremium} onNavigate={setCurrentScreen} onLogout={handleLogout} />;
      case 'ai-chat':
        return <AiChat isPremium={isPremium} />;
      case 'premium':
        return <Premium feature="Premium" onUpgrade={handlePremiumUpgrade} />;
      case 'wearable':
        return <WearableSync />;
      case 'daily-log':
        return <DailyLog onComplete={() => setCurrentScreen('home')} />;
      case 'health-modes':
        return <HealthModes onBack={() => setCurrentScreen('profile')} />;
      default:
        return <Home onNavigate={setCurrentScreen} />;
    }
  };

  if (!isLoggedIn || !onboardingComplete) {
    return <div className="min-h-screen">{renderScreen()}</div>;
  }

  return (
    <div className="min-h-screen pb-24">
      {/* Main Content */}
      <main className="max-w-md mx-auto">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-[#EAE4F5] shadow-2xl z-50">
        <div className="max-w-md mx-auto px-2">
          {/* First Row - Main Navigation */}
          <div className="flex justify-around items-center h-16">
            <button
              onClick={() => setCurrentScreen('home')}
              className={`flex flex-col items-center justify-center gap-0.5 transition-all px-2 ${
                currentScreen === 'home' ? 'text-[#B8A4D9]' : 'text-[#827B8D]'
              }`}
            >
              <HomeIcon className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[10px] font-medium">Home</span>
            </button>
            
            <button
              onClick={() => setCurrentScreen('nutrition')}
              className={`flex flex-col items-center justify-center gap-0.5 transition-all px-2 relative ${
                currentScreen === 'nutrition' ? 'text-[#B8A4D9]' : 'text-[#827B8D]'
              }`}
            >
              <Apple className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[10px] font-medium">Nutrition</span>
              {!isPremium && (
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#F4C2C2] rounded-full" />
              )}
            </button>
            
            <button
              onClick={() => setCurrentScreen('fitness')}
              className={`flex flex-col items-center justify-center gap-0.5 transition-all px-2 relative ${
                currentScreen === 'fitness' ? 'text-[#B8A4D9]' : 'text-[#827B8D]'
              }`}
            >
              <Dumbbell className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[10px] font-medium">Fitness</span>
              {!isPremium && (
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#F4C2C2] rounded-full" />
              )}
            </button>
            
            <button
              onClick={() => setCurrentScreen('education')}
              className={`flex flex-col items-center justify-center gap-0.5 transition-all px-2 relative ${
                currentScreen === 'education' ? 'text-[#B8A4D9]' : 'text-[#827B8D]'
              }`}
            >
              <BookOpen className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[10px] font-medium">Learn</span>
              {!isPremium && (
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#F4C2C2] rounded-full" />
              )}
            </button>
          </div>
          
          {/* Second Row */}
          <div className="flex justify-around items-center h-16 border-t border-[#EAE4F5]">
            <button
              onClick={() => setCurrentScreen('insights')}
              className={`flex flex-col items-center justify-center gap-0.5 transition-all px-2 ${
                currentScreen === 'insights' ? 'text-[#B8A4D9]' : 'text-[#827B8D]'
              }`}
            >
              <Sparkles className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[10px] font-medium">Insights</span>
            </button>
            
            <button
              onClick={() => setCurrentScreen('syla-ai')}
              className={`flex flex-col items-center justify-center gap-0.5 transition-all px-2 ${
                currentScreen === 'syla-ai' ? 'text-[#B8A4D9]' : 'text-[#827B8D]'
              }`}
            >
              <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[10px] font-medium">Syla AI</span>
            </button>
            
            <button
              onClick={() => setCurrentScreen('profile')}
              className={`flex flex-col items-center justify-center gap-0.5 transition-all px-2 ${
                currentScreen === 'profile' ? 'text-[#B8A4D9]' : 'text-[#827B8D]'
              }`}
            >
              <User className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-[10px] font-medium">Profile</span>
            </button>
            
            {/* Empty space for balance */}
            <div className="w-12"></div>
          </div>
        </div>
      </nav>

      {/* AI Chat FAB */}
      <button
        onClick={() => setCurrentScreen('ai-chat')}
        className="fixed bottom-32 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] shadow-2xl hover:shadow-3xl transition-all hover:scale-110 flex items-center justify-center z-40"
      >
        <Sparkles className="w-7 h-7 text-white" strokeWidth={2} />
      </button>
    </div>
  );
}