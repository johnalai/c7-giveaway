import { useEffect, useState } from 'react'

import './App.css';

const ProviderRow = ({providerName, address, city}) => (
  <tr>
    <td>{providerName}</td>
    <td>{address}</td>
    <td>{city}</td>
  </tr>
)


function App() {

  const [providers,setProviders] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      console.log('Fetching provider data!')
      let fetchResult = await fetch("/api/giveaway")
      let providerList = await fetchResult.json()
      setProviders(providerList)  
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>Providers' List</h1>
      <table style={ { margin: "auto" } }>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Address</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            providers.map((provider, index) => (
              <ProviderRow key={index} providerName={provider.providerName} address={provider.address} city={provider.city} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
