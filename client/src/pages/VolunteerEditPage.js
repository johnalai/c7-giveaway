import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

import VolunteerEditForm from '../components/VolunteerEditForm';

const VolunteerEditPage = () => {
    let params = useParams()
    let navigate = useNavigate()
    let volunteerId = params.id

    const [volunteer, setVolunteer] = useState()
    
    useEffect(() => {
      const fetchVolunteer = async () => {
        let fetchResult = await fetch('/api/volunteer/'+volunteerId)
        let fetchedVolunteer = await fetchResult.json()
        setVolunteer(fetchedVolunteer)
      }
      fetchVolunteer()
    }, [volunteerId])

    async function updateVolunteer(updatedVolunteer) {
        console.log('Posting to volunteer id', volunteerId, 'with data', updatedVolunteer)
        await fetch('/api/giveAway/'+volunteerId, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedVolunteer)
        })
        navigate(-1)
    }
  
    return (
        <div>
            <VolunteerEditForm existingValues={volunteer} onSave={updateVolunteer} />
        </div>
    )
}

export default VolunteerEditPage