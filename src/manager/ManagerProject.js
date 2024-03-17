import React from "react";
import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManagerProject = () =>{
    const navigate = useNavigate();
    const{managerName} = useParams();
    const[projects,setProjects] = useState([]);
    const[searchTerm,setSearchTerm] = useState('');

    useEffect(() =>{
       const fetchProjectDetails = async() =>{
        try{
            const response = await axios.get(`http://localhost:8080/admin/getProject/${managerName}`);
            console.log(response.data);
            setProjects([response.data]);
        }
        catch(error){
            console.log("Error fetching project details:", error);
        }
       }
       fetchProjectDetails();
    },[managerName]);

    const handleAssignClick = (e) =>{
        e.preventDefault();
        navigate(`/assignToEmployee/${managerName}`);
    }

    const handleSearch = (e) =>{
        setSearchTerm(e.target.value);
    }

    const displayProjects = (searchTerm) ? (projects.filter((project)=>project.name.toLowerCase().includes (searchTerm.toLowerCase()))) : projects;

    return(
        <div>
             <h1 className="title">All Projects</h1>
             <input
                className="inputSearch"
                type="text"
                placeholder="Search by project name"
                value={searchTerm}
                onChange ={handleSearch}
                
            />
         

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
                     {displayProjects.map((project,index)=>(
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
                             <td><button className="btnPro" onClick ={handleAssignClick}>Assign To Employee</button></td>
                             
                         </tr>
                         
                     ))}

                    
                 </tbody>
             </table>




            
             </div>
    )
}
export default ManagerProject;