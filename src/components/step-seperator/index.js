import React from "react";
import "./style.css";

function StepSeperator({ steps, currentStep }) {
  return (
    <div className="step-seperator-main-container  border-2 bg-grey p-2 d-flex flex-row">
      {Object.keys(steps).map((item, index) => {
        return (
          <div
            key={index + 1}
            style={{
              width: `${100 / Object.keys(steps).length}%`,
            }}
            className="d-flex flex-row align-items-center "
          >
            <div className='border' style={{ width: "90%" }}>
              <div
                className={`stepper stepper-${
                  !steps[item]?.isFresh && !steps[item]?.error
                    ? "compelete"
                    : !steps[item]?.isFresh && steps[item]?.error
                    ? "warning"
                    : ""
                } border-right-0  
              ${index == 0 && "border-left"}
              ${index > 0 && "border-left-0"}
               ${
                 !steps[item]?.isFresh && steps[item]?.error
                   ? "complete-warning"
                   : !steps[item]?.isFresh && !steps[item]?.error
                   ? "complete-success"
                   : "border bg-secondary"
               }`}
              ></div>
            </div>
            <div
              className={`${
                !steps[item]?.isFresh && steps[item]?.error
                  ? " border-danger"
                  : !steps[item]?.isFresh && !steps[item]?.error
                  ? " border-success"
                  : "border bg-light"
              } step-counter`}
            >
              <p
                style={{
                  margin: `${currentStep == item ? "3px" : "4px"}`,
                  fontSize: `${currentStep == item ? "12px" : "10px"}`,
                }}
                className="p-0 font-weight-bold "
              >
                {index + 1}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StepSeperator;
