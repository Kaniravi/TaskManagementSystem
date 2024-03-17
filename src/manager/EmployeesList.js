import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const EmployeesList = () =>{
   
    const {managerName} = useParams();
    const navigate = useNavigate();
    const [employees,setEmployees] = useState([]);

    useEffect(()=>{
    const fetchEmployees = async() =>{
        try{
            const response = await axios.get(`http://localhost:8080/manager/getEmployees`);
            console.log("Fetched employees successfully: ", response.data);
            setEmployees(response.data);
            
        }
        catch(error){
            console.log("Error fetching employees: ",error);
        }
    }
    fetchEmployees();
},[]);

    const handleAddClick = () =>{
        navigate(`/registerEmployee`);
    }

    const handleEmployeeRemove = async(e,employeeId) =>{
        e.preventDefault();
        try{
            await axios.delete(`http://localhost:8080/manager/deleteEmployee/${employeeId}`);
            console.log("Employee Removed Successfully");
            navigate(`/managerPage/${managerName}`);
        }
        catch(error){
            console.log("Error deleting employee: ",error);
        }
    }

    return(
        <div>
        <h1 className="title">All Employees</h1>
        <button className ="btn" onClick = {handleAddClick}>Add Employee</button>
    

        <table className="table">
            <thead className="tableHeading">
            <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>EmailId</th>
                <th>PhoneNo</th>
                <th>Address</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody className="tableBody">
                {employees.map((employee,index)=>(
                    <tr key={employee.emailId} className="tableRow">
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.emailId}</td>
                        <td>{employee.contactNo}</td>
                        <td>{employee.street}, {employee.city} - {employee.pincode}</td>
                        <td><button className="btn" onClick ={(e) => {handleEmployeeRemove(e,employee.id)}} >Remove</button></td>
                    </tr>
                    
                ))}

               
            </tbody>
        </table>
        </div>
    )

}

export default EmployeesList;