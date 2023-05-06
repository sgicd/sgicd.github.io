import { Container, Nav, Navbar } from 'react-bootstrap';
import { headerItems } from '../utils'
import { LinkContainer } from 'react-router-bootstrap';
import "../css/header.css";

export const Header = (() => {
  return (<Navbar className="header">
    <Container>
      <Navbar.Brand href="#home">
        <img
          className="header-img"
          src={headerItems?.img}
          alt="Header" />
      </Navbar.Brand>

      <Nav className="d-flex">
        {headerItems.navigation.map((tab, idx) => {
          return (
            <LinkContainer key={idx} to={tab.url}>
              <Nav.Link>{tab.name}</Nav.Link>
            </LinkContainer>
          )
        })}

      </Nav>

    </Container>
  </Navbar>);
});
