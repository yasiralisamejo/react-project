import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [userName, setUserName] = useState('');
  const [userpassword, setUserPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, userpassword });
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="UserName"
        />

        <input
          type="password"
          value={userpassword}
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
