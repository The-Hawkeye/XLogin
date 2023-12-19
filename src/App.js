
import './App.css';
import {useState} from 'react';

function App() {

  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const [submit, setSubmit] = useState("");

  const [click, setClick] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(username ==="Crio"&&password==="password")
    {
      setSubmit("Welcome, user!");
    }
    else 
    setSubmit("Invalid username or password");

    setClick(true);
  }

  return (
  
    <div className="App">
  <h1>Login page</h1>
  {click ? (
    <h4>{submit}</h4>
  ) : (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
       <div>
          Username:
          <input
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
            placeholder="username"
          />
        </div>
        <div>
          Password:
          <input
            label="Password"
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            pattern=".{8,}" 
            title="Password must be at least 8 characters long"
            placeholder="password"
          />
        </div>
        <button type="submit" >
          Submit
        </button>
      </form>
    </>
  )}
</div>

  );
}

export default App;
