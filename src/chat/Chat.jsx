import React from "react";
import { useState, useEffect } from "react";
import { IP_ADDRESS } from "../global/constant";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Chat() {
  const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState(null);

  const [city, setCity] = useState("");

  var toke;
  if (currentUser != null) {
    toke = currentUser.accessToken;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = `http://${IP_ADDRESS}/tourist/askAiForBudgetTour?city=${city}`;
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
          console.log(data);
        }
      });
  };
  return (
    <div className="">
      <div className="max-w-7xl p-3 mx-auto">
        <div className="flex mb-6">
          <Link to="/generalChat">
            <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2">
            BudgetTransport
            </button>
          </Link>
          <Link to="/budgetFriendly">
            <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2">
              Budget Friendly
            </button>
          </Link>
          <Link to="/bot">
            <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2">
              Bot
            </button>
          </Link>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            Enter Place Here:
            <select
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="p-3 rounded-lg bg-slate-100"
            >
              <option value="Bagerhat">Bagerhat</option>
              <option value="Bandarban">Bandarban</option>
              <option value="Barguna">Barguna</option>
              <option value="Barishal">Barishal</option>
              <option value="Bhola">Bhola</option>
              <option value="Bogra">Bogra</option>
              <option value="Brahmanbaria">Brahmanbaria</option>
              <option value="Chandpur">Chandpur</option>
              <option value="Chapainawabganj">Chapainawabganj</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Chuadanga">Chuadanga</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
              <option value="Cumilla">Cumilla</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Dinajpur">Dinajpur</option>
              <option value="Faridpur">Faridpur</option>
              <option value="Feni">Feni</option>
              <option value="Gaibandha">Gaibandha</option>
              <option value="Gazipur">Gazipur</option>
              <option value="Gopalganj">Gopalganj</option>
              <option value="Habiganj">Habiganj</option>
              <option value="Jamalpur">Jamalpur</option>
              <option value="Jashore">Jashore</option>
              <option value="Jhalokati">Jhalokati</option>
              <option value="Jhenaidah">Jhenaidah</option>
              <option value="Joypurhat">Joypurhat</option>
              <option value="Khagrachhari">Khagrachhari</option>
              <option value="Khulna">Khulna</option>
              <option value="Kishoreganj">Kishoreganj</option>
              <option value="Kurigram">Kurigram</option>
              <option value="Kushtia">Kushtia</option>
              <option value="Lakshmipur">Lakshmipur</option>
              <option value="Lalmonirhat">Lalmonirhat</option>
              <option value="Madaripur">Madaripur</option>
              <option value="Magura">Magura</option>
              <option value="Manikganj">Manikganj</option>
              <option value="Meherpur">Meherpur</option>
              <option value="Moulvibazar">Moulvibazar</option>
              <option value="Munshiganj">Munshiganj</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Naogaon">Naogaon</option>
              <option value="Narail">Narail</option>
              <option value="Narayanganj">Narayanganj</option>
              <option value="Narsingdi">Narsingdi</option>
              <option value="Natore">Natore</option>
              <option value="Nawabganj">Nawabganj</option>
              <option value="Netrokona">Netrokona</option>
              <option value="Nilphamari">Nilphamari</option>
              <option value="Noakhali">Noakhali</option>
              <option value="Pabna">Pabna</option>
              <option value="Panchagarh">Panchagarh</option>
              <option value="Patuakhali">Patuakhali</option>
              <option value="Pirojpur">Pirojpur</option>
              <option value="Rajbari">Rajbari</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Rangamati">Rangamati</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Satkhira">Satkhira</option>
              <option value="Shariatpur">Shariatpur</option>
              <option value="Sherpur">Sherpur</option>
              <option value="Sirajganj">Sirajganj</option>
              <option value="Sunamganj">Sunamganj</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Tangail">Tangail</option>
              <option value="Thakurgaon">Thakurgaon</option>
            </select>
          </div>
          <div className="flex flex-col">
            <button
              className="bg-blue-800 text-white py-2 rounded-lg
                        uppercase hover:opacity-90 mt-4"
            >
              Submit
            </button>
          </div>
          <div>
            <div className="p-4 border border-gray-100 shadow-xl rounded-md card">
              {data && (
                <div
                  className="font-md"
                  dangerouslySetInnerHTML={{ __html: data }}
                  style={{ whiteSpace: "pre-wrap" }} // This preserves line breaks
                />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
