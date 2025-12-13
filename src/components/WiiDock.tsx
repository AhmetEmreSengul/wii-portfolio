import DockBackground from "./DockBackground";
import DockClock from "./DockClock";

const WiiDock = () => {
  return (
    <div className="relative w-full h-30  mt-10">
      <div className="absolute -bottom-20  bg-[#ccced4] w-full h-20" />
      <DockBackground />
      <DockClock />
    </div>
  );
};

export default WiiDock;
