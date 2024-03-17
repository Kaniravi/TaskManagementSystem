import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  role: "",
  emailId: "",
  password: "",
  gender: "",
  contactNo: "",
  age: "",
  street: "",
  city: "",
  pincode: ""
};

const AdminRegister = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const handleHome =() =>{
    navigate(`/`);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/admin/register`,
        admin
      );
      console.log(response.data);
      alert("Admin registered successfully");
      console.log("Registered successfully");
      setAdmin(initialState);
      navigate(`/`);
    } catch (error) {
      console.log("Error Registering user: ", error);
    }
  };

  return (
    <div className="form">
      <body>
        <form  onSubmit={handleSubmit}>
          <h1 className="title">Register Admin</h1>
          <div className="firstCol">
            <label htmlFor="firstName" className="label">
              First Name
            </label>
            <input
              className="input"
              type="text"
              id="firstName"
              name="firstName"
              value={admin.firstName}
              onChange={handleInputChange}
            />

            <label htmlFor="lastName" className="label">
              Last Name
            </label>
            <input
              className="input"
              type="text"
              id="lastName"
              name="lastName"
              value={admin.lastName}
              onChange={handleInputChange}
            />

            <label htmlFor="role" className="label">
              Role
            </label>
            <select
              className="input"
              id="role"
              name="role"
              value={admin.role}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Employee">Employee</option>
              <option value="Manager">Manager</option>
              <option value="Admin">Admin</option>
            </select>

            <label htmlFor="emailId" className="label">
              EmailId
            </label>
            <input
              className="input"
              type="text"
              id="emailId"
              name="emailId"
              value={admin.emailId}
              onChange={handleInputChange}
            />

            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              value={admin.password}
              onChange={handleInputChange}
            />

            <label htmlFor="gender" className="label">
              Gender
            </label>
            <select
              className="input"
              id="gender"
              name="gender"
              value={admin.gender}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="secondCol">
            <label htmlFor="contactNo" className="label">
              ContactNo
            </label>
            <input
              className="input"
              type="text"
              id="contactNo"
              name="contactNo"
              value={admin.contactNo}
              onChange={handleInputChange}
            />

            <label htmlFor="age" className="label">
              Age
            </label>
            <input
              className="input"
              type="number"
              id="age"
              name="age"
              value={admin.age}
              onChange={handleInputChange}
            />

            <label htmlFor="street" className="label">
              Street
            </label>
            <textarea
              className="input"
              id="street"
              name="street"
              value={admin.street}
              onChange={handleInputChange}
            ></textarea>

            <label htmlFor="city" className="label">
              City
            </label>
            <input
              className="input"
              type="text"
              id="city"
              name="city"
              value={admin.city}
              onChange={handleInputChange}
            />

            <label htmlFor="pincode" className="label">
              Pincode
            </label>
            <input
              className="input"
              type="text"
              id="pincode"
              name="pincode"
              value={admin.pincode}
              onChange={handleInputChange}
            />
          </div>

          <button className="btn" type="submit" >
            Register User
          </button>
          <button className="btn" onClick= {handleHome}>Home</button>
        </form>
      </body>
    </div>
  );
};

export default AdminRegister;
