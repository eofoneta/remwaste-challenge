import Card from "@/components/ui/Card";
import PopUp from "@/components/ui/popUp";
import { StepperForm } from "@/components/ui/StepperForm";
import { images, steps } from "@/data/data";
import type { SkipHireResponse } from "@/type/skipDataType";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HomeProps {
  skipData: SkipHireResponse | null;
  loading: boolean;
}

const Home = ({ skipData, loading }: HomeProps) => {
  const [currentStep, setCurrentStep] = useState(2); // 2 at default for challenge
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const next = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));

  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    // make step naviagtion visible (not really neccessary)
    document.getElementById("top-page")?.scrollIntoView({ behavior: "smooth" });
  }, [currentStep]);

  if (loading) return <div>Loading...</div>;

  return (
    <div id="top-page">
      <StepperForm currentStep={currentStep} />
      <div className="mt- sm:mt-20 mb-5 p-2 flex flex-col lg:flex-row md:justify-between">
        <div>
          <motion.div
            className="font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="lg:text-4xl sm:text-3xl text-2xl">
              Choose Your Skip Size
            </h1>
          </motion.div>
          <h2 className="text-zinc-400 pt-1 sm:pt-2">
            Choose the skip size that best fits your specific requirements
          </h2>
        </div>
        <p className="text-zinc-400 pt-2 sm:text-sm text-xs md:w-[500px]">
          Imagery and information shown throughout this website may not reflect
          the exact shape or size specification, colours may vary, options
          and/or accessories may be featured at additional cost.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {skipData?.map((data, index) => {
          return (
            <Card
              key={data.id}
              setSelectedId={setSelectedId}
              selectedId={selectedId}
              data={data}
              image={images[index % images.length]}
              setSelectedImage={setSelectedImage}
            />
          );
        })}
      </div>
      {selectedId &&
        skipData
          ?.filter((skip) => skip.id === selectedId)
          .map((data) => (
            <PopUp
              data={data}
              next={next}
              prev={prev}
              setSelectedId={setSelectedId}
              selectedImage={selectedImage}
            />
          ))}
    </div>
  );
};

export default Home;
