import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";

const LoginPage = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
   
    
    if (currentUser?.username) {
      navigate("/user/" + currentUser.id);
    }
  }, [currentUser]);

  function tryLogin() {
    async function postLogin() {
      const loginInfo = {
        username: username,
        password: password,
      };
      let loginResult = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      if (loginResult.ok) 
        {alert("Hello: " +username);
        async function fetchUser() {
          let fetchResult = await fetch("/auth/loggedInUser");
          let fetchedUser = await fetchResult.json();
          setCurrentUser((curr) => {
            let newObj = { ...curr };
            newObj = fetchedUser;
            return newObj;
          });
        }

        function loginOk() {
          setLoginError("");
        }

        function login() {
          fetchUser().then(loginOk()).catch();
        }
        login();
      } else {
        setLoginError("Login failed!");
      }
    }

    postLogin();
  }

  return (
    <div className="container">
      <div className="row">
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="row">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={tryLogin}>
        Login
      </button>
      {loginError !== "" && (
        <div className="alert alert-danger">{loginError}</div>
      )}
    </div>
  );
};

export default LoginPage;
