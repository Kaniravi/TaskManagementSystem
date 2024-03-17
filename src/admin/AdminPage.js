import React from "react";

import { useNavigate } from "react-router-dom";
import ManagerRegister from "./ManagerRegister";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AllProject from "./AllProject";
import { useParams } from "react-router-dom";



const AdminPage = () =>{
    const navigate = useNavigate();
    const{adminName} = useParams();
    console.log(adminName);
    const[showManagerTable, setShowManagerTable] = useState(false);
    const[showEmployeeTable,setShowEmployeeTable] = useState(false);
    const[showProjectTable, setShowProjectTable] = useState(false);
    const[managers,setManagers] = useState([]);
    const[employees,setEmployees]  = useState([]);

    const handleClick = (e)=>{
        e.preventDefault();
        navigate(`/managerRegister`);
    }

    const handleProjectClick = (e) =>{
        e.preventDefault();
        navigate(`/addProject`);
    }

    const hanldeRemoveClick = async(e,emailId)=>{
        e.preventDefault();
        try{
            await axios.delete(`http://localhost:8080/admin/deleteManager/${emailId}`);
            console.log("Removed manager successfully");

            

        }
        catch(error){
            console.log("Error removing manager:",error);
        }
    }

    const hanldeEmployeeRemove = async(e,emailId)=>{
        e.preventDefault();
        try{
                await axios.delete(`http://localhost:8080/employee/deleteEmployee/${emailId}`);
                console.log("Removed Employee successfully");
        }
        catch(error){
            console.log("Error removing employee: ",error);
        }
    }
    useEffect(()=>{
        const fetchManagers = async() =>{
            try{
                const response = await axios.get(`http://localhost:8080/manager/getManagers`);
                const data= response.data;
                setManagers(data);
                
            }
            catch(error){
                console.log("Error fetching managers: ",error);
            }

        }
        fetchManagers();
    },[]);

    useEffect(()=>{
        const fetchEmployees  = async()=>{
            try{
                const response = await axios.get(`http://localhost:8080/employee/getEmployees`);
                const data = response.data;
                setEmployees(data);
            }
            catch(error){
                console.log("Error fetching employees: ",error);
            }
        }
        fetchEmployees();
    },[]);

    return(
        <React.Fragment>
         <div className="navbar">
            <Link to="/" className="links">Task Management System</Link>
           
            <a href="#about" className="links">About</a>
           
            <a href="#contact" className="links">Contact</a>
            <div className="navbarThree">
       
            <Link to ="/managerRegister" className ="links" onClick={(()=><ManagerRegister/>)}>RegisterManager</Link>
            <Link to ="/addProject" className ="links" onClick={handleProjectClick}>AddProject</Link>
            <Link to ={`/allProjects/${adminName}`} className ="links" onClick={()=>{setShowEmployeeTable(false); setShowManagerTable(false); setShowProjectTable(true)}}>AllProjects</Link>
            <Link to ={`/viewManager/${adminName}`} className ="links" onClick ={()=>{setShowManagerTable(true); setShowEmployeeTable(false);setShowProjectTable(false)}}>ViewManager</Link>
            <Link to ={`/viewAllEmployeesInAdmin/${adminName}`} className ="links" onClick={()=>{setShowEmployeeTable(true); setShowManagerTable(false);setShowProjectTable(false)}}>ViewAllEmployees</Link>
            <Link to={`/changeAdminPassword/${adminName}`} className="links">ChangePassword</Link>
            <Link to="/logOut" className="links">Logout</Link>
            </div>
        </div>
        {showEmployeeTable && (
        <div>
          <h1 className="title">All Employees</h1>
         
          <table className="table">
            <thead className="tableHeading">
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>EmailId</th>
                <th>PhoneNo</th>
                <th>Address</th>
                <th>Actions</th>
                
              </tr>
            </thead>
            <tbody className="tableBody">
              {employees.map((employee) => (
                <tr key={employee.emailId} className="tableRow">
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>{employee.contactNo}</td>
                  <td>{employee.street}, {employee.city} - {employee.pincode}</td>
                  <td><button className="btn" onClick ={(e) =>hanldeEmployeeRemove(e,employee.emailId)}>Remove</button></td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}





        {showManagerTable &&(
            <div>
             <h1 className="title">All Managers</h1>
             <button className ="btn" onClick = {handleClick}>Add Manager</button>
         
 
             <table className="table">
                 <thead className="tableHeading">
                 <tr>
                     <th>FirstName</th>
                     <th>LastName</th>
                     <th>EmailId</th>
                     <th>PhoneNo</th>
                     <th>Address</th>
                     <th>Actions</th>
                 </tr>
                 </thead>
                 <tbody className="tableBody">
                     {managers.map((manager,index)=>(
                         <tr key={manager.emailId} className="tableRow">
                             <td>{manager.firstName}</td>
                             <td>{manager.lastName}</td>
                             <td>{manager.emailId}</td>
                             <td>{manager.contactNo}</td>
                             <td>{manager.street}, {manager.city} - {manager.pincode}</td>
                             <td><button className="btn" onClick={(e)=>hanldeRemoveClick(e,manager.emailId)}>Remove</button></td>
                         </tr>
                         
                     ))}

                    
                 </tbody>
             </table>
             </div>



        )}


        {showProjectTable &&
            (<AllProject adminName ={adminName}/>)
        }


        
        </React.Fragment>
    )
}

export default AdminPage;