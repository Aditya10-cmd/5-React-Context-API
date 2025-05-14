import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    
    if(!user) return <div id='user'>Please Login</div>
    return <div id='user'>Welcome {user.username} </div>
}

export default Profile
