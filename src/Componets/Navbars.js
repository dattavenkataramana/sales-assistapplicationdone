import "./Navbars.css";
import { Search, User, Bookmark, ShoppingBag } from "lucide-react";

function Navbars() {
  return (
    <>
      <nav  className="nav-container">
        <h2 className="nav-heading">TANN TRIM</h2>

        <ul>
          <li className="searchs">
          <Search />
          </li>
          <li className="searchs">
            <User />
          </li>
          <li className="searchs">
            <Bookmark />
          </li>
          <li className="searchs">
            <ShoppingBag />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbars;