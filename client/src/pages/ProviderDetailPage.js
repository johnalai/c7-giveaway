import { Link, useParams} from "react-router-dom";
import react,{useState} from 'react'

import ProviderDetail from "../components/providerComponents/ProviderDetail";

const ProviderDetailPage = ({user}) => {
  let params = useParams();
  


 
    return (
      <div>
        <ProviderDetail providerId={params.id} />
        {/* shows edit button if userid=provider id, provider id needs to be implemented */}
        {(user==="admin"||params.id)&&
          <Link to="edit"> EDIT </Link>}

      </div>
    );
    }
export default ProviderDetailPage;
