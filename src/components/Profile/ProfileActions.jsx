import React from 'react'
import { Link } from 'react-router-dom'
import { translateClearHistory } from '../../api/translate';
import { STORAGE_KEY_USER } from '../../const/storageKey';
import { useUser } from '../../context/UserContext';
import { storageDelete, storageSave } from '../../utils/storage';

function ProfileActions() {
    const {user, setUser} = useUser();
    const handleLogoutClick = () => {
        if(window.confirm('Are you sure?')){
            storageDelete(STORAGE_KEY_USER);
            setUser(null);
        }
    }

    const handleClearHistoryClick = async () => {
      if(!window.confirm('Are you sure?\nThis can not be undone!')){
        return
      }
      const [clearError, clearResult] = await translateClearHistory(user.id)

      if(clearError !== null){
        return
      }

      
      const updatedUser = {
        ...user,
        translations: []
      }

      storageSave(updatedUser)
      setUser(updatedUser)

      

    }
  return (
    <ul>
        <li><Link to="/translate">Translations</Link></li>
        <li><button onClick={handleClearHistoryClick}>Clear history</button></li>
        <li><button onClick={handleLogoutClick}>Logout</button></li>
    </ul>
  )
}

export default ProfileActions
