import React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import BabyShowerPhotos from './babyShower';
import Footer from '../global-components/footer';


const BabyShowerPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Baby Shower Photos" />
        <BabyShowerPhotos />
        <Footer />
    </div>
}

export default BabyShowerPage