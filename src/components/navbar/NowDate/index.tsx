"use client";

import dayjs from "dayjs";
import jalaliPlugin from "@zoomit/dayjs-jalali-plugin";
import { useEffect, useState } from "react";

dayjs.extend(jalaliPlugin);
const NowDate = () => {
  const [date, setDate] = useState<string>(
    dayjs().calendar("jalali").format("YYYY/MM/DD")
  );
  const [day, setday] = useState<string>(
    dayjs().calendar("jalali").format("dddd")
  );

  useEffect(() => {
    const updateDay = () => setday(dayjs().format("dddd"));
    const updateDate = () =>
      setDate(dayjs().calendar("jalali").format("YYYY/MM/DD"));
    updateDay();
    updateDate();

    const now = dayjs();
    const nextMidnight = now.endOf("day").add(1, "second");
    const msUntilMidnight = nextMidnight.diff(now);

    const timer = setTimeout(() => {
      updateDay();
      updateDate();

      setInterval(updateDay, 24 * 60 * 60 * 1000);
      setInterval(updateDate, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);

    return () => clearTimeout(timer);
  }, []);

  return (
    <span>
      {day} - {date}
    </span>
  );
};

export default NowDate;
