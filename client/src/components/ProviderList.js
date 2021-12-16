import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const ProviderRow = ({
  providerName, 
  address, 
  city, 
  onProviderSelected,
  deleteProvider,
 }) => (
  <tr onClick={() => onProviderSelected()}>
    <td>{providerName}</td>
    <td>{address}</td>
    <td>{city}</td>
    <td>
      <button className="btn-sm btn-danger" onClick={() => deleteProvider()}>Delete</button>
    </td>
  </tr>
)

const ProviderList = ({setSelectedProviderId}) => {
  const [Providers, setProviders] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchData() {
      console.log('Fetching Provider data!')
      let fetchResult = await fetch("/api/giveAway")
      let ProviderList = await fetchResult.json()
      setProviders(ProviderList)
    }
    fetchData()
  }, [])

  function selectProvider(id) {
    console.log('selectProvider called on id', id )
    setSelectedProviderId(id)
  }

  async function deleteProvider(id) {
    await fetch('/api/giveAway/' + id, {
        method: 'DELETE',
    })
    navigate('/')
}

  return (
    <div>
      <h2>Provider List</h2>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Provider Name</th>
            <th>Adress</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            Providers.map((provider, index) => {
              return <ProviderRow 
                key={index} 
                onProviderSelected={() => selectProvider(provider._id)} 
                providerName={provider.providerName} 
                address={provider.address} 
                city={provider.city} 
                deleteProvider={() =>
                  deleteProvider(provider._id)
                }
              />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProviderList
