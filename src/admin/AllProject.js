import React from "react";
import { useState ,useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AllProject = ()=>{
    const{adminName} = useParams();
    const navigate = useNavigate();
    const[projects,setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{
        const fetchProjects = async()=>{
            try{
                const response  = await axios.get(`http://localhost:8080/admin/getProjects`);
                setProjects(response.data);

            }
            catch(error){
                console.log("Error fetching projects",error);
            }
        }
        fetchProjects();
    },[adminName])
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
      };
    
     const displayProjects = searchTerm ? projects.filter((project)=> project.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) : projects;

     const handleAssignManager = (projectId) =>{
        navigate(`/assignProjectToManager/${(projectId)}`);
     }

    
    return(
        <div>
             <h1 className="title">All Projects</h1>
             <input
                className="inputSearch"
                type="text"
                placeholder="Search by project name"
                value={searchTerm}
                onChange={handleSearch}
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
                             <td><button className="btnPro" onClick ={() => handleAssignManager(project.id)}>AssignToManager</button></td>
                             
                         </tr>
                         
                     ))}

                    
                 </tbody>
             </table>




            
             </div>
    );

}

export default AllProject;