import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { IP_ADDRESS } from '../global/constant'

function CustomerProfile() {

    const {currentUser} = useSelector((state) => state.user);
    const [data, setData] = useState(null);
    
    var toke;
    if( currentUser != null){
        toke = currentUser.accessToken;
    }

    useEffect(() => {
        const endpoint = `http://${IP_ADDRESS}/customer/profile`;
        fetch(`${endpoint}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + toke,
          },
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
      }, []);
  return (
    <>
    <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-center text-purple-500 mt-5 text-2xl">
          Customer Info
        </h1>
        <div className="flex justify-center items-center mt-10 mr-10">
          <div className="bg-gray-100 w-[500px] rounded-lg">
            <div className="p-5 flex flex-col">
              <h5 className="text-2xl md:text-lg text-black font-medium">
                <span className="text-red-400">Email: </span>
                {data && data.email}
              </h5>
              <p className="text-black text-lg">
                Name: {data && data.name}
              </p>
              <p className="text-black text-lg">
                Phone: {data && data.phone}
              </p>
              <p className="text-black text-lg">
                Balance: {data && data.balance}
              </p>
              <p className="text-black text-lg">
                Username: {data && data.userName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomerProfile