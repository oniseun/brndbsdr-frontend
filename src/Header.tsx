import { Component } from 'react';
import {Navbar,Nav,  Container} from 'react-bootstrap'
import CountrySelection from './CountrySelection'

interface HeaderProps {
  countryClickHandler: any
  countryName: string;
  countryCode: string;
  isLoggedIn: boolean;
  username: string;
}

interface HeaderState {
}

class Header extends Component<HeaderProps, HeaderState> { 
    
  render(): object {

  const {countryClickHandler, countryName, countryCode, isLoggedIn, username} = this.props

  let authView: any = ''

  if (isLoggedIn) {
    authView = (
      <>
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="mr-5">
      Signed in as: <span className="text-danger text-bold">{username}</span>
      </Navbar.Text>
      <CountrySelection countryName={countryName} countryCode={countryCode} onClickHandler={countryClickHandler}/>
      </Navbar.Collapse>
      </>
    )
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
        <img
        src="/brandbassdor.webp"
        height="40"
        className="d-inline-block align-top"
        alt="Brandbassador logo"
      />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
        </Navbar.Collapse>
        {authView}
        
      </Container>
      </Navbar>
    </>
  );
}
}

export default Header;