import React from "react";
import { Link } from "react-router-dom";
import * as engagement_data from "../../image-data/engagement.json";

function EngagementPhotos() {
  let engagement_photo = engagement_data.resources.map((item) => item.url);
  let imagealt = "Engagement Image";
  return (
    <section className="portfolio-details">
      <div className="sidebar__tags-list d-flex justify-content-center">
        <Link to="/wedding">Wedding</Link>
        <Link to="/photography">All</Link>
        <Link to="/potraits">Potraits</Link>
      </div>
      <div className="row-gallery">
        <div className="column-gallery">
          <img src={engagement_photo[0]} alt={imagealt} loading="lazy" />
          <img src={engagement_photo[1]} alt={imagealt} loading="lazy" />
          <img src={engagement_photo[2]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={engagement_photo[5]} alt={imagealt} loading="lazy" />
          <img src={engagement_photo[6]} alt={imagealt} loading="lazy" />
          <img src={engagement_photo[7]} alt={imagealt} loading="lazy" />
          <img src={engagement_photo[9]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={engagement_photo[10]} alt={imagealt} loading="lazy" />
          <img src={engagement_photo[11]} alt={imagealt} loading="lazy" />
          <img src={engagement_photo[12]} alt={imagealt} loading="lazy" />
        </div>
        <div className="column-gallery">
          <img src={engagement_photo[3]} alt={imagealt} loading="lazy" />
          <img src={engagement_photo[4]} alt={imagealt} loading="lazy" />
          <img src={engagement_photo[8]} alt={imagealt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default EngagementPhotos;

// const slides = google_photos.engagement.map((link,index)=>{
//     return {
//       src:link,
//       key:`${index}`,
//       width:1280,
//       height:720,
//     }
//   })
//   const images = google_photos.engagement.map((link,index)=>{
//     return {
//       src:link,
//       width:1280,
//       height:720,
//     }
//   })

//  <>
//         <Gallery
//           images={images}
//           onClick={handlePhotoClick}
//           enableImageSelection={false}
//         />
//         <Lightbox
//           open={currIndex >= 0}
//           index={currIndex}
//           close={()=>{
//           console.log(currIndex);
//           setCurrIndex(-1)
//           }}
//           slides={images}
//           // plugins={[Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
//         />
//       </>
