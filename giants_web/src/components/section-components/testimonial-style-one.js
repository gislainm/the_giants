import React, { Component } from "react";

class TestimonialOne extends Component {
  componentDidMount() {
    const $ = window.$;

    if ($(".js-tilt").length) {
      $(".js-tilt").tilt({
        maxTilt: 20,
        perspective: 700,
        glare: true,
        maxGlare: 0.3,
      });
    }

    if ($(".thm__owl-carousel").length) {
      $(".thm__owl-carousel").each(function () {
        var Self = $(this);
        var carouselOptions = Self.data("options");
        var carouselPrevSelector = Self.data("carousel-prev-btn");
        var carouselNextSelector = Self.data("carousel-next-btn");
        var thmCarousel = Self.owlCarousel(carouselOptions);
        if (carouselPrevSelector !== undefined) {
          $(carouselPrevSelector).on("click", function () {
            thmCarousel.trigger("prev.owl.carousel");
            return false;
          });
        }
        if (carouselNextSelector !== undefined) {
          $(carouselNextSelector).on("click", function () {
            thmCarousel.trigger("next.owl.carousel");
            return false;
          });
        }
      });
    }
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <section className="testimonials-one">
        <div className="container">
          <div className="testimonials-one__top">
            <div className="block-title text-left">
              <p>
                <span>Happy Clients</span>
              </p>
              <h3>Testimonials</h3>
              <div className="block-title__line" />
              {/* /.block-title__line */}
            </div>
            {/* /.block-title */}
            <div className="testimonials-one__carousel-btn__wrap">
              <span className="testimonials-one__carousel-btn-left">
                <i className="fa fa-angle-double-left" />
              </span>
              <span className="testimonials-one__carousel-btn-right">
                <i className="fa fa-angle-double-right" />
              </span>
            </div>
            {/* /.testimonials-one__carousel-btn__wrap */}
          </div>
          {/* /.testimonials-one__top */}
          <div className="testimonials-one__arrow-decor-wrap">
            <i className="fa fa-angle-right" />
            <i className="fa fa-angle-right" />
            <i className="fa fa-angle-right" />
            <i className="fa fa-angle-right" />
          </div>
          {/* /.testimonials-one__arrow-decor-wrap */}
          <div
            className="testimonials-one__carousel owl-carousel thm__owl-carousel owl-theme"
            data-carousel-prev-btn=".testimonials-one__carousel-btn-left"
            data-carousel-next-btn=".testimonials-one__carousel-btn-right"
            data-options='{"loop": true, "margin": 65, "stagePadding": 50, "items": 3, "smartSpeed": 700, "autoplay": true, "autoplayTimeout": 7000, "nav": false, "dots": false, "responsive": { "0": { "items": 1, "stagePadding": 20 }, "1199": { "items": 2 }, "1200": { "items": 3 } }}'
          >
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__image">
                  <img
                    src={publicUrl + "assets/images/testimonials/arnaud.jpg"}
                    alt={imagealt}
                  />
                </div>
                {/* /.testimonials-one__image */}
                <div className="testimonials-one__content">
                  <p>
                    My husband and I absolutely loved working with The Giants
                    Pictures for our engagement shoot that we booked him again
                    for our wedding!! He made us feel so comfortable during all
                    the wedding chaos and he captured all the right angles and
                    expressions. He’s a true professional in his field and every
                    snap he takes proves just that. I recommend him to my
                    friends and family and we’ll continue booking him in the
                    future for all milestones and occasions!
                  </p>
                  <h3>Arnaud &amp; Saro</h3>
                  <span>Wedding Clients</span>
                  <i className="fa fa-quote-right testimonials-one__qoute-icon" />
                </div>
                {/* /.testimonials-one__content */}
              </div>
              {/* /.testimonials-one__single */}
            </div>
            {/* /.item */}
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__image">
                  <img
                    src={publicUrl + "assets/images/testimonials/ludwing.jpg"}
                    alt={imagealt}
                  />
                </div>
                {/* /.testimonials-one__image */}
                <div className="testimonials-one__content">
                  <p>
                    The Giants Pictures provided one of the most professional
                    photography services we have ever experienced. The quality
                    of the final photographs and wedding video were incredible.
                    David and his team met our expectations without a sweat.
                    They captured our special day better than we could've
                    imagined. We recommend David and The Giants to anyone
                    looking for Professionals to capture your special occasion.
                  </p>
                  <h3>Ludwing &amp; Celena Siebenhor</h3>
                  <span>Wedding Clients</span>
                  <i className="fa fa-quote-right testimonials-one__qoute-icon" />
                </div>
                {/* /.testimonials-one__content */}
              </div>
              {/* /.testimonials-one__single */}
            </div>
            {/* /.item */}
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__image">
                  <img
                    src={publicUrl + "assets/images/testimonials/jacques.png"}
                    alt={imagealt}
                  />
                </div>
                {/* /.testimonials-one__image */}
                <div className="testimonials-one__content">
                  <p>
                    Working with the Giants was a pleasure, by far the best
                    decision was choosing the giants pictures to
                    Video/photographer my wedding . The level of communication
                    was incredible, the giants delivered the best result beyond
                    what we could of imagined. They created a moment that I will
                    share with my kids and grandkids and their kids , Yes it is
                    that good . I would recommend them 100% to trust them with
                    your event and and let them do what they do best. I promise
                    you , if you trust the Giants to cover your event , whatever
                    event it may be you will not be disappointed at all Best
                    crew to work with . Thank you The Giants Pictures for
                    creating a memory for me and my family
                  </p>
                  <h3>Tessi &amp; Jacques</h3>
                  <span>Wedding Clients</span>
                  <i className="fa fa-quote-right testimonials-one__qoute-icon" />
                </div>
                {/* /.testimonials-one__content */}
              </div>
              {/* /.testimonials-one__single */}
            </div>
            {/* /.item */}
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__image">
                  <img
                    src={publicUrl + "assets/images/testimonials/esther.jpg"}
                    alt={imagealt}
                  />
                </div>
                {/* /.testimonials-one__image */}
                <div className="testimonials-one__content">
                  <p>
                    The Giants directed the video production for my music video
                    and several photoshoots. I trust his creative and
                    resourceful mind to always capture my own unique style and
                    vibe, and he is always professional, punctual, and means
                    business!
                  </p>
                  <h3>Starruwa (Esther Uwamahoro)</h3>
                  <span>Music Video Client</span>
                  <i className="fa fa-quote-right testimonials-one__qoute-icon" />
                </div>
                {/* /.testimonials-one__content */}
              </div>
              {/* /.testimonials-one__single */}
            </div>
            {/* /.item */}
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__image">
                  <img
                    src={publicUrl + "assets/images/testimonials/mancy.jpg"}
                    alt={imagealt}
                  />
                </div>
                {/* /.testimonials-one__image */}
                <div className="testimonials-one__content">
                  <p>
                    The service was great with excellent communication
                    throughout getting pictures and taking them and the pictures
                    were beautiful when we got them. I would definitely
                    recommend the giants to anyone who wants there memories
                    captured professionally <span role="img" aria-label="emoji for a hundred percent">💯</span>
                  </p>
                  <h3>Mancy</h3>
                  <span>Client</span>
                  <i className="fa fa-quote-right testimonials-one__qoute-icon" />
                </div>
                {/* /.testimonials-one__content */}
              </div>
              {/* /.testimonials-one__single */}
            </div>
            {/* /.item */}
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__image">
                  <img
                    src={publicUrl + "assets/images/testimonials/chantal.jpg"}
                    alt={imagealt}
                  />
                </div>
                {/* /.testimonials-one__image */}
                <div className="testimonials-one__content">
                  <p>
                    Well, where should I start, David is honestly one of the
                    best photographers I’ve ever seen, very talented as well. He
                    shares his thoughts and guides you on right directions. I
                    highly recommend everyone to work with this amazing person.
                  </p>
                  <h3>Chantal &amp; Mboni</h3>
                  <span>Wedding Clients</span>
                  <i className="fa fa-quote-right testimonials-one__qoute-icon" />
                </div>
                {/* /.testimonials-one__content */}
              </div>
              {/* /.testimonials-one__single */}
            </div>
            {/* /.item */}
          </div>
          {/* /.testimonials-one__carousel owl-carousel thm__owl-carousel owl-theme */}
        </div>
        {/* /.container */}
      </section>
    );
  }
}

export default TestimonialOne;
