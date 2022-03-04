import React, {useState, useEffect} from "react";
import axios from "axios";

//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import NewMovies from "../components/Movies_carousal/newMovies";
import Premier from "../components/premier/Premier.component";

const HomePage = () => {
    return (
        <>
          <div className="flex flex-col gap-12 bg-bms-50">
            <div className="container mx-auto px-32">
              <NewMovies />
            </div>
            <div className="container mx-auto px-32">
              <EntertainmentCardSlider />
            </div>

            <div className="bg-bms-700 py-16">
              <div className="container mx-auto px-32">
                <img 
                  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png"
                  alt="Premier-Rupay"
                  className="w-full h-full"
                />
              </div>
              <div className="container mx-auto px-32">
                <Premier />
              </div>
          </div>
          </div>
        </>
    );
};

export default HomePage;