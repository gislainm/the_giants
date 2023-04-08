import React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
import VideoGallery from './video';
import Footer from '../global-components/footer';


const VideoPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Videography" 
        subheader="Looking to capture the magic of your event? Our professional video 
                services are here to help! From weddings to concerts, our skilled videographers will create a 
                stunning video that you can treasure for years to come." />
        <VideoGallery />
        <Footer />
    </div>
}

export default VideoPage