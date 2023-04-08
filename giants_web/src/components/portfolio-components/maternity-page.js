import * as React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
// import MaternityPhotos from './maternity';
import Footer from '../global-components/footer';

const MaternityPhotos=React.lazy(()=>import('./maternity'))
const MaternityPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Maternity Photos" />
        <React.Suspense fallback={<>...</>}>
            <MaternityPhotos />
        </React.Suspense>
        <Footer />
    </div>
}

export default MaternityPage