import React, { useContext } from 'react'
import UserContextProvider from '../../Context/UserContextProvider'
import UserContext from '../../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext);
 if(!user) return <div>please login</div>
 return <div>welcome {user.username}</div>
}

export default Profile