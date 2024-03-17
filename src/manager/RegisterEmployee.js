import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
const initialState ={
    firstName: "",
    lastName: "",
    role: "Employee",
    emailId: "",
    password: "",
    gender: "",
    contactNo: "",
    age: "",
    street: "",
    city: "",
    pincode: ""
}


const RegisterEmployee = () =>{
  const {managerName}  = useParams();
    const navigate = useNavigate();
    const[employee,setEmployee] = useState(initialState);
   

    const handleInputChange = (e) =>{
        const{name,value} = e.target;
        setEmployee({...employee,[name]:value});
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:8080/manager/registerEmployee`, employee);
            console.log("User registered successfully", response.data);
            alert("Employee Registered Sucessfully");
            setEmployee(initialState);
            navigate(`/managerPage/${managerName}`);

        }
        catch(error){
            console.log("Error registering employee: ", error);
        }
    }

    const handleHome =() =>{
        navigate(`/`);
    }
    return(
        <div className="form">
        <body>
          <form onSubmit={handleSubmit}>
            <h1 className="title">Register Employee</h1>
            <div className="firstCol">
              <label htmlFor="firstName" className="label">
                First Name
              </label>
              <input
                className="input"
                type="text"
                id="firstName"
                name="firstName"
                value={employee.firstName}
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
                value={employee.lastName}
                onChange={handleInputChange}
              />
  
              <label htmlFor="role" className="label">
                Role
              </label>
              <input type="text" id="role" name="role" value="Employee" readOnly  className="input"/>
  
              <label htmlFor="emailId" className="label">
                EmailId
              </label>
              <input
                className="input"
                type="text"
                id="emailId"
                name="emailId"
                
              />
  
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                value={employee.password}
                onChange={handleInputChange}
              />
  
              <label htmlFor="gender" className="label">
                Gender
              </label>
              <select
                className="input"
                id="gender"
                name="gender"
                value={employee.gender}
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
                value={employee.contactNo}
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
                value={employee.age}
                onChange={handleInputChange}
              />
  
              <label htmlFor="street" className="label">
                Street
              </label>
              <textarea
                className="input"
                id="street"
                name="street"
                value={employee.street}
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
                value={employee.city}
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
                value={employee.pincode}
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
        
    )
}
export default RegisterEmployee;