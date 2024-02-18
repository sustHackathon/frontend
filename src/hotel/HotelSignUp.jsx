import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { IP_ADDRESS } from "../global/constant";
import { useNavigate } from "react-router-dom";

function HotelSignUp() {
  
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  

  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
    password: "",
    description: "",
    star: 0,
    rooms: [
      {
        roomType: "",
        price: 0,
        available: 0,
      },
    ],
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name.includes("rooms")) {
      const roomIndex = parseInt(name.match(/\[(\d+)\]/)[1]);
      const updatedRooms = [...formData.rooms];
      updatedRooms[roomIndex] = {
        ...updatedRooms[roomIndex],
        [name.substring(name.lastIndexOf(".") + 1)]: value,
      };
      setFormData({
        ...formData,
        rooms: updatedRooms,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = `http://${IP_ADDRESS}/signup/hotel`;
    fetch(`${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail == "empty") {
          setData(null);
        } else {
          setData(data);
          console.log(data);
        }
      });
    navigate("/medicine");
  };
  return (
    <>
      <div className="max-w-7xl p-3 mx-auto">
        <h1 className="text-3xl text-center font-semibold my-7 text-blue-800">
          Add New Hotel Here
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className=" p-3 rounded-lg bg-slate-100"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className=" p-3 rounded-lg bg-slate-100"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className=" p-3 rounded-lg bg-slate-100"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className=" p-3 rounded-lg bg-slate-100"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className=" p-3 rounded-lg bg-slate-100"
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className=" p-3 rounded-lg bg-slate-100"
          />
          <input
            type="number"
            name="star"
            value={formData.star}
            onChange={handleChange}
            placeholder="Star"
            className=" p-3 rounded-lg bg-slate-100"
          />
          {formData.rooms.map((room, index) => (
            <div key={index} className="flex flex-col gap-2">
              <input
                type="text"
                name={`rooms[${index}].roomType`}
                value={room.roomType}
                onChange={handleChange}
                placeholder="Room Type"
                className=" p-3 rounded-lg bg-slate-100"
              />
              <input
                type="number"
                name={`rooms[${index}].price`}
                value={room.price}
                onChange={(e) => handleChange(e, index)}
                placeholder="Price"
                className="p-3 rounded-lg bg-slate-100"
              />
              <input
                type="number"
                name={`rooms[${index}].available`}
                value={room.available}
                onChange={(e) => handleChange(e, index)}
                placeholder="Available"
                className="p-3 rounded-lg bg-slate-100"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-800 p-3 rounded-lg text-white font-semibold"
          >
            Add Hotel
          </button>
        </form>
      </div>
    </>
  );
}

export default HotelSignUp;
