import React from "react";
import { Link } from "react-router-dom";
import * as potrait_data from "../../image-data/potraits.json";

function PotraitsPhotos() {
  let imagealt = "Potrait Image";
  let potraits_photo = potrait_data.resources.map((item) => item.url);
  return (
    <section className="portfolio-details">
      <div className="sidebar__tags-list d-flex justify-content-center">
        <Link to="/engagement">Engagement</Link>
        <Link to="/photography">All</Link>
        <Link to="/maternity">Maternity</Link>
      </div>
      <div className="row-gallery">
        <div className="column-gallery">
          <img src={potraits_photo[0]} alt={imagealt} loading="lazy" />
          <img src={potraits_photo[1]} alt={imagealt} loading="lazy" />
          <img src={potraits_photo[2]} alt={imagealt} loading="lazy" />
          <img src={potraits_photo[3]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={potraits_photo[12]} alt={imagealt} loading="lazy" />
          <img src={potraits_photo[4]} alt={imagealt} loading="lazy" />
          <img src={potraits_photo[5]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={potraits_photo[6]} alt={imagealt} loading="lazy" />
          <img src={potraits_photo[7]} alt={imagealt} loading="lazy" />
          <img src={potraits_photo[8]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={potraits_photo[9]} alt={imagealt} loading="lazy" />
          <img src={potraits_photo[10]} alt={imagealt} loading="lazy" />
          <img src={potraits_photo[11]} alt={imagealt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default PotraitsPhotos;
