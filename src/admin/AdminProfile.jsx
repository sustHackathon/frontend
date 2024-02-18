import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { IP_ADDRESS } from '../global/constant';

function AdminProfile() {

    const {currentUser} = useSelector((state) => state.user);
    const [data, setData] = useState(null);
    
    var toke;
    if( currentUser != null){
        toke = currentUser.accessToken;
    }

    useEffect(() => {
        const endpoint = `http://${IP_ADDRESS}/admin/profile`;
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
    <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-center text-blue-800 mt-5 text-2xl">
          Admin Info
        </h1>
        <div className="flex justify-center items-center mt-10 mr-10">
          <div className="bg-gray-100 w-[600px] rounded-lg">
            <div className="p-5 flex flex-col">
              <h5 className="text-2xl md:text-lg text-black font-medium">
                <span className="text-blue-800">Email: </span>
                {data && data.email}
              </h5>
              <p className="text-black text-lg">
                Name: {data && data.name}
              </p>
              <p className="text-black text-lg">
                Phone: {data && data.phone}
              </p>
              <p className="text-black text-lg">
                Position: {data && data.position}
              </p>
              <p className="text-black text-lg">
                Username: {data && data.userName}
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AdminProfile