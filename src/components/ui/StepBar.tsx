import { Check } from "lucide-react";

type Step = {
  label: string;
  icon: React.FC;
};

type StepBarProps = {
  steps: Step[];
  currentStep: number;
};

const StepBar = ({ steps, currentStep }: StepBarProps) => {
  return (
    <div className="flex items-center justify-center max-w-3xl mx-auto my-6 shadow-2xl rounded-3xl p-2">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div key={index} className="flex-1 flex items-center">
            <div
              className={`relative rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold 
                ${
                  isCompleted
                    ? "bg-green-500 text-white"
                    : isActive
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
            >
              {isCompleted ? (
                <Check />
              ) : (
                <div
                  className="rounded-full sm:p-1 p-0.5"
                  style={{
                    outline: "1.5px dashed",
                    outlineOffset: "4px",
                  }}
                >
                  <step.icon />
                </div>
              )}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max text-xs hidden sm:block text-white">
              <span>{step.label}</span>
            </div>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`flex-1 h-1 sm:mx-2 rounded-2xl ${
                  isCompleted ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepBar;
