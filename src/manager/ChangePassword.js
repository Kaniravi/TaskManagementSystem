import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChangePassword = () =>{
    const{managerName} = useParams();
    const navigate  = useNavigate();
    
    const[manager,setManager] = useState([]);
    
    const handleInputChange = (e) =>{
        setManager({...manager,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        const fetchManager = async() =>{
            try{
                const response = await axios.get(`http://localhost:8080/manager/getManager/${managerName}`);
                console.log("Fetched manager Successfully", response.data);
                setManager(response.data);
            }
            catch(error){
                console.log("Error fetching manager: ", error);
            }
        }  
        fetchManager(); 
    },[managerName]);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:8080/manager/updatePassword/${manager.id}`,manager);
            console.log("Password updated successfully", response.data);
            alert("Password updated successfully");
            setManager('');
            navigate(`/managerPage/${managerName}`);
            

        }
        catch(error){
            console.log("Error updating password", error);
        }
    }
    
    return(
        <React.Fragment>
            <div className="formPassword">
                <body>

                    <form  onSubmit ={handleSubmit}>
                        <h1 className="titlePass">Change Password</h1>
                        <label htmlFor="emailId" className="labelPass">EmailId</label>
                        <input
                            className="inputPass"
                            type="text"
                            id ="emailId"
                            name ="emailId"
                            value ={manager.emailId}
                            readOnly
                        >
                        </input>


                        <label htmlFor="contactNo" className="labelPass">ContactNo</label>
                        <input
                            className="inputPass"
                            type="text"
                            id="contactNo"
                            name ="contactNo"
                            value={manager.contactNo}
                            readOnly
                        >
                        </input>

                        <label htmlFor="password" className="labelPass">Password</label>
                        <input
                            className="inputPass"
                            type="password"
                            id="password"
                            name="password"
                            value={manager.password}
                            onChange = {handleInputChange}

                        >
                        </input>
                        <button className="btnPass" >Change Password</button>
                    </form>
                </body>
            </div>
        </React.Fragment>
    )
}
export default ChangePassword;