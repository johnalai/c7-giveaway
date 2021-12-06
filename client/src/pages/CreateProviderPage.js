import { useNavigate } from 'react-router-dom'

import ProviderEditForm from "../components/ProviderEditForm"

const CreateProviderPage = () => {

    let navigate = useNavigate()

    async function createProvider(newProvider) {
        await fetch('/api/giveAway', {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newProvider)
        })
        navigate('/')
      }

   return (
     <ProviderEditForm onSave={createProvider}/>
   ) 
}

export default CreateProviderPage