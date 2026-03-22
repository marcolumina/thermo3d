interface LogoProps {
  className?: string;
  size?: number;
}

/** Full logo: icon + THERMO3D text */
export const Logo = ({ className = '', size = 50 }: LogoProps) => {
  const iconSize = size;
  const fontSize = size * 0.38;
  const subFontSize = size * 0.12;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon size={iconSize} />
      <div className="flex flex-col leading-none">
        <span
          className="font-display font-bold tracking-tight"
          style={{ fontSize: `${fontSize}px` }}
        >
          <span className="text-foreground">THERMO</span>
          <span className="text-accent font-extrabold">3D</span>
        </span>
        <span
          className="font-medium tracking-[0.2em] uppercase text-muted-foreground mt-0.5"
          style={{ fontSize: `${subFontSize}px` }}
        >
          Accessoires Thermomix
        </span>
      </div>
    </div>
  );
};

/** Inverted logo for dark backgrounds */
export const LogoInverted = ({ className = '', size = 50 }: LogoProps) => {
  const iconSize = size;
  const fontSize = size * 0.38;
  const subFontSize = size * 0.12;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon size={iconSize} inverted />
      <div className="flex flex-col leading-none">
        <span
          className="font-display font-bold tracking-tight"
          style={{ fontSize: `${fontSize}px` }}
        >
          <span className="text-background">THERMO</span>
          <span className="text-accent font-extrabold">3D</span>
        </span>
        <span
          className="font-medium tracking-[0.2em] uppercase text-background/35 mt-0.5"
          style={{ fontSize: `${subFontSize}px` }}
        >
          Accessoires Thermomix
        </span>
      </div>
    </div>
  );
};

/** Icon-only logo: Thermomix bowl silhouette with integrated "T" */
export const LogoIcon = ({
  size = 50,
  inverted = false,
  className = '',
}: LogoProps & { inverted?: boolean }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Thermo3D logo"
    >
      {/* Bowl body */}
      <path
        d="M15 38 C15 38 12 80 30 90 C38 95 62 95 70 90 C88 80 85 38 85 38"
        fill={inverted ? '#FFFFFF' : 'hsl(97, 52%, 51%)'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lid */}
      <path
        d="M10 38 L90 38"
        stroke={inverted ? '#FFFFFF' : 'hsl(97, 52%, 51%)'}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Lid handle */}
      <path
        d="M38 38 L38 28 C38 22 42 18 50 18 C58 18 62 22 62 28 L62 38"
        stroke={inverted ? '#FFFFFF' : 'hsl(97, 52%, 51%)'}
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Integrated "T" letter in negative space */}
      <rect
        x="35"
        y="48"
        width="30"
        height="5"
        rx="2"
        fill={inverted ? 'hsl(0, 0%, 4%)' : '#FFFFFF'}
      />
      <rect
        x="47"
        y="48"
        width="6"
        height="30"
        rx="2"
        fill={inverted ? 'hsl(0, 0%, 4%)' : '#FFFFFF'}
      />
    </svg>
  );
};

export default Logo;
