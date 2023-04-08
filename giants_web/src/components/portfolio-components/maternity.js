import React from "react";
import { Link } from "react-router-dom";
import * as maternity_data from "../../image-data/maternity.json";

function MaternityPhotos() {
  let imagealt = "image";
  let maternity_photo = maternity_data.resources.map((item) => item.url);

  return (
    <section className="portfolio-details">
      <div className="sidebar__tags-list d-flex justify-content-center">
        <Link to="/potraits">Potraits</Link>
        <Link to="/photography">All</Link>
        <Link to="/events">Events</Link>
      </div>
      <div className="row-gallery">
        <div className="column-gallery">
          <img src={maternity_photo[2]} alt={imagealt} loading="lazy" />
          <img src={maternity_photo[10]} alt={imagealt} loading="lazy" />

          <img src={maternity_photo[1]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={maternity_photo[5]} alt={imagealt} loading="lazy" />
          <img src={maternity_photo[9]} alt={imagealt} loading="lazy" />
          <img src={maternity_photo[11]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={maternity_photo[3]} alt={imagealt} loading="lazy" />
          <img src={maternity_photo[4]} alt={imagealt} loading="lazy" />
          <img src={maternity_photo[0]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={maternity_photo[6]} alt={imagealt} loading="lazy" />
          <img src={maternity_photo[7]} alt={imagealt} loading="lazy" />
          <img src={maternity_photo[8]} alt={imagealt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default MaternityPhotos;
