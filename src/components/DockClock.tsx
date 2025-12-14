import dayjs from "dayjs";

const DockClock = () => {
  return (
    <div>
      <div className="absolute left-7/15 -top-5">
        <div className="flex items-end gap-5 text-[#737374]">
          <p className="text-8xl font-[digi]">{dayjs().format("h:mm")}</p>{" "}
          <p className="text-2xl mb-2"> {dayjs().format("A")} </p>{" "}
        </div>
      </div>

      <div className="absolute left-7/16 top-25">
        <div className="flex items-end gap-5 text-[#636364]">
          <p className="text-6xl ">{dayjs().format("ddd M/D")}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default DockClock;
