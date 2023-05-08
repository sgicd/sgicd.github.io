import { Container, Nav, Navbar } from 'react-bootstrap';
import { headerItems } from '../utils'
import { LinkContainer } from 'react-router-bootstrap';
import { Flex } from './Flex'
import "../css/header.css";

const styles = {
  marginTop: '-12px'
}
export const Header = (() => {
  return (<Navbar className="header">
    <Container>
      <Flex display={"grid"}>
        <Navbar.Brand href="#home">
          <img
            className="header-img"
            src={headerItems?.img}
            alt="Header" />
        </Navbar.Brand>
        <span style={styles}>DOWNTOWN</span>
      </Flex>
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
