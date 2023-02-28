import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillQuestionCircle, AiFillSetting } from "react-icons/ai";
import "../App.css";

const Footer = () => {
  return (
    <footer className="my-5">
      <Container>
        <Row>
          <Col>
            <img
              className="footer-logo"
              src="../linkedin.png"
              alt="Linkedin Logo"
              height={"24px"}
            />
          </Col>
        </Row>
        <Row className="">
          <Col className="d-flex flex-column mb-2">
            <Link className="footer-link" to="/">
              About
            </Link>
            <Link className="footer-link" to="/">
              Community Guidelines
            </Link>
            <Link className="footer-link" to="/">
              Privacy & Terms
            </Link>
            <Link className="footer-link" to="/">
              Sales Solutions
            </Link>
            <Link className="footer-link" to="/">
              Sefety Center
            </Link>
          </Col>
          <Col className="d-flex flex-column mb-2">
            <Link className="footer-link" to="/">
              Accessibility
            </Link>
            <Link className="footer-link" to="/">
              Carers
            </Link>
            <Link className="footer-link" to="/">
              Ad Choices
            </Link>
            <Link className="footer-link" to="/">
              Mobile
            </Link>
          </Col>
          <Col className="d-flex flex-column mb-2">
            <Link className="footer-link" to="/">
              Talent Solutions
            </Link>
            <Link className="footer-link" to="/">
              Marketing Solutions
            </Link>
            <Link className="footer-link" to="/">
              Advertising
            </Link>
            <Link className="footer-link" to="/">
              Small Business
            </Link>
          </Col>
          <Col md={3} className="d-flex flex-column">
            <Link className="footer-link" to="/">
              <div className="d-flex">
                <div>
                  <AiFillQuestionCircle />
                </div>
                <div>
                  <h6>Questions?</h6>
                  <p>Visit our help center</p>
                </div>
              </div>
            </Link>
            <Link className="footer-link" to="/">
              <div className="d-flex">
                <div>
                  <AiFillSetting />
                </div>
                <div>
                  <h6>Manage your account and privacy</h6>
                  <p>Go to your settings</p>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={3} className="d-flex flex-column">
            <h6 className="grayfooter">Select Language</h6>
            <Form.Select aria-label="Seleziona la lingua">
              <option value="it">English (English)</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="copyright">
              Linkedin Corporation &copy; {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
