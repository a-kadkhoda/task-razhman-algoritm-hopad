import { getDuration } from "@/queries/home";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const AttackDuration = async () => {
  const { duration } = await getDuration();
  const d = dayjs.duration(duration);

  const days = d.days();
  const hours = d.hours();
  const minutes = d.minutes();
  return (
    <div className="border relative border-light-20 bg-sc-100 size-full  flex flex-col  overflow-hidden">
      <img src="/disk.png" alt="disk" className="w-[200px] absolute top-0" />

      <div className=" flex ml-[237px] gap-x-6 mt-[21px]">
        <div className="flex flex-col items-center">
          <span className="flex items-center justify-center w-12 h-12 bg-light-20 ">
            {days}
          </span>
          <span className="text-xs font-normal flex items-center h-6 text-light-80 justify-center">
            DAYS
          </span>
        </div>
        <div>
          <span className="flex items-center justify-center w-12 h-12 bg-light-20 ">
            {hours}
          </span>
          <span className="text-xs font-normal flex items-center h-6 text-light-80 justify-center">
            HOURS
          </span>
        </div>
        <div>
          <span className="flex items-center justify-center w-12 h-12 bg-light-20 ">
            {minutes}
          </span>
          <span className="text-xs font-normal flex items-center h-6 text-light-80 justify-center">
            MINUTES
          </span>
        </div>
      </div>
    </div>
  );
};

export default AttackDuration;
