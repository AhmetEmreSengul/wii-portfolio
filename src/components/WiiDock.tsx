const WiiDock = () => {
  return (
    <div className="relative w-full h-30  mt-10">
      <svg
        viewBox="0 0 1000 120"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        <defs>
          {/* Side fade mask */}
          <mask id="edge-fade">
            <linearGradient
              id="fade-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="black" />
              <stop offset="8%" stopColor="white" />
              <stop offset="92%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </linearGradient>

            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#fade-gradient)"
            />
          </mask>

          {/* Glow + shadow filter (unchanged) */}
          <filter id="glow-shadow" x="-20%" y="-20%" width="140%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="6"
              floodColor="#6fd3ff"
              floodOpacity="0.25"
            />
          </filter>
        </defs>

        {/* Filled area */}
        <path
          d="
        M 0 1.5
        L 204 1.5
        C 238 1.5 255 16.5 272 31.5
        C 289 46.5 306 90 340 90
        L 660 90
        C 720 90 740 46.5 760 31.5
        C 780 16.5 800 1.5 860 1.5
        L 1000 1.5
        L 1000 120
        L 0 120
        Z
      "
          fill="#ccced4"
        />

        {/* Stroke with glow + side fade */}
        <path
          d="
        M 0 1.5
        L 204 1.5
        C 238 1.5 255 16.5 272 31.5
        C 289 46.5 306 90 340 90
        L 660 90
        C 720 90 740 46.5 760 31.5
        C 780 16.5 800 1.5 860 1.5
        L 1000 1.5
      "
          fill="none"
          stroke="#6fd3ff"
          strokeWidth="3"
          opacity="0.9"
          filter="url(#glow-shadow)"
          mask="url(#edge-fade)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="absolute -bottom-17  bg-[#ccced4] w-full h-17"></div>
    </div>
  );
};

export default WiiDock;
