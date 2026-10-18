interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B8A4D9] via-[#D4C5F9] to-[#FADEDE] flex flex-col items-center justify-center p-6">
      {/* Logo/Brand */}
      <div className="mb-12 text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-[32px] bg-white/20 backdrop-blur-xl border-2 border-white/40 flex items-center justify-center shadow-2xl">
          <span className="text-5xl">🌸</span>
        </div>
        <h1 className="text-5xl text-white mb-3 font-light">Syla</h1>
        <p className="text-white/90 text-lg">Your cycle, understood</p>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-sm">
        <div className="bg-white/95 backdrop-blur-xl rounded-[32px] p-8 shadow-2xl border border-white/50">
          <h2 className="text-2xl text-[#4A4458] mb-2 text-center">Welcome</h2>
          <p className="text-[#827B8D] text-center mb-8">
            Track your cycle, understand your body
          </p>

          {/* Google Login Button */}
          <button
            onClick={onLogin}
            className="w-full bg-white border-2 border-[#EAE4F5] rounded-[20px] px-6 py-4 mb-4 hover:border-[#B8A4D9] hover:shadow-lg transition-all flex items-center justify-center gap-3"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-[#4A4458] font-medium">Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#EAE4F5]" />
            <span className="text-sm text-[#827B8D]">or</span>
            <div className="flex-1 h-px bg-[#EAE4F5]" />
          </div>

          {/* Email Login (Demo) */}
          <button
            onClick={onLogin}
            className="w-full bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white rounded-[20px] px-6 py-4 hover:shadow-xl transition-all font-medium"
          >
            Continue with Email
          </button>

          {/* Privacy Note */}
          <p className="text-xs text-[#827B8D] text-center mt-6 leading-relaxed">
            By continuing, you agree to our Terms of Service and Privacy Policy. Your health data is encrypted and private.
          </p>
        </div>

        {/* Features Preview */}
        <div className="mt-8 space-y-3">
          {[
            { emoji: '📊', text: 'Track your complete cycle' },
            { emoji: '🤖', text: 'AI-powered insights & predictions' },
            { emoji: '🌸', text: 'Wearable integration (coming soon)' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white/90">
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-white/70 text-sm">
          Your body isn't broken. Let's understand it together. 💜
        </p>
      </div>
    </div>
  );
}
