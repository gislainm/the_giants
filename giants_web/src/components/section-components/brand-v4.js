import React, { Component } from 'react';

class BrandV4 extends Component {

   componentDidMount() {

      const $ = window.$;
      

        if ($('.thm__owl-carousel').length) {
            $('.thm__owl-carousel').each(function () {
                var Self = $(this);
                var carouselOptions = Self.data('options');
                var carouselPrevSelector = Self.data('carousel-prev-btn');
                var carouselNextSelector = Self.data('carousel-next-btn');
                var thmCarousel = Self.owlCarousel(carouselOptions);
                if (carouselPrevSelector !== undefined) {
                    $(carouselPrevSelector).on('click', function () {
                        thmCarousel.trigger('prev.owl.carousel');
                        return false;
                    });
                }
                if (carouselNextSelector !== undefined) {
                    $(carouselNextSelector).on('click', function () {
                        thmCarousel.trigger('next.owl.carousel');
                        return false;
                    });
                }
            });
        }
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return (
      <section className="brand-one brand-one__home-two brand-one__service-page">
        <div className="container">
          <h3>Corporate Clients</h3>
          <div
            className="brand-one__carousel owl-carousel owl-theme thm__owl-carousel"
            data-options='{"loop": true, "autoplay": true, "autoplayTimeout": 5000, "items": 6, "margin": 150, "smartSpeed": 700, "nav": false, "dots": false, "responsive": { "0": { "items": 2, "margin": 15 },"575": { "items": 3, "margin": 30 },"767": { "items": 3, "margin": 30 }, "991": { "items": 4, "margin": 30 }, "1199": { "items": 4, "margin": 75 }, "1200": { "items": 6 } }}'
          >
            <div className="item">
              <img
                src={publicUrl + "assets/images/brand/water.jpeg"}
                alt={imagealt}
              />
            </div>
            {/* /.item */}
            <div className="item">
              <img
                src={publicUrl + "assets/images/brand/agshield.jpeg"}
                alt={imagealt}
              />
            </div>
            {/* /.item */}
            <div className="item">
              <img
                src={publicUrl + "assets/images/brand/casnr.jpeg"}
                alt={imagealt}
              />
            </div>
            {/* /.item */}
            <div className="item">
              <img
                src={publicUrl + "assets/images/brand/lois.png"}
                alt={imagealt}
              />
            </div>
            {/* /.item */}
            <div className="item">
              <img
                src={publicUrl + "assets/images/brand/lifc.jpg"}
                alt={imagealt}
              />
            </div>
            {/* /.item */}
            <div className="item">
              <img
                src={publicUrl + "assets/images/brand/golden.jpg"}
                alt={imagealt}
              />
            </div>
            {/* /.item */}
            <div className="item">
              <img
                src={publicUrl + "assets/images/brand/makassi.png"}
                alt={imagealt}
              />
            </div>
            {/* /.item */}
          </div>
          {/* /.brand-one__carousel owl-carousel owl-theme thm__owl-carousel */}
        </div>
        {/* /.container */}
      </section>
    );
        }
}

export default BrandV4