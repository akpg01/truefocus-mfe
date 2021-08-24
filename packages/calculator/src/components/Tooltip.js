import React, { useState } from "react";

function Tooltip({ message, position, children }) {
  const [tooltip, setTooltip] = useState(false);

  const hideTooltip = () => {
    setTooltip(false);
  };

  const showTooltip = () => {
    setTooltip(true);
  };

  return (
    <>
      <div className="tooltip-wrapper" onMouseLeave={hideTooltip}>
        <span className="tooltip">
          {tooltip && (
            <div className={`tooltip-bubble tooltip-${position}`}>
              <div className="tooltip-message">{message}</div>
            </div>
          )}
          <span className="tooltip-trigger" onMouseOver={showTooltip}>
            {children}
          </span>
        </span>
      </div>
    </>
  );
}

export default Tooltip;
