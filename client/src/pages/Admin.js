import React from "react";
import { useNavigate } from "react-router-dom"
import AdminList from "../components/AdminList"





function Admin(){

    const navigate = useNavigate()

    function setSelectedProviderId(id) {
        
        navigate('/provider/'+id)
    }

    return (
        <AdminList setSelectedProviderId={setSelectedProviderId} />
     
        
    )

    

}

export default Admin