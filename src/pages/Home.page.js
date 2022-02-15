import React from "react";

//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import Premier from "../components/premier/Premier.component";

const HomePage = () => {
    return (
        <>
          <div className="flex flex-col gap-12">
          <div className="container mx-auto px-32">
            <h1 className="text-2xl font-bold text-gray-900 my-3">
                The best of Entertainment
            </h1>
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