import React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import FamilyPhotos from './family';
import Footer from '../global-components/footer';


const FamilyPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Family Photos" />
        <FamilyPhotos />
        <Footer />
    </div>
}

export default FamilyPage