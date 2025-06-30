import React from "react";

export default function StepList({ steps, selected, onSelect }) {
  return (
    <div className="w-1/2">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={`p-4 mb-4 bg-white rounded-lg shadow cursor-pointer border ${selected === idx ? "border-green-400" : "border-transparent"} hover:border-green-400`}
          onClick={() => onSelect(idx)}
        >
          <div className="text-xs text-green-500 font-bold">{step.description}</div>
          <div className="font-semibold">{step.title}</div>
        </div>
      ))}
    </div>
  );
}
