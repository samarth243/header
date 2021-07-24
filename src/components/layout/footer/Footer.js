import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

const FooterPage = () => {
  return (
    
    <footer class="page-footer font-small bg-dark pt-4 ">
    
      <div class="container-fluid text-center  text-md-left">
    
        <div class="row  ">
    
          <div class="col-md-6 mt-md-0  mt-3">
    
            
            <h5 class="text-uppercase text-light">About Us</h5>
            <p class="text-light">ELDORADO Made by PS-MAY-ASDE-BATCH1</p>
    
          </div>
          
    
          <hr class="clearfix w-100 d-md-none pb-3" />
    
          <div class="col-md-3 mb-md-0 mb-3">
    
            <h5 class="text-uppercase text-light">Get to know us</h5>
    
            <ul class="list-unstyled">
              <li>
                <a href="#!" class="text-blue"> <FontAwesomeIcon  id="facebook-icon" icon={faFacebook} /></a>
              </li>
              <li>
                <a href="#!" class="text-green"><FontAwesomeIcon icon={faGoogle} /></a>
              </li>
              <li>
                <a href="#!" class="text-blue"><FontAwesomeIcon icon={faTwitter} /></a>
              </li>
              <li>
                <a href="#!" class="text-blue"><FontAwesomeIcon icon={faInstagram} /></a>
              </li>
            </ul>
    
          </div>
        </div>
       
    
      </div>
   
      <div class="footer-copyright text-center text-light py-3">© 2021 Copyright:
        <a href="https://mdbootstrap.com/" class="text-light"> ELDORADO.com</a>
      </div>
    
    
    </footer>
  
  );
}

export default FooterPage;