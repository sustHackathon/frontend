import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { IP_ADDRESS } from '../global/constant'
import { useNavigate } from 'react-router-dom'

function RechargeAccount() {

    const {currentUser} = useSelector((state) => state.user);
    const [data, setData] = useState(null);

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        amount: 0
    });

    var toke;
    if( currentUser != null){
        toke = currentUser.accessToken;
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        const endpoint = `http://${IP_ADDRESS}/customer/recharge?amount=${formData.amount}`;
        fetch(`${endpoint}`, {
          method: "PUT",
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
            }
            else {
              setData(data);
              console.log(data);
            }
          });
            navigate('/medicine')
      }
    

      
  return (
    <div className='max-w-2xl mx-auto w-full'>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col ">
            <label>Change Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="p-3 rounded-lg bg-slate-100"
            />
          </div>
          
          <div className="flex justify-end mt-1">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Update Account
            </button>
          </div>
        </form>
    </div>
  )
}

export default RechargeAccount