import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AssignProjectToManager = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState([]);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
               
                const response = await axios.get(`http://localhost:8080/admin/getProjectById/${projectId}`);
                setProject(response.data);
                console.log(project);
                
            } catch (error) {
                console.log("Error fetching project", error);
            }
        }
        fetchProjectDetails();
    }, [projectId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject({ ...project, [name]: value });
    }

    const handleClick = () => {
        navigate(`/adminPage`);
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.put(`http://localhost:8080/admin/updateProject/${project.id}`,{managerName: project.managerName});
            console.log("Project updated successfully: ",response.data);
            setProject([]);
            navigate(`/adminPage`);

        }
        catch(error){
             console.log("Error updating project: ",error);
        }
    }

    

    return (
        <React.Fragment>
            <div className="formManager">
                <body>
                    <form onSubmit={handleSubmit}>
                        <h1 className="title">Assign Project To Manager</h1>

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

                        <label htmlFor="assignProjectToManager" className="labelMan">
                            Assign Project To Manager
                        </label>
                        <input
                            className="inputMan"
                            type="text"
                            id="managerName"
                            name="managerName"
                            
                            onChange={handleInputChange}
                        />

                        <button className="btnPro" >
                            Add Project 
                        </button>
                        <button className="btnPro" onClick={handleClick}>
                            Back to Admin Page
                        </button>
                    </form>
                </body>
            </div>
        </React.Fragment>
    );
}

export default AssignProjectToManager;
