


// const Navbar = () => {
//   const [colorChange, setColorchange] = useState(false);
//   const changeNavbarColor = () => {
//     if (window.scrollY >= 80) {

//       setColorchange(true);
//     }
//     else {

//       setColorchange(false);
//     }
//   };
//   window.addEventListener('scroll', changeNavbarColor);
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//   };
//   function myFunction() {
//     var x = document.getElementById("myTopnav");
//     // console.log(x)
//     if (x.className === "navbar-collapse") {
//       x.className += " responsive";
//     } else {
//       x.className = "navbar-collapse";
//     }
//   }
//   return (
//     <div>
//       {/* "navbar navbar-expand-lg navbar-light" */}
//       <nav className={colorChange ? 'navbar colorChange navbar-expand-lg navbar-light navbar-services' : 'navbar navbar-expand-lg navbar-light navbar-services'} >
//         <a className="navbar-brand" href="#">
//           <img src={logo} />
//         </a>
//         <button className="navbar-toggler " id="myTopnav" onClick={myFunction} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent" >
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active" onClick={scrollToTop}>
//               <Link className="nav-link" to="/Home">Home</Link>
//             </li>
//             <li className="nav-item" onClick={scrollToTop}>
//               <Link className="nav-link" to="/Aboutus">About Us</Link>
//             </li>
//             <li className="nav-item" onClick={scrollToTop}>
//               <Link className="nav-link" to="/ContentServices">Content Serivces</Link>
//             </li>
//             <li className="nav-item" onClick={scrollToTop}>
//               <Link className="nav-link" to="/SeoServices">Seo Serivces</Link>
//             </li>

//             <li className="nav-item" onClick={scrollToTop}>
//               <Link className="nav-link" to="/Blog">Blog</Link>
//             </li>
//             <li className="nav-item" onClick={scrollToTop}>
//               <Link className="nav-link" to="/FAQ">FAQ</Link>
//             </li>
//             <li className="nav-item" onClick={scrollToTop}>
//               <Link className="nav-link" to="/Contact">Contact Us</Link>
//             </li>

//           </ul>
//         </div>
//       </nav >
//     </div>

//   )
// }
// export default Navbar
import React from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.png";
import { useState } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';


const Menu = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {

      setColorchange(true);
    }
    else {

      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <Navbar expand="lg" className={colorChange ? 'navbar colorChange navbar-expand-lg navbar-light navbar-services' : 'navbar navbar-expand-lg navbar-light navbar-services'}>
        <Container>
          <Navbar.Brand to="/Home">
            <a className="navbar-brand" to="/Home">
              <img src={logo} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-link" href="/Home" >Home</Nav.Link>
              <Nav.Link className="nav-link" href="/Aboutus" onClick={scrollToTop}>About us</Nav.Link>
              <Nav.Link className="nav-link" href="/ContentServices" onClick={scrollToTop}>Content Services</Nav.Link>
              <Nav.Link className="nav-link" href="/SeoServices" onClick={scrollToTop}>Seo Services</Nav.Link>
              <Nav.Link className="nav-link" href="/Blog" onClick={scrollToTop}>Blog</Nav.Link>
              <Nav.Link className="nav-link" href="/FAQ" onClick={scrollToTop}>FAQ</Nav.Link>
              <Nav.Link className="nav-link" href="/Contact" onClick={scrollToTop}>Contact</Nav.Link>



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;