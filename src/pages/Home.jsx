import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="relative bg-gradient-to-bl from-gray-50 via-gray-100 to-sky-100 to-95% text-black">
        <div className="flex max-w-7xl p-3 mx-auto flex-col md:flex-row">
          <div className="p-0.5">
            <h1 className="text-[40px] font-bold text-blue-800">Welcome</h1>
            <h1 className="text-[30px] font-bold text-blue-800">
              <span className="text-blue-500">to Trip Mate</span>
              <span className="text-purple-600"></span>
            </h1>
            <p className="text-gray-500 mt-3 text-xl">
              TripMate is a web-based platform that helps users plan
              budget-friendly travel itineraries.By providing their desired
              destinations and budget, users receive personalized
              recommendations for hotels, transportation options, tourist
              attractions, and travel guides.
            </p>
            <Link to="/chat">
              <button
                className="bg-blue-800 p-2 px-3 rounded-md text-white mt-3
          transition-all ease-in-out hover:scale-110"
              >
                Explore
              </button>
            </Link>
          </div>

          <img
            src="https://img.freepik.com/premium-vector/plan-your-trip-time-travel-vacation-planning-travel-industry-modern-travel-technologies-booking-hotel_87771-345.jpg"
            alt=""
            className="w-[300px] md:w-[400px]"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
