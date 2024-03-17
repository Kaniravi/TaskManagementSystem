import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ChangeAdminPassword = () => {
  const navigate = useNavigate();
  const { adminName } = useParams();
  console.log(adminName);
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/admin/getAdmin/${adminName}`);
        console.log("Fetched admin successfully: ", response.data);
        setAdmin(response.data);
      } catch (error) {
        console.log("Error fetching admin: ", error);
      }
    };
    fetchAdminDetails();
  }, [adminName]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/admin/updatePassword/${admin.id}`, admin);
      console.log("Updated Password Successfully", response.data);
      navigate(`/adminPage/${adminName}`);
    } catch (error) {
      console.log("Error updating password: ", error);
    }
  };

  return (
    <React.Fragment>
      <div className="formPassword">
        <body>
          <form onSubmit={handleSubmit}>
            <h1 className="titlePass">Change Password</h1>
            <label htmlFor="emailId" className="labelPass">
              EmailId
            </label>
            <input
              className="inputPass"
              type="text"
              id="emailId"
              name="emailId"
              value={admin.emailId || ""}
              readOnly
            ></input>

            <label htmlFor="contactNo" className="labelPass">
              ContactNo
            </label>
            <input
              className="inputPass"
              type="text"
              id="contactNo"
              name="contactNo"
              value={admin.contactNo || ""}
              readOnly
            ></input>

            <label htmlFor="password" className="labelPass">
              Password
            </label>
            <input
              className="inputPass"
              type="password"
              id="password"
              name="password"
              value={admin.password || ""}
              onChange={handleInputChange}
            ></input>
            <button className="btnPass">Change Password</button>
          </form>
        </body>
      </div>
    </React.Fragment>
  );
};

export default ChangeAdminPassword;
