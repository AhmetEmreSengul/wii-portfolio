import { useEffect, useRef, useState } from "react";
import { channePreview } from "../Data";
import { AnimatePresence, motion } from "framer-motion";
import ChannelPreview from "./ChannelPreview";
import Intro from "./Intro";
import SiteWarning from "./SiteWarning";

const Channel = () => {
  const [hoverId, setHoverId] = useState<number | null>(null);
  const [activeChannel, setActiveChannel] = useState<number | null>(null);
  const [warning, setWarning] = useState<boolean>(true);

  const closeRef = useRef<HTMLAudioElement | null>(null);

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

  useEffect(() => {
    closeRef.current = new Audio("/sounds/video-close.mp3");
    closeRef.current.volume = 0.1;
  }, []);

  const handleClick = () => {
    if (!closeRef.current) return;

    closeRef.current.currentTime = 0;
    closeRef.current.play().catch(() => {});
  };

  return (
    <>
      <Intro />
      <div className="flex items-center justify-center h-screen pb-45">
       {warning && <SiteWarning setWarning={setWarning}/>}
        <div className="grid grid-cols-3 scale-120 md:scale-100 md:grid-cols-4 lg:scale-100 xl:scale-100 w-full">
          {channePreview.map((channel) => (
            <div
              key={channel.id}
              className="w-23 h-17 md:w-55 md:h-35 lg:w-63 lg:h-40 xl:w-105 xl:h-55 flex flex-col items-center relative xl:-mx-1 xl:-my-2"
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
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { delay: 0.5 },
                    }}
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
                className="w-full h-full flex flex-col justify-end rounded-2xl scale-95 xl:video-mask xl:scale-99 relative"
              >
                <video
                  src={channePreview.find((c) => c.id === activeChannel)?.video}
                  autoPlay
                  className="w-full h-full object-cover rounded-4xl"
                  onClick={(e) => e.stopPropagation()}
                />

                <div className="w-full h-42 lg:h-52 bottom-0 lg:bottom-10 absolute border-t-2 border-black channel-background flex items-center justify-center gap-7 lg:gap-25 rounded-b-4xl lg:rounded-none">
                  <button
                    className="w-45 text-3xl lg:text-6xl lg:w-140 h-20 lg:h-30 text-[#494a4a] tracking-tight border-4 bg-[#e3e8ef] border-[#34beed] rounded-full relative hover:scale-105 transition"
                    onClick={() => {
                      {
                        closeChannel();
                        handleClick();
                      }
                    }}
                  >
                    Wii Menu
                  </button>

                  {channePreview.map(({ id, link }) => {
                    if (id === activeChannel) {
                      return (
                        <div
                          className="w-45 text-3xl lg:text-6xl lg:w-140  h-20 lg:h-30 text-[#494a4a] tracking-tight  border-4 border-[#34beed] bg-[#e3e8ef] rounded-full inset-shadow-2xs hover:scale-105 transition flex items-center justify-center"
                          onClick={() =>
                            window.open(link, "_blank", "noopener,noreferrer")
                          }
                          rel="noopener noreferrer"
                        >
                          Start
                        </div>
                      );
                    }
                  })}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Channel;
