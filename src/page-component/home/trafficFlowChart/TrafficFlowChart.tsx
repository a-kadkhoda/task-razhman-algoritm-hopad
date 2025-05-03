import OptionDropDown from "./optionsDropDown/OptionDropDown";
import OptionsMenu from "./optionsMenu/OptionsMenu";

const TrafficFlowChart = async () => {
  return (
    <div className="border border-light-20 bg-sc-100 h-full">
      <div className="h-8 w-full px-8 flex justify-between items-center mt-8">
        <span className="h-full">Traffic Flow Chart</span>
        <div className="flex flex-row-reverse h-full items-center gap-x-3">
          <OptionDropDown />
          <OptionsMenu />
        </div>
      </div>
      <div className="h-[calc(100%-96px)]"></div>
    </div>
  );
};

export default TrafficFlowChart;
