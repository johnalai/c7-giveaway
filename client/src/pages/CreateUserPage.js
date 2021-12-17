import { useNavigate,useParams } from 'react-router-dom'

import ProviderEditForm from "../components/editComponents/ProviderEditForm"
import VolunteerEditForm from '../components/editComponents/VolunteerEditForm'

const CreateUserPage = () => {

    let navigate = useNavigate()

    async function createUser(newUser) {
      console.log('create user')
        // await fetch('/api/giveAway', {
        //   method: "POST",
        //   headers: {
        //       'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(newUser)
        // })
        await fetch('/auth/register', {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
        navigate('/login')
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

