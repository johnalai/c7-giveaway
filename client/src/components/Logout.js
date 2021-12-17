import React,{useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const LogOut = () =>{
    const {setCurrentUser} = useContext(UserContext);
    const navigate=useNavigate();

    async function loggingOut (){
await fetch("auth/logout")
await navigate("/");
    }
    loggingOut()
    useEffect(()=>{
        setCurrentUser({})
    },[])

return<></>
}
export default LogOut;