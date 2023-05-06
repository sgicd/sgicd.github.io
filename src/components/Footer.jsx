import { Container, Nav, Navbar } from 'react-bootstrap';
import { headerItems } from '../utils'

const styles = {
  height: "50px"
}

export const Footer = (() => {
  return (<Navbar style={styles} bg="dark" fixed="bottom">
    <Container>
      <Nav className="d-flex footer"></Nav>
      <Navbar.Brand href="#home" className='mb-0 pb-0'>
        <img
          src={headerItems?.imgFooter}
          width="40"
          height="20"
          className="d-inline-block align-top"
          alt="footer"
        />
      </Navbar.Brand>
    </Container>
  </Navbar>)
});
