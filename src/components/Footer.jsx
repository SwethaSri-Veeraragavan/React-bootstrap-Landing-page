import { Container, Col } from 'react-bootstrap';
import { BsBootstrap, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';
import { GiHummingbird } from 'react-icons/gi';

function Footer() {
  return (
    <Container>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <Col md={4} className="d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <GiHummingbird size={30} />
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
        </Col>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="#"><BsTwitter size={24} /></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="#"><BsInstagram size={24} /></a></li>
          <li className="ms-3"><a className="text-body-secondary" href="#"><BsFacebook size={24} /></a></li>
        </ul>
      </footer>
    </Container>
  );
}

export default Footer;
