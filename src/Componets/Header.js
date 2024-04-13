import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <ul className="list_style">
              <li className="list-styles">Bags</li>
              <li className="list-styles"> Travel</li>
              <li className="list-styles"> Accesories</li>
              <li className="list-styles"> Gifting</li>
              <li className="list-styles"> Jewelery</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;