import { Link, useParams} from "react-router-dom";
import react,{useState} from 'react'

import UserDetail from "../components/UserDetail";

const UserDetailPage = ({user}) => {
  let params = useParams();
  


 
    return (
      <div>
        <UserDetail userId={params.id} />
        {/* shows edit button if userid=user id, user id needs to be implemented */}
        {(user==="admin")&&
          <Link to="edit"> EDIT </Link>}

      </div>
    );
    }
export default UserDetailPage;
