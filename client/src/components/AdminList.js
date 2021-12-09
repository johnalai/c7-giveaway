import { useEffect, useState } from 'react'

const UserRow = ({userName, address, city, onUserSelected }) => (
  <tr onClick={() => onUserSelected()}>
    <td>{userName}</td>
    <td>{address}</td>
    <td>{city}</td>
  </tr>
)

const AdminList = ({setSelectedUserId}) => {
  const [Users, setUsers] = useState([])
  useEffect(() => {
    async function fetchData() {
      console.log('Fetching User data!')
      let fetchResult = await fetch("/api/admin")
      let userList = await fetchResult.json()
      setUsers(userList)
    }
    fetchData()
  }, [])

  function selectUser(id) {
    console.log('selectUser called on id', id )
    setSelectedUserId(id)
  }


  return (
    <div>
      <h2>User List</h2>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Adress</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            Users.map((user, index) => {
              return <UserRow 
                key={index} 
                onUserSelected={() => selectUser(user._id)} 
                userName={user.userName} 
                address={user.address} 
                city={user.city} 
              />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AdminList
