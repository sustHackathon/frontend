import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { IP_ADDRESS } from '../global/constant';

function BudgetFriendly() {

    const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState(null);

  const [hotels, setHotel] = useState([]);

  const [city, setCity] = useState("");
  const[budget, setBudget] = useState("")

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = `http://${IP_ADDRESS}/tourist/budgetFriendlyAccomodation?city=${city}&budget=${budget}`;
    fetch(`${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + toke,
      },
      //body: JSON.stringify(formData),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data.detail == "empty") {
          setData(null);
        } else {
          setData(data);
          const hotelData = Object.values(data); // Extracting array of hotel objects
            setHotel(hotelData);
          console.log(data);
        }
      });
  };
  return (
    <div className="max-w-7xl p-3 mx-auto">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            type="number"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="p-3 rounded-lg bg-slate-100 mt-2"
            id="budget"
            required
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="p-3 rounded-lg bg-slate-100 mt-2"
            id="city"
            required
          />
          
        </div>
        <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2 w-full mt-3">
            Submit
            </button>

      </form>
      <div className="p-4 border border-gray-300 shadow-xl rounded-md ">
      {/* {hotels.map((hotel, index) => (
        <div key={index} className="p-4 border border-gray-100 shadow-xl rounded-md card">
          <h2>{hotel.HotelName}</h2>
          <p>Location: {hotel.Location}</p>
          <p>Available Rooms: {hotel.AvailableRoom}</p>
          <p>Room Type: {hotel.RoomType}</p>
          <p>Price: {hotel.Price}</p>
          <p>Star: {hotel.Star}</p>
          <p>Rating: {hotel.Rating}</p>
          <p>Amenities: {hotel.Amenities}</p>
          <p>Customer Review: {hotel.CustomerReview}</p>
        </div>
      ))} */}
      {data && (
              <div className="font-md"
                dangerouslySetInnerHTML={{ __html: data }}
                style={{ whiteSpace: "pre-wrap" }} // This preserves line breaks
              />
            )}
          </div>
    </div>
  )
}

export default BudgetFriendly