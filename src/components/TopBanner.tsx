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
    <div className="bg-accent text-accent-foreground text-center py-2.5 text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-3 flex-wrap">
      <span>🔥 Offre du jour : -20% sur les accessoires Thermomix</span>
      <span className="inline-flex items-center gap-1 bg-background/20 rounded px-2 py-0.5 text-[11px] font-mono tracking-normal">
        ⏳ {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
      </span>
    </div>
  );
};

export default TopBanner;
