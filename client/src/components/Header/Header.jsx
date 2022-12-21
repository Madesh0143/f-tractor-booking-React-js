import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";




const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tractor",
    display: "Tractor",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">

      <div className="header__middle"> 

                <div className="menu" >
                  
                <div className=" menu-hedder ">
                  <div className="logo">
                  {/* <img src={logo} alt="no logo"   /> */}
                  </div>
                  <h1 className="logo-font"> 
                  <span className="F">F</span> Tractor</h1>
         
                    {navLinks.map((item, index) => (
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav__active nav__item" : "nav__item"} key={index}>{item.display}
                      </NavLink>
                    ))}

                    <div className="login-reg">
                   
                    <span>                    
                    <Link to="/login" className="register">
                    <i className="ri-user-line"></i>Login
                    
                    </Link>
                  </span>

                    </div>
                  </div>
                  </div>

              </div>
              <div>
              </div>
     
     

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper  align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
