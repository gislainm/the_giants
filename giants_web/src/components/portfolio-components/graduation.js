import React from 'react';
import { Link } from 'react-router-dom';
import * as graduation_data from "../../image-data/graduation.json";

function GraduationPhotos() {
  let imagealt = 'image';
  let graduation_photo = graduation_data.resources.map((item) => item.url);

    return (
      <section className="portfolio-details">
        <div className="sidebar__tags-list d-flex justify-content-center">
          <Link to="/kids">Kids</Link>
          <Link to="/photography">All</Link>
          <Link to="/our-team">Team</Link>
        </div>
        <div className="row-gallery">
          <div className="column-gallery">
            <img src={graduation_photo[0]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[1]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[2]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[3]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[4]} alt={imagealt} loading="lazy" />
          </div>
          <div className="column-gallery">
            <img src={graduation_photo[5]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[6]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[7]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[8]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[9]} alt={imagealt} loading="lazy" />
          </div>
          <div className="column-gallery">
            <img src={graduation_photo[10]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[11]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[12]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[13]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[14]} alt={imagealt} loading="lazy" />
          </div>
          <div className="column-gallery">
            <img src={graduation_photo[15]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[16]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[17]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[18]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[19]} alt={imagealt} loading="lazy" />
            <img src={graduation_photo[20]} alt={imagealt} loading="lazy" />
          </div>
        </div>
      </section>
    );
}

export default GraduationPhotos