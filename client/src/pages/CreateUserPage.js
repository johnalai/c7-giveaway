import { useNavigate,useParams } from 'react-router-dom'

import ProviderEditForm from "../components/editComponents/ProviderEditForm"
import VolunteerEditForm from '../components/editComponents/VolunteerEditForm'

const CreateUserPage = () => {

    let navigate = useNavigate()

    async function createUser(newProvider) {
      console.log('create user')
        await fetch('/api/giveAway', {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newProvider)
        })
        navigate('/')
      }

    let url = window.location.pathname;
    let params = useParams();
    let id = params.id;

   return (
<>
    {(url === "/register/provider")&&
     <ProviderEditForm onSave={createUser}/>}

    {(url === "/register/volunteer")&&
     <VolunteerEditForm onSave={createUser}/>}

</>
   );
}
export default CreateUserPage

