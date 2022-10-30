import React from 'react';
import Slider from "react-slick";
import img1 from '../../assets/slider-img/img1.jpg'
import img2 from '../../assets/slider-img/img2.jpg'
import img3 from '../../assets/slider-img/img3.jpg'
import img4 from '../../assets/slider-img/img4jpg.jpg'
import '../Banner/Banner.css'

const Banner = () => {
    const settings = {
       
        infinite: true,
        speed: 200,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      
      };
    return (
        <div  className='banner-container '>
           <Slider {...settings}>
          <div className='banner'>
            <img  src={img1} alt="" />
          </div>
          <div className='banner '>
          <img src={img2} alt="" />
          </div>
          <div className='banner'>
          <img src={img3} alt="" />
          </div>
          <div className='banner '>
          <img src={img4} alt="" />
          </div>
          
        </Slider>
            
        </div>
    );
};

export default Banner;