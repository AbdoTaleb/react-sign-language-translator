import React from 'react'
import { Link } from 'react-router-dom'
import { STORAGE_KEY_USER } from '../../const/storageKey';
import { useUser } from '../../context/UserContext';
import { storageDelete } from '../../utils/storage';

function ProfileActions() {
    const {user, setUser} = useUser();
    const handleLogoutClick = () => {
        if(window.confirm('Are you sure?')){
            storageDelete(STORAGE_KEY_USER);
            setUser(null);
        }
    }
  return (
    <ul>
        <li><Link to="/translate">Translations</Link></li>
        <li><button>Clear history</button></li>
        <li><button onClick={handleLogoutClick}>Logout</button></li>
    </ul>
  )
}

export default ProfileActions
