import type { SkipHireOption } from "@/type/skipDataType";
import { Button } from "./button";
import { CircleCheck, TriangleAlert } from "lucide-react";

interface PopupProps {
  data: SkipHireOption;
  setSelectedId: (id: number | null) => void;
  selectedImage: string | null;
}

const PopUp = ({ data, setSelectedId, selectedImage }: PopupProps) => {
  const totalPrice = data && data.price_before_vat + data?.vat;

  return (
    <div
      className="fixed inset-0 bg-[#00000090] flex items-center justify-center z-50"
      onClick={() => setSelectedId(null)}
    >
      <div
        className="relative p-6 rounded-xl shadow-lg z-60 bg-[#1c1c1c] flex"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside popup
      >
        <div className="lg:w-3xl md:w-2xl flex flex-col lg:flex-row lg:justify-between gap-4">
          <div
            className="w-full lg:h-72 lg:w-[600px] sm:h-60 h-48 bg-zinc-200
           dark:bg-zinc-800 rounded-xl mb-4 flex items-center justify-center text-zinc-500"
          >
            <img
              src={selectedImage ?? ""}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="lg:w-full space-y-2 text-sm">
            <h2 className="text-2xl font-semibold mb-2">
              {data?.size} Yard Skip
            </h2>
            <div className="flex justify-between">
              <span>Hire Period</span>
              <span>{data?.hire_period_days} days</span>
            </div>
            <div className="flex justify-between">
              <span>Price (excl. VAT)</span>
              <span>£{data?.price_before_vat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT</span>
              <span>£{data?.vat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total Price</span>
              <span>£{totalPrice?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Postcode</span>
              <span>{data?.postcode}</span>
            </div>
            <div className="flex items-center gap-2 font-semibold pt-4">
              <span className="text-yellow-600">
                {data.allowed_on_road ? (
                  <CircleCheck size={20} />
                ) : (
                  <TriangleAlert size={20} />
                )}
              </span>
              <span>
                {data.allowed_on_road
                  ? "Allowed on road"
                  : "Not allowed on road"}
              </span>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-yellow-600">
                {data.allows_heavy_waste ? (
                  <CircleCheck size={20} />
                ) : (
                  <TriangleAlert size={20} />
                )}
              </span>
              <span>
                {data.allows_heavy_waste
                  ? "Heavy waste allowed"
                  : "Heavy waste not allowed"}
              </span>
            </div>

            <div className="mt-6 space-x-2">
              <Button variant={"default"} onClick={() => setSelectedId(null)}>
                Cancel
              </Button>
              <Button className="bg-yellow-500">Continue </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
