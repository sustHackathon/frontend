import React, { useId } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { IP_ADDRESS } from "../global/constant";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";

function HotelBooking() {
  const { currentUser } = useSelector((state) => state.user);

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  const { userid } = useParams();
  const [data, setData] = useState(null);
  console.log(userid);

  const [formData, setFormData] = useState({
    hotelUserName: userid,
    roomType: "",
    checkIn: "",
    totalRoom: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = `http://${IP_ADDRESS}/tourist/booking`;
    fetch(`${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + toke,
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
          generatePDF(data);
        }
      });
  };

  const generatePDF = (data) => {
    const doc = new jsPDF();
    doc.text("Hotel Booking Details", 10, 10);
    doc.text(`Hotel Username: ${data.hotel.description}`, 10, 20);
    doc.text(`Check-in Date: ${data.hotel.checkIn}`, 10, 40);
    doc.text(`Total Rooms: ${data.payment.amount}`, 10, 50);
    doc.text(`Status: ${data.payment.status}`, 10, 60);
    doc.save("hotel_booking_details.pdf");
  };

  return (
    <div className="p-3 max-w-2xl mx-auto w-full">
      <h1 className="text-center text-2xl text-purple-500">Book Room</h1>
      <form onSubmit={handleSubmit}>
        {/* <label>
                    Hotel Username:
                    <input type="text" name="hotelUserName" value={formData.hotelUserName} onChange={handleChange} 
                    className=' p-3 rounded-lg bg-slate-100' disabled/>
                </label><br /> */}
        <div className="flex flex-col">
          Room Type:
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className=" p-1 rounded-lg bg-slate-100"
          >
            <option value="AC">AC</option>
            <option value="NON AC">NON AC</option>
            <option value="DELUX">DELUX</option>
            <option value=""></option>
          </select>
        </div>
        <br />
        <div className="flex flex-col">
          Check-in Date:
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className=" p-1 rounded-lg bg-slate-100"
          />
        </div>
        <br />
        <div className="flex flex-col">
          Total Rooms:
          <input
            type="number"
            name="totalRoom"
            value={formData.totalRoom}
            onChange={handleChange}
            className=" p-1 rounded-lg bg-slate-100"
          />
        </div>
        <br />
        <br />
        <div className="flex flex-col">
          <button
            type="submit"
            className="bg-purple-700 text-white py-2 rounded-lg
                        uppercase hover:opacity-90"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default HotelBooking;
