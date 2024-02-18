import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IP_ADDRESS } from "../global/constant";

function TouristScheduled() {
  const { currentUser } = useSelector((state) => state.user);
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    colon: ":",
    place: "",
    date: "",
    time: "0:0", // Initial value for time with hour and minute separated by ":"
  });

  const toke = currentUser ? currentUser.accessToken : "";

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the name is either "hour" or "minute"
    if (name === "hour" || name === "minute") {
      // Concatenate hour and minute into a single string with ":" separator
      const timeValue = formData.hour + ":" + formData.minute;
      console.log(timeValue)

      // Set the concatenated value to the "time" field in formData
      setFormData({
        ...formData,
        time: timeValue,
      });
    } else {
      // If the name is not "hour" or "minute", update formData as usual
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = `http://${IP_ADDRESS}/tourist/setSchedule`;
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + toke,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.detail === "empty") {
          setData(null);
        } else {
          setData(data);
          console.log(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="max-w-7xl p-3 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Place"
            value={formData.place}
            onChange={handleChange}
            className="p-3 rounded-lg bg-slate-100 mt-2"
            id="place"
            name="place"
            required
          />
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="p-3 rounded-lg bg-slate-100 mt-2"
          />
          <div className="flex">
            <h1 className="text-red-500 font-bold">Hours</h1>
            <h1 className="text-red-500 ml-[170px] font-bold">Minutes</h1>
          </div>
          <div className="flex">
            <select
              name="hour"
              value={formData.hour}
              onChange={handleChange}
              className="p-3 rounded-lg bg-slate-100 mt-2 w-[200px]"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
            </select>
            <input
              type="text"
              id="colon"
              name="colon"
              value={formData.colon}
              onChange={handleChange}
              className="p-3 rounded-lg bg-slate-100 mt-2 ml-3 hidden"
            />
            <select
              name="minute"
              value={formData.minute}
              onChange={handleChange}
              className="p-3 rounded-lg bg-slate-100 mt-2 w-[200px] ml-3"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
              <option value="46">46</option>
              <option value="47">47</option>
              <option value="48">48</option>
              <option value="49">49</option>
              <option value="50">50</option>
              <option value="51">51</option>
              <option value="52">52</option>
              <option value="53">53</option>
              <option value="54">54</option>
              <option value="55">55</option>
              <option value="56">56</option>
              <option value="57">57</option>
              <option value="58">58</option>
              <option value="59">59</option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TouristScheduled;
