import React from "react";
import { useEffect, useState } from "react";
import { IP_ADDRESS } from "../global/constant";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function ShowHotels() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const endpoint = `http://${IP_ADDRESS}/getAllHotels`;
    fetch(`${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail == "empty") {
          setUsers([]);
        } else {
          setUsers(data);
          console.log(data);
        }
      });
  }, []);

  return (
    <>
      <div className="relative bg-gradient-to-bl from-gray-50 via-gray-100 to-sky-100 to-95% text-black">
        <div className="max-w-7xl p-3 mx-auto">
          <div className="flex">
            <Link to="/searchHotel">
              <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2">
                Search Hotel
              </button>
            </Link>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 box">
            {Object.values(users).map((hotel) => (
              <div
                key={hotel.userName}
                className="bg-white border border-gray-300 shadow-md rounded-xl p-4 text-center"
              >
                <h2 className="font-bold">
                  <span className="text-xl">{hotel.name}</span>
                </h2>
                <p className="font-bold">
                  Email: <span className="font-normal">{hotel.email}</span>
                </p>
                <p className="font-bold">
                  Location:{" "}
                  <span className="font-normal text-purple-500">
                    <a href='https://maps.app.goo.gl/ZexGvhkUvoQ2oxEK9' target="_blank">
                      {hotel.location}
                    </a>
                  </span>
                </p>
                <p className="font-bold">
                  Description:{" "}
                  <span className="font-normal">{hotel.description}</span>
                </p>
                <p className="font-bold text-green-500">
                  Star:{" "}
                  <span className="font-normal text-black">{hotel.star}</span>
                </p>
                <h3 className="font-bold text-pink-500">Rooms:</h3>
                <ul>
                  {hotel.rooms.map((room) => (
                    <li key={room.id}>
                      {room.roomType} - Price: {room.price}, Available:{" "}
                      {room.available}
                    </li>
                  ))}
                </ul>
                <div className="">
                <button
                  type="submit"
                  className="bg-blue-800 text-white px-4 py-2 rounded mr-5 mt-5"
                  
                >
                  <Link to={`/hotelBooking/${hotel.userName}`}>Book Now</Link>
                </button>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default ShowHotels;
