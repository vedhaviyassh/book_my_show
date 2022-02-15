import React from "react";
import Slider from "react-slick";

import Poster from "../Poster/Poster.component";

const Premier = () => {
    const settings = {
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        InitialSlide: 0
    };

    const PremierImages = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTQlICA0OWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00317916-pkrhjdsjns-portrait.jpg",
            alt: "hridayam img",
            title: "Hridayam",
            subtitle: "Drama/Romantic",
            
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MW0gbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00132669-quufqwfcwc-portrait.jpg",
            alt: "valimai img",
            title: "Valimai",
            subtitle: "Action/Thriller",
            
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00314364-ywzggcvdbx-portrait.jpg",
            alt: "kadaisi vivasayi img",
            title: "Kadaisi Vivasayi",
            subtitle: "Comedy/Drama",
            
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTMxIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00320878-fypubrpnbu-portrait.jpg",
            alt: "mystery dragon img",
            title: "Mystery Dragon",
            subtitle: "Adventure/Action",
            
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICA0NTZrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00129538-xlannwuhpw-portrait.jpg",
            alt: "pushpa img",
            title: "Pushpa",
            subtitle: "Action/Drama",
            
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/venom-let-there-be-carnage-et00122532-25-12-2021-10-10-53.jpg",
            alt: "venom img",
            title: "Venom",
            subtitle: "Action/Sci-fi",
            
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/fast-and-furious-9-et00056556-30-11-2021-11-09-06.jpg",
            alt: "fast & furious 9 img",
            title: "Fast & Furious 9",
            subtitle: "Action/Adventure",
            
        }
    ];

    return (
        <>
          <div className="flex flex-col items-start gap-1 py-4">
              <h3 className="text-white text-xl font-bold">Premieres</h3>
              <p className="text-white text-sm">Brand New releases every friday</p>
          </div>
          <Slider {...settings} >
          {PremierImages.map((image)=> (
              <Poster {...image} isDark/>
          ))}
          </Slider>
        </>
    );
};

export default Premier;