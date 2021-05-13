import {Navbar,Nav,  Container} from 'react-bootstrap'
import CountrySelection from '../components/CountrySelection'

function Header(props: any) { 
  
  const {countryClickHandler, logoutHandler, countryName, currency, countryCode, isLoggedIn, firstname, lastname} = props

  let countries: any = ''
  let loginText: any = ''
  if (isLoggedIn) {
    loginText = (
      <>
      <div className="mt-3 text-secondary">
      You are signed in as: <span className="text-primary text-bold">{firstname} {lastname}</span>  
      &nbsp; &lt;<a href="#/logout" onClick={() => logoutHandler()} className="text-danger text-bold">Sign Out</a>&gt;
      </div>
      </>
    );
    countries = (
      <>
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className="mr-5">
     
      </Navbar.Text>
      <CountrySelection countryName={countryName} currency={currency} countryCode={countryCode} onClickHandler={countryClickHandler}/>
      </Navbar.Collapse>
      </>
    );
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as="span">
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
        {countries}
        
      </Container>
      </Navbar>
      <Container>
      {loginText}
      </Container>
    </>
  );
}
export default Header;