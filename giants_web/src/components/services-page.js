import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PricingV4 from './section-components/pricing-v4';
import Case from './section-components/case';
import Footer from './global-components/footer';

const ServicePage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Services"  />
        <PricingV4 />
        <Case />
        <Footer />
    </div>
}

export default ServicePage;

