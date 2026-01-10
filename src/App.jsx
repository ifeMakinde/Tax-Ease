import { useRef } from "react";
import Homepage from "./pages/Homepage";
// import { useEffect } from "react";

function App() {
  const body = useRef(null);
  return (
    <div className="m-auto w-[95%] md:max-w-[90%]" ref={body}>
      <Homepage />
    </div>
  );
}

export default App;
