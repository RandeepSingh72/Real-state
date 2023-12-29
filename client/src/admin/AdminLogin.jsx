import React, {useState} from 'react'
import { logIn } from '../auth';
import { Link, useNavigate} from 'react-router-dom'

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://real-state-a2po.vercel.app/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
  
      if (response.ok) {
        console.log('Login successful');
        // Save the token to state, localStorage, or a global state management solution
        logIn(data.token)
        setUsername('');
        setPassword('');
        navigate('/admin/admin-dashboard')
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }

  };

  return ( 
    <div className='container-fluid'>
        <h1 className='text-center mt-4 fs-1'>Admin Login</h1>
      <form className='container-admin mt-3' onSubmit={handleLogin}>
        <label className='admin-label'>
          <span className='fs-4'>Username</span>
          <input type="text" className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label className='admin-label'>
          <span className='fs-4'>Password</span>
          <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <div className='d-flex flex-column'>
        <button className='btn btn-primary fs-5 admin-btn' type="submit">Login</button>
       <span className='text-center'>or</span>
        <Link className='btn btn-primary mt-2' to={'/'}>Go Home</Link>
        </div>
       
      </form>
    </div>
  )
}

export default AdminLogin