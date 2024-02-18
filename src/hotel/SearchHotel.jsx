import React, { useState, useEffect } from "react";
import { IP_ADDRESS } from "../global/constant";

function SearchHotel() {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([]);

    const handleSearch = () => {
        const endpoint = `http://${IP_ADDRESS}/getHotel?search=${search}`;
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
      }
    
      useEffect(() => {
        handleSearch();
      }, []);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch();
      }

  return (
    <div className="relative bg-gradient-to-bl from-gray-50 via-gray-100 to-sky-100 to-95% text-black">
      <div className="max-w-7xl p-3 mx-auto">
      <form onSubmit={handleSubmit} className="w-[640px] relative">
        <div className="relative">
        <input
          type="text"
          name="search"
          placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-full bg-slate-200"
        />
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 text-center">
        {Object.values(users).map((hotel) => (
          <div
            key={hotel.userName}
            className="bg-white border border-gray-300 shadow-md rounded-xl p-4"
          >
            <h2 className="font-bold text-2xl">
              <span>{hotel.name}</span>
            </h2>
            <p className="font-bold">
              Email: <span className="font-normal">{hotel.email}</span>
            </p>
            <p className="font-bold">
              Location:{" "}
              <span className="font-normal text-purple-500">
                <a href={hotel.location} target="_blank">
                  {hotel.location}
                </a>
              </span>
            </p>
            <p className="font-bold">
              Description:{" "}
              <span className="font-normal">{hotel.description}</span>
            </p>
            <p className="font-bold text-green-500">
              Star: <span className="font-normal text-black">{hotel.star}</span>
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
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default SearchHotel;
