import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { IP_ADDRESS } from '../global/constant'
import { useNavigate } from 'react-router-dom'


function AddMedicine() {

    const {currentUser} = useSelector((state) => state.user)
    const [data, setData] = useState(null);

    const navigate = useNavigate();

    var toke;
    if(currentUser != null){
        toke = currentUser.accessToken
    }

    const [formData, setFormData] = useState({
        catagory: "",
        medicines: {
          name: "",
          price: 0,
          stock: 0,
          description: ""
        }
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
    const endpoint = `http://${IP_ADDRESS}/admin/addMedicine`;
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
        }
      });
      navigate('/medicine')
    }
  return (
    <>
    <div className="max-w-7xl p-3 mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-purple-500">
        Add New Medicine
      </h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label>Category</label>
      <input
          type="text"
          name="catagory"
          className=" p-3 rounded-lg bg-slate-100"
          value={formData.catagory}
          onChange={handleChange}
          required
        />
         <label>Medicine Name:</label>
        <input
          type="text"
          name="name"
          className=" p-3 rounded-lg bg-slate-100"
          required
          value={formData.medicines.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              medicines: { ...formData.medicines, name: e.target.value }
            })
          }
        />
        <label>Price:</label>
        <input
          type="number"
          name="price"
          className=" p-3 rounded-lg bg-slate-100"
          required
          value={formData.medicines.price}
          onChange={(e) =>
            setFormData({
              ...formData,
              medicines: { ...formData.medicines, price: e.target.value }
            })
          }
        />
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          className=" p-3 rounded-lg bg-slate-100"
          required
          value={formData.medicines.stock}
          onChange={(e) =>
            setFormData({
              ...formData,
              medicines: { ...formData.medicines, stock: e.target.value }
            })
          }
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          className=" p-3 rounded-lg bg-slate-100"
          required
          value={formData.medicines.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              medicines: {
                ...formData.medicines,
                description: e.target.value
              }
            })
          }
        />
        <button
          type="submit"
          className="bg-purple-600 p-3 rounded-lg text-white font-semibold"
        >Submit</button>
      </form>
    </div>
    </>
  )
}

export default AddMedicine