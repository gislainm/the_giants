import React, { Component } from "react";

class TeamV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <section className="team-one team-one__about-page">
        <div className="container">
          <div className="block-title-two text-center">
            <p>
              <span>Our Team</span>
            </p>
            <h3>Meet Our Team</h3>
          </div>
          {/* /.block-title */}
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img
                    src={publicUrl + "assets/images/team/davis.jpg"}
                    alt={imagealt}
                  />
                </div>
                {/* /.team-one__image */}
                <div className="team-one__content">
                  <div className="team-one__social">
                    <a
                      href="https://www.facebook.com/jdderrick1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://twitter.com/Davisgiant1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      href="https://www.instagram.com/_davisgiant_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                  {/* /.team-one__social */}
                  <h3>David Munyaneza</h3>
                  <p>Founder & CEO</p>
                </div>
                {/* /.team-one__content */}
              </div>
              {/* /.team-one__single */}
            </div>
            {/* /.col-lg-3 */}
            <div className="col-lg-3 col-md-6">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img
                    src={publicUrl + "assets/images/team/gislain.JPG"}
                    alt={imagealt}
                  />
                </div>
                {/* /.team-one__image */}
                <div className="team-one__content">
                  <div className="team-one__social">
                    <a
                      href="https://www.facebook.com/muhikira.gislain/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ntwali-gislain-muhikira/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                    <a
                      href="https://www.instagram.com/gislainm/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                  {/* /.team-one__social */}
                  <h3>N. Gislain Muhikira</h3>
                  <p>CTO</p>
                </div>
                {/* /.team-one__content */}
              </div>
              {/* /.team-one__single */}
            </div>
            {/* /.col-lg-3 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    );
  }
}

export default TeamV2;
