import { useState } from "react";

function Login() {
  const [user, setUser] = useState([
    {
      username: "",
      pass: "",
    },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    if (user.username === "aptech@aptech.vn" && user.pass === "aptech") {
      setIsLoggedIn(true);
      alert("Login successfull!");
    } else {
      alert("Login fail!");
    }
  };
  if (isLoggedIn) {
    return (
      <>
        <div>Welcome {user.username}</div>
      </>
    );
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Enter Email ID/ username"
        />
        <br />
        <input
          type="password"
          value={user.pass}
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
          placeholder="Enter password"
        />
        <br />
        <input type="submit" value={"Login"} />
      </form>
    </>
  );
}
export default Login;
