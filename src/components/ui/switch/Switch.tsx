"use client";
import React, { useState } from "react";
interface SwitchProps {
  switchText: string;
}
const Switch = ({ switchText }: SwitchProps) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={toggleSwitch}
        className={`h-7 w-12 rounded-full relative transition-colors duration-200 ease-in-out focus-ring-visible ${
          isOn
            ? "bg-var(--color-canvas) border border-var(--color-border)"
            : "bg-var(--color-fg)"
        }`}
      >
        <div
          className={`w-5 h-5 rounded-full absolute top-1/2 -translate-y-1/2 transition-all duration-200 ease-in-out ${
            isOn
              ? "bg-var(--color-fg) left-6"
              : "bg-var(--color-canvas) left-1"
          }`}
        ></div>
      </button>
      <span className="text-var(--color-fg) text-sm">{switchText}</span>
    </div>
  );
};

export default Switch;
