import { FaEnvelope } from "react-icons/fa";

const DockButtons = () => {
  return (
    <div>
      <div className="absolute left-0 top-1/3">
        <div className="w-70 h-30 bg-[#ccced4] border-4 border-[#b9bac2] rounded-r-full flex justify-end items-center">
          <div className="shadow-2xl size-26 flex items-center justify-center button-shadow rounded-full mr-4 border-3 border-[#5caed4] relative hover:scale-105 hover:border-[#6bc8f3] transition">
            <p className="text-[#979797] text-4xl font-semibold z-1">Wii</p>
            <span className="absolute reflection blur-[2px] left-2 top-2 bg-[#e3e3e3] size-15 z-0"></span>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/3">
        <div className="w-70 h-30 bg-[#ccced4] border-4 border-[#b9bac2] rounded-l-full flex justify-start items-center">
          <div className="shadow-2xl size-26 flex items-center justify-center button-shadow rounded-full mr-4 border-3 border-[#5caed4] relative hover:scale-105 hover:border-[#6bc8f3] transition">
            <p className="text-[#979797] text-4xl font-semibold z-1">
              <FaEnvelope size={65} />
            </p>
            <span className="absolute reflection blur-[2px] left-2 top-2 bg-[#e3e3e3] size-15 z-0"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DockButtons;
