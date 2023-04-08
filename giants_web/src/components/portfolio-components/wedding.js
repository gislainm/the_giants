import React from 'react';
import { Link } from "react-router-dom";
import * as wedding_data from '../../image-data/wedding.json'; 

function WeddingPhotos() {
  let wedding_photo=wedding_data.resources.map(item=>item.url);
  let imagealt = "Wedding Image";
    return (
      <section className="portfolio-details">
        <div className="sidebar__tags-list d-flex justify-content-center">
          <Link to="/photography">All</Link>
          <Link to="/engagement">Engagement</Link>
        </div>
        <div className="row-gallery">
          <div className="column-gallery">
            <img loading="lazy" src={wedding_photo[0]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[1]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[2]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[3]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[4]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[5]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[6]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[7]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[8]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[9]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[10]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[32]} alt={imagealt} />
          </div>
          <div className="column-gallery">
            <img loading="lazy" src={wedding_photo[11]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[12]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[13]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[14]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[15]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[16]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[17]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[18]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[19]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[20]} alt={imagealt} />
          </div>
          <div className="column-gallery">
            <img loading="lazy" src={wedding_photo[22]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[23]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[24]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[25]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[26]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[27]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[28]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[29]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[30]} alt={imagealt} />
          </div>
          <div className="column-gallery">
            <img loading="lazy" src={wedding_photo[33]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[34]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[35]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[36]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[37]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[38]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[39]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[40]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[41]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[31]} alt={imagealt} />
            <img loading="lazy" src={wedding_photo[21]} alt={imagealt} />
          </div>
        </div>
      </section>
    );
}

export default WeddingPhotos