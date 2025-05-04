import AnalysisReport from "@/page-component/home/analysisReport/AnalysisReport";
import AttackDuration from "@/page-component/home/attackDuration/AttackDuratin";
import AttackInfo from "@/page-component/home/attackInfo/AttackInfo";
import Reporter from "@/page-component/home/reporter/Reporter";
import TrafficFlowChart from "@/page-component/home/trafficFlowChart/TrafficFlowChart";

export default function Home() {
  return (
    <div className="size-full flex flex-col gap-y-[26px] px-8 pb-8 -mt-[10px]">
      <div className="w-2/3">
        <Reporter />
      </div>
      <div className="flex w-full h-full gap-4">
        <div className="w-1/2 h-full flex flex-col gap-4">
          <div className="h-[310px]">
            <AnalysisReport />
          </div>
          <div className="h-[calc(100%-310px)]">
            <TrafficFlowChart />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <div className="h-[310px] flex ">
            <div className="w-1/2">
              <AttackInfo />
            </div>
          </div>
          <div className="h-[calc((100%-310px)/4)]">
            <AttackDuration />
          </div>
        </div>
      </div>
    </div>
  );
}
