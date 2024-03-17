import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const initialState={
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
}
const ManagerRegister = () =>{
    const navigate = useNavigate();
    const [manager , setManager] = useState(initialState);

    const handleInputChange = (e) =>{
        const{name,value} = e.target;
        setManager({...manager,[name]:value});
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
            const response = await axios.post(`http://localhost:8080/admin/registerManager`,manager);
            console.log("Registered successfully", response.data);
            navigate(`/adminPage`);
        }
        catch(error){
            console.log("Error registering manager: ",error);
        }
    }
    return(
        <React.Fragment>
            <div className="form">
      <body>
        <form onSubmit={handleSubmit}>
          <h1 className="title">Register Manager</h1>
          <div className="firstCol">
            <label htmlFor="firstName" className="label">
              First Name
            </label>
            <input
              className="input"
              type="text"
              id="firstName"
              name="firstName"
              value={manager.firstName}
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
              value={manager.lastName}
              onChange={handleInputChange}
            />

            <label htmlFor="role" className="label">
              Role
            </label>
            <select
              className="input"
              id="role"
              name="role"
              value={manager.role}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Employee">Employee</option>
              <option value="Manager">Manager</option>
             
            </select>

            <label htmlFor="emailId" className="label">
              EmailId
            </label>
            <input
              className="input"
              type="text"
              id="emailId"
              name="emailId"
              value={manager.emailId}
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
              value={manager.password}
              onChange={handleInputChange}
            />

            <label htmlFor="gender" className="label">
              Gender
            </label>
            <select
              className="input"
              id="gender"
              name="gender"
              value={manager.gender}
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
              value={manager.contactNo}
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
              value={manager.age}
              onChange={handleInputChange}
            />

            <label htmlFor="street" className="label">
              Street
            </label>
            <textarea
              className="input"
              id="street"
              name="street"
              value={manager.street}
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
              value={manager.city}
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
              value={manager.pincode}
              onChange={handleInputChange}
            />
          </div>

          <button className="btn" type="submit">
            Register Manager
          </button>
        </form>
      </body>
    </div>
        </React.Fragment>
    )
}
export default ManagerRegister;