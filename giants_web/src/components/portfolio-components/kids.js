import React from "react";
import { Link } from "react-router-dom";
import * as kids_data from "../../image-data/kids.json";

function KidsPhotos() {
  let imagealt = "image";
  let kids_photo = kids_data.resources.map((item) => item.url);
  return (
    <section className="portfolio-details">
      <div className="sidebar__tags-list d-flex justify-content-center">
        <Link to="/family">Family</Link>
        <Link to="/photography">All</Link>
        <Link to="/graduation">Graduation</Link>
      </div>
      <div className="row-gallery">
        <div className="column-gallery">
          <img src={kids_photo[1]} alt={imagealt} loading="lazy" />
          <img src={kids_photo[9]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={kids_photo[3]} alt={imagealt} loading="lazy" />
          <img src={kids_photo[0]} alt={imagealt} loading="lazy" />
          <img src={kids_photo[2]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={kids_photo[5]} alt={imagealt} loading="lazy" />
          <img src={kids_photo[8]} alt={imagealt} loading="lazy" />
          <img src={kids_photo[4]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={kids_photo[6]} alt={imagealt} loading="lazy" />
          <img src={kids_photo[7]} alt={imagealt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default KidsPhotos;
