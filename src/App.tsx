import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PopUp from "./components/ui/popUp";
import type { SkipHireResponse } from "./type/skipDataType";
import { useEffect, useState } from "react";
import axios from "./api/axios";

function App() {
  const [skipData, setSkipData] = useState<SkipHireResponse | null>(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="px-4">
      <Routes>
        <Route
          path="/"
          element={<Home loading={loading} skipData={skipData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
