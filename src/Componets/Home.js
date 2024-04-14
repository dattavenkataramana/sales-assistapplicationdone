 
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Navbars";
import Header from "./Header";
import Productstate from "./Productstate";
import ProductCard from "./ProductCard";
 

function  Home() {
  return (
    <>
        <div className="main-containe-of-heding">
          <Navbars />
          <Header />
          <Productstate />
          <ProductCard />
        </div>
         
    </>
  );
}

export default  Home;
