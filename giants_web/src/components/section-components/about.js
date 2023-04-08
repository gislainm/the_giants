import React, { Component } from "react";

class AboutPage extends Component {
  render() {
    return (
      <section className="service-two service-two__service-page service-two__about-page  go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="service-two__block">
                <div className="block-title-two text-left">
                  <p>Vision</p>
                  <h3>Our Vision</h3>
                </div>
                {/* /.block-title-two */}
                <p>
                  Our vision is to be the go-to multimedia agency that creates
                  stunning visual content that is both innovative and timeless.
                  We strive to be the most trusted and sought-after team of
                  creative professionals who use state-of-the-art technology and
                  a personal touch to capture and convey the essence of our
                  clients' stories. We aim to inspire, connect, and celebrate
                  the beauty of life's special moments through our passion for
                  multimedia artistry.
                </p>
              </div>
              {/* /.service-two__block */}
            </div>
            {/* /.col-lg-5 */}
            <div className="col-lg-6">
              <div className="service-two__block">
                <div className="block-title-two text-left">
                  <p>Mission</p>
                  <h3>Our Mission</h3>
                </div>
                {/* /.block-title-two */}
                <p>
                  Our mission is to capture and create unforgettable visual
                  stories that showcase the beauty of life's most cherished
                  moments. We are committed to delivering exceptional multimedia
                  services that exceed our clients' expectations, from wedding
                  videography and photography, music videos, personal and family
                  photoshoots, to corporate and documentary videos, and drone
                  videography and photography.
                </p>
              </div>
              {/* /.service-two__block */}
            </div>
            {/* /.col-lg-5 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    );
  }
}

export default AboutPage;
