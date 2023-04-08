import React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import TeamPhotos from './team';
import Footer from '../global-components/footer';


const TeamPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Team" />
        <TeamPhotos />
        <Footer />
    </div>
}

export default TeamPage