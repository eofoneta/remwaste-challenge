import StepBar from "./StepBar";
import { steps } from "@/data/data";

interface StepperFormProps {
  currentStep: number;
}

export const StepperForm = ({ currentStep }: StepperFormProps) => {
  return (
    <div className="p-4">
      <StepBar steps={steps} currentStep={currentStep} />
    </div>
  );
};
