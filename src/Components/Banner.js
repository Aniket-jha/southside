import React, { useState } from 'react'
import SouthsideMainImage from "../asset/mainBanner.webp"
import SouthsideOneImage from "../asset/canteen.webp"
import SouthsideTwoImage from "../asset/gym-min.webp"
import SouthsideThreeImage from "../asset/Untitled design - 2024-06-07T221841.049.webp"
import SouthsideFourImage from "../asset/forth.webp"

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlaceholderImage from "../asset/placeholder.png"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaBed } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaRegImages } from "react-icons/fa6";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./main.css"
import { HiArrowLongRight } from "react-icons/hi2";
import { RiDoorOpenLine } from "react-icons/ri";
import { galleryImages } from './galleryData'
const Banner = () => {
  const [open, setOpen] = useState(false);
 
  return (
    <div className='mx-4 lg:mx-12 md:mt-0 my-0' id="photos">
    <div>
      <div className='flex items-center justify-start gap-2 lg:gap-6 ' >
      <h1 className='font-[NeueBold] text-[2rem]   uppercase pr-3 lg:pr-8 border-r-[2px] border-gray-300  lg:text-[4rem]' >Southside</h1>
      <h3 className='font-[NeueMedium] lg:text-[1.5rem] lg:mt-2 flex items-center justify-start gap-2 lg:gap-3  text-[0.8rem]' ><HiOutlineLocationMarker className='lg:text-[1.8rem] mb-1 text-[1.2rem] ' /> Mahalaxmi</h3>
      </div>
      <div className='flex items-center mt-3 justify-start' >
      <div className='border-r-[2px] flex items-center justify-start gap-2 lg:gap-4 pr-2 lg:pr-6 border-gray-300' >
        <FaBed className='lg:text-[1.7rem] text-[1rem]' />
        <p className='font-[NeueRegular] text-[0.8rem] lg:text-[1.2rem]' >150+ Beds</p>
      </div>
      <div className=' flex items-center justify-start gap-2 lg:gap-4 lg:pl-6 pl-2' >
        <RiDoorOpenLine className='lg:text-[1.7rem] text-[1rem]' />
        <p className='font-[NeueRegular] text-[0.8rem] lg:text-[1.2rem]' >50 Apartments</p>
      </div>
      </div>
    </div>
      <div className='grid   lg:grid-cols-4 mt-2 lg:mt-6  gap-2 lg:gap-[12px] grid-cols-2 ' >
      
        <div className='col-span-2 relative  ' >
          
          <picture  >
            <source srcSet={SouthsideMainImage} type="image/webp" />
           {/* Fallback for browsers that do not support WebP */}
            <source srcSet={SouthsideMainImage} type="image/jpeg" /> 
            <LazyLoadImage src={SouthsideMainImage}
   width="100%" height="100%"
   className='rounded-lg'
    PlaceholderSrc={PlaceholderImage}
    effect="blur"
/>
  
        </picture>
        <div className='absolute top-[5%]  right-[3%] lg:top-[5%] lg:right-[3%]  z-[109]' >
        

        <Lightbox
          open={open}
          plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
          close={() => setOpen(false)}
          slides={galleryImages}
        />
         <button className='bg-white text-[0.6rem] lg:text-[0.9rem] flex items-center justify-center gap-3 font-[NeueMedium] rounded-lg px-3 lg:px-4 py-2 lg:py-3' type="button" onClick={() => setOpen(true)}>
        <FaRegImages className='lg:text-[1.4rem] text-[1rem] '  />  See all photos
        </button>
           </div>
        </div>
       
      
        <div className='' >
        <picture className=''>
            <source srcSet={SouthsideOneImage} type="image/webp" />
           {/* Fallback for browsers that do not support WebP */}
            <source srcSet={SouthsideOneImage} type="image/jpeg" /> 
            <LazyLoadImage src={SouthsideOneImage}
  width="100%" 
   className='rounded-lg mb-1'
    PlaceholderSrc={PlaceholderImage}
    effect="blur"
/>
  
        </picture>
        <picture>
            <source srcSet={SouthsideTwoImage} type="image/webp" />
           {/* Fallback for browsers that do not support WebP */}
            <source srcSet={SouthsideTwoImage} type="image/jpeg" /> 
            <LazyLoadImage src={SouthsideTwoImage}
   width="100%" 
   className='rounded-lg '
    PlaceholderSrc={PlaceholderImage}
    effect="blur"
/>
  
        </picture>
        
        </div>
        <div>
        <picture >
            <source srcSet={SouthsideThreeImage} type="image/webp" />
           {/* Fallback for browsers that do not support WebP */}
            <source srcSet={SouthsideThreeImage} type="image/jpeg" /> 
            <LazyLoadImage src={SouthsideThreeImage}
  width="100%" 
   className='rounded-lg mb-1'
    PlaceholderSrc={PlaceholderImage}
    effect="blur"
/>
  
        </picture>
        <picture>
            <source srcSet={SouthsideFourImage} type="image/webp" />
           {/* Fallback for browsers that do not support WebP */}
            <source srcSet={SouthsideFourImage} type="image/jpeg" /> 
            <LazyLoadImage src={SouthsideFourImage}
   width="100%" 
   className='rounded-lg'
    PlaceholderSrc={PlaceholderImage}
    effect="blur"
/>
  
        </picture>
         
        </div>
       
      </div>
    </div>
  )
}

export default Banner