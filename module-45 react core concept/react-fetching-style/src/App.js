import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Users></Users>

    </div>
  );
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>User Length :{users.length} </h1>
      <div className="users">
        {
          users.map(user => <User name={user.name} email={user.email}></User>)
        }
      </div>
    </div>
  );
}

// single user component 
function User(props) {
  return (
    <div className="user">
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

export default App;
