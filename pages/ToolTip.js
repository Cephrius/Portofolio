import { max } from "moment";
import React, { useRef } from "react";


function ToolTip ({ children, tooltip, textSize})  {
  const tooltipRef = useRef(null);
  const container = useRef(null);

  return (
    
    <div
      ref={container}
      onMouseEnter={({ clientX  }) => {
        if (!tooltipRef.current || !container.current) return;
        const { left,width} = container.current.getBoundingClientRect();
        const tooltipWidth = tooltipRef.current.getBoundingClientRect().width;

        // calcuate the center point of the tooltip relative to the container
        const tooltipCenter = clientX -left;

        // calcuate the left position for the tooltip so that the center aligns with the mouse position
        const tooltipLeft = tooltipCenter - tooltipWidth / 2;

        // calcuate the rightmost posisiton the tooltip can have without going off-screen
        const maxRight = window.innerWidth - tooltipWidth;

        // Position the tooltip, ensurign it dosen't go off-screen on the left or right
        tooltipRef.current.style.left = `${Math.min(Math.max(tooltipLeft ,0), maxRight)}px`

      }}

      className="group relative inline-block"
    >
      {children}
      {tooltip ? (
        <span
          ref={tooltipRef}
          className={`invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-blue-400 text-gray-800 dark:text-white dark:bg-blue-600 p-1 font-bold rounded absolute top-full mt-2 whitespace-nowrap text-${textSize}  ` }
        >
          {tooltip}
        </span>
      ) : null}
    </div>
    
  );
};

export default ToolTip;

