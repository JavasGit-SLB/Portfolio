import React, { useState } from "react";

interface ToggleSwitchProps {
  onLeftLabel: string;
  onRightLabel: string;
  onToggle: (isLeft: boolean) => void;
  ariaLabel?:string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  onLeftLabel,
  onRightLabel,
  onToggle,
  ariaLabel = "Toggle entre opciones",
}) => {
  const [isRight, setIsRight] = useState(true);

  const toggle = () => {
    const newState = !isRight;
    setIsRight(newState);
    onToggle(newState);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
    role="switch"
      aria-checked={isRight}
      aria-label={ariaLabel}
      tabIndex={0}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      className="position-relative d-inline-flex align-items-center justify-content-between"
      style={{
        width: "100%",
        height: "76px",
        borderRadius: "20px",
        border: "1px solid grey",
        backgroundColor: "#ffffffff",
        padding: "4px",
        cursor: "pointer",
        fontFamily: "Space Grotesk",
        fontWeight: "600",
        fontSize: "16px",
        color: "white",
        userSelect: "none",
        transition: "background 0.3s ease-in-out",
      }}
      
    >
      <div
        style={{
          position: "absolute",
          top: "5px",
          left: isRight ? "4px" : "calc(50% + 2px)",
          width: "calc(50% - 6px)",
          height: "64px",
          backgroundColor: "#F7A009",
          borderRadius: "20px",
          transition: "left 0.3s ease-in-out",
          zIndex: 0,
        }}
      />
      <div
        className="w-50 text-center"
        style={{ zIndex: 1, color: isRight ? "white" : "black" }}
      >
        {onLeftLabel}
      </div>
      <div
        className="w-50 text-center"
        style={{ zIndex: 1, color: isRight ? "black" : "white" }}
      >
        {onRightLabel}
      </div>
    </div>
  );
};

export default ToggleSwitch;
