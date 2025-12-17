import Channel from "./components/Channel";
import WiiDock from "./components/WiiDock";

const App = () => {
  return (
    <div className="wii-background min-h-screen flex flex-col items-center">
      <Channel />
      <WiiDock />
    </div>
  );
};

export default App;
