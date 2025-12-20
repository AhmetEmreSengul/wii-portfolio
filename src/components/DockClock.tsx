import { useEffect, useState } from "react";
import dayjs from "dayjs";

const DockClock = () => {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs());
    }, 60000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div>
      <div className="absolute left-2/5 md:left-7/15 bottom-10 md:-top-5">
        <div className="flex items-end gap-5 text-[#737374]">
          <p className="text-3xl md:text-8xl font-[digi] tracking-tighter">
            {now.format("h")} <span className="animate-pulse">:</span>{" "}
            {now.format("mm")}
          </p>
          <p className="text-sm md:text-2xl mb-2">{now.format("A")}</p>
        </div>
      </div>

      <div className="absolute left-7/16 top-25">
        <div className="flex items-end gap-5 text-[#636364]">
          <p className="text-xl md:text-6xl">{now.format("ddd M/D")}</p>
        </div>
      </div>
    </div>
  );
};

export default DockClock;
