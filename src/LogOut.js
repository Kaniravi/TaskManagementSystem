import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LogOut=() =>{
    const navigate  = useNavigate();

    useEffect(()=>{
        navigate(`/`);
    },[navigate])
    
}
export default LogOut;