import React from "react";
import { useNavigate } from "react-router-dom"
import AdminList from "../components/AdminList"





function Admin(){

    const navigate = useNavigate()

    function setSelectedUserId(id) {
        
        navigate('/user/'+id)
    }

    return (
        <AdminList setSelectedUserId={setSelectedUserId} />
     
        
    )

    

}

export default Admin