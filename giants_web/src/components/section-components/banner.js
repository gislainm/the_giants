import React, { Component } from "react";
import { Link } from "react-router-dom";

class Banner extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <section
        className="banner-one go-top"
        style={{
          backgroundImage:
            "url(" + publicUrl + "assets/images/backgrounds/home_bg.gif)",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-one__content">
                <h3>THE GIANTS PICTURES</h3>
                <p>Creative Communication Agency</p>
                <Link to="/about" className="thm-btn banner-one__btn">
                  Read More <i className="fa fa-angle-double-right" />
                </Link>
                {/* /.thm-btn */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
