import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import cartimg from '../../Assests/shopping-cart.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  const dispatch = useDispatch();

    const getcount = useSelector((x)=>{
        return x.cart.count;
    })

    const makecountzero =() => {
      dispatch({type : 'ZERO_COUNT', payload : 0});
    }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" style={{backgroundColor: 'yellowgreen', borderRadius: '5px', padding: '0.4%'}}>N-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <button onClick={()=> makecountzero()}>Zerocnt</button>
            <Nav.Link href='/cart' eventKey={2}>
              <img src={cartimg} style={{width: "30px", height: '20px'}} />
              {" "}
              {getcount}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;