"use client";
import { ChevronDown } from "lucide-react";

const OptionDropDown = () => {
  return (
    <details className="dropdown dark:text-light-100 h-full  ">
      <summary className="btn !bg-transparent  border dark:border-light-20  w-[216px] px-[18px] flex justify-between h-full">
        open or close <ChevronDown className="dark:text-light-20" />
      </summary>
      <ul className="menu dropdown-content w-full  dark:bg-d-1 rounded-box  px-4 border dark:border-light-20 divide-y dark:divide-light-20">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </details>
  );
};

export default OptionDropDown;
