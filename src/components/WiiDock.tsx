import dayjs from "dayjs";

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
          strokeWidth="10"
          opacity="0.9"
          filter="url(#glow-shadow)"
          mask="url(#edge-fade)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="absolute -bottom-20  bg-[#ccced4] w-full h-20" />

      <div className="absolute left-7/15 -top-5">
        <div className="flex items-end gap-5 text-[#737374]">
          <p className="text-8xl font-[digi]">{dayjs().format("h mm")}</p>{" "}
          <p className="text-2xl mb-2"> {dayjs().format("A")} </p>{" "}
        </div>
      </div>

      <div className="absolute left-7/16 top-23">
        <div className="flex items-end gap-5 text-[#636364]">
          <p className="text-6xl ">{dayjs().format("ddd M/D")}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default WiiDock;
