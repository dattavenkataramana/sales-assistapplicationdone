import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ProductCard.css";
import { FaSearch } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { CirclesWithBar } from "react-loader-spinner";

function Productcard() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://dummy-api-sallesassit.onrender.com/products";

  const getProducts = async () => {
    try {
      const response = await axios.get(url);
      setProducts(response.data.user);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.para.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <h2 className="mains-heading">Bags <span>.</span> Backpacks</h2>
          </div>
          <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
              type="search"
              placeholder="Please enter the product like: watch, toy, etc."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="p3-5 prods">
            {isLoading ? (
              <div className="loader">
                <CirclesWithBar />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="empty-search-conatiner">
                <div className="empty-search">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
                    alt="No results found"
                    className="no-product-found"
                  />
                  <h3>No Products Found</h3>
                  <p>Search something else</p>
                </div>
              </div>
            ) : (
              filteredProducts.map((item, index) => {
                const { id, image, para, amount, mamamount, off } = item;

                return (
                  <LazyLoad key={id}>
                    <div className="product-container">
                      <img src={image} alt="" className="map-image" />
                      <div className="card-body">
                        <h5 className="card-title text-center pt-2">
                          {para.substr(0, 30)}
                        </h5>
                        <p className="card-text text-center">{para}</p>
                        <p className="text-center price">₹ {amount}</p>
                        <div className="rating-container">
                          <p className="ratings text-center">{`${mamamount} ⭐`}</p>
                          <p  style={{color:"green"}} ></p>
                        </div>
                        <div className="btns text-center">
                          <button className="btns">{off}</button>
                        </div>
                      </div>
                    </div>
                  </LazyLoad>
                );
              })
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Productcard;
