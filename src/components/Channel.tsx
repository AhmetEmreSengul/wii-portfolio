import { useRef, useState } from "react";
import { channePreview } from "../Data";
import { AnimatePresence, motion } from "framer-motion";
import ChannelPreview from "./ChannelPreview";

const Channel = () => {
  const [hoverId, setHoverId] = useState<number>(0);
  const [clickId, setClickId] = useState<number>(0);

  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const handleClick = (id: number) => {
    Object.values(videoRefs.current).forEach((video) => {
      video?.pause();
    });
    setClickId(id);
  };

  const handleClose = () => {
    setClickId(0);
    Object.values(videoRefs.current).forEach((video) => {
      video?.play();
    });
  };

  console.log(hoverId);

  return (
    <div className="grid grid-cols-4 mt-9">
      {channePreview.map((channel) => (
        <div
          className="w-105 h-55 flex flex-col items-center relative -mx-1 -my-2"
          onMouseEnter={() => setHoverId(channel.id)}
          onMouseLeave={() => setHoverId(0)}
          onClick={() => handleClick(channel.id)}
          key={channel.id}
        >
          <ChannelPreview channel={channel} videoRefs={videoRefs} />
          <AnimatePresence>
            {hoverId === channel.id && (
              <motion.div
                className="absolute bg-[#e4e4e2] -bottom-16 flex items-center justify-center z-2 w-110 h-15 rounded-full shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.2, delay: 0.4 },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: 0.2 },
                }}
              >
                <p className="tracking-wide text-[#494949] text-3xl font-semibold">
                  {channel.title}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {clickId === channel.id && (
            <div className="inset-0 fixed h-screen w-screen flex items-center justify-center z-3">
              <video src={channel.video} autoPlay loop />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Channel;
