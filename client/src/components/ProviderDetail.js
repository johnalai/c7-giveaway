import { useEffect, useState } from 'react'

// simport './ProviderDetail.css'

const ProviderDetail = ({providerId}) => {

    const [provider, setProvider] = useState()
    // console.log (providerId)
    useEffect(() => {
      const fetchProvider = async () => {
        let fetchResult = await fetch('/api/giveAway/'+providerId)
        let fetchedProvider = await fetchResult.json()
        setProvider(fetchedProvider)
      }
      fetchProvider()
    }, [providerId])
  
    return (
      <div>
        <h2>Provider Details</h2>
        <div className="detail-fields">
          <div className="field-title">Name</div>
          <div className="field-value">{provider?.providerName}</div>
          <div className="field-title">Address</div>
          <div className="field-value">{provider?.address}</div>
          <div className="field-title">City</div>
          <div className="field-value">{provider?.city}</div>
          <div className="field-title">Pick Up Spot</div>
          <div className="field-value">{provider?.pickUpSpot}</div>
          <div className="field-title">Products</div>
          <ul className="field-value">
            {
              provider?.products.map((product, index) => (
                <li key={index}>{product}</li>
              ))
            }
          </ul>
          <div className="field-title">Contact</div>
          <div className="field-value">{provider?.contact}</div>
        </div>
      </div>
    )
  }

  export default ProviderDetail
  
        