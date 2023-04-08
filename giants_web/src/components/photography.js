import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Portfolio from "./section-components/portfolio-standard";
import Footer from "./global-components/footer";

const PhotographyPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        headertitle="Photography"
        subheader="Capture the unforgettable moments of your special day with our professional photography 
            services! From weddings and graduations to baby showers and family portraits, our skilled photographers have 
            the expertise to create stunning images that you'll treasure for a lifetime. Contact us today to book your 
            session!"
      />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default PhotographyPage;
