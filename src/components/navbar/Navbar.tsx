import { Calendar, Clock } from "lucide-react";
import NowTime from "./NowTime";
import NowDate from "./NowDate";

const Navbar = () => {
  return (
    <div className="text-light-100 h-[102px] flex items-center px-8 w-[calc(100%-64px)]">
      <div className="w-full flex justify-between">
        <span className="text-[28px] font-semibold">TIC DDoS Radar</span>
        <div className="flex flex-row-reverse gap-x-6">
          <div className="flex gap-2">
            <Clock />
            <NowTime />
          </div>
          <div className="flex gap-2">
            <Calendar />
            <NowDate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
