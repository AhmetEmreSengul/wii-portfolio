import { motion } from "framer-motion";
import { useEffect, useRef, type RefObject } from "react";

interface ChannelPreviewProps {
  channel: { id: number; title: string; video: string };
  videoRefs: RefObject<Record<number, HTMLVideoElement | null>>;
  hoverId: number | null;
}

const ChannelPreview = ({
  channel,
  videoRefs,
  hoverId,
}: ChannelPreviewProps) => {
  const clickRef = useRef<HTMLAudioElement | null>(null);
  const hoverRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    clickRef.current = new Audio("/sounds/video-open.mp3");
    clickRef.current.volume = 0.2;

    hoverRef.current = new Audio("/sounds/hover.mp3");
    hoverRef.current.volume = 0.1;
    hoverRef.current.preload = "auto";
  }, []);

  const handleClick = () => {
    if (!clickRef.current) return;

    clickRef.current.currentTime = 0;

    if (channel.title) {
      clickRef.current.play().catch(() => {});
    }
  };

  const handleHover = () => {
    if (!hoverRef.current) return;

    hoverRef.current.currentTime = 0;
    hoverRef.current.play().catch(() => {});
  };

  return (
    <div onClick={handleClick} onPointerEnter={handleHover}>
      <svg
        viewBox="-4 -4 108 48"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <mask id={`mask-${channel.id}`}>
            <path
              d="M 6 0 C 35 0 65 0 94 0 C 97 0 100 3 100 6 C 101 16 101 24 100 34 C 100 37 97 40 94 40 C 65 41 35 41 6 40 C 3 40 0 37 0 34 C -1 24 -1 15 0 6 C 0 3 3 0 6 0 Z"
              fill="white"
            />
          </mask>
        </defs>

        <foreignObject
          x="-4"
          y="-4"
          width="108"
          height="48"
          mask={`url(#mask-${channel.id})`}
          className="pointer-events-auto bg-black"
        >
          <motion.video
            layoutId={`video-${channel.id}`}
            ref={(el) => {
              videoRefs.current[channel.id] = el;
            }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover"
            src={channel.video}
            loop
            autoPlay
            muted
            playsInline
          />
        </foreignObject>

        <path
          d="M 6 0 C 35 0 65 0 94 0 C 97 0 100 3 100 6 C 101 16 101 24 100 34 C 100 37 97 40 94 40 C 65 41 35 41 6 40 C 3 40 0 37 0 34 C -1 24 -1 15 0 6 C 0 3 3 0 6 0 Z"
          fill="none"
          stroke={hoverId === channel.id ? "#6bc8f3" : "#b9bac2"}
          strokeWidth="1.2"
          className="pointer-events-none"
        />
      </svg>
    </div>
  );
};

export default ChannelPreview;
