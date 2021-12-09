import { useEffect, useState } from 'react'

import './Detail.css'

const UserDetail = ({userId}) => {

    const [user, setUser] = useState()
    // console.log (providerId)
    useEffect(() => {
      const fetchUser = async () => {
        let fetchResult = await fetch('/api/giveAway/'+userId)
        let fetchedUser = await fetchResult.json()
        setUser(fetchedUser)
      }
      fetchUser()
    }, [userId])
    console.log(user)
  
    return (
      <div>
        <h2>Details</h2>
        <div className="detail-fields">
          <div className="field-title">Name</div>
          <div className="field-value">{user?.userName}</div>
          <div className="field-title">Address</div>
          <div className="field-value">{user?.address}</div>
          <div className="field-title">City</div>
          <div className="field-value">{user?.city}</div>
          <div className="field-title">Pick Up Spot</div>
          <div className="field-value">{user?.pickUpSpot}</div>
          <div className="field-title">Products</div>
          <ul className="field-value">
            {
              user?.products.map((product, index) => (
                <li key={index}>{product}</li>
              ))
            }
          </ul>
          <div className="field-title">Contact</div>
          <div className="field-value">{user?.contact}</div>
        </div>
      </div>
    )
  }

  export default UserDetail
  
        