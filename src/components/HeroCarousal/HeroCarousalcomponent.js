import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//Components
import {PrevArrow, NextArrow} from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
  const settings = {
    autoplay:true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: "160px",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-out',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };
  const images = ["https://lh3.googleusercontent.com/1hbFt0vcXkMguqztPQt3_JcHOqADK_2ZOINM9bMyA-j2G9Nz7IuXCPWCDOZcohwBXQbmzBpEktuyyGZm-YKcnn8MIGVy7sGZtt9E5k7vxMtKMooN6oH8ZF1ijldt_tXtqw0QQMMGLf9p4ceenbVnj8h3wZrfUVJ3zV62hOu7h8hGvaDx1Ph1nukipFiNKhYudMKn0CS9CRGRGxf--sfCsoPUC7ORNR0K-gt6nE0p1dETUBbOnq86p74LLKSwe1mU4At_qGf-tQLTljQLebE3T5HHardPK4Dwq1Ldbp9IQiYEMMWJfYid0x365x56IvzHLXBScgdzeAQdLCKC6GWaVV_LWu7uCzQ1awHXe8j4hZZCvXzCcbyg-tijytVxPeWK_zrdnzENcoJeqFV0P639KRu_ZPYWzJq7dDpZc50cpvYvEW7XRgobGewpstShBinZIjqm4vc94VZJvL5gXRlF4iadQgQeJbWrk3WpzIja80p5JKSp5F-3JTII4JLIDAheSjFqNp5bvCwhlLI4Gr3QoDzns17Osb3tZUF4rjcY1j_OddS2-dejT1mTPh59QYmRlq986rLLsPZypS3EMEUQYncXCrwErOxrQ-Q2Yjr5SuNSV_FOll1LZTBwwPRK0IzP4jZAgyNuqbxUDPZErJmBmjuMFUW1cNqdvx8BCerpnAH5rOzmVg6JOUYrGmsPXEZ5p4kPdvyP2xqipCatn9Pk5zsH=w1240-h300-no?authuser=0",
  "https://lh3.googleusercontent.com/U54V8ppo0Q2TkvFeIYYuGhC_4ZsIjsE-KEULNT-6lNIWEwnyDG79q_yugeWGyDdOB3s0NqY2tFoOOTj31wJ3GC_qEMWRT6d4LqPjStJLzuIwSwlImkNZx-FyEbmwUuvXP7ii7gqiYmzsVyQ1W3gJzr2s6OSAkPU9E5LeS7Ck--BIr5RsCds_I8QkPsDSRI9UgQARMLauabv2B3cERbrEVk7hscnssgba_VbdKZh0rOlp0xIwzw3ilT643GyGI9eZeqz5bcFLqQtt5z3ZZPjs7H-4m2TVZSVYpQ8jo5Lsz1QmBdn6s0sx7s8VDEzRUYO6CTltp7-XHsIQENgVKXZyHa2E71r1VUktXv8v3g5Wh36sP0Bx_o7gtwmTTl79uTspMEsrmTH_SRhKPY5lSzXJ24bSqgxvwF3xwGdHgpPe_Fh4Khe2UA9F0evrNxBwtvSUMh311_OS2oL0Euj7MCpudRE1_5q7wXutECDMzBqM5UiiWEcgV3uC17c-mhjCu3UkalhQUJDMgpS70mrKgPjeV_faxvyU11IH3XmULo5MLPuCt8uk9aLsjrlSe-eSJXngIeZyQWaQkTgm_tRYsWLSPiYsyeGfo1El_0Pvdtyx3q7v6ojyFZ36PDlg_RyOy06xcoUIUvCJOaXTbASgsO5h6yW3ZHHa7aMPWg1yDVF8Q-w6V4bmsjGzV0lT63OS5dNY14egbAEa-bS1pVDOREJblZoC=w1240-h300-no?authuser=0",
  "https://lh3.googleusercontent.com/9XM78uEMN0adZEjQcw5cIF68wL-pRJJadmGUAhF3H4TJn9RqD3c_YZi23aXfkJa1XMjk-nSS2jKWBbFQNt4YtZtpPn50bq7D76GsyR_PESTFH9xu_yVkaWSX9sauEBvC9OAeLSUJlF21Wl1CTQJ8TaT5MSqLVYwQVod77qrB4fjz3_iVIvOdt577tHsu8UJqFLOEbffeGNfHQjIhf53uHxmE-WSOEFt8gxVpZKzyti59y7FPIGm46zUnv2IDFQ_u1iB0ukoklHSPWuUSIpPoWsBbhAybwh-55lHmbnnTDzc5_Wov49JZIp7zqhtbKVf8cwtmEl2HHGnNJJp4vdolexhDZdnD_iivgmA-LNZvhMIY6tSNmtgsTO0M4B0phn86usZbRzlW_zz528c-uiOtoA4Z3Pa5AtGBy2g8kuZ14KFu2Cozs1eCvT1LXDufA2ndHoryLDa7851NQxvSZe-xTWMwujlILd53ECMx2X0RKpp2E_eku1ZXy7DkcRqa5xbk2x_jGtbHZrUNQmUOxn6RL9Ewc-FLRmFjVjf74dLT0XjQRvrv-URIWLwiNOZgcuDcucKo8B7SvgOdEdSKzQAdwjfNTSFZdXfxig_lLCMeF68dfz2aLUjVUNTTLhfSpjhzbkGdUwW-wjgdDnS5BtFeM7hqkQFx4m7CZDCENraQBGT1USYdGq4dF5H-J1u9RVVUGa3LoRCTzTSUbiv6AVryC28b=w1240-h300-no?authuser=0",
  "https://lh3.googleusercontent.com/--5Fgf9Dv1QgR1m7KaqR-sNZthfuTYYCLUcV2GK28sClOHFUqzZZncQDtDZzXdzdFhmd9xAljq0borcq4D44g7316RneOuoNOu1S3RCrh7IgNhEMjuk7ptuRgwySaWXgkGbugSHGtAf09nBFDWKYO463TNkAHjP43AwqGcKZJM6hC3ztUZvVAgnZV7WDrFDacmoLKaYRNbMkFJXt8BxXWzMLHeP4FTouYNnpJmQmL5cmE8CySG0DcWpK-Bv8yRAk8U7FNNFNV-_Pjxg79upvYSmu14zoYyen46VzC15OtAJkQHWioAUaVaq5eBxlVq1ElQ1QTWmjSN0fRNL3JZzlgvC-eFPqGt11ba6iQzBUs9GEpqmnjbojeX-VFIO0JrBp8fcnKMIUgpDmStPfbmtmoqxTaWwIgTYh9_Zl6FRXgnJscZ6gET5m5u4O5h1MBEt17TKGKlzsUJPhv4SSQYz2IGr7y2eXMrPlbVz98d3cvLyaZZkXrcCn5PPJTSEpmiK0l7x4ByI6o12lapoQYpYuaAt_ED5Mw5jWtAvyElv6ALrmJE0WBRA78SlYeihPCcFRMxS0Id7bnv6JZU12EwMhb6Hi6oGisvEk46IpgcYzDwui6CpuRKvfOfnblPcZaKrMSNg4tFFoIGAcr9axz0JxYIcBq-nBrj63z-ikpd7jl4FvpOZlU6Ge7mUQqB05ng7Uod9jbPju5YCla2Vo-bSXFOLf=w1240-h300-no?authuser=0",
  "https://lh3.googleusercontent.com/QjQM2g6X3-NiRtt9Z1BtdcsaEDlK88yQb6NKVFyN5CFKwMx01NDjAxm0iJ83xJ1DoLQLDxrCoOAMBmV2jr-Bgi1VodiBxyYMGUfN1tLpP3RtcpwaDUOLXRMiXmCAk4Jemo9LscuUCD8G8C5pkAy7_UwlRtxmLrLf2cFyhrZXsLmDmvMAeZeU_T11KdpJD7NYvu_BFtwnt644VXX73RZXtmsmTa6-aKdF-ODeNPYK_ctkkg0QuT37ePy4WDYEZkCg_rfPPjLWbA6iYyg2uk6c80L093TEoDBsLJDeuX_frNTaN0rL79s58QUph70c00rtMnr2kgG-1qSyIR1ZGjWskiZdxWP9T5Lul6R2mKJ3SuS8ahhb6V5PQSVLbg7ykYrLVjW9HMAz3WPCwWJ9hBAtCOoUeUjnl_bw5OB0yespgmWBc8ur01xo8ie6yinYbv9PjtXfHPbxia5g4REhYiBtZAYNLy-sqGUOTg5FOJY_mZFIMWPcGf-Vcsr-HfpFsq43xYkiFXot2p4HB_pypAukK-lfIbDCHuDnsjcDgxz8vAIPss3hOn9WFy1w-NsQOmhCrsdctfv3x04Htd3JhLEWjtTTFXXd0KD_fpedkYl0L4mk3-VKlnspF6eiVB4dC43F5P4nog3J7mD8LIJrUZk5OGPgesSjCd_jZKQI-39yWGqAayx5Sd84xmaTTZaE9gLJsvgsj-n96GaUX7w_2rjgUyOc=w1280-h640-no?authuser=0",
  "https://lh3.googleusercontent.com/hxUEUT24bZCOF_BmZYOFgu88LWVkwP7OgYQjPoCkpD-adqp9qguT0c8E1oUF5JF0xS7ORZU3XTZrrv33RPX47PvORLoy2sF387hSqbwgDnt3cRzwPcrYeaeE35LOrtcMCUlNYOUypW7ev_giAh2VOdA8TMMPEA764AH-JI-BDbHFWKs1Yk5xTKSKntRJPxJvSk31a_E3F8iCNWw-MbNkZRsMsqmwseEAWh4AwF8VS_Dt3bVzy0f1NsMyKo4Mgh1WJnDNI_R6i68clanDyuVNzugQvWyEadIuwYcuYXieSBMMvw_sLtu9KISzeWjCY-wA9ObtBs0fR9QibnfZxPIQZr-FkjJxkf_T9P8QxkR-RUXe2uJISvEQOjUNc9C1xrvVDr3bnETT1RVGbLmiCBfKkjiJ9iHRhdAzlYsDHHIn-r-nFPbZxbM2te91qxIE3O5W7npxWTZA8Lb7eXRoN2B_Mj21Yy2wY5QG-S6nRWPI8nGn8e5NCj5EXT4mSbHuXe0Z0Czj4l29GY09NKjBGJIVOjudXmziIakRF7OWIdChX9PraCVFeEsV-ROcBe1HNAhA5GngvIzXtHizWGSvNO5Wecgdi71uJOvPVJdTElZi86RZmIhn6x-cBl-v0iNPwQ9QlCtXWQGFhihP_FodhQEYP8QfX2u3JtcU6GZLQ-EjScktn6EwRARJME2iasXL0kIxPdhNvViNCPHNVh_sWfMtxpSu=w1280-h640-no?authuser=0"
  ];
  return (
    <>
    <HeroSlider {...settings}>
     {images.map((image)=>(
       <div className="w-20 h-96 px-2 py-3">
        <img src={image} alt="test-img" className=" rounded-md w-full h-full" />
       </div>
     ))}
    </HeroSlider>
    </>
  );
};

export default HeroCarousal;