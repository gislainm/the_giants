import * as React from 'react';
import Navbar from '../global-components/navbar';
import PageHeader from '../global-components/page-header';
// import GraduationPhotos from './graduation';
import Footer from '../global-components/footer';

const GraduationPhotos=React.lazy(()=>import('./graduation'))

const GraduationPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Graduation Photos" />
        <React.Suspense fallback={<>...</>}>
            <GraduationPhotos />
        </React.Suspense>
        <Footer />
    </div>
}

export default GraduationPage