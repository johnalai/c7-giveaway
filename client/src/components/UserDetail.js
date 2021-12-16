import { useEffect, useState } from 'react'

import './Detail.css'

const UserDetail = ({userId, onSave}) => {
    const[message, setMessage] = useState()
    const [user, setUser] = useState()
    const[availible,setAvailible] = useState()
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

    function onInputUpdate(event, setter) {
      let newValue = event.target.value;
      setter(newValue);
    }
   

    async function updateUser(updatedUser) {
      console.log('Posting to user id', userId, 'with data', updatedUser)
      await fetch('/api/giveAway/'+userId, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
      })
    
  }
    async function postData() {
      let newData = {
        availible,
     message
      };
      console.log("Saving message", newData);
      await updateUser(newData);
    }
  
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
          <div className="field-title">Prefered Pickup Time</div>
          <div className="field-value">{user?.pickupTime}</div>

          <div className ="field-title">Message</div>
          <input
              type = "text box"
              value={message}
              onChange={(event) => onInputUpdate(event, setMessage)}
            />
          
        </div>
        <div>
        <button onClick={postData}>Save Message</button>
        </div>
        
            {user?.message}
       
      </div>
    )
  }

  export default UserDetail
  
        