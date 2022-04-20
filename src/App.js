import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import AppContext from "./context/AppContext";
import Page from "./components/page";

function App() {
  const [clickedIdContext, setClickedIdContext] = useState(-1);
  
  return (
    <>
      <AppContext.Provider value={{ clickedIdContext, setClickedIdContext }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Page />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
