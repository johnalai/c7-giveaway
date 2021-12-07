
import { useNavigate } from "react-router-dom"
import ProviderList from "../components/providerComponents/ProviderList"

const ProviderListPage = () => {

    const navigate = useNavigate()

    function setSelectedProviderId(id) {
        
        navigate('/provider/'+id)
    }

    return (
        <ProviderList setSelectedProviderId={setSelectedProviderId} />
    )
}

export default ProviderListPage