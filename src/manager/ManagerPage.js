import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
import ManagerProject from "./ManagerProject";
import { useParams } from "react-router-dom";
import EmployeesList from "./EmployeesList";



const ManagerPage = () =>{
    
    const {managerName} = useParams();
    const[showManagerProject,setShowManagerProject] = useState(false);
    const[showEmployeeTable, setShowEmployeeTable] = useState(false);

    
     
    console.log("Manager name:" ,managerName);

    
   return(
    <React.Fragment>
         <div className="navbar">
            <Link to="/" className="links">Task Management System</Link>
           
            <a href="#about" className="links">About Us</a>
           
            <a href="#contact" className="links">Contact Us</a>
            <div className="navbarTwo">
            <Link to ={`/myProjects/${managerName}`} className ="links"  onClick = {() =>{setShowManagerProject(true); setShowEmployeeTable(false)}}>My Projects</Link>
            <Link to={`/registerEmployee/${managerName}`} className ="links">Register Employee</Link>
            <Link to ={`/viewAllEmployeesInManager/${managerName}`} className="links" onClick = {()=>{setShowEmployeeTable(true); setShowManagerProject(false)}} >View All Employees</Link>
            <Link to ={`/changePassword/${managerName}`} className="links">Change Password</Link>
            <Link to="/logOut" className="links">Logout</Link>
            </div>
        </div>

        {showManagerProject && <ManagerProject managerName={managerName}/>}


        {showEmployeeTable && <EmployeesList managerName ={managerName}/>}

       

        
    </React.Fragment>
   )

}

export default ManagerPage;