import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";

import ProviderEditForm from '../components/providerComponents/ProviderEditForm';

const ProviderEditPage = () => {
    let params = useParams()
    let navigate = useNavigate()
    let providerId = params.id

    const [provider, setProvider] = useState()
    
    useEffect(() => {
      const fetchProvider = async () => {
        let fetchResult = await fetch('/api/provider/'+providerId)
        let fetchedProvider = await fetchResult.json()
        setProvider(fetchedProvider)
      }
      fetchProvider()
    }, [providerId])

    async function updateProvider(updatedProvider) {
        console.log('Posting to provider id', providerId, 'with data', updatedProvider)
        await fetch('/api/giveAway/'+providerId, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedProvider)
        })
        navigate(-1)
    }
  
    return (
        <div>
            <ProviderEditForm existingValues={provider} onSave={updateProvider} />
        </div>
    )
}

export default ProviderEditPage