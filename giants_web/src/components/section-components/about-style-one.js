import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutStyleOne extends Component {

    render() {
    return <section className="about-one  go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-8">
			        <div className="about-one__content">
			          <div className="block-title text-left">
			            <p><span>About Us</span></p>
			            <h3>We are a Creative and <br /> Communication Agency</h3>
			            <div className="block-title__line" />{/* /.block-title__line */}
			          </div>{/* /.block-title */}
			          <p>We are a team of visual creatives: videographers, photographers, storytellers, content creators, 
						cinematographers, artists, and various other individuals present in the wide spectrum of creativity. 
						The wildest dream with The Giants Pictures is to fetch stories from different places and avail them 
						to the world visually to create, showcase, and inspire. The Giants Pictures offers a variety of 
						services that fall under the umbrella of videography, photography, marketing, and advertising. 
						We’ve been filming wedding, official events, music videos, creating visual memories, and helping 
						brands to develop and define people's voices since 2015. Get in touch so that we can record your memories 
						and kickstart your branding today!</p>
			          {/* <h4>We Are Always With You</h4>
			          <p>But we must be dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
			            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			            laboris nisi ut aliquip exea commodo consequat</p> */}
			          <Link to="/about" className="thm-btn about-one__btn">Read More <i className="fa fa-angle-double-right" /></Link>
			          {/* /.thm-btn */}
			        </div>{/* /.about-one__content */}
			      </div>{/* /.col-lg-6 */}
			    </div>{/* /.row */}
			  </div>{/* /.container */}
			</section>

        }
}

export default AboutStyleOne