import React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import EngagementPhotos from './engagement';
import Footer from '../global-components/footer';


const EngagementPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Engagement Photos" />
        <EngagementPhotos />
        <Footer />
    </div>
}

export default EngagementPage

