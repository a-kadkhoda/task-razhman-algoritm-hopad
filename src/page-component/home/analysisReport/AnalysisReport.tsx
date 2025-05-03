import { getCountChart, getSumIRL, getSumPPS } from "@/queries/home";
import Link from "next/link";

const AnalysisReport = async () => {
  const { count } = await getCountChart();
  const { sum: sumPPS } = await getSumPPS();
  const { sum: sumIRL } = await getSumIRL();
  return (
    <div className="flex h-full justify-center items-center border border-light-20 bg-sc-100">
      <div className="flex flex-col justify-center items-center w-2/5 h-full px-8 border-r border-r-light-20">
        <div className="flex flex-col justify-center items-center ">
          <img src="/lineChart.png" alt="lineChart" className="size-[68px]" />
          <span className="text-low-100 text-[50px]">{count}</span>
        </div>
        <span className="text-light-100 text-[18px] font-normal">
          Number Of{" "}
          <Link href={"#"} className="underline text-prm-100">
            {" "}
            Mitigated{" "}
          </Link>
          Attacks
        </span>
      </div>
      <div className="w-3/5 h-full p-8 flex flex-col gap-[29px]">
        <span className="text-light-100 text-[20px] font-semibold">
          Cumulative Sum of Mitigated DDoS Attacks
        </span>
        <div className="flex border border-light-20 ">
          <div className="w-1/2 flex flex-col text-light-100 px-[18px] py-5 border-r border-r-light-20">
            <span className="text-low-100 text-sm font-medium uppercase ">
              Billion Packets
            </span>
            <span className="text-[50px] overflow-x-scroll scrollbar-hide ">
              {sumPPS}
            </span>
            <p className="text-light-40 text-[20px]">
              Total Number of <span className="underline">Dropped Packets</span>
            </p>
          </div>
          <div className="w-1/2 flex flex-col text-light-100 px-[18px] py-5">
            <span className="text-low-100 text-sm font-medium uppercase ">
              Peta Bytes
            </span>
            <span className="text-[50px] overflow-x-scroll scrollbar-hide ">
              {sumIRL}
            </span>
            <p className="text-light-40 text-[20px]">
              Total Number of <span className="underline">Dropped Bytes</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisReport;
