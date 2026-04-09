import mascotImg from '@/assets/mascot-thermo3d.png';

const MascotProductTip = () => {
  return (
    <div className="flex items-center gap-3 mt-3 px-3 py-2.5 rounded-xl bg-accent/5 border border-accent/15">
      <img
        src={mascotImg}
        alt="Thermo3D"
        className="w-8 h-8 rounded-full flex-shrink-0"
        loading="lazy"
      />
      <p className="text-xs text-muted-foreground leading-relaxed">
        Cet accessoire va te faire gagner du temps 👌
      </p>
    </div>
  );
};

export default MascotProductTip;
