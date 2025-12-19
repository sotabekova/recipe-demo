import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Italian from "../Pages/Italian";
import "./index.css";
import Uzbek from "../Pages/Uzbek";
import American from "../Pages/American";
import Chinese from "../Pages/Chinese";
import Alfredo from "../Italian/Alfredo";
import Focaccia from "../Italian/Focaccia";
import Margherita from "../Italian/Margherita";
import Lasagna from "../Italian/Lasagna";
import Tiramisu from "../Italian/TIramisu";
import ChickenParm from "../Italian/ChickenParm";
import Breakfast from "../Breakfast/Breakfast";
import Salad from "../Salad/Salad";
import Pancakes from "../Breakfast/Pancakes";
import Macandcheese from "../American/Macandcheese";
import Phillycheesesteak from "../American/Phillycheesesteak";
import Friedchicken from "../American/Friedchicken";
import ApplePie from "../American/ApplePie";
import CaesarSalad from "../American/CaesarSalad";
import KeyLimePie from "../American/KeyLimePie";
import Turkish from "../Pages/Turkish";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Plov from "../Uzbek/Plov";
import Meatsomsa from "../Uzbek/Meatsomsa";
import Lagman from "../Uzbek/Lagman";

function App() {
  return (
    <Routes>
      <Route path="/chinese" element={<Chinese />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/italian" element={<Italian />} />
      <Route path="/uzbek" element={<Uzbek />} />
      <Route path="/american" element={<American />} />
      <Route path="/turkish" element={<Turkish />} />
      <Route path="/italian/fettuccine-alfredo" element={<Alfredo />} />
      <Route path="/italian/focaccia" element={<Focaccia />} />
      <Route path="/italian/margherita-pizza" element={<Margherita />} />
      <Route path="/italian/lasagna" element={<Lasagna />} />
      <Route path="/italian/tiramisu" element={<Tiramisu />} />
      <Route path="/italian/chickenparm" element={<ChickenParm />} />
      <Route path="/breakfast" element={<Breakfast />} />
      <Route path="/salad" element={<Salad />} />
      <Route path="/pancakes" element={<Pancakes />} />
      <Route path="/american/macandcheese" element={<Macandcheese />} />
      <Route
        path="/american/phillycheesesteak"
        element={<Phillycheesesteak />}
      />
      <Route path="/american/friedchicken" element={<Friedchicken />} />
      <Route path="/american/applepie" element={<ApplePie />} />
      <Route path="/american/caesarsalad" element={<CaesarSalad />} />
      <Route path="/american/keylime" element={<KeyLimePie />} />
   <Route path="/about" element={<About />}/>
   <Route path="/blog" element={<Blog />}/>
   <Route path="/contact" element={<Contact />}/>
   <Route path="/uzbek/plov" element={<Plov />}/>
   <Route path="/uzbek/meatsomsa" element={<Meatsomsa />}/>
   <Route path="/uzbek/lagman" element={<Lagman />}/>
    </Routes>

  );
}

export default App;
