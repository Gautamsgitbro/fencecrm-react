import React from "react";
const Header = () => {
   return(
    <React.Fragment>
    <nav className="navbar navbar-expand-md custom-nav-block navbar-light">
      <div className="container-fluid">
      <a className="navbar-brand" href="#">
         <img src="frontend/images/FenceCRM-logo-01.png" className="header-logo"/> 
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse custom-nav" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="#">Pages</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="#">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">News</a>
          </li>
          <li>  
          <a className="btn nav-btn btn-orange">Free Demo</a>
         </li>
         <li>  
          <a className="btn nav-btn btn-blue">Free Demo</a>
         </li>
        </ul>
      </div>  
      </div>
    </nav>
    </React.Fragment>
   );
} 

export default Header;