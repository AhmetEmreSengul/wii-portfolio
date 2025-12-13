import WiiDock from "./components/WiiDock";

const App = () => {
  return (
    <div className="wii-background min-h-screen  flex flex-col items-center">
      <div className="grid grid-cols-4 gap-3 mt-10">
        <div className="wii-radius w-100 h-50 bg-amber-500">1</div>
        <div className="wii-radius w-100 h-50 bg-amber-500">2</div>
        <div className="wii-radius w-100 h-50 bg-amber-500">3</div>
        <div className="wii-radius w-100 h-50 bg-amber-500">4</div>
        <div className="wii-radius w-100 h-50 bg-amber-500">5</div>
        <div className="wii-radius w-100 h-50 bg-amber-500">6</div>
        <div className="wii-radius w-100 h-50 bg-amber-500">7</div>
        <div className="wii-radius w-100 h-50 bg-amber-500">8</div>
        <div className="wii-radius w-100 h-50 bg-amber-500">9</div>
        <div className="wii-radius w-100 h-50 bg-amber-500">10</div>
        <div className="wii-radius w-100 h-50 bg-amber-500">11</div>
        <div className="wii-radius w-100 h-50 bg-amber-500">12</div>
      </div>

      <WiiDock />
    </div>
  );
};

export default App;
