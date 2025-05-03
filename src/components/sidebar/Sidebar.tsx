"use client";
import { Home, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

enum PageRoute {
  Home,
  Global,
}

const Sidebar = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="w-[120px] bg-sc-100 h-screen flex flex-col gap-y-[108px] items-center pt-8 px-[41px]">
      <img src="/Logo.svg" alt="Logo" className="size-[38px]" />
      <div className="flex flex-col justify-center items-center gap-12">
        <Link
          href={"/"}
          className={`flex flex-col justify-center items-center gap-1 ${
            active == PageRoute.Home
              ? "dark:text-low-100"
              : "dark:text-light-100"
          }`}
          onClick={() => setActive(PageRoute.Home)}
        >
          <Home className=" size-6" />
          <span className=" text-sm font-semibold">Home</span>
        </Link>
        <Link
          href={"/global"}
          className={`flex flex-col justify-center items-center gap-1 ${
            active == PageRoute.Global
              ? "dark:text-low-100"
              : "dark:text-light-100"
          }`}
          onClick={() => setActive(PageRoute.Global)}
        >
          <Globe className="size-6" />
          <span className="text-sm font-semibold">Map</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
