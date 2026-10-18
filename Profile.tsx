import { User, Bell, Lock, Settings, HelpCircle, LogOut, ChevronRight, Crown, Heart } from 'lucide-react';

interface ProfileProps {
  isPremium: boolean;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
}

export function Profile({ isPremium, onNavigate, onLogout }: ProfileProps) {
  const menuItems = [
    { icon: Heart, label: 'Health Modes', color: 'from-[#F4C2C2] to-[#FADEDE]', onClick: () => onNavigate('health-modes') },
    { icon: User, label: 'Personal Information', color: 'from-[#B8A4D9] to-[#D4C5F9]' },
    { icon: Bell, label: 'Notifications', color: 'from-[#D4C5F9] to-[#EAE4F5]' },
    { icon: Lock, label: 'Privacy & Security', color: 'from-[#EAE4F5] to-[#FADEDE]' },
    { icon: Settings, label: 'Cycle Settings', color: 'from-[#FADEDE] to-[#F4C2C2]' },
    { icon: HelpCircle, label: 'Help & Support', color: 'from-[#F4C2C2] to-[#FADEDE]' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7] p-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] rounded-[32px] p-8 mb-6 shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <User className="w-10 h-10 text-white" strokeWidth={1.5} />
          </div>
          <div className="flex-1 text-white">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl">Sarah</h2>
              {isPremium && (
                <div className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm flex items-center gap-1">
                  <Crown className="w-3 h-3 text-white" strokeWidth={2} />
                  <span className="text-xs text-white">Premium</span>
                </div>
              )}
            </div>
            <p className="text-white/80 text-sm">sarah@email.com</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
          <div>
            <p className="text-white/70 text-sm mb-1">Streak</p>
            <p className="text-2xl text-white">28d</p>
          </div>
          <div>
            <p className="text-white/70 text-sm mb-1">Logged</p>
            <p className="text-2xl text-white">89</p>
          </div>
          <div>
            <p className="text-white/70 text-sm mb-1">Member</p>
            <p className="text-2xl text-white">3mo</p>
          </div>
        </div>
      </div>

      {/* Premium Upsell or Manage */}
      {!isPremium ? (
        <button
          onClick={() => onNavigate('premium')}
          className="w-full bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] rounded-[24px] p-6 mb-6 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex-1 text-left">
              <p className="text-white font-medium mb-1">Upgrade to Premium</p>
              <p className="text-white/80 text-sm">Unlock nutrition, fitness, and more</p>
            </div>
            <ChevronRight className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
        </button>
      ) : (
        <div className="bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] rounded-[24px] p-6 mb-6 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Crown className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium mb-1">Premium Member</p>
              <p className="text-white/80 text-sm">Annual plan • Renews Mar 2027</p>
            </div>
          </div>
          <button className="w-full bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-white text-sm hover:bg-white/30 transition-all">
            Manage Subscription
          </button>
        </div>
      )}

      {/* Menu Items */}
      <div className="space-y-3 mb-6">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className="w-full bg-white rounded-[24px] p-5 shadow-sm border border-[#EAE4F5] hover:border-[#B8A4D9] transition-all flex items-center gap-4"
              onClick={item.onClick}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <p className="flex-1 text-left text-[#4A4458] font-medium">{item.label}</p>
              <ChevronRight className="w-5 h-5 text-[#827B8D]" strokeWidth={1.5} />
            </button>
          );
        })}
      </div>

      {/* App Info */}
      <div className="bg-white rounded-[24px] p-5 mb-4 shadow-sm border border-[#EAE4F5]">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-[#827B8D]">App Version</p>
          <p className="text-sm text-[#4A4458] font-medium">1.0.0</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#827B8D]">Data Privacy</p>
          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9]">
            <p className="text-xs text-white font-medium">Protected</p>
          </div>
        </div>
      </div>

      {/* Logout */}
      <button 
        onClick={onLogout}
        className="w-full bg-white rounded-[24px] p-5 shadow-sm border border-[#EAE4F5] hover:border-[#F4C2C2] transition-all flex items-center justify-center gap-3"
      >
        <LogOut className="w-5 h-5 text-[#F4C2C2]" strokeWidth={1.5} />
        <span className="text-[#F4C2C2] font-medium">Log Out</span>
      </button>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-[#827B8D] mb-2">Made with ♥ for women's health</p>
        <p className="text-xs text-[#827B8D]">Calm, private, empowering</p>
      </div>
    </div>
  );
}