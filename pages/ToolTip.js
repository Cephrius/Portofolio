import React, { useRef } from "react";

function ToolTip ({ children, tooltip, textSize })  {
  const tooltipRef = useRef(null);
  const container = useRef(null);

  return (
    <div
      ref={container}
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current || !container.current) return;
        const { left } = container.current.getBoundingClientRect();

        tooltipRef.current.style.left = clientX - left + "px";
      }}
      className="group relative inline-block"
    >
      {children}
      {tooltip ? (
        <span
          ref={tooltipRef}
          className={`invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-blue-400 text-gray-800 dark:text-white dark:bg-blue-600 p-1 font-bold rounded absolute top-full mt-2 whitespace-nowrap text-${textSize}` }
        >
          {tooltip}
        </span>
      ) : null}
    </div>
  );
};

export default ToolTip;

