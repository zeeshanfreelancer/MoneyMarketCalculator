import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo.png";
import "../pages/Header/header.css";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="logo-container">
        <a href='/'>
        <img width="200px" src={logo} alt="Logo" />
        </a>
      </div>
      <Navbar expand="lg" className="bg-body-gray">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto custom-nav">

              <NavDropdown title="Finance" id="nav-finance">
                <NavDropdown.Item href="/CompoundInterestCalculator">Compound Interest Calculator</NavDropdown.Item>
                <NavDropdown.Item href="/SimpleInterestCalculator">Simple Interest Calculator</NavDropdown.Item>
                <NavDropdown.Item href="/DailyCompoundCalculator">Daily Compound Interest Calculator</NavDropdown.Item>
                <NavDropdown.Item href="/ForexCompoundCalculator">Forex Compound</NavDropdown.Item>
                <NavDropdown.Item href="/APYCalculator">APY Calculator</NavDropdown.Item>
                <NavDropdown.Item href="/CAGRCalculator">CAGR Calculator</NavDropdown.Item>
                <NavDropdown.Item href="/FutureValueCalculator">Future Value Calculator</NavDropdown.Item>
                <NavDropdown.Item href="/SavingsCalculator">Savings Calculator</NavDropdown.Item>
                <NavDropdown.Item href="/InvestmentCalculator">Investment Calculator</NavDropdown.Item>
                <NavDropdown.Item href="/HowLongToSaveCalculator">How Long To Save Calculator</NavDropdown.Item>
                <NavDropdown.Item href="/HowLongWillMoneyLast">How Long Will Money Last</NavDropdown.Item>
                <NavDropdown.Item href="/IRRCalculator">IRR Calculator</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="/MoneyMarketCalculator">Money Market Calculator</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Featured Unit" id="nav-featured">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Unit Group" id="nav-unit-group">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Home Garden" id="nav-home-garden">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Misc" id="nav-misc">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Cooking" id="nav-cooking">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Health" id="nav-health">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#link">Contact</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
