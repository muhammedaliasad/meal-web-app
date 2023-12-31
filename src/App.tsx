import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutMe/AboutMe";
import Menu from "./components/menu/Menu";
import Meal from "./components/Meals/Meal";
import Favourites from "./components/Favourites/Favourites";
import MeelGenerator from "./components/meelGenerator/MeelGenerator";
import "./App.css";
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:category" element={<Meal />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/meal-generator" element={<MeelGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
