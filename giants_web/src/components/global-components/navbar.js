import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    return (
      <header className="site-header-one go-top">
        <nav className="main-nav__one stricky">
          <div className="container-fluid">
            <div className="main-nav__logo-box">
              <Link to="/">
                <img
                  src={publicUrl + "assets/images/giants_h_transparent.png"}
                  alt={imgattr}
                />
              </Link>
              <span className="side-menu__toggler">
                <i className="fa fa-bars" />
              </span>
            </div>
            {/* /.main-nav__logo-box */}
            <div className="main-nav__main-navigation">
              <ul className=" main-nav__navigation-box">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li className="dropdown">
                  <span className="drop">Portfolio</span>
                  <ul>
                    <li>
                      <Link to="/photography">Photography</Link>
                    </li>
                    <li>
                      <Link to="/videography">Videography</Link>
                    </li>
                  </ul>
                  {/* /.sub-menu */}
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
              </ul>
            </div>
            {/* /.main-nav__main-navigation */}
            <div className="main-nav__right">
              <Link to="/contact" className="thm-btn">
                Hire Us <i className="fa fa-angle-right" />
              </Link>
              {/* /.thm-btn */}
            </div>
            {/* /.main-nav__right */}
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
