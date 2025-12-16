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

  const isClickable = (channel: (typeof channePreview)[number]) => {
    return Boolean(channel.title && channel.link);
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
            onClick={() => {
              if (!isClickable(channel)) return;
              openChannel(channel.id);
            }}
          >
            <ChannelPreview
              channel={channel}
              hoverId={hoverId}
              videoRefs={videoRefs}
            />

            <AnimatePresence>
              {hoverId === channel.id && !activeChannel && channel.title && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bg-[#e4e4e2] -bottom-14 z-2 w-110 h-15 rounded-full shadow-xl flex items-center justify-center"
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
            className="fixed inset-0 z-10 flex  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              layoutId={`video-${activeChannel}`}
              className="w-full h-full flex flex-col justify-end video-mask scale-98"
            >
              <video
                src={channePreview.find((c) => c.id === activeChannel)?.video}
                autoPlay
                className="w-full h-full object-cover"
                onClick={(e) => e.stopPropagation()}
              />

              <div className="w-full h-55 mb-10 fixed border-t-2 border-black channel-background flex items-center justify-center gap-25">
                <button
                  className="w-140 text-[#494a4a] text-6xl tracking-tight h-30 border-4 bg-[#e3e8ef] border-[#34beed] rounded-full relative hover:scale-105 transition"
                  onClick={closeChannel}
                >
                  Wii Menu
                </button>

                <button className="w-140 text-[#494a4a] tracking-tight text-6xl h-30 border-4 border-[#34beed] bg-[#e3e8ef] rounded-full inset-shadow-2xs hover:scale-105 transition">
                  {channePreview.map(({ id, link }) => {
                    if (id === activeChannel) {
                      return (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Start
                        </a>
                      );
                    }
                  })}
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
