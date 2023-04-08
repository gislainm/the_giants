import React, { Component } from 'react';

class Footer_v1 extends Component {

	componentDidMount() {

		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/theme.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {
			$(window).scrollTop(0);
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
      <div>
        <footer className="site-footer-one">
          <div className="site-footer-one__upper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="footer-widget footer-widget__about">
                    <a href="index-2.html">
                      <img
                        src={
                          publicUrl + "assets/images/giants_h_transparent.png"
                        }
                        alt={imgattr}
                      />
                    </a>
                    <p>
                      Get in touch so that we can record your memories and
                      kickstart your branding today!{" "}
                    </p>
                    <div className="footer-widget__social">
                      <a href="https://www.instagram.com/thegiants_pictures/?igshid=741sqchjwds4">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="https://twitter.com/giantspicture?s=21">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.youtube.com/channel/UC9-Eo9kIOztSdYYr2luNczg">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                    {/* /.footer-widget__social */}
                  </div>
                  {/* /.footer-widget */}
                </div>
                {/* /.col-lg-3 */}
                <div className="col-lg-4">
                  <div className="footer-widget footer-widget__contact">
                    <h3 className="footer-widget__title">Official Address</h3>
                    {/* /.footer-widget__title */}
                    <div className="footer-widget__contact-box">
                      <div className="footer-widget__contact-top">
                        <i className="far fa-map-marked" />
                        <h3>Address</h3>
                      </div>
                      {/* /.footer-widget__contact-top */}
                      <p>1914 SW 27th Street Lincoln Nebraska 68522</p>
                    </div>
                    {/* /.footer-widget__contact-box */}
                    <div className="footer-widget__contact-box">
                      <div className="footer-widget__contact-top">
                        <i className="far fa-phone" />
                        <h3>Phone</h3>
                      </div>
                      {/* /.footer-widget__contact-top */}
                      <p>
                        <a href="tel:+1 (402) 450-6873">+1 (402) 450-6873</a>
                      </p>
                    </div>
                    {/* /.footer-widget__contact-box */}
                    <div className="footer-widget__contact-box">
                      <div className="footer-widget__contact-top">
                        <i className="far fa-envelope" />
                        <h3>Email</h3>
                      </div>
                      {/* /.footer-widget__contact-top */}
                      <p>
                        <a href="mailto:thegiantspictures@gmail.com">
                          thegiantspictures@gmail.com
                        </a>
                      </p>
                    </div>
                    {/* /.footer-widget__contact-box */}
                  </div>
                  {/* /.footer-widget footer-widget__contact */}
                </div>
                {/* /.col-lg-4 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.site-footer-one__upper */}
          <div className="site-footer-one__bottom">
            <div className="container text-center">
              <div className="site-footer-one__bottom-line" />
              {/* /.site-footer-one__bottom-line */}
              <p>
                &#169;2023 <span>The Giants Pictures</span>. All Rights
                Reserved.
              </p>
            </div>
            {/* /.container */}
          </div>
          {/* /.site-footer-one__bottom */}
        </footer>
      </div>
    );
	}
}


export default Footer_v1