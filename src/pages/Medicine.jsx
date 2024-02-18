import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { IP_ADDRESS } from "../global/constant";
import { Link } from "react-router-dom";


function Medicine() {
  const [users, setUsers] = useState([]);

  

  // useEffect(() => {
  //   const endpoint = `http://${IP_ADDRESS}/medecine/getAllMedicines`;
  //   fetch(`${endpoint}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.detail == "empty") {
  //         setUsers([]);
  //       } else {
  //         setUsers(data);
  //         console.log(data);
  //       }
  //     });
  // }, []);

  // const handleBuyClick = (medicineId) => {
  //   // Navigate to a new page with the medicine ID passed as a parameter
  //   history.push(`/buy/${medicineId}`);
  // };

  return (
    <>
      <div className="max-w-7xl p-3 mx-auto">
        <div className="flex">
          <Link to="/adminProfile">
            <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2">
              Admin Profile
            </button>
          </Link>
          <Link to="/hotelSignUp">
            <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2">
              Hotel SignUp
            </button>
          </Link>
          <Link to="/touristRecharge">
            <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2">
              Tourist Rechagre
            </button>
          </Link>
          <Link to="/touristSheduled">
            <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2">
              Tourist Sheduled
            </button>
          </Link>
          {/* <Link to="/addMedicine">
            <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2">
              Add Medicine
            </button>
          </Link>
          <Link to="/searchMedicine">
            <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2">
              Search Medicine
            </button>
          </Link>
          <Link to="/customerProfile">
            <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2">
              Customer Profile
            </button>
          </Link>
          <Link to="/rechargeAccount">
            <button className="bg-blue-800 text-white px-4 py-2 rounded mr-2">
              Recharge Account
            </button>
          </Link> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {users.map((user, index) => {
            return (
              <div
                className="bg-white border border-gray-200 shadow-md rounded-xl"
                key={index}
              >
                <div className="p-5 flex flex-col">
                  <h5 className="text-2xl md:text-2xl text-purple-500 font-medium mt-1 text-center">
                    {user.category}
                  </h5>

                  {user.medicines.map((medicine, index) => (
                    <li key={index}>
                      <hr />
                      <h3>{medicine.medicine.name}</h3>
                      <p className="text-red-500">
                        Price:{" "}
                        <label className="text-black">
                          {medicine.medicine.price} Tk
                        </label>
                      </p>
                      <p className="font-bold">
                        Description:{" "}
                        <label className="p-3 font-normal">
                          {medicine.medicine.description}
                        </label>
                      </p>
                      <div className="mt-3">
                        {/* Button to trigger buying action */}
                        <Link
                          to={`/buy/${medicine.medicine.id}`}
                          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                        >
                          Buy
                        </Link>
                      </div>
                    </li>
                  ))}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Medicine;
