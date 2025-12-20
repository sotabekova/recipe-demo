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
import ChickenSomsa from "../Uzbek/ChickenSomsa";
import Manti from "../Uzbek/Manti";
import Shashlik from "../Uzbek/Shashlik";
import Shurpa from "../Uzbek/Shurpa";
import Katlama from "../Uzbek/Katlama";
import AdanaKebab from "../Turkish/AdanaKebab";
import Lahmacun from "../Turkish/Lahmacun";
import Doner from "../Turkish/Doner";
import Pide from "../Turkish/Pide";
import Crepes from "../Breakfast/Crepes";
import FrenchToast from "../Breakfast/FrenchToast";
import Shakshuka from "../Breakfast/Shakshuka";
import CheeseOmelette from "../Breakfast/CheeseOmelette";
import ChocolateMuffins from "../Breakfast/ChocolateMuffins";
import Pentuza from "../Salad/Pentuza";
import Fattoush from "../Salad/Fattoush";
import Dinner from "../Dinner/Dinner";
import { Dessert } from "lucide-react";
import Desserts from "../dessert/Desserts";
import Snacks from "../Snacks/Snacks";
import French from "../Pages/French";
import Beverages from "../beverages/Beverages";

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
   <Route path="/uzbek/chickensomsa" element={<ChickenSomsa />}/>
   <Route path="/uzbek/manti" element={<Manti />}/>
   <Route path="/uzbek/shashlik" element={<Shashlik />}/>
   <Route path="/uzbek/shurpa" element={<Shurpa />}/>
   <Route path="/uzbek/katlama" element={<Katlama />}/>
   <Route path="/turkish/adana-kebab" element={<AdanaKebab />}/>
   <Route path="/turkish/lahmacun" element={<Lahmacun />}/>
   <Route path="/turkish/doner" element={<Doner />}/>
   <Route path="/turkish/pide" element={<Pide />}/>
   <Route path="/breakfast/crepes" element={<Crepes />}/>
   <Route path="/breakfast/pancakes" element={<Pancakes />}/>
   <Route path="/breakfast/frenchtoast" element={<FrenchToast />}/>
   <Route path="/breakfast/shakshuka" element={<Shakshuka />}/>
   <Route path="/breakfast/omelette" element={<CheeseOmelette />}/>
   <Route path="/breakfast/chocolatemuffins" element={<ChocolateMuffins />}/>
   <Route path="/salads/pentuza" element={<Pentuza />}/>
   <Route path="/salads/fattoush" element={<Fattoush/>}/>
   <Route path="/dinner" element={<Dinner />}/>
   <Route path="/desserts" element={<Desserts />}/>
   <Route path="/snacks" element={<Snacks/>}/>
   <Route path="/french" element={<French/>}/>
   <Route path="/beverages" element={<Beverages/>}/>
    </Routes>

  );
}

export default App;
