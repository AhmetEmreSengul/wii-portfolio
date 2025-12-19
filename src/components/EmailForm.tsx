import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const EmailForm = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="inset-0 w-screen h-screen bg-black/40 fixed z-1 flex items-center justify-center">
      <motion.form
        action="https://formspree.io/f/xbdrjlwo"
        method="POST"
        className="size-120 form-background backdrop-blur-md rounded-2xl flex flex-col gap-5 p-5 justify-center items-center relative"
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 500 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <h2 className="text-4xl mb-10 text-[#323233]">Send me a message!</h2>
        <div
          className="absolute top-5 right-5 text-2xl p-2"
          onClick={() => setOpen(false)}
        >
          <IoClose size={35} />
        </div>
        <input
          className="w-full border-2 backdrop-blur-sm rounded-lg px-2 py-3 border-[#3aadde] hover:border-[#6bc8f3] transition"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          className="w-full border-2  backdrop-blur-sm rounded-lg px-2 py-3 border-[#3aadde] hover:border-[#6bc8f3] transition"
          name="message"
          placeholder="Enter your message."
          required
        />
        <button
          className="px-7 py-3 mt-5 rounded-lg bg-sky-400 hover:bg-sky-300 transition"
          type="submit"
        >
          Send
        </button>
      </motion.form>
    </div>
  );
};

export default EmailForm;
