import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChangeEmployeePassword = () =>{
    const{employeeName} = useParams();
    const navigate  = useNavigate();
    
    const[employee,setEmployee]  = useState([]);
    
    const handleInputChange = (e) =>{
        setEmployee({...employee,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        const fetchEmployee = async() =>{
            try{
                const response = await axios.get(`http://localhost:8080/employee/getEmployeeByName/${employeeName}`);
                console.log("Fetched employee Successfully", response.data);
                setEmployee(response.data);
            }
            catch(error){
                console.log("Error fetching employee: ", error);
            }
        }  
        fetchEmployee(); 
    },[employeeName]);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:8080/employee/updatePassword/${employee.id}`,employee);
            console.log("Password updated successfully", response.data);
            alert("Password updated successfully");
            setEmployee('');
            navigate(`/employeePage/${employeeName}`);
            

        }
        catch(error){
            console.log("Error updating password", error);
        }
    }
    
    return(
        <React.Fragment>
            <div className="formPassword">
                <body>

                    <form  onSubmit ={handleSubmit}>
                        <h1 className="titlePass">Change Password</h1>
                        <label htmlFor="emailId" className="labelPass">EmailId</label>
                        <input
                            className="inputPass"
                            type="text"
                            id ="emailId"
                            name ="emailId"
                            value ={employee.emailId}
                            readOnly
                        >
                        </input>


                        <label htmlFor="contactNo" className="labelPass">ContactNo</label>
                        <input
                            className="inputPass"
                            type="text"
                            id="contactNo"
                            name ="contactNo"
                            value={employee.contactNo}
                            readOnly
                        >
                        </input>

                        <label htmlFor="password" className="labelPass">Password</label>
                        <input
                            className="inputPass"
                            type="password"
                            id="password"
                            name="password"
                            value={employee.password}
                            onChange = {handleInputChange}

                        >
                        </input>
                        <button className="btnPass" >Change Password</button>
                    </form>
                </body>
            </div>
        </React.Fragment>
    )
}

export default ChangeEmployeePassword;