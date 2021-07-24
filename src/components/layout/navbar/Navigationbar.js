import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './cart2.jpg'
import logo2 from './images.jpg'
import './navbarr.css'
import { Nav,NavDropdown} from 'react-bootstrap';
const Navigationbar= () => {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
				 
                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                     <span class="navbar-toggler-icon"></span>
                     </button>
                      <a class="navbar-brand" href="#">
                        <img
                        src={logo}
                        class="me-2"
                        height="20"
                        alt=""
                        loading="lazy"/>  EL DORADO </a>
                 <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                     <ul class="navbar-nav">
                         <li class="nav-item active">
                              <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link" href="#">SHOP</a>
                         </li>
                 <Nav>
                    <NavDropdown
                       id="nav-dropdown-dark-example"
                       title="Top Categories"
                       menuVariant="dark"
                    >
                   <NavDropdown.Item href="#action/3.1">Clothes</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">Books</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Medicines</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">Grocery</NavDropdown.Item>
                  </NavDropdown>
               </Nav>
                  </ul>
                     <form class="d-flex input-group w-auto">
                    <input
                     type="search"
                     class="form-control"
                     placeholder="Search"
                     aria-label="Search"
                    />
                   <button
                    class="btn btn-outline-primary"
                    type="button"
                    data-mdb-ripple-color="dark"
                    >
                       Search
                 </button>
                   </form>
                      </div>
                     
     
       
              <Nav>
                 <NavDropdown
                   id="nav-dropdown-dark-example"
                   title={ <img src={logo2}
                   height="30"
                   alt=""
                   class="rounded-circle"/>
                 }
                    menuVariant="dark" >
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Update profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">forgot password</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
               </NavDropdown>
             </Nav>
           </nav>  
            </div>
    )
}

export default Navigationbar
