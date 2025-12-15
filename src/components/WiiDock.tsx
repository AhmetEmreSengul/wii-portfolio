import DockBackground from "./DockBackground";
import DockButtons from "./DockButtons";
import DockClock from "./DockClock";

const WiiDock = () => {
  return (
    <div className="fixed bottom-25 w-full h-30 ">
      <div className="absolute -bottom-24 bg-[#ccced4] w-full h-24" />
      <DockBackground />
      <DockClock />
      <DockButtons />
    </div>
  );
};

export default WiiDock;
