import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PortFolioStandard extends Component {
    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return (
      <section className="portfolio-three portfolio-three__standard-page  go-top">
        <div className="container-fluid">
          <div className="row gallery-content filter-layout">
            <div className="col-lg-3 col-md-6 col-sm-12 masonary-item">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img
                    src={publicUrl + "assets/images/portfolio/wedding.jpg"}
                    alt={imagealt}
                  />
                </div>
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link
                      to="/wedding"
                      className="portfolio-three__link"
                    >
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                    <h3>
                      <Link to="/wedding">Wedding</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 masonary-item design">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img
                    src={publicUrl + "assets/images/portfolio/engagement.jpg"}
                    alt={imagealt}
                  />
                </div>
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link
                      to="/engagement"
                      className="portfolio-three__link"
                    >
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                    <h3>
                      <Link to="/engagement">Engagement</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12 masonary-item minimal">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img
                    src={publicUrl + "assets/images/portfolio/potrait.jpg"}
                    alt=""
                  />
                </div>
                {/* /.portfolio-three__image */}
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link
                      to="/potraits"
                      className="portfolio-three__link"
                    >
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                    <h3>
                      <Link to="/potraits">Potraits</Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/* /.portfolio-three__single */}
            </div>
            {/* /.col-md-4 col-sm-12 */}
            <div className="col-lg-3 col-md-6 col-sm-12 masonary-item branding creative">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img
                    src={publicUrl + "assets/images/portfolio/maternity.jpg"}
                    alt=""
                  />
                </div>
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link
                      to="/maternity"
                      className="portfolio-three__link"
                    >
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                    <h3>
                      <Link to="/maternity">Maternity</Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/* /.portfolio-three__single */}
            </div>
            {/* /.col-md-4 col-sm-12 */}
            <div className="col-lg-3 col-md-6 col-sm-12 masonary-item design">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img
                    src={publicUrl + "assets/images/portfolio/events.JPG"}
                    alt=""
                  />
                </div>
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link
                      to="/events"
                      className="portfolio-three__link"
                    >
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                    <h3>
                      <Link to="/events">Events & Conferences</Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/* /.portfolio-three__single */}
            </div>
            {/* /.col-md-4 col-sm-12 */}
            <div className="col-lg-3 col-md-6 col-sm-12 masonary-item design">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img
                    src={publicUrl + "assets/images/portfolio/family.JPG"}
                    alt=""
                  />
                </div>
                {/* /.portfolio-three__image */}
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link
                      to="/family"
                      className="portfolio-three__link"
                    >
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                    <h3>
                      <Link to="/family">Family Photos</Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/* /.portfolio-three__single */}
            </div>
            {/* /.col-md-4 col-sm-12 */}
            <div className="col-lg-3 col-md-6 col-sm-12 masonary-item minimal design">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img
                    src={publicUrl + "assets/images/portfolio/kids.jpg"}
                    alt=""
                  />
                </div>
                {/* /.portfolio-three__image */}
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link
                      to="/kids"
                      className="portfolio-three__link"
                    >
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                    <h3>
                      <Link to="/kids">Kids</Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/* /.portfolio-three__single */}
            </div>
            {/* /.col-md-4 col-sm-12 */}
            <div className="col-lg-3 col-md-6 col-sm-12 masonary-item creative">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img
                    src={publicUrl + "assets/images/portfolio/graduation.jpg"}
                    alt=""
                  />
                </div>
                {/* /.portfolio-three__image */}
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link
                      to="/graduation"
                      className="portfolio-three__link"
                    >
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                    <h3>
                      <Link to="/graduation">
                        Graduation & Seniors
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/* /.portfolio-three__single */}
            </div>
            {/* /.col-md-4 col-sm-12 */}
            <div className="col-lg-3 col-md-6 col-sm-12 masonary-item">
              <div className="portfolio-three__single">
                <div className="portfolio-three__image">
                  <img
                    src={publicUrl + "assets/images/portfolio/team.jpg"}
                    alt=""
                  />
                </div>
                {/* /.portfolio-three__image */}
                <div className="portfolio-three__content">
                  <div className="portfolio-three__content-inner">
                    <Link
                      to="/our-team"
                      className="portfolio-three__link"
                    >
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                    <h3>
                      <Link to="/our-team">Our Team</Link>
                    </h3>
                  </div>
                </div>
              </div>
              {/* /.portfolio-three__single */}
            </div>
            {/* /.col-md-4 col-sm-12 */}
          </div>
          {/* /.row no-gutters */}
        </div>
        {/* /.container-fluid */}
      </section>
    );


        }
}

export default PortFolioStandard