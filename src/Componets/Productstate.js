import { Container, Row, Col } from "react-bootstrap";
import "./Productstate.css";
import { BsBriefcase } from "react-icons/bs";
import {
  GiClothes,
  GiSunglasses,
  GiRunningShoe,
  GiEarrings,
  GiWashingMachine,
} from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import {
  FaMobileAlt,
  FaTshirt,
  FaCameraRetro,
  FaLaptopCode,
} from "react-icons/fa";
import { IoTvSharp } from "react-icons/io5";
function Productstate() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <div className="product_state_conatainer">
              <div className="icon-backpack">
                <BsBriefcase />
                <label className="product_label"> Bag</label>
              </div>
              <div className="icon-backpack">
                <GiClothes />
                <label className="product_label"> Cloth</label>
              </div>
              <div className="icon-backpack">
                <RiComputerLine />
                <label className="product_label"> Computer</label>
              </div>
              <div className="icon-backpack">
                <GiSunglasses />
                <label className="product_label"> Sunglasses</label>
              </div>
              <div className="icon-backpack">
                <GiRunningShoe />
                <label className="product_label"> Shoes</label>
              </div>
              <div className="icon-backpack">
                <FaMobileAlt />
                <label className="product_label"> Mobile</label>
              </div>
              <div className="icon-backpack">
                <FaTshirt />
                <label className="product_label"> Shirt</label>
              </div>
              <div className="icon-backpack">
                <GiEarrings />
                <label className="product_label"> Earings</label>
              </div>
              <div className="icon-backpack">
                <FaCameraRetro />
                <label className="product_label"> Camera</label>
              </div>
              <div className="icon-backpack">
                <GiWashingMachine />
                <label className="product_label"> Washer</label>
              </div>
              <div className="icon-backpack">
                <FaLaptopCode />
                <label className="product_label"> Laptop</label>
              </div>
              <div className="icon-backpack">
                <IoTvSharp />
                <label className="product_label"> Tvs</label>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Productstate;