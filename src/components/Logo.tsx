interface LogoProps {
  className?: string;
  size?: number;
}

/** Full logo: icon + THERMO3D text */
export const Logo = ({ className = '', size = 50 }: LogoProps) => {
  const width = size * 3.2;
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 320 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Thermo3D logo"
    >
      <g transform="translate(10,10)">
        <path d="M20 50 Q20 80 50 80 L80 80 Q110 80 110 50 L110 40 Q110 30 95 30 L35 30 Q20 30 20 40 Z" fill="hsl(var(--accent))" />
        <rect x="30" y="15" width="70" height="12" rx="6" fill="hsl(var(--accent))" />
        <rect x="55" y="5" width="20" height="10" rx="5" fill="hsl(var(--accent))" />
        <path d="M45 40 L85 40 M65 40 L65 70" stroke="white" strokeWidth="10" strokeLinecap="round" />
      </g>
      <text x="140" y="65" fontFamily="'Poppins', sans-serif" fontSize="40" fontWeight="700" fill="hsl(var(--foreground))">
        THERMO
      </text>
      <text x="280" y="65" fontFamily="'Poppins', sans-serif" fontSize="40" fontWeight="700" fill="hsl(var(--accent))">
        3D
      </text>
    </svg>
  );
};

/** Inverted logo for dark backgrounds */
export const LogoInverted = ({ className = '', size = 50 }: LogoProps) => {
  const width = size * 3.2;
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 320 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Thermo3D logo"
    >
      <g transform="translate(10,10)">
        <path d="M20 50 Q20 80 50 80 L80 80 Q110 80 110 50 L110 40 Q110 30 95 30 L35 30 Q20 30 20 40 Z" fill="hsl(var(--accent))" />
        <rect x="30" y="15" width="70" height="12" rx="6" fill="hsl(var(--accent))" />
        <rect x="55" y="5" width="20" height="10" rx="5" fill="hsl(var(--accent))" />
        <path d="M45 40 L85 40 M65 40 L65 70" stroke="hsl(var(--foreground))" strokeWidth="10" strokeLinecap="round" />
      </g>
      <text x="140" y="65" fontFamily="'Poppins', sans-serif" fontSize="40" fontWeight="700" fill="hsl(var(--background))">
        THERMO
      </text>
      <text x="280" y="65" fontFamily="'Poppins', sans-serif" fontSize="40" fontWeight="700" fill="hsl(var(--accent))">
        3D
      </text>
    </svg>
  );
};

/** Icon-only logo */
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
      <g transform="translate(15,10)">
        <path d="M10 45 Q10 75 40 75 L60 75 Q90 75 90 45 L90 35 Q90 25 75 25 L25 25 Q10 25 10 35 Z" fill={inverted ? '#FFFFFF' : 'hsl(var(--accent))'} />
        <rect x="20" y="10" width="60" height="10" rx="5" fill={inverted ? '#FFFFFF' : 'hsl(var(--accent))'} />
        <rect x="40" y="2" width="20" height="8" rx="4" fill={inverted ? '#FFFFFF' : 'hsl(var(--accent))'} />
        <path d="M35 35 L65 35 M50 35 L50 65" stroke={inverted ? 'hsl(var(--foreground))' : 'white'} strokeWidth="8" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default Logo;
