import React from 'react';
import { google_photos } from '../photo-data';

function BabyShowerPhotos() {
  const [currIndex, setCurrIndex] = React.useState(-1);
  let imagealt = 'image';
  const handlePhotoClick=(index,item)=>{
        console.log('photoCLicked, Index is: ',index);
        setCurrIndex(index)
        console.log('state index is: ',currIndex);};

  let babyshower_photo=google_photos.babyshower;
    return  (
     <section className="portfolio-details">
        <div className='row-gallery'>
          <div className='column-gallery'>
            <img src={babyshower_photo[0]} alt={imagealt} onClick={()=>handlePhotoClick(0)} />
            <img src={babyshower_photo[7]} alt={imagealt} onClick={()=>handlePhotoClick(1)} />
            <img src={babyshower_photo[1]} alt={imagealt} onClick={()=>handlePhotoClick(2)} />
            <img src={babyshower_photo[11]} alt={imagealt} />
          </div>
          <div className='column-gallery'>
            <img src={babyshower_photo[8]} alt={imagealt} />
            <img src={babyshower_photo[4]}  alt={imagealt} />
            <img src={babyshower_photo[2]} alt={imagealt} />
          </div>
          <div className='column-gallery'>
            <img src={babyshower_photo[6]} alt={imagealt} />
            <img src={babyshower_photo[5]} alt={imagealt} />
            <img src={babyshower_photo[3]} alt={imagealt} />
          </div>
          <div className='column-gallery'>
            <img src={babyshower_photo[9]}  alt={imagealt} />
            <img src={babyshower_photo[10]}   alt={imagealt} />
          </div>
        </div>
      </section>
  )
}

export default BabyShowerPhotos
