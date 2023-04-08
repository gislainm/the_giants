import React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import PotraitsPhotos from './potraits';
import Footer from '../global-components/footer';


const PotraitsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Potraits Photos" />
        <PotraitsPhotos />
        <Footer />
    </div>
}

export default PotraitsPage