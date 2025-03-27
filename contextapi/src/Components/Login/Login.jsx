import React, { use, useContext, useState } from 'react'
import UserContext from '../../Context/UserContext'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    const handleSubmit= (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>login</h2>
        <input type="text" value={username} placeholder='username' onChange={(e)=> setUsername(e.target.value)} />
        <input type="password" placeholder='password' value={password}  onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Login