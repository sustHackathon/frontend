import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { IP_ADDRESS } from '../global/constant'

function SearchMedicine() {

    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([]);

    const handleSearch = () => {
        const endpoint = `http://${IP_ADDRESS}/medecine/getMedicines?search=${search}`;
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
    <div className='max-w-7xl p-3 mx-auto'>
        <form action="" className="ml-[400px]" onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 font-semibold placeholder:gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"/>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {users.map((user, index) => {
          return (
            <div className="bg-white border border-gray-200 rounded-xl shadow-md" key={index}>
              <div className="p-5 flex flex-col">
                <h5 className="text-2xl md:text-2xl text-black font-medium mt-1">
                  Name: {user.category}
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
                    </li>
                  ))}
                
                
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
  )
}

export default SearchMedicine