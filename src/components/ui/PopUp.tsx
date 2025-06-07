import type { SkipHireResponse } from "@/type/skipDataType";

interface PopupProps {
  selectedId: number;
  skipData: SkipHireResponse | null;
  setSelectedId: (id: number | null) => void;
}

const PopUp = ({ selectedId, skipData, setSelectedId }: PopupProps) => {
  const data = skipData?.find((skip) => skip.id === selectedId);

  return (
    <div
      className="fixed inset-0 bg-[#00000090] flex items-center justify-center z-50"
      onClick={() => setSelectedId(null)}
    >
      <div
        className="relative p-6 rounded-xl shadow-lg z-60"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside popup
      >
        <button
          onClick={() => setSelectedId(null)}
          className="absolute top-4 right-4 text-gray-500"
        >
          ✕
        </button>

        <div>{data?.id}</div>
      </div>
    </div>
  );
};

export default PopUp;
