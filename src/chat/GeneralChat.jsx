import React from "react";
import { useState } from "react";
import { IP_ADDRESS } from "../global/constant";

function GeneralChat() {

    const [budget, setBudget] = useState("");
    const [currentCity, setCurrentCity] = useState("");
    const [destination, setDestination] = useState("");
    const [startingDate, setStartingDate] = useState("");
    const [endingDate, setEndingDate] = useState("");

    const [data, setData] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const endpoint = `http://${IP_ADDRESS}/chatBot/getSpecificAnswer?budget=${budget}&currentCity=${currentCity}&destination=${destination}&startingDate=${startingDate}&endingDate=${endingDate}`;
        fetch(`${endpoint}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
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
    <div className="max-w-7xl p-3 mx-auto">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            type="number"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="p-3 rounded-lg bg-slate-100"
            id="budget"
            required
          />
          <input
            type="text"
            placeholder="CurrentCity"
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
            className="p-3 rounded-lg bg-slate-100 mt-2"
            id="currentcity"
            required
          />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="p-3 rounded-lg bg-slate-100 mt-2"
            id="destination"
            required
          />
          <input
            type="date"
            placeholder="startingDate"
            value={startingDate}
            onChange={(e) => setStartingDate(e.target.value)}
            className="p-3 rounded-lg bg-slate-100 mt-2"
            id="startingdate"
            required
          />
          <input
            type="date"
            placeholder="endingDate"
            value={endingDate}
            onChange={(e) => setEndingDate(e.target.value)}
            className="p-3 rounded-lg bg-slate-100 mt-2"
            id="endingdate"
            required
          />
        </div>
        <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2 w-full mt-3">
            Submit
            </button>

      </form>
      <div className="p-4 border border-gray-300 shadow-xl rounded-md ">
            {data && (
              <div className="font-md"
                dangerouslySetInnerHTML={{ __html: data }}
                style={{ whiteSpace: "pre-wrap" }} // This preserves line breaks
              />
            )}
          </div>
    </div>
  );
}

export default GeneralChat;
