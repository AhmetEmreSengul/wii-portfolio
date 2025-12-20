import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Intro = () => {
  const [intro, setIntro] = useState(true);

  const audio = new Audio("/sounds/Wii_Music.mp3");
  audio.volume = 0.1;
  audio.preload = "auto";

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "a" ||
        e.key === "A" ||
        e.key === "Enter" ||
        e.key === " "
      ) {
        setIntro(false);
        audio.play();
      }
    });
  }, []);

  return (
    <AnimatePresence>
      {intro && (
        <motion.div
          className="inset-0 z-10 w-full bg-black h-screen flex items-center fixed"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onClick={() => {
            setIntro(false);
            audio.play();
          }}
        >
          <video src="/videos/intro.mp4" autoPlay loop muted />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
