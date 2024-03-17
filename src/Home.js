import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
       <React.Fragment>
            <div className="homeForm">
               <body className="homeBody">
               <div className="navbar">
                    <a href="#" className="links">TaskManagementSystem</a>
                    <a href="#" className="links">About</a>
                    <a href="#" className="links">Contact</a>
               

                    <div className="login-register">
                        <Link  to ="/login"className="links">Login</Link>
                        <Link to ="/adminRegister" className="links">Register</Link>
                    </div>
                    <div className ="header">
                    <h1 className="titleHome">Effortlessly streamline your tasks with out <br></br>Intuitive Task management system</h1>
                    <img src="../../image/work.jpg" className="imageHome"></img>
                    
                    </div>
                    
                    </div>
              
               </body>
            </div>
       </React.Fragment>
          
    )
}
export default Home;