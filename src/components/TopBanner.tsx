import { useState, useEffect } from 'react';

const TopBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getEndOfDay = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      return end.getTime() - now.getTime();
    };

    const update = () => {
      const diff = getEndOfDay();
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="bg-foreground text-background text-center py-2.5 text-[11px] font-medium tracking-wider uppercase flex items-center justify-center gap-3 flex-wrap">
      <span>🔥 -20% aujourd'hui | Stock limité</span>
      <span className="inline-flex items-center gap-1 bg-background/10 rounded px-2 py-0.5 text-[10px] font-mono tracking-normal">
        {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
      </span>
    </div>
  );
};

export default TopBanner;
