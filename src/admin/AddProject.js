import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  description: "",
  requirement: "",
  deadline: ""
};

const AddProject = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/admin/addProject",project);
      console.log("Project added successfully", response.data);
      setProject(initialState);
      navigate(`/adminPage`);
    } catch (error) {
      console.log("Error adding project: ", error);
    }
  };

  const handleClick = (e) =>{
    e.preventDefault();
    navigate(`/adminPage`);
  }

  return (
    <React.Fragment>
      <div className="formPro">
        <body>
          <form onSubmit={handleSubmit}>
            <h1 className="title">Add Project</h1>

            <label htmlFor="name" className="labelPro">
              ProjectName
            </label>
            <input
              className="inputPro"
              type="text"
              id="name"
              name="name"
              value={project.name}
              onChange={handleInputChange}
            />

            <label htmlFor="description" className="labelPro">
              ProjectDescription
            </label>
            <textarea
              className="inputNarrowPro"
              id="description"
              name="description"
              value={project.description}
              onChange={handleInputChange}
            ></textarea>

            <label htmlFor="requirement" className="labelPro">
              ProjectRequirement
            </label>
            <textarea
              className="inputNarrowPro"
              id="requirement"
              name="requirement"
              value={project.requirement}
              onChange={handleInputChange}
            ></textarea>

            <label htmlFor="deadline" className="labelPro">
              ProjectDeadline
            </label>
            <input
              className="inputPro"
              type="date"
              id="deadline"
              name="deadline"
              value={project.deadline}
              onChange={handleInputChange}
            />

            <button className="btnPro">Add Project</button>
            <button className="btnPro" onClick={handleClick}>AdminPage</button>
          </form>
        </body>
      </div>
    </React.Fragment>
  );
};

export default AddProject;
