"use client";

const selectorTime = ["1day", "1week", "1hour"];

const OptionsMenu = () => {
  return (
    <ul className="menu menu-horizontal rounded-box border dark:border-light-20 h-full p-0 overflow-hidden">
      {selectorTime.map((item, index) => {
        return (
          <li
            key={index}
            className={`${
              index !== selectorTime.length - 1 ? "border-r" : ""
            } dark:border-r-light-20 h-full`}
          >
            <button className="h-full">{item}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default OptionsMenu;
