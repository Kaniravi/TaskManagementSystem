import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AssignToEmployee = () =>{
    const navigate = useNavigate();
    const {managerName} = useParams();
    const[project,setProject] = useState([]);


    useEffect(()=>{
        const fetchProjectDetails = async() =>{
            try{
                const response = await axios.get(`http://localhost:8080/manager/getProject/${managerName}`);
                console.log("Fetched project successfully: ", response.data);
                setProject(response.data);
                
            }
            catch(error){
                console.log("Error fetching project: ",error);
            }

        }
        fetchProjectDetails();
    },[managerName]);

    const handleClick = (e) =>{
        navigate(`/managerPage/${managerName}`);
    }

    const handleInputChange = (e) =>{
        setProject({...project,[e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response =await axios.post(`http://localhost:8080/manager/updateProject/${project.id}`,project);
            console.log("Project updated Successfully", response.data);
        }
        catch(error){
            console.log("Error updating project", error);
        }
        setProject([]);
    }

    
    return(
        <React.Fragment>
            <div className="formManager">
                <body>
                    <form onSubmit ={handleSubmit} >
                        <h1 className="title">Assign Project To Employee</h1>

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

                        <label htmlFor="assignProjectToEmployee" className="labelMan">
                            Assign Project To Employee
                        </label>
                        <input
                            className="inputMan"
                            type="text"
                            id="employeeName"
                            name="employeeName"
                            
                            onChange={handleInputChange}
                        />

                        <button className="btnPro" >
                            Add Project 
                        </button>
                        <button className="btnPro" onClick={handleClick}>
                            Back to Manager Page
                        </button>
                    </form>
                </body>
            </div>
        </React.Fragment>
    )
}

export default AssignToEmployee;