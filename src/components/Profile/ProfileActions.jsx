import React from 'react'
import { Link} from 'react-router-dom'
import { translateClearHistory } from '../../api/translate';
import { STORAGE_KEY_USER } from '../../const/storageKey';
import { useUser } from '../../context/UserContext';
import { storageDelete, storageSave } from '../../utils/storage';

import ProfileHeader from './ProfileHeader';
import ProfileTranslateHistory from './ProfileTranslateHistory';





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

    <>

    <section className="text-center">
      
        <div className="p-5 bg-image mb-300px"
          style={{
            backgroundImage: `url("https://makeitfable.com/wp-content/uploads/2022/02/2022-02-17-Sign-Language-1200x654.png")`,

            height: '350px',

            height: '500px',

          }}
        ></div>

        <div className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: '-100px',
            color: 'hsla(0, 0%, 100%, 0.8)',
            backdropFilter: 'blur(30px)'
          }}
        >

          { user !== null &&
            <div>
              
              
              <button type="button" className="btn btn-info btn-lg m-2 btn-block"><Link to="/translate">Translations</Link></button>
              <button onClick={handleClearHistoryClick} type="button" className="btn btn-warning btn-lg m-2 btn-block">Clear history</button>
              <button onClick={handleLogoutClick} type="button" className="btn btn-danger btn-lg m-2 btn-block">Logout</button>
            </div>
            }



          <div className="card-body py-5 px-md-5" style={{
            background: 'linear-gradient(to left, #3a6186 , #89253e)'
          }}>
            <ProfileHeader username={user.username}></ProfileHeader>

            


            
            <ProfileTranslateHistory translations={user.translations}></ProfileTranslateHistory>
            



          </div>
        </div>
      </section>

          

      
    </>
    

  )
}

export default ProfileActions
