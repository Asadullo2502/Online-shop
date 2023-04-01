import Home from "./modules/home";
import "./assets/styles/main.scss";
import Basket from "./modules/basket";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
     <Routes>
      <Route path="/basket" element={<Basket/>}/>
      <Route path="/" element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
