type SiteWarningProps = {
  setWarning: (value: boolean) => void;
};

const SiteWarning = ({ setWarning }: SiteWarningProps) => {
  return (
    <div className=" md:hidden inset-0 bg-black/50 h-screen w-screen fixed flex items-center justify-center z-20">
      <div className="size-65 bg-white/60 backdrop-blur-2xl flex flex-col items-center justify-center gap-3 p-5 rounded-xl">
        <h2 className="text-center">
          This site is best viewed on a larger screen and objects may be
          distorted.
        </h2>
        <button
          onClick={() => setWarning(false)}
          className="border-2 p-3 rounded-lg"
        >
          Don't Care
        </button>
      </div>
    </div>
  );
};

export default SiteWarning;
