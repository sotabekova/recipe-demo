import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Italian from "../Pages/Italian";
import "./index.css";
import Uzbek from "../Pages/Uzbek";
import American from "../Pages/American";
import Chinese from "../Pages/Chinese";
import Alfredo from "../Italian/Alfredo";

function App() {
  return (
    <Routes>
      <Route path="/chinese" element={<Chinese />}/>
      <Route path="/" element={<HomePage />} />
      <Route path="/italian" element={<Italian />} />
      <Route path="/uzbek" element={<Uzbek />} />
      <Route path="/american" element={<American />} />
      <Route path="/italian/fettuccine-alfredo" element={<Alfredo/>}/>
     
      {/* add more cuisines here */}
    </Routes>
  );
}

export default App;
