import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

import EditForm from '../components/editComponents/EditForm';

const UserEditPage = () => {
    let params = useParams()
    let navigate = useNavigate()
    let userId = params.id
    

    const [userJson, setUserJson] = useState("")
    
    useEffect(() => {
      const fetchUser = async () => {
        let fetchResult = await fetch('/api/giveAway/'+userId)
        let fetchedUser = await fetchResult.json()
        
        setUserJson(fetchedUser)
      }
      
      fetchUser()
    },[userId])
    

    async function updateUser(updatedUser) {
        console.log('Posting to user id', userId, 'with data', updatedUser)
        await fetch('/api/giveAway/'+userId, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedUser)
        })
        navigate(-1)
    }
  console.log("userJson",userJson)
    return (
        <div>
            <EditForm existingValues={userJson} onSave={updateUser} />
        </div>
    )
}

export default UserEditPage