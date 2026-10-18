import { useState } from 'react';
import { Dumbbell, Flame, Heart, Moon, Sun, Zap, Leaf, Play, Clock, TrendingUp, AlertCircle, Sparkles } from 'lucide-react';

interface WorkoutVideo {
  title: string;
  duration: string;
  intensity: 'Low' | 'Moderate' | 'High' | 'Peak';
  type: string;
  youtubeId: string; // Placeholder - would be real YouTube IDs
  thumbnail: string;
  trainer?: string;
}

export function Fitness() {
  const [selectedPhase, setSelectedPhase] = useState<'menstrual' | 'follicular' | 'ovulation' | 'luteal'>('luteal');
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutVideo | null>(null);

  const fitnessData = {
    menstrual: {
      name: 'Menstrual Phase',
      days: '1-5',
      color: 'from-[#F4C2C2] to-[#FADEDE]',
      icon: Moon,
      emoji: '🌙',
      hormones: {
        estrogen: 'Low',
        progesterone: 'Low',
        testosterone: 'Rising slightly',
        cortisol: 'Can be elevated',
      },
      performanceFactors: {
        energy: 'Lowest point of cycle',
        strength: 'Reduced (40-50% of peak)',
        endurance: 'Lower than usual',
        recovery: 'Slower (hormones at minimum)',
        painTolerance: 'Lowest (prostaglandins)',
        motivation: 'Often low',
      },
      why: 'All sex hormones are at their lowest, which means less muscle-building testosterone, less energizing estrogen, and slower recovery. Your body is losing blood and nutrients. Prostaglandins cause inflammation and pain. This is your body\'s REST phase - honor it. Light movement helps cramps by increasing blood flow, but intense exercise can worsen symptoms and delay recovery.',
      focus: [
        'Reduce inflammation and cramping through gentle movement',
        'Maintain blood flow without exhausting the body',
        'Prioritize rest and recovery over performance',
        'Listen to your body - some days you need complete rest',
        'Avoid high-impact and heavy lifting (increased injury risk)',
      ],
      intensityGuideline: '30-50% of your max effort. If it feels hard, stop.',
      bestWorkouts: [
        {
          type: 'Restorative Yoga',
          why: 'Reduces cortisol, increases blood flow to pelvic area, stretches cramping muscles',
          duration: '20-30 min',
          frequency: 'Daily if it feels good',
          specifics: 'Child\'s pose, supine twist, legs up the wall, cat-cow, pigeon pose',
        },
        {
          type: 'Gentle Walking',
          why: 'Light cardio increases endorphins (natural painkillers), doesn\'t tax recovery',
          duration: '15-30 min',
          frequency: 'Daily',
          specifics: 'Flat terrain, conversational pace, nature walks ideal for stress reduction',
        },
        {
          type: 'Yin Yoga / Stretching',
          why: 'Long-held stretches release muscle tension, calms nervous system',
          duration: '30-45 min',
          frequency: '3-4x per week',
          specifics: 'Hold poses 3-5 minutes, focus on hips, lower back, hamstrings',
        },
        {
          type: 'Pilates (Modified)',
          why: 'Core engagement without high impact, improves posture, gentle strengthening',
          duration: '20-30 min',
          frequency: '2-3x per week',
          specifics: 'Skip planks and high-intensity moves, focus on breath and control',
        },
        {
          type: 'Swimming (Easy)',
          why: 'Water supports body weight, reduces cramping, gentle full-body movement',
          duration: '20-30 min',
          frequency: '1-2x per week if accessible',
          specifics: 'Easy laps, no sprints, water temperature should be warm',
        },
      ],
      avoidWorkouts: [
        '❌ HIIT / High-Intensity Intervals (depletes already low energy, worsens cramps)',
        '❌ Heavy Weightlifting (injury risk high, recovery impaired, testosterone low)',
        '❌ Long-Distance Running (inflammation increases, immune system stressed)',
        '❌ Plyometrics / Jumping (high impact worsens pelvic pain)',
        '❌ Hot Yoga (dehydration risk, already losing fluids)',
        '❌ CrossFit / Boot Camps (too demanding for hormone levels)',
      ],
      workoutVideos: [
        {
          title: '20-Min Yoga for Period Cramps & Relief',
          duration: '20 min',
          intensity: 'Low' as const,
          type: 'Restorative Yoga',
          youtubeId: 'period-yoga-relief',
          thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=225&fit=crop',
          trainer: 'Yoga with Adriene',
        },
        {
          title: 'Gentle Yin Yoga for Menstruation',
          duration: '30 min',
          intensity: 'Low' as const,
          type: 'Yin Yoga',
          youtubeId: 'yin-yoga-period',
          thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=225&fit=crop',
          trainer: 'Boho Beautiful',
        },
        {
          title: 'Easy Pilates Flow for Your Period',
          duration: '25 min',
          intensity: 'Low' as const,
          type: 'Pilates',
          youtubeId: 'period-pilates',
          thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=225&fit=crop',
          trainer: 'Move with Nicole',
        },
        {
          title: 'Gentle Stretching & Breathwork',
          duration: '15 min',
          intensity: 'Low' as const,
          type: 'Stretching',
          youtubeId: 'gentle-stretch',
          thumbnail: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=225&fit=crop',
        },
      ],
      recovery: [
        '💤 Sleep 8-9 hours (body needs extra rest)',
        '🧘‍♀️ Meditation 10-15 min daily (reduces cortisol)',
        '🛁 Warm baths with Epsom salt (magnesium absorption, muscle relaxation)',
        '📱 Heating pad on lower abdomen (increases blood flow)',
        '🚫 No workout if pain is severe (rest is productive)',
      ],
      supplements: [
        'Magnesium glycinate: 400mg (muscle relaxation)',
        'Omega-3: 2000mg (anti-inflammatory)',
        'Turmeric/Curcumin: 500mg (reduces prostaglandins)',
        'Ginger: 500mg 3x daily (natural painkiller)',
      ],
    },
    follicular: {
      name: 'Follicular Phase',
      days: '6-13',
      color: 'from-[#B8A4D9] to-[#D4C5F9]',
      icon: Sun,
      emoji: '🌱',
      hormones: {
        estrogen: 'Rising (doubles by day 13)',
        progesterone: 'Low and stable',
        testosterone: 'Rising',
        cortisol: 'Well-regulated',
      },
      performanceFactors: {
        energy: 'Increasing daily',
        strength: 'Building (60-80% of peak)',
        endurance: 'Improving',
        recovery: 'Faster (estrogen helps muscle repair)',
        painTolerance: 'Increasing',
        motivation: 'High and rising',
      },
      why: 'Estrogen is your PERFORMANCE HORMONE. As it rises, it increases insulin sensitivity (better fuel use), improves muscle protein synthesis (builds muscle faster), enhances glycogen storage (more endurance), and speeds recovery. Testosterone is also rising, supporting strength gains. This is the BEST time to learn new skills, try new workouts, and push your limits. Your body WANTS to move.',
      focus: [
        'Build strength and muscle (optimal hormone environment)',
        'Learn new movement patterns (neuroplasticity enhanced)',
        'Increase training volume and intensity progressively',
        'Try new workout classes or sports',
        'Take advantage of faster recovery',
      ],
      intensityGuideline: '60-85% max effort. Gradually increase as you approach ovulation.',
      bestWorkouts: [
        {
          type: 'Strength Training (Progressive Overload)',
          why: 'Rising testosterone + estrogen = muscle building. Estrogen protects joints.',
          duration: '45-60 min',
          frequency: '3-4x per week',
          specifics: 'Focus on compound lifts: squats, deadlifts, bench press, rows. 3-4 sets of 8-12 reps. Increase weight by 5-10% weekly.',
        },
        {
          type: 'HIIT (Moderate Intensity)',
          why: 'Improved insulin sensitivity = better at using carbs for fuel. Great for fat burning.',
          duration: '25-35 min',
          frequency: '2-3x per week',
          specifics: '30 sec work : 30 sec rest. Exercises: burpees, jump squats, mountain climbers, sprints.',
        },
        {
          type: 'Running / Cardio',
          why: 'Endurance improves as estrogen increases glycogen storage. Feel lighter and faster.',
          duration: '30-45 min',
          frequency: '2-3x per week',
          specifics: 'Tempo runs, interval training, hill repeats. Heart rate 70-80% max.',
        },
        {
          type: 'Circuit Training',
          why: 'Combines strength + cardio. High energy makes this feel easier than usual.',
          duration: '40-50 min',
          frequency: '2-3x per week',
          specifics: '4-5 exercises per circuit, 3-4 rounds, 45 sec on/15 sec rest',
        },
        {
          type: 'Dance Cardio / Boxing',
          why: 'Coordination and motivation are peak. Learn new choreography easily.',
          duration: '30-45 min',
          frequency: '2-3x per week',
          specifics: 'Zumba, dance fitness, kickboxing, shadowboxing',
        },
        {
          type: 'Power Yoga / Vinyasa',
          why: 'Strength + flexibility + mindfulness. Builds lean muscle.',
          duration: '45-60 min',
          frequency: '1-2x per week',
          specifics: 'Chaturanga, warrior poses, arm balances, inversions',
        },
      ],
      avoidWorkouts: [
        '⚠️ Overtraining (tempting because you feel great, but save peak effort for ovulation)',
        '⚠️ Skipping rest days (still need 1-2 days recovery per week)',
      ],
      workoutVideos: [
        {
          title: '45-Min Full Body Strength Training',
          duration: '45 min',
          intensity: 'Moderate' as const,
          type: 'Strength Training',
          youtubeId: 'strength-follicular',
          thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=225&fit=crop',
          trainer: 'Caroline Girvan',
        },
        {
          title: '30-Min HIIT Cardio Workout',
          duration: '30 min',
          intensity: 'Moderate' as const,
          type: 'HIIT',
          youtubeId: 'hiit-follicular',
          thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=225&fit=crop',
          trainer: 'MadFit',
        },
        {
          title: '40-Min Intermediate Circuit Training',
          duration: '40 min',
          intensity: 'Moderate' as const,
          type: 'Circuit',
          youtubeId: 'circuit-follicular',
          thumbnail: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=225&fit=crop',
          trainer: 'Heather Robertson',
        },
        {
          title: 'Power Vinyasa Yoga Flow',
          duration: '50 min',
          intensity: 'Moderate' as const,
          type: 'Yoga',
          youtubeId: 'vinyasa-power',
          thumbnail: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=225&fit=crop',
          trainer: 'Yoga with Kassandra',
        },
        {
          title: 'Dance Cardio Party Workout',
          duration: '35 min',
          intensity: 'Moderate' as const,
          type: 'Dance',
          youtubeId: 'dance-cardio',
          thumbnail: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=400&h=225&fit=crop',
          trainer: 'The Fitness Marshall',
        },
      ],
      recovery: [
        '💤 Sleep 7-8 hours (faster recovery)',
        '🍖 Protein within 30 min post-workout (muscle synthesis peak)',
        '🧊 Contrast showers (alternating hot/cold)',
        '🧘‍♀️ Active recovery: yoga, walking on rest days',
        '📈 Track performance gains (you should see progress!)',
      ],
      supplements: [
        'Creatine: 5g daily (muscle performance)',
        'BCAAs: During workouts (muscle protection)',
        'Protein powder: 20-30g post-workout',
        'Beetroot powder: Pre-workout (endurance)',
      ],
    },
    ovulation: {
      name: 'Ovulation Phase',
      days: '14-16',
      color: 'from-[#FADEDE] to-[#F4C2C2]',
      icon: Zap,
      emoji: '⚡',
      hormones: {
        estrogen: 'PEAK (highest of entire cycle)',
        progesterone: 'Starting to rise',
        testosterone: 'PEAK',
        cortisol: 'Well-managed',
      },
      performanceFactors: {
        energy: 'MAXIMUM',
        strength: 'PEAK (100% capability)',
        endurance: 'PEAK',
        recovery: 'Fastest',
        painTolerance: 'HIGHEST',
        motivation: 'SKY HIGH',
      },
      why: 'This is your SUPERWOMAN phase. Peak estrogen + peak testosterone = maximum muscle strength, power output, speed, and endurance. Studies show women can lift 10-15% heavier, run faster, and have 25% higher pain tolerance during ovulation. Estrogen protects tendons and ligaments. This is when you PR (personal record), compete, and crush goals. Your body is evolutionarily designed to be at PEAK performance now.',
      focus: [
        'Test your limits - go for PRs (personal records)',
        'Maximum intensity and volume',
        'Heavy compound lifts (you\'re strongest now)',
        'Compete or do challenging workouts',
        'Plyometrics and power training (injury risk lowest)',
      ],
      intensityGuideline: '85-100% max effort. This is your 2-3 day window to GO ALL OUT.',
      bestWorkouts: [
        {
          type: 'Heavy Strength Training (Max Effort)',
          why: 'Testosterone peak = maximum muscle recruitment. Estrogen protects joints.',
          duration: '60-75 min',
          frequency: 'Every day of ovulation if recovered',
          specifics: 'Low reps (3-6), heavy weight (80-90% 1RM). Squats, deadlifts, bench press, overhead press. Test 1-rep max.',
        },
        {
          type: 'High-Intensity HIIT',
          why: 'Peak cardiovascular capacity, maximum power output, best fat burning.',
          duration: '30-40 min',
          frequency: '2-3x during ovulation window',
          specifics: 'Tabata (20 sec on/10 sec off x8), sprints, battle ropes, box jumps, burpees',
        },
        {
          type: 'Plyometrics / Power Training',
          why: 'Explosive power is maximized. Estrogen protects tendons from injury.',
          duration: '30-45 min',
          frequency: '1-2x during ovulation',
          specifics: 'Box jumps, depth jumps, broad jumps, medicine ball slams, clap push-ups',
        },
        {
          type: 'Sprint Training',
          why: 'Speed, power, and anaerobic capacity are all peaked.',
          duration: '30-40 min',
          frequency: '1-2x during ovulation',
          specifics: '100m sprints, hill sprints, track intervals, bike sprints',
        },
        {
          type: 'CrossFit / Metabolic Conditioning',
          why: 'You can handle high volume + high intensity simultaneously.',
          duration: '45-60 min',
          frequency: '2-3x during ovulation',
          specifics: 'AMRAPs (as many rounds as possible), EMOMs (every minute on the minute), chipper WODs',
        },
        {
          type: 'Advanced Classes',
          why: 'Try that intimidating class. Your coordination and confidence are peak.',
          duration: '45-60 min',
          frequency: '1-2x',
          specifics: 'Aerial yoga, rock climbing, Olympic lifting, martial arts',
        },
      ],
      avoidWorkouts: [
        '⚠️ Going too conservative (this is your window - USE IT!)',
        '⚠️ Completely resting (unless injured - you should move)',
      ],
      workoutVideos: [
        {
          title: '60-Min Heavy Leg Day (Strength Focus)',
          duration: '60 min',
          intensity: 'Peak' as const,
          type: 'Strength Training',
          youtubeId: 'heavy-legs-ovulation',
          thumbnail: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&h=225&fit=crop',
          trainer: 'Natacha Océane',
        },
        {
          title: 'Intense 40-Min HIIT (NO REPEAT)',
          duration: '40 min',
          intensity: 'Peak' as const,
          type: 'HIIT',
          youtubeId: 'intense-hiit',
          thumbnail: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=400&h=225&fit=crop',
          trainer: 'Chloe Ting',
        },
        {
          title: 'Plyometric Power Workout',
          duration: '35 min',
          intensity: 'Peak' as const,
          type: 'Plyometrics',
          youtubeId: 'plyo-power',
          thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=225&fit=crop',
          trainer: 'Whitney Simmons',
        },
        {
          title: 'CrossFit-Style MetCon Workout',
          duration: '50 min',
          intensity: 'Peak' as const,
          type: 'CrossFit',
          youtubeId: 'crossfit-metcon',
          thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
          trainer: 'WODprep',
        },
        {
          title: 'Sprint Interval Training',
          duration: '30 min',
          intensity: 'Peak' as const,
          type: 'Sprints',
          youtubeId: 'sprint-training',
          thumbnail: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=225&fit=crop',
          trainer: 'Runstreet',
        },
      ],
      recovery: [
        '💤 Sleep 7-8 hours (recovery is fastest now)',
        '🍖 High protein (muscle repair peaked): 1.2-1.6g per kg bodyweight',
        '💧 Extra hydration (metabolism higher)',
        '🧊 Ice baths optional (inflammation control after intense sessions)',
        '📊 THIS IS WHEN TO TEST: Track PRs, take progress photos',
      ],
      supplements: [
        'Creatine: 5g daily (strength boost)',
        'Beta-Alanine: 3-5g pre-workout (delays fatigue)',
        'Citrulline Malate: 6-8g pre-workout (power output)',
        'Electrolytes: During long workouts (sweating more)',
      ],
    },
    luteal: {
      name: 'Luteal Phase',
      days: '17-28',
      color: 'from-[#FADEDE] to-[#F4C2C2]',
      icon: Leaf,
      emoji: '🍂',
      hormones: {
        estrogen: 'Moderate then dropping',
        progesterone: 'HIGH (dominant hormone)',
        testosterone: 'Low',
        cortisol: 'More reactive to stress',
      },
      performanceFactors: {
        energy: 'Declining (especially late luteal)',
        strength: 'Moderate (70-80% of peak)',
        endurance: 'Good early, declines late',
        recovery: 'SLOWER (progesterone increases inflammation)',
        painTolerance: 'Decreasing',
        motivation: 'Variable, often lower',
      },
      why: 'Progesterone DOMINATES, raising body temperature by 0.3-0.5°C, which increases resting metabolic rate by 5-10%. This sounds good but actually means you burn through fuel faster, overheat quicker, and fatigue sooner. Progesterone also increases inflammation response and slows recovery. Your body is preparing for pregnancy OR menstruation - either way, it\'s in CONSERVATION mode. You need to work WITH this, not against it. Focus on maintenance, not gains.',
      focus: [
        'Maintain fitness (don\'t expect PRs)',
        'LOWER intensity, SHORTER duration',
        'Emphasize form over load',
        'More rest between sets (need 2-3 min vs 1-2 min)',
        'Mind-body connection (pilates, yoga, controlled movements)',
        'Late luteal (days 24-28): Prioritize REST',
      ],
      intensityGuideline: 'Early luteal (days 17-23): 60-75% effort. Late luteal (days 24-28): 40-60% effort.',
      bestWorkouts: [
        {
          type: 'Moderate Strength Training',
          why: 'Maintain muscle but don\'t push for PRs. Recovery is impaired.',
          duration: '40-50 min',
          frequency: '2-3x per week',
          specifics: 'Early luteal: 3 sets of 10-12 reps at 70% max. Late luteal: 2-3 sets of 12-15 reps at 60% max. Longer rest (2-3 min).',
        },
        {
          type: 'Low-Impact Cardio',
          why: 'Elevated body temp means you overheat faster. Avoid intense cardio.',
          duration: '30-40 min',
          frequency: '2-3x per week',
          specifics: 'Power walking (incline), elliptical, cycling (moderate pace), swimming (cooling)',
        },
        {
          type: 'Pilates',
          why: 'Controlled movements, core focus, low-impact. Reduces cortisol.',
          duration: '40-50 min',
          frequency: '3-4x per week',
          specifics: 'Reformer or mat, focus on precision and breath',
        },
        {
          type: 'Barre / Low-Impact Strength',
          why: 'Small, controlled movements. Toning without taxing nervous system.',
          duration: '45-60 min',
          frequency: '2-3x per week',
          specifics: 'Isometric holds, pulses, ballet-inspired movements',
        },
        {
          type: 'Vinyasa / Hatha Yoga',
          why: 'Moderate intensity, connects breath and movement, reduces PMS symptoms.',
          duration: '45-60 min',
          frequency: '3-4x per week',
          specifics: 'Avoid hot yoga (already warm). Focus on hip openers, twists.',
        },
        {
          type: 'Moderate HIIT (Early Luteal Only)',
          why: 'Days 17-21 you can still handle moderate intervals. Stop by day 24.',
          duration: '25-30 min',
          frequency: '1-2x per week (days 17-21 only)',
          specifics: '40 sec work/20 sec rest. Stop if feeling unusually fatigued.',
        },
      ],
      avoidWorkouts: [
        '❌ Heavy lifting to failure (injury risk HIGH, recovery SLOW)',
        '❌ Long-distance running (overheating, cortisol spike)',
        '❌ High-intensity HIIT (taxes already stressed system)',
        '❌ Hot yoga/Bikram (thermoregulation impaired)',
        '❌ Boot camps / CrossFit (too demanding)',
        '❌ Training through exhaustion (listen to fatigue signals)',
      ],
      workoutVideos: [
        {
          title: '45-Min Full Body Pilates',
          duration: '45 min',
          intensity: 'Moderate' as const,
          type: 'Pilates',
          youtubeId: 'pilates-luteal',
          thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=225&fit=crop',
          trainer: 'Blogilates',
        },
        {
          title: '40-Min Moderate Strength (Upper Body)',
          duration: '40 min',
          intensity: 'Moderate' as const,
          type: 'Strength',
          youtubeId: 'moderate-strength',
          thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
          trainer: 'Sydney Cummings',
        },
        {
          title: 'Low-Impact Cardio Sculpt',
          duration: '35 min',
          intensity: 'Moderate' as const,
          type: 'Low-Impact',
          youtubeId: 'low-impact-cardio',
          thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=225&fit=crop',
          trainer: 'Pahla B Fitness',
        },
        {
          title: 'Hatha Yoga for PMS Relief',
          duration: '50 min',
          intensity: 'Low' as const,
          type: 'Yoga',
          youtubeId: 'yoga-pms',
          thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=225&fit=crop',
          trainer: 'Yoga with Adriene',
        },
        {
          title: 'Barre Workout - Full Body Tone',
          duration: '45 min',
          intensity: 'Moderate' as const,
          type: 'Barre',
          youtubeId: 'barre-workout',
          thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=225&fit=crop',
          trainer: 'BalletBeautiful',
        },
      ],
      recovery: [
        '💤 Sleep 8-9 hours (CRITICAL - recovery is slowest)',
        '🧘‍♀️ More rest days (3-4 workouts per week MAX)',
        '🛁 Epsom salt baths (magnesium + relaxation)',
        '🧊 Avoid ice baths (already inflamed)',
        '📉 Scale back volume by 30-40% from ovulation',
        '🚫 LATE LUTEAL (days 24-28): Rest is productive, not lazy',
      ],
      supplements: [
        'Magnesium glycinate: 400-600mg (muscle recovery, cramps)',
        'Omega-3: 2000mg (anti-inflammatory)',
        'Tart cherry juice: Reduces inflammation',
        'L-Theanine: 200mg (manages cortisol)',
      ],
      specialConsiderations: {
        earlyLuteal: 'Days 17-23: You still have good energy. Maintain intensity at 70-75%.',
        lateLuteal: 'Days 24-28: Energy crashes. Reduce to 40-60%. Prioritize REST. No shame in taking 2-3 days completely off.',
        pms: 'If experiencing severe PMS: Switch all workouts to yoga, walking, and stretching. Forcing intensity will worsen symptoms.',
      },
    },
  };

  const phase = fitnessData[selectedPhase];
  const PhaseIcon = phase.icon;

  return (
    <div className="min-h-screen bg-[#FAF9F7] pb-6">
      {/* Header */}
      <div className={`bg-gradient-to-br ${phase.color} p-6 rounded-b-[32px] shadow-lg mb-6`}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Dumbbell className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-xl text-white">Cycle-Synced Fitness</h1>
            <p className="text-white/90 text-sm">Train with your hormones, not against them</p>
          </div>
        </div>
        
        <p className="text-[10px] text-white/80 flex items-center gap-1 mb-4">
          <Sparkles className="w-3 h-3" strokeWidth={2} />
          Powered by AI • Adapted to your energy levels
        </p>

        {/* Phase Pills */}
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(fitnessData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setSelectedPhase(key as any)}
              className={`rounded-2xl p-3 transition-all ${
                selectedPhase === key
                  ? 'bg-white shadow-lg'
                  : 'bg-white/20 backdrop-blur-sm border border-white/30'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{data.emoji}</span>
                <p className={`text-sm font-medium ${
                  selectedPhase === key ? 'text-[#4A4458]' : 'text-white'
                }`}>
                  {data.name.split(' ')[0]}
                </p>
              </div>
              <p className={`text-xs ${
                selectedPhase === key ? 'text-[#827B8D]' : 'text-white/80'
              }`}>
                Days {data.days}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="px-6">
        {/* Hormones & Performance */}
        <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
              <PhaseIcon className="w-6 h-6 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-lg text-[#4A4458]">{phase.name}</h2>
              <p className="text-sm text-[#827B8D]">Days {phase.days} • {phase.intensityGuideline}</p>
            </div>
          </div>

          {/* Hormone Levels */}
          <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-2xl p-4 mb-4">
            <p className="text-sm font-medium text-[#4A4458] mb-3">🧬 Active Hormones:</p>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(phase.hormones).map(([hormone, level]) => (
                <div key={hormone}>
                  <p className="text-xs text-[#827B8D] mb-1 capitalize">{hormone}</p>
                  <p className="text-sm text-[#4A4458] font-medium">{level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Factors */}
          <div className="bg-[#FAF9F7] rounded-2xl p-4">
            <p className="text-sm font-medium text-[#4A4458] mb-3">💪 Your Body Right Now:</p>
            <div className="space-y-2">
              {Object.entries(phase.performanceFactors).map(([factor, value]) => (
                <div key={factor} className="flex justify-between items-center">
                  <p className="text-xs text-[#827B8D] capitalize">{factor.replace(/([A-Z])/g, ' $1').trim()}</p>
                  <p className="text-xs text-[#4A4458] font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why This Phase Matters */}
        <div className="bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] rounded-[28px] p-6 mb-6 shadow-lg">
          <h3 className="text-white text-lg mb-3">🧠 The Science</h3>
          <p className="text-white/95 text-sm leading-relaxed">{phase.why}</p>
        </div>

        {/* Training Focus */}
        <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
          <h3 className="text-lg text-[#4A4458] mb-4">🎯 Training Focus</h3>
          <div className="space-y-2">
            {phase.focus.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                <p className="text-sm text-[#827B8D]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Best Workouts */}
        <div className="mb-6">
          <h3 className="text-lg text-[#4A4458] mb-4">✨ Best Workouts for {phase.name}</h3>
          <div className="space-y-4">
            {phase.bestWorkouts.map((workout, index) => (
              <div key={index} className="bg-white rounded-[24px] p-5 shadow-sm border border-[#EAE4F5]">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-[#4A4458] font-medium mb-1">{workout.type}</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#827B8D]" strokeWidth={1.5} />
                        <p className="text-xs text-[#827B8D]">{workout.duration}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-[#827B8D]" strokeWidth={1.5} />
                        <p className="text-xs text-[#827B8D]">{workout.frequency}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl p-3 mb-3">
                  <p className="text-xs text-[#4A4458]"><span className="font-medium">Why it works:</span> {workout.why}</p>
                </div>
                
                <div className="bg-[#FAF9F7] rounded-xl p-3">
                  <p className="text-xs text-[#827B8D]"><span className="font-medium text-[#4A4458]">How to do it:</span> {workout.specifics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workout Videos */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg text-[#4A4458]">🎥 Workout Videos</h3>
            <div className="flex items-center gap-1 text-[#827B8D]">
              <Play className="w-4 h-4" strokeWidth={1.5} />
              <p className="text-xs">Follow along</p>
            </div>
          </div>
          
          <div className="space-y-3">
            {phase.workoutVideos.map((video, index) => (
              <button
                key={index}
                onClick={() => setSelectedWorkout(video)}
                className="w-full bg-white rounded-[20px] p-4 shadow-sm border border-[#EAE4F5] hover:border-[#B8A4D9] transition-all"
              >
                <div className="flex gap-4">
                  <div className="relative w-32 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#EAE4F5] to-[#FADEDE]">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-5 h-5 text-[#B8A4D9] ml-0.5" strokeWidth={2} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-left">
                    <h4 className="text-sm text-[#4A4458] font-medium mb-1 line-clamp-2">{video.title}</h4>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                        video.intensity === 'Peak' ? 'bg-[#F4C2C2] text-white' :
                        video.intensity === 'High' ? 'bg-[#FADEDE] text-[#4A4458]' :
                        video.intensity === 'Moderate' ? 'bg-[#D4C5F9] text-white' :
                        'bg-[#EAE4F5] text-[#827B8D]'
                      }`}>
                        {video.intensity}
                      </span>
                      <p className="text-[10px] text-[#827B8D]">{video.duration}</p>
                    </div>
                    {video.trainer && (
                      <p className="text-[10px] text-[#827B8D]">by {video.trainer}</p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Avoid These */}
        <div className="bg-gradient-to-br from-[#FADEDE] to-[#F4C2C2] rounded-[28px] p-6 mb-6 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-white" strokeWidth={2} />
            <h3 className="text-white text-lg">Avoid During {phase.name}</h3>
          </div>
          <div className="space-y-2">
            {phase.avoidWorkouts.map((item, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/30">
                <p className="text-sm text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Tips */}
        <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
          <h3 className="text-lg text-[#4A4458] mb-4">🔄 Recovery & Support</h3>
          <div className="space-y-2 mb-4">
            {phase.recovery.map((tip, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B8A4D9] mt-1.5 flex-shrink-0" />
                <p className="text-sm text-[#827B8D]">{tip}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-2xl p-4">
            <p className="text-sm font-medium text-[#4A4458] mb-2">💊 Helpful Supplements:</p>
            <div className="space-y-1">
              {phase.supplements.map((supplement, index) => (
                <p key={index} className="text-xs text-[#827B8D]">• {supplement}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Special Considerations (if luteal) */}
        {selectedPhase === 'luteal' && (
          <div className="bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] rounded-[28px] p-6 mb-6 shadow-lg">
            <h3 className="text-white text-lg mb-3">⚠️ Important: Luteal Phase Timing</h3>
            <div className="space-y-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <p className="text-white font-medium mb-1">📅 Early Luteal (Days 17-23)</p>
                <p className="text-white/90 text-sm">{phase.specialConsiderations.earlyLuteal}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <p className="text-white font-medium mb-1">📅 Late Luteal (Days 24-28)</p>
                <p className="text-white/90 text-sm">{phase.specialConsiderations.lateLuteal}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <p className="text-white font-medium mb-1">💜 Severe PMS?</p>
                <p className="text-white/90 text-sm">{phase.specialConsiderations.pms}</p>
              </div>
            </div>
          </div>
        )}

        {/* Wearable Integration */}
        <div className="bg-white rounded-[28px] p-6 mb-6 shadow-sm border border-[#EAE4F5]">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-[#B8A4D9]" strokeWidth={1.5} />
            <h3 className="text-lg text-[#4A4458]">Syla Band Integration</h3>
          </div>
          <p className="text-sm text-[#827B8D] mb-4">
            Your wearable tracks how your body responds to workouts throughout your cycle:
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl p-3">
              <p className="text-xs text-[#4A4458] font-medium mb-1">HRV Tracking</p>
              <p className="text-[10px] text-[#827B8D]">Measures recovery readiness</p>
            </div>
            <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl p-3">
              <p className="text-xs text-[#4A4458] font-medium mb-1">Heart Rate Zones</p>
              <p className="text-[10px] text-[#827B8D]">Adjusts by cycle phase</p>
            </div>
            <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl p-3">
              <p className="text-xs text-[#4A4458] font-medium mb-1">Sleep Quality</p>
              <p className="text-[10px] text-[#827B8D]">Ensures adequate recovery</p>
            </div>
            <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-xl p-3">
              <p className="text-xs text-[#4A4458] font-medium mb-1">Body Temp</p>
              <p className="text-[10px] text-[#827B8D]">Confirms phase accuracy</p>
            </div>
          </div>
        </div>

        {/* Ask Syla AI */}
        <div className="bg-gradient-to-br from-[#B8A4D9] to-[#D4C5F9] rounded-[28px] p-6 shadow-lg text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <h3 className="text-white text-lg mb-2">Questions About Training?</h3>
          <p className="text-white/90 text-sm mb-4 leading-relaxed">
            Ask Syla AI about exercise modifications, dealing with fatigue, managing PMS during workouts, or how to adjust your favorite class to your current phase.
          </p>
          <button className="w-full bg-white text-[#B8A4D9] rounded-[20px] px-6 py-3 font-medium hover:shadow-xl transition-all flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" strokeWidth={2} />
            Ask Syla AI About Fitness
          </button>
        </div>
      </div>

      {/* Video Modal (if selected) */}
      {selectedWorkout && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50" onClick={() => setSelectedWorkout(null)}>
          <div className="bg-white rounded-[28px] p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg text-[#4A4458] mb-2">{selectedWorkout.title}</h3>
            <p className="text-sm text-[#827B8D] mb-4">
              In production, this would embed: youtube.com/watch?v={selectedWorkout.youtubeId}
            </p>
            <div className="bg-gradient-to-r from-[#EAE4F5] to-[#FADEDE] rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#4A4458] font-medium">Duration:</span>
                <span className="text-sm text-[#827B8D]">{selectedWorkout.duration}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#4A4458] font-medium">Intensity:</span>
                <span className="text-sm text-[#827B8D]">{selectedWorkout.intensity}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#4A4458] font-medium">Type:</span>
                <span className="text-sm text-[#827B8D]">{selectedWorkout.type}</span>
              </div>
            </div>
            <button
              onClick={() => setSelectedWorkout(null)}
              className="w-full bg-gradient-to-r from-[#B8A4D9] to-[#D4C5F9] text-white rounded-[20px] px-6 py-3 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}