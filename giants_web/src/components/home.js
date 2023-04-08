import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import ElfLoader from "./section-components/elfsight-component";
import WhyChooseUs from './section-components/why-choose-us';
import AboutStyleOne from './section-components/about-style-one';
import Testimonial from './section-components/testimonial-style-one';
import Footer from './global-components/footer';

const Home = () => {
    return (
      <div>
        <Navbar />
        <Banner />
        <ElfLoader />
        <AboutStyleOne />
        <WhyChooseUs />
        <Testimonial />
        <Footer />
      </div>
    );
}

export default Home;

