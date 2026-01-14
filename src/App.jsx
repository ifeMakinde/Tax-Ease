import { useRef } from "react";
import Homepage from "./pages/Homepage";
// import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const body = useRef(null);
  return (
    <div className="m-auto max-w-[95%] md:max-w-[90%]" ref={body}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
