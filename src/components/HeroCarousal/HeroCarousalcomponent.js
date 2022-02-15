import React from "react";
import HeroSlider from "react-slick";

//Components
import {PrevArrow, NextArrow} from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const settings = {
        arrows:true,
        centerMode: true,
        centerPadding: "160px",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    const images = [
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1644734993058_show.jpg",
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1643608159306_fb.jpg",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1642986951104-428827cfe46b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1642976333775-31a7041583f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1004&q=80"
];
    return(
        <>
        <HeroSlider {...settings}>
         {images.map((image)=>(
             <div className="w-20 h-96 px-2 py-3">
                 <img src={image} alt="test-image" className="rounded-md w-full h-full" />
             </div>
         ))}
        </HeroSlider>
        </>
    )
};

export default HeroCarousal;