import { Link, useParams } from "react-router-dom";

import ProviderDetail from '../components/ProviderDetail'

const ProviderDetailPage = () => {
  let params = useParams()
  return (
     <div>
       <ProviderDetail providerId={params.id}/>
       <Link className="btn btn-primary" to="edit"> Edit </Link>
     </div>
   ) 
}

export default ProviderDetailPage