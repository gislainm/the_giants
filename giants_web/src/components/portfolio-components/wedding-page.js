import * as React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
// import WeddingPhotos from './wedding';
import Footer from '../global-components/footer';

const WeddingPhotos=React.lazy(()=>import('./wedding'))
const WeddingPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Wedding Photos" />
        <React.Suspense fallback={<>...</>}>
            <WeddingPhotos />
        </React.Suspense>
        <Footer />
    </div>
}

export default WeddingPage