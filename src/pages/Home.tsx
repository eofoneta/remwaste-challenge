import axios from "@/api/axios";
import Card from "@/components/ui/Card";
import { StepperForm } from "@/components/ui/StepperForm";
import { images, steps } from "@/data/data";
import type { SkipHireResponse } from "@/type/skipDataType";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home = () => {
  const [skipData, setSkipData] = useState<SkipHireResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const [currentStep, setCurrentStep] = useState(2);

  const next = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));

  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    getSkipData();
  }, []);

  const getSkipData = async () => {
    setLoading(true);

    try {
      const res = await axios.get<SkipHireResponse>(
        "/skips/by-location?postcode=NR32&area=Lowestoft"
      );

      console.log("Response", res.data);
      setSkipData(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <StepperForm currentStep={currentStep} next={next} prev={prev} />
      <div className="mt-10 p-2 text-center">
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
        <h2 className="text-zinc-400 pt-2">
          Choose the skip size that best fits your specific requirements
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10">
        {skipData?.map((data, index) => (
          <Card
            key={data.id}
            data={data}
            image={images[index % images.length]}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
