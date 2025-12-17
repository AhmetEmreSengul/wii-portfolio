import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Intro = () => {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "a" ||
        e.key === "A" ||
        e.key === "Enter" ||
        e.key === "Space"
      ) {
        setIntro(false);
      }
    });
  }, []);

  return (
    <AnimatePresence>
      {intro && (
        <motion.div
          className="inset-0 z-10 w-full bg-black h-screen fixed"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <video
            src="/videos/intro.mp4"
            className="scale-90"
            autoPlay
            loop
            muted
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
