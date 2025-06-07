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
    <div className="flex justify-center my-6">
      <div className="flex items-center gap-4 max-w-6xl mx-auto shadow-2xl rounded-3xl px-6 py-4">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div key={index} className="flex items-center flex-wrap">
              <div
                className={`relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold 
                  ${
                    isCompleted
                      ? "bg-green-700 text-white"
                      : isActive
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-300 text-gray-400"
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

                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max text-sm hidden sm:block">
                  <span>{step.label}</span>
                </div>
              </div>

              {index !== steps.length - 1 && (
                <div className="w-0 sm:w-5 md:w-12 lg:w-20 h-1 mx-2 rounded-2xl bg-gray-300">
                  <div
                    className={`h-full rounded-2xl ${
                      isCompleted ? "bg-green-300" : "bg-gray-300"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepBar;
