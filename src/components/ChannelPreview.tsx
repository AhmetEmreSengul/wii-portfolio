import type { RefObject } from "react";

interface ChannelPreviewProps {
  channel: { id: number; title: string; video: string };
  videoRefs: RefObject<Record<number, HTMLVideoElement | null>>;
}

const ChannelPreview = ({ channel, videoRefs }: ChannelPreviewProps) => {
  return (
    <svg
      viewBox="-4 -4 108 48"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <defs>
        <mask id={`mask-${channel.id}`}>
          <path
            d="M 6 0 C 35 -2 65 -2 94 0 C 97 0 100 3 100 6 C 101 16 101 24 100 34 C 100 37 97 40 94 40 C 65 42 35 42 6 40 C 3 40 0 37 0 34 C -1 24 -1 15 0 6 C 0 3 3 0 6 0 Z"
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
        className="pointer-events-auto"
      >
        <video
          ref={(e) => {
            videoRefs.current[channel.id] = e;
          }}
          className="w-full h-full object-cover"
          src={channel.video}
          loop
          autoPlay
          muted
          playsInline
        />
      </foreignObject>

      <path
        d="M 6 0 C 35 -2 65 -2 94 0 C 97 0 100 3 100 6 C 101 16 101 24 100 34 C 100 37 97 40 94 40 C 65 42 35 42 6 40 C 3 40 0 37 0 34 C -1 24 -1 15 0 6 C 0 3 3 0 6 0 Z"
        fill="none"
        stroke="#b3b3b3"
        strokeWidth="1.2"
        className="pointer-events-none"
      />
    </svg>
  );
};

export default ChannelPreview;
