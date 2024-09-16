import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1 style={{ textTransform: 'uppercase', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
  Abubakar
</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>© 2024 Umer. All Rights Reserved. </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
