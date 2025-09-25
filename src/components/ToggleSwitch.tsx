import React, { useState } from "react";

interface ToggleSwitchProps {
  labels: [string, string, string];
  onToggle: (selectedIndex: number) => void;
  ariaLabel?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  labels,
  onToggle,
  ariaLabel = "Toggle entre opciones",
}) => {
  const [selected, setSelected] = useState(0);

  const handleToggle = (index: number) => {
    setSelected(index);
    onToggle(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    let newIndex = selected;
    if (e.key === "ArrowRight") newIndex = (selected + 1) % 3;
    if (e.key === "ArrowLeft") newIndex = (selected + 2) % 3;
    if (e.key === "Enter" || e.key === " ") {
      handleToggle(newIndex);
    }
  };

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      tabIndex={0}
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
          left: `calc(${selected * 33.333}% + 4px)`,
          width: "calc(33.333% - 8px)",
          height: "64px",
          backgroundColor: "#F7A009",
          borderRadius: "20px",
          transition: "left 0.3s ease-in-out",
          zIndex: 0,
        }}
      />
      {labels.map((label, idx) => (
        <div
          key={label}
          className="text-center"
          style={{
            width: "33.333%",
            zIndex: 1,
            color: selected === idx ? "white" : "black",
            cursor: "pointer",
            fontWeight: selected === idx ? "bold" : "normal",
            fontSize: "clamp(13px, calc(10px + 0.455vw), 19px)",
          }}
          role="tab"
          aria-selected={selected === idx}
          onClick={() => handleToggle(idx)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default ToggleSwitch;
