import StepBar from "./StepBar";
import { Button } from "./button";
import { steps } from "@/data/data";

interface StepperFormProps {
  currentStep: number;
  next: () => void;
  prev: () => void;
}

export const StepperForm = ({ currentStep, next, prev }: StepperFormProps) => {
  return (
    <div className="p-4">
      <StepBar steps={steps} currentStep={currentStep} />

      {/* <div className="flex gap-2">
        <Button
          variant={"secondary"}
          onClick={prev}
          disabled={currentStep === 0}
        >
          Back
        </Button>
        <Button onClick={next} disabled={currentStep === steps.length - 1}>
          Next
        </Button>
      </div> */}
    </div>
  );
};
