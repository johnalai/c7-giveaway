import { Link, useParams} from "react-router-dom";
import react,{useState, useContext} from 'react'

import UserDetail from "../components/UserDetail";
import { UserContext } from '../components/UserContext'

const UserDetailPage = ({user, onSave}) => {
  const {currentUser,setCurrentUser}=useContext(UserContext)
  console.log(currentUser)

  let params = useParams();
  


 
    return (
      <div>
        <UserDetail userId={params.id} />
        {/* shows edit button if userid=user id, user id needs to be implemented */}
        {(currentUser.id===params.id||currentUser.user==="admin")&&
          <Link to="edit"> EDIT </Link>}

      </div>
    );
    }
export default UserDetailPage;
