import { useState } from "react";
import { channePreview } from "../Data";
import { AnimatePresence, motion } from "framer-motion";

const Channel = () => {
  const [hoverId, setHoverId] = useState<number>(0);

  return (
    <div className="grid grid-cols-4 gap-2 mt-12">
      {channePreview.map((channel) => (
        <div
          className="wii-radius w-100 h-50 flex flex-col items-center relative"
          key={channel.id}
        >
          <video
            onMouseEnter={() => setHoverId(channel.id)}
            onMouseLeave={() => setHoverId(0)}
            className="antialiased wii-radius w-full h-full object-cover border-[#b3b3b3] hover:border-[#5caed4] border-4 z-1 transition"
            src={channel.video}
            loop
            autoPlay
            muted
            title={channel.title}
          />
          <AnimatePresence>
            {hoverId === channel.id && (
              <motion.div
                className="absolute tracking-wide bg-[#e4e4e2] -bottom-10 flex items-center justify-center z-2 w-110 h-10 mt-2 text-3xl font-semibold  rounded-full shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                {channel.title}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Channel;
