import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import About from './section-components/about';
import WhyChooseUs from './section-components/why-choose-us';
import Team from './section-components/team-v2';
import Testimonial from './section-components/testimonial-style-one';
import Brand from './section-components/brand-v4';
import Footer from './global-components/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About Us"  />
        <About />
        <WhyChooseUs/>
        <Team />
        <Brand/>
        <Testimonial />
        <Footer />
    </div>
}

export default AboutPage

