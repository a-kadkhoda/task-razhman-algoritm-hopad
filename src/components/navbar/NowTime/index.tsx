"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";

const NowTime = () => {
  const [time, setTime] = useState<string>(dayjs().format("HH:mm:ss"));
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const newTime = dayjs().format("HH:mm:ss");
      setTime(newTime);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return <span className="">{time}</span>;
};

export default NowTime;
