import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import EmployeeProject from "./EmployeeProject";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EmployeePage = () =>{
    const navigate = useNavigate();
    const[showEmployeeProject,setShowEmployeeProject] = useState(false);
    const{employeeName} = useParams();
    const handleLogOut  =(e) =>{
        e.preventDefault();
        navigate(`/logOut`);
    }
    return(
        <React.Fragment>
            <div className="navbar">
            <Link to="/" className="links">Task Management System</Link>
           
            <a href="#about" className="links">About Us</a>
           
            <a href="#contact" className="links">Contact Us</a>
            <div className="navbarTwo">
            <Link to ={`/myEmployeeProjects/${employeeName}`} className ="links"  onClick ={() =>{setShowEmployeeProject(true)}}>My Projects</Link>
            <Link to ={`/changeEmployeePassword/${employeeName}`} className="links" >Change Password</Link>
            <Link to= "/logOut" className="links" onClick={handleLogOut}>Logout</Link>
            </div>
        </div>
        {showEmployeeProject && <EmployeeProject employeeName={employeeName} />}
        </React.Fragment>
    )
}
export default EmployeePage;