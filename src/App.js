import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import AppContext from "./context/AppContext";
import RatingCard from "./components/ratingCard";
import ThankYouCard from "./components/thankYouCard";

function App() {
  const [context, setContext] = useState({
    activeBtn: -1
  });

  return (
    <>
      <AppContext.Provider value={{ context, setContext }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RatingCard />} />
            <Route path="/thank_you" element={<ThankYouCard />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
