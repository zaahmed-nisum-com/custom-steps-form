import React, { useState } from "react";
import StepForms from "../../components/forms/step-forms";
import StepSeperator from "../../components/step-seperator";

function Purchase({}) {
  const [currentStep, setCurrentStep] = useState("address");
  const [previousStep, setPreviousStep] = useState("");
  let [formArray, setFormArray] = useState({
    address: {
      country: "",
      city: "",
      state: "",
    },
    billingAddress: {
      sameAsAddress: false,
      country: "",
      city: "",
      state: "",
    },
    card: {
      cardNo: "",
      accountHolder: "",
      expire: "",
      cvc: "",
    },
  });
  let [steps, setSteps] = useState({
    address: {
      isFresh: true,
      next: "billingAddress",
      error: false,
      validations: [],
    },
    billingAddress: {
      isFresh: true,
      next: "card",
      error: true,
      validations: ['Please fill all the fields'],
    },
    card: {
      isFresh: true,
      next: "",
      isLast: true,
      error: false,
      validations: [],
    },
  });

  function handleNextStep(nextStep) {
    // formArray[currentStep] = { ...data };
    setPreviousStep(currentStep);
    steps[currentStep] = { ...steps[currentStep], isFresh: false };
    steps = { ...steps };
    setSteps(steps);
    setCurrentStep(nextStep);
  }

  function handlePreviousStep(back) {
    setPreviousStep(
      Object.keys(formArray)[Object.keys(formArray).indexOf(back) - 1]
    );
    setCurrentStep(back);
  }

  function handleChange(value, label) {
    formArray[currentStep][label] = value;
    formArray = { ...formArray };
    setFormArray(formArray);
  }

  return (
    <div className="purchase container-fluid border  column">
      <StepSeperator steps={steps} currentStep={currentStep} />
      <StepForms
        handleNextStep={handleNextStep}
        steps={steps} 
        handleBack={handlePreviousStep}
        handleChange={handleChange}
        formArray={formArray}
        isLast={steps[currentStep].isLast ? steps[currentStep].isLast : false}
        nextStep={steps[currentStep].next}
        currentStep={currentStep}
        previousStep={previousStep}
      />
    </div>
  );
}

export default Purchase;
