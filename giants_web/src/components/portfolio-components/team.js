import React from "react";
import { Link } from "react-router-dom";
import * as team_data from "../../image-data/team.json";

function TeamPhotos() {
  let imagealt = "image";
  let team_photo = team_data.resources.map((item) => item.url);

  return (
    <section className="portfolio-details">
      <div className="sidebar__tags-list d-flex justify-content-center">
        <Link to="/graduation">Graduation</Link>
        <Link to="/photography">All</Link>
      </div>
      <div className="row-gallery">
        <div className="column-gallery">
          <img src={team_photo[3]} alt={imagealt} loading="lazy" />
          <img src={team_photo[0]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={team_photo[2]} alt={imagealt} loading="lazy" />
          <img src={team_photo[1]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={team_photo[4]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={team_photo[5]} alt={imagealt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default TeamPhotos;
