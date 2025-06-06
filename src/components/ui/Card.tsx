import type { SkipHireOption } from "@/type/skipDataType";
import { MoveRight } from "lucide-react";
import { Button } from "./button";

interface CardProps {
  data: SkipHireOption;
  image: string;
}

const Card = ({ data, image }: CardProps) => {
  return (
    <div className="max-w-[300px] bg-[#1C1C1C] rounded-2xl p-4">
      <div>
        <img src={image} className="w-full h-40 sm:h-44 " alt="" />
      </div>
      <div>
        <div className="flex justify-between font-semibold pt-2">
          <h3>{data.size} yard stick</h3>
          <h3 className="text-zinc-400">£{data.price_before_vat}</h3>
        </div>

        <Button className="bg-blue-600 w-full mt-5">
          <span>Select This Skip</span>
          <MoveRight />
        </Button>
      </div>
    </div>
  );
};

export default Card;
