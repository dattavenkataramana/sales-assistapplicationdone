import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import Navbars from "./Componets/Navbars";
//import Header from "./Componets/Header";
//import Productstate from "./Componets/Productstate";
//import ProductCard from "./Componets/ProductCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Review from "./Componets/Review";
import Home from "./Componets/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
  


/*<div className="main-containe-of-heding">
          <Navbars />
          <Header />
          <Productstate />
          <ProductCard />
        </div>*/