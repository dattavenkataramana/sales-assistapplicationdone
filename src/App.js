import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Componets/Navbars";
import Header from "./Componets/Header";
import Productstate from "./Componets/Productstate";
import ProductCard from "./Componets/ProductCard";

function App() {
  return (
    < >
    <div  className="main-containe-of-heding"> 
      <Navbars />
      <Header />
      <Productstate />
      <ProductCard />
      </div>
    </>
  );
}

export default App;