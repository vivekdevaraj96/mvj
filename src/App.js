import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Bajaj from "./Components/Bajaj"
import Hero from "./Components/Hero"
import Honda from "./Components/Honda"
import Suzuki from "./Components/Suzuki"
import TVS from "./Components/TVS"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bajaj" element={<Bajaj/>} />
          <Route path="/hero" element={<Hero/>} />
          <Route path="/honda" element={<Honda/>} />
          <Route path="/suzuki" element={<Suzuki/>} />
          <Route path="/tvs" element={<TVS/>} />
          <Route path="/about" />
          <Route path="/contactus" />
          <Route path="/shippingreturn" />
          <Route path="/privacyterms" />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
