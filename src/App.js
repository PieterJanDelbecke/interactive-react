import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import AppContext from "./context/AppContext";
import Page from "./components/page";

function App() {
  const [context, setContext] = useState({
    activeBtn: -1
  });

  return (
    <>
      <AppContext.Provider value={{ context, setContext }}>
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
