import { useRef, useState } from "react";
import { channePreview } from "../Data";
import { AnimatePresence, motion } from "framer-motion";
import ChannelPreview from "./ChannelPreview";

const Channel = () => {
  const [hoverId, setHoverId] = useState<number | null>(null);
  const [activeChannel, setActiveChannel] = useState<number | null>(null);

  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const openChannel = (id: number) => {
    Object.values(videoRefs.current).forEach((v) => v?.pause());
    setActiveChannel(id);
  };

  const closeChannel = () => {
    setActiveChannel(null);
  };

  return (
    <>
      <div className="grid grid-cols-4 mt-9">
        {channePreview.map((channel) => (
          <div
            key={channel.id}
            className="w-105 h-55 flex flex-col items-center relative -mx-1 -my-2"
            onMouseEnter={() => setHoverId(channel.id)}
            onMouseLeave={() => setHoverId(null)}
            onClick={() => openChannel(channel.id)}
          >
            <ChannelPreview
              channel={channel}
              hoverId={hoverId}
              videoRefs={videoRefs}
            />

            <AnimatePresence>
              {hoverId === channel.id && !activeChannel && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bg-[#e4e4e2] -bottom-16 z-2 w-110 h-15 rounded-full shadow-xl flex items-center justify-center"
                >
                  <p className="tracking-wide text-[#494949] text-3xl font-semibold">
                    {channel.title}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          Object.values(videoRefs.current).forEach((v) => v?.play());
        }}
      >
        {activeChannel !== null && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-10 flex items-center justify-center"
            transition={{ duration: 0.5 }}
          >
            <motion.div
              layoutId={`video-${activeChannel}`}
              className="w-full h-full flex flex-col justify-end"
            >
              <video
                src={channePreview.find((c) => c.id === activeChannel)?.video}
                autoPlay
                className="w-full h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              <div className="w-full h-50 fixed border-t-2 border-black channel-background flex items-center justify-center gap-5">
                <button
                  className="w-140 text-6xl h-30 border-4 bg-[#e3e8ef] border-[#34beed] rounded-full relative"
                  onClick={closeChannel}
                >
                  Wii Menu
                </button>

                <button className="w-140 text-6xl h-30 border-4 border-[#34beed] bg-[#e3e8ef] rounded-full inset-shadow-2xs">
                  Start
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Channel;
