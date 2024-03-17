import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
    
    role: "",
    emailId: "",
    password: ""
  };
const Login = () =>{
    const navigate = useNavigate();
    const[role,setRole] = useState('');
    const[user,setUser]= useState(initialState);

    const handleInputChange = (e) =>{
        const{name,value} = e.target;
        setUser({...user,[name]:value});

    }
   const handleRoleChange = (e) =>{
    setRole(e.target.value);
   }
   const handleHome = () =>{
    navigate(`/`);
   }
    const handleSubmit = async(e)=>{
        e.preventDefault();
       
        try{
            let response;
            if(role === "Admin" || role ==="admin"){

                 response = await axios.get(`http://localhost:8080/admin/login/${user.emailId}`);
                 const storedPlaintextPassword = response.data.password;
                 if (user.password === storedPlaintextPassword) {
                     console.log(user);
                     console.log("User found successfully", response.data);
                     const adminName = response.data.firstName;
                     navigate(`/adminPage/${adminName}`);
            
                 } else {
                 console.log("Invalid password");
                 alert("Invalid Password");
                 }

            }
        else if(role === "Manager"){
                 response = await axios.get(`http://localhost:8080/manager/login/${user.emailId}`);
                const storedPlaintextPassword = response.data.password;
                if(user.password ===  storedPlaintextPassword){
                    console.log("Manager found succesfully",response.data);
                    const managerName = response.data.firstName;
                    console.log(managerName);
                    navigate(`/managerPage/${managerName}`);
                }
                else{
                    console.log("Invalid Password");
                    alert("Invalid password");
                    
                }
               
            }

            else if (role ==="Employee" || role ==="employee"){
                 response = await axios.get(`http://localhost:8080/employee/getEmployee/${user.emailId}`);
                const storedPlaintextPassword = response.data.password;
                if(user.password === storedPlaintextPassword){
                    console.log("Employee fetched successfully: ",response.data);
                    const employeeName = response.data.firstName;
                    navigate(`/employeePage/${employeeName}`);
                }
                else{
                    console.log("Invalid Password");
                    alert("Invalid password");
                }
            }  
      }
      
        catch(error){
            console.log("Error login: ",error);
        }
}

    return(
        <React.Fragment>
            <div className="form1">
                <body>
                <h1 className="title1">Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="role" className="label1">Role</label>
                    <select 
                        value={user.role} 
                        id="role" 
                        name="role"
                        onChange={e => {
                            handleInputChange(e);
                            handleRoleChange(e);
                        }}
                        className="input1"
                    >
                        <option  value="" disabled >Role</option>
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="Employee">Employee</option>
                    </select>

                    <label htmlFor="emailId" className="label1">EmailId</label>
                    <input 
                        className="input2"
                        id ="emailId"
                        name="emailId"
                        value={user.emailId}
                        
                        onChange = {handleInputChange}
                    ></input>


                    <label htmlFor="password" className="label1">Password</label>
                    <input
                        className="input3"
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                    >
                    </input>

                    <button className="btn1">Login</button>
                    <button className="btn1" onClick= {handleHome}>Home</button>

                </form>
                </body>
            </div>
        </React.Fragment>
    )

}

export default Login;