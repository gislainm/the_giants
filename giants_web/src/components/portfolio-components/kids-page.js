import React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import KidsPhotos from './kids';
import Footer from '../global-components/footer';


const KidsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Kids Photos" />
        <KidsPhotos />
        <Footer />
    </div>
}

export default KidsPage