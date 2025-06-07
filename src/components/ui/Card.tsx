import type { SkipHireOption } from "@/type/skipDataType";
import { CircleCheck, MoveRight, TriangleAlert } from "lucide-react";
import { Button } from "./button";
import { motion } from "framer-motion";

interface CardProps {
  data: SkipHireOption;
  image: string;
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
  setSelectedImage: (selectedImage: string | null) => void;
}

const Card = ({
  data,
  image,
  setSelectedId,
  setSelectedImage,
  selectedId,
}: CardProps) => {
  const isSelected = selectedId === data.id;

  const handleClick = () => {
    setSelectedId(isSelected ? null : data.id);
    setSelectedImage(isSelected ? null : image);
  };

  return (
    <div className="max-w-[300px] bg-[#1C1C1C] rounded-2xl p-4">
      <div className="relative">
        <img src={image} className="w-full h-40 sm:h-44 object-cover" alt="" />
        {!data.allowed_on_road && (
          <div className="sm:bg-[#1c1c1c9a] sm:p-2 sm:rounded-2xl absolute top-2 right-2 text-sm flex items-center gap-2">
            <TriangleAlert className="text-yellow-700" size={20} />
            <span className="hidden sm:block">Not allowed on road</span>
          </div>
        )}
      </div>
      <div>
        <div className="flex justify-between font-semibold pt-2">
          <h3>{data.size} yard stick</h3>
          <h3 className="text-zinc-400">£{data.price_before_vat}</h3>
        </div>

        <motion.div
          whileTap={{ scale: 0.95 }}
          className="w-full mt-5 rounded-md"
        >
          <Button
            onClick={handleClick}
            className={`w-full flex items-center justify-center gap-2 py-2 font-semibold ${
              selectedId !== data.id && "bg-yellow-600"
            }`}
          >
            {selectedId === data.id ? (
              <>
                <CircleCheck className="w-5 h-5" />
                <span>Selected</span>
              </>
            ) : (
              <>
                <span>Select Skip</span>
                <MoveRight className="w-5 h-5" />
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
