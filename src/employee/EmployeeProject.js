import React from "react";
import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const EmployeeProject = () =>{
    const navigate = useNavigate();
    const{employeeName} = useParams();
    const[projects,setProjects] = useState([]);

    useEffect(()=>{
        const fetchProjectDetails = async() =>{
            try{
                const response = await axios.get(`http://localhost:8080/employee/getProject/${employeeName}`);
                console.log("Fetched successfully: ", response.data);
                setProjects([response.data]);
            }
            catch(error){
                console.log("Error fetching project details :", error);
            }
        }
        fetchProjectDetails();
    },[employeeName])
    
    const handleProjectStatus = (e) =>{
        e.preventDefault();
        navigate(`/updateProjectStatus/${employeeName}`);
        
        
    }
    return(
        <table className="table">
                 <thead className="tableHeading">
                 <tr>
                    <th>ProjectId</th>
                     <th>Project Name</th>
                     <th>Project Description</th>
                     <th>Project Requirement</th>
                     <th>Manager Assign Status</th>
                     <th>Manager Name</th>
                     <th>Employee Assign Status</th>
                     <th>Employee Name</th>
                     <th>Porject Created Date</th>
                     <th>Project Assign Date</th>
                     <th>Project Deadline</th>
                     <th>Project Status</th>
                     <th>Action</th>
                 </tr>
                 </thead>
                 <tbody className="tableBody">
                     {projects.map((project,index)=>(
                         <tr key={project.id} className="tableRow">
                            <td>{project.id}</td>
                            <td>{project.name}</td>
                             <td>{project.description}</td>
                             <td>{project.requirement}</td>
                             <td>{project.managerAssignStatus}</td>
                             <td>{project.managerName}</td>
                             <td>{project.employeeAssignStatus}</td>
                             <td>{project.employeeName}</td>
                             <td>{project.projectCreatedDate}</td>
                             <td>{project.projectAssignDate}</td>
                             <td>{project.deadline}</td>
                             <td>{project.projectStatus}</td>
                             <td><button className="btnPro" onClick={handleProjectStatus}>Update Project Status</button></td>
                             
                         </tr>
                         
                     ))}

                    
                 </tbody>
             </table>
    )

}
export default EmployeeProject;