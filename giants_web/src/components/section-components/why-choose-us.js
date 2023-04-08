import React, { Component } from "react";

class WhyChooseUs extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <section className="service-one go-top">
        <div className="container">
          <div className="block-title text-center">
            <p>
              <span>Why Choose Us</span>
            </p>
            <h3>Our Approach</h3>
            <div className="block-title__line" />
            {/* /.block-title__line */}
          </div>
          {/* /.block-title */}
          <div className="row high-gutter  go-top">
            <div className="col-lg-4">
              <div className="service-one__single">
                <div className="service-one__top">
                  <div className="service-one__icon">
                    <img
                      src={publicUrl + "assets/images/shapes/service-i-12.png"}
                      alt={imagealt}
                    />
                  </div>
                  {/* /.service-one__icon */}
                  <div className="service-one__top-content">
                    <h3>Creative Direction</h3>
                    <p>Creativity at its best</p>
                  </div>
                  {/* /.service-one__top-content */}
                </div>
                {/* /.service-one__top */}
                <p>
                  Here we strategize and establish the visual identity/story of
                  your project. Once everything is secure, we move on to
                  onboarding the proper team member needed to execute your
                  vision. By trusting your vision into our hands, it’s no longer
                  your burden to carry.
                </p>
              </div>
              {/* /.service-one__single */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="service-one__single">
                <div className="service-one__top">
                  <div className="service-one__icon">
                    <img
                      src={publicUrl + "assets/images/shapes/service-i-22.png"}
                      alt={imagealt}
                    />
                  </div>
                  {/* /.service-one__icon */}
                  <div className="service-one__top-content">
                    <h3>Production</h3>
                    <p>Unmatched professionalism</p>
                  </div>
                  {/* /.service-one__top-content */}
                </div>
                {/* /.service-one__top */}
                <p>
                  This phase is where the action happens! Here our team
                  carefully executes the details from the consultation. Priority
                  number one is ensuring we bring your vision to life.{" "}
                </p>
              </div>
              {/* /.service-one__single */}
            </div>
            {/* /.col-lg-4 */}
            <div className="col-lg-4">
              <div className="service-one__single">
                <div className="service-one__top">
                  <div className="service-one__icon">
                    <img
                      src={publicUrl + "assets/images/shapes/service-i-33.png"}
                      alt={imagealt}
                    />
                  </div>
                  {/* /.service-one__icon */}
                  <div className="service-one__top-content">
                    <h3>Delivery</h3>
                    <p>Timely & Satisactory</p>
                  </div>
                  {/* /.service-one__top-content */}
                </div>
                {/* /.service-one__top */}
                <p>
                  You will receive a beautiful gallery of proofs. Through this
                  gallery, you can download, share and print photos that will be
                  delivered directly to your door.
                </p>
              </div>
              {/* /.service-one__single */}
            </div>
            {/* /.col-lg-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </section>
    );
  }
}

export default WhyChooseUs;
