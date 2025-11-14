'use client';

import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Coffee, Brain, Zap } from 'lucide-react';

type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

const TIMER_MODES = {
  pomodoro: { duration: 25 * 60, label: 'Foco', icon: Brain, color: 'from-rose-500 to-pink-600' },
  shortBreak: { duration: 5 * 60, label: 'Pausa Curta', icon: Coffee, color: 'from-cyan-500 to-blue-600' },
  longBreak: { duration: 15 * 60, label: 'Pausa Longa', icon: Zap, color: 'from-purple-500 to-pink-500' }
};

export default function PomodoroTimer() {
  const [mode, setMode] = useState<TimerMode>('pomodoro');
  const [timeLeft, setTimeLeft] = useState(TIMER_MODES.pomodoro.duration);
  const [isRunning, setIsRunning] = useState(false);
  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            if (mode === 'pomodoro') {
              setCompletedPomodoros(prev => prev + 1);
            }
            // Play notification sound (browser notification)
            if ('Notification' in window && Notification.permission === 'granted') {
              new Notification('Timer Concluído!', {
                body: `${TIMER_MODES[mode].label} finalizado!`,
                icon: '/icon.svg'
              });
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeLeft, mode]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleModeChange = (newMode: TimerMode) => {
    setMode(newMode);
    setTimeLeft(TIMER_MODES[newMode].duration);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(TIMER_MODES[mode].duration);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(TIMER_MODES[mode].duration);
  };

  const requestNotificationPermission = () => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  };

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const progress = ((TIMER_MODES[mode].duration - timeLeft) / TIMER_MODES[mode].duration) * 100;
  const CurrentIcon = TIMER_MODES[mode].icon;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 flex items-center justify-center gap-3">
            <CurrentIcon className="w-10 h-10 sm:w-12 sm:h-12" />
            Timer Pomodoro
          </h1>
          <p className="text-gray-300 text-lg">Técnica comprovada para máxima produtividade</p>
        </div>

        {/* Mode Selector */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {(Object.keys(TIMER_MODES) as TimerMode[]).map((modeKey) => {
            const modeData = TIMER_MODES[modeKey];
            const ModeIcon = modeData.icon;
            return (
              <button
                key={modeKey}
                onClick={() => handleModeChange(modeKey)}
                className={`flex-1 py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  mode === modeKey
                    ? `bg-gradient-to-r ${modeData.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <ModeIcon className="w-5 h-5" />
                {modeData.label}
              </button>
            );
          })}
        </div>

        {/* Timer Display */}
        <div className="relative mb-8">
          {/* Progress Ring */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background Circle */}
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="8"
              />
              {/* Progress Circle */}
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="transition-all duration-1000 ease-linear"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Time Display */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-7xl sm:text-8xl font-bold text-white mb-2 font-mono tracking-tight">
                {formatTime(timeLeft)}
              </div>
              <div className="text-xl sm:text-2xl text-gray-300 font-medium">
                {TIMER_MODES[mode].label}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={toggleTimer}
            className={`w-20 h-20 rounded-full bg-gradient-to-r ${TIMER_MODES[mode].color} text-white shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center`}
          >
            {isRunning ? (
              <Pause className="w-10 h-10" />
            ) : (
              <Play className="w-10 h-10 ml-1" />
            )}
          </button>

          <button
            onClick={resetTimer}
            className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
          >
            <RotateCcw className="w-7 h-7" />
          </button>
        </div>

        {/* Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <div className="text-3xl font-bold text-white mb-1">{completedPomodoros}</div>
              <div className="text-sm text-gray-300">Pomodoros Completos</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center flex-1">
              <div className="text-3xl font-bold text-white mb-1">
                {Math.floor((completedPomodoros * 25) / 60)}h {(completedPomodoros * 25) % 60}m
              </div>
              <div className="text-sm text-gray-300">Tempo Total de Foco</div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Dica da Técnica Pomodoro
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Trabalhe com foco total durante 25 minutos, depois faça uma pausa de 5 minutos. 
            A cada 4 pomodoros completos, faça uma pausa mais longa de 15 minutos. 
            Essa técnica ajuda a manter alta produtividade e evitar fadiga mental.
          </p>
        </div>
      </div>
    </main>
  );
}
