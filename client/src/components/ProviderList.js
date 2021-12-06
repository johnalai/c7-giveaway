import { useEffect, useState } from 'react'

const ProviderRow = ({providerName, address, city, onProviderSelected }) => (
  <tr onClick={() => onProviderSelected()}>
    <td>{providerName}</td>
    <td>{address}</td>
    <td>{city}</td>
  </tr>
)

const ProviderList = ({setSelectedProviderId}) => {
  const [Providers, setProviders] = useState([])
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
              />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ProviderList
