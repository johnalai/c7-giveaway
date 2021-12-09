import React,{useState} from "react";

function LoginPage(){
const [userName,setUserName] = useState('')
const [password,setPassword] = useState('')






function onInputUpdate(event, setter) {
    let newValue = event.target.value;
    setter(newValue);
  }

  async function postData() {
    let newProvider = {
      userName,
    password
    };
    console.log("Saving provider", newProvider);
    await onSave(newProvider);
  }

    return(
        <>
  <h1>Login</h1>

<div>
    <label>User Name </label>
  <input
              value={userName}
              onChange={(event) => onInputUpdate(event, setUserName)}
            />
            </div>
            <div>
                <label> Password</label>
  <input
              value={password}
              onChange={(event) => onInputUpdate(event, setPassword)}
            />
            </div>

            <button onClick={postData}>Save Provider</button>
        </>
    )
}

export default LoginPage