import React from "react";
import { useParams } from "react-router-dom";
import { useState , useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateProjectStatus  = () =>{
    const navigate = useNavigate();
    const {employeeName} = useParams();
    const[project,setProject] = useState([]);


    useEffect(()=>{
        const fetchProjectDetails = async() =>{
            try{
                const response = await axios.get(`http://localhost:8080/employee/getProject/${employeeName}`);
                console.log("Project fetched successfully: ", response.data);
                setProject(response.data);
            }
            catch(error){
                console.log("Error fetching project: ",error);
            }
        }
        fetchProjectDetails();
    },[employeeName]);

    const handleInputChange = (e) =>{
        setProject({...project,[e.target.name]:e.target.value});
    }

    const handleClick = (e) =>{
        e.preventDefault();
        navigate(`/employeePage/${employeeName}`);
        
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:8080/employee/updateProjectStatus/${project.id}`, project);
            console.log("Updated successfully", response.data);
            alert("Updated successfully");
            navigate(`/employeePage/${employeeName}`);
        }
        catch(error){
            console.log("Error updating status: ", error);
        }
    }
    return(
        <React.Fragment>
             <div className="formManager">
                <body>
                    <form onSubmit ={handleSubmit}>
                        <h1 className="title">Update Project Status</h1>

                        <label htmlFor="name" className="labelMan">
                            Project Name
                        </label>
                        <input
                            className="inputMan"
                            type="text"
                            id="name"
                            name="name"
                            value={project.name}
                            readOnly
                        />

                        <label htmlFor="description" className="labelMan">
                            Project Description
                        </label>
                        <textarea
                            className="inputNarrowMan"
                            id="description"
                            name="description"
                            value={project.description || ""}
                            readOnly
                        ></textarea>

                        <label htmlFor="requirement" className="labelMan">
                            Project Requirement
                        </label>
                        <textarea
                            className="inputNarrowMan"
                            id="requirement"
                            name="requirement"
                            value={project.requirement || ""}
                            readOnly
                        ></textarea>

                        <label htmlFor="projectCreatedDate" className="labelMan">
                            Project Created Date
                        </label>
                        <input
                            className="inputMan"
                            type="date"
                            id="projectCreatedDate"
                            name="projectCreatedDate"
                            value={project.projectCreatedDate || ""}
                            readOnly
                        />

                        <label htmlFor="deadline" className="labelMan">
                            Project Deadline Date
                        </label>
                        <input
                            className="inputMan"
                            type="date"
                            id="deadline"
                            name="deadline"
                            value={project.deadline || ""}
                            readOnly
                        />

                        <label htmlFor="projectStatus" className="labelMan">
                            Status
                        </label>
                        <input
                            className="inputMan"
                            type="text"
                            id="projectStatus"
                            name="projectStatus"
                            
                            onChange={handleInputChange}
                        />

                        <button className="btnPro" >
                            Add Project 
                        </button>
                        <button className="btnPro" onClick={handleClick}>
                            Back to Employee Page
                        </button>
                    </form>
                </body>
            </div>
        </React.Fragment>
    )
}

export default UpdateProjectStatus;