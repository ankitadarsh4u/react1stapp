import React from "react";
import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Image from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from '../../menu-json-api/menu.json';
import company from '../../Company-details/company.json';
import './Header.css'

// function Subhead(){
//   return(
//     <div>
//       <h4>Subhead</h4>
//     </div>
//   );
// }

function Mainmenu({demo}){
  return(
       <>
       <Link to={demo.link}className={demo.isButton? "btn btn-primary" : "nav-link"}>
        
        {demo.label}
       
       </Link>
       </>
  );
}

function DropdownMenu({demo}){
  return(
    <>
      <NavDropdown title={demo.label} id="basic-nav-dropdown">
        {
             demo.dropdownMenu.map((data,index)=>{
              return <Mainmenu demo={data} key={index}/>
             })
             }
            </NavDropdown>
    </>

  );
}

function Header() {
    //console.log(menu)
   
  return (
    <>

  <header>
  
      {/* <h1 className='animate__animated animate__tada animate__slow	2s'>Header</h1> */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container >
          <Link to="/" className="navbar-brand">
            <img src="logo192.png" alt="logo" width={50}/> &nbsp;
            {company.name}


          </Link>
          
          
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Link to="/" className='nav-link'>Learn</Link>
              <Link to="/link"className='nav-link'>Reference</Link>
              <Link to="/community" className='nav-link'>Community</Link>
               */}
              {
                menu.map((item,index)=>{

                  if(item.isDropdown){
                    return <DropdownMenu demo={item} key={index}/>
                  }
                 return <Mainmenu demo={item} key={index}/>
                })
              }
              
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      </header>
    </>
  );
}

export default Header;
