import { bitsToGbps } from "@/helper/home/calculator";
import { getTopFiveIrl } from "@/queries/home";

interface IData {
  value: number;
}

const AttackInfo = async () => {
  const topFive: Array<IData> = await getTopFiveIrl();
  const { value: maxItem } = topFive.reduce((max: IData, item: IData) =>
    item.value > max.value ? item : max
  );
  const info = bitsToGbps(maxItem);
  const restOfData = topFive
    .filter((item) => item.value != maxItem)
    .map((item) => {
      return bitsToGbps(item.value);
    });

  return (
    <div className="border border-light-20 bg-sc-100 size-full px-[18px] pt-8 pb-[35px] flex flex-col gap-y-4">
      <div className="flex gap-x-3 items-center">
        <img src="/rocket.png" alt="Rocket" />
        <div className="flex flex-col  ">
          <span className="text-2xl">Maximum Attack Volumes</span>
          <span className="text-base font-normal">BITS</span>
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="flex gap-1">
          <span className="text-low-100 text-[50px] h-[62px]">{info}</span>
          <span className="self-end h-[26px] text-sm text-light-20">Gbps</span>
        </div>
        <span className="text-light-100 text-[22px] font-normal ">
          Maximum Volume <br /> Of The{" "}
          <a href={"#"} className="underline text-prm-100">
            {" "}
            Mitigated{" "}
          </a>{" "}
          Attacks
        </span>
      </div>
      <div className="flex justify-between">
        {restOfData.map((item, index) => {
          return (
            <div
              className="border border-light-20 px-2 h-[27px] text-base font-normal"
              key={index}
            >
              {item} Gbps
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttackInfo;
