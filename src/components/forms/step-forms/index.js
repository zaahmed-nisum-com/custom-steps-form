import React, { useState } from "react";
import SingleButton from "../../buttons/single-button";
import IconButton from "../../buttons/single-button/icon-button";
import SingleInput from "../../inputs/single-input";
import "./style.css";

function StepForms({
  formArray,
  currentStep,
  nextStep,
  steps,
  previousStep,
  isLast,
  ...props
}) {
  function handleTextChange(e, label) {
    props.handleChange(e.target.value, label);
  }

  return (
    <div
      className={`${
        Object.keys(formArray).includes(currentStep) && "next-form-flip"
      }`}
    >
      {console.log(Object.keys(formArray).includes(currentStep))}
      <div className="step-form-main-container border-2 bg-light p-3">
        {Object.keys(formArray).indexOf(currentStep) > 0 && (
          <IconButton
            styles={{ float: "left" }}
            handleClick={() => props.handleBack(previousStep)}
          />
        )}
        <h2>{currentStep}</h2>
        {Object.keys(formArray[currentStep]).map((item, index) => {
          return (
            typeof formArray[currentStep][item] != "boolean" && (
              <div key={index+1} className="p-3" key={index + 1}>
                <SingleInput
                  obj={formArray[currentStep]}
                  handleChange={(e) => handleTextChange(e, item)}
                  item={item}
                />
              </div>
            )
          );
        })}
        {steps[currentStep]["validations"].map((item, index) => {
          return <label key={index+1} className="text-danger">{item}</label>;
        })}
        {isLast ? (
          <SingleButton title="Submit" />
        ) : (
          <SingleButton
            title="Next"
            handleClick={() => props.handleNextStep(nextStep)}
          />
        )}
      </div>
    </div>
  );
}

export default StepForms;
