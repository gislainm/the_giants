import React from "react";
import { Link } from "react-router-dom";
import * as family_data from "../../image-data/family.json";

function FamilyPhotos() {
  let imagealt = "image";
  let family_photo = family_data.resources.map((item) => item.url);

  return (
    <section className="portfolio-details">
      <div className="sidebar__tags-list d-flex justify-content-center">
        <Link to="/events">Events</Link>
        <Link to="/photography">All</Link>
        <Link to="/kids">Kids</Link>
      </div>
      <div className="row-gallery">
        <div className="column-gallery">
          <img src={family_photo[0]} alt={imagealt} loading="lazy" />
          <img src={family_photo[1]} alt={imagealt} loading="lazy" />
          <img src={family_photo[2]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={family_photo[9]} alt={imagealt} loading="lazy" />
          <img src={family_photo[10]} alt={imagealt} loading="lazy" />
          <img src={family_photo[11]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={family_photo[3]} alt={imagealt} loading="lazy" />
          <img src={family_photo[4]} alt={imagealt} loading="lazy" />
          <img src={family_photo[5]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={family_photo[6]} alt={imagealt} loading="lazy" />
          <img src={family_photo[7]} alt={imagealt} loading="lazy" />
          <img src={family_photo[8]} alt={imagealt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default FamilyPhotos;
