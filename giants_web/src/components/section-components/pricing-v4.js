import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PricingV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'
        let contactLink = "/contact"

    return  <section className="pricing-one pricing-one__pricing-page">
        <div className="container">
          <div className="pricing-one__block">
            <div className="block-title-two text-left">
              <h3>Explore Our Services</h3>
            </div>{/* /.block-title-two */}
            <div className="pricing-one__btn-block">
              <ul className="list-unstyled nav nav-tabs">
                <li className="nav-item">
                  <a href="#photography" className="nav-link active" data-toggle="tab">Photography</a>
                </li>{/* /.nav-item */}
                <li className="nav-item">
                  <a href="#videography" className="nav-link " data-toggle="tab">Videography</a>
                </li>{/* /.nav-item */}
              </ul>{/* /.list-unstyled nav nav-tabs */}
            </div>{/* /.pricing-one__btn-block */}
          </div>{/* /.pricing-one__block */}
          <div className="tab-content">
            <div className="tab-pane show active  animated fadeInUp" id="photography">
              <div className="row">
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/wedding.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Wedding</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/engagement.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Engagement</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/potrait.png"} alt="pricing" />
                      <div className="pricing-one__top">
                        <h3>Potraits</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/maternity.png"} alt="pricing" />
                      <div className="pricing-one__top">
                        <h3>Pre-Maternity</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
              </div>{/* /.row */}
              <div className="row">
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/baby.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Newborn</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/family.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Family Photos</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/baby-shower.png"} alt="pricing" />
                      <div className="pricing-one__top">
                        <h3>Baby Shower</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/kids.png"} alt="pricing" />
                      <div className="pricing-one__top">
                        <h3>Kids</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
              </div>{/* /.row */}
              <div className="row">
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/conference.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Events & Conferences</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/graduation.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Graduation & Senior</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/drone.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Real-Estate & Aerial</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
              </div>{/* /.row */}
            </div>{/* /.tab-pane fade in active */}
            <div className="tab-pane animated fadeInUp " id="videography">
              <div className="row">
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/wedding-video.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Wedding</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/music-video.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Music Video</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/documentary.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Documentary</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/livestream.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Livestreams</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link  to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
              </div>{/* /.row */}
              <div className="row">
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/marketing.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Corporate & Marketing</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/drone-video.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Real-Estate & Aerial</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/concert.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Events & Concerts</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
                <div className="col-lg-3">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <img src={publicUrl+"assets/images/shapes/talk-show.png"} alt={ imagealt } />
                      <div className="pricing-one__top">
                        <h3>Talk Shows</h3>
                      </div>{/* /.pricing-one__top */}
                      <Link to={contactLink} className="thm-btn pricing-one__btn">Book Now <i className="fa fa-angle-double-right" /></Link>{/* /.thm-btn pricing-one__btn */}
                    </div>{/* /.pricing-one__inner */}
                  </div>{/* /.pricing-one__single */}
                </div>{/* /.col-lg-4 */}
              </div>{/* /.row */}
            </div>{/* /.tab-pane fade in active */}
          </div>{/* /.tab-content */}
        </div>{/* /.container */}
      </section>

        }
}

export default PricingV4