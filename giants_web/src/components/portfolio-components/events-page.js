import React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import EventsPhotos from './events';
import Footer from '../global-components/footer';


const EventsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Events Photos" />
        <EventsPhotos />
        <Footer />
    </div>
}

export default EventsPage