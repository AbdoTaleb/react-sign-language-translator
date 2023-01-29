import { useEffect } from 'react'
import { userById } from '../api/user'
import ProfileActions from '../components/Profile/ProfileActions'
import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileTranslateHistory from '../components/Profile/ProfileTranslateHistory'
import { STORAGE_KEY_USER } from '../const/storageKey'
import { useUser } from '../context/UserContext'
import withAuth from '../hoc/withAuth'
import { storageSave } from '../utils/storage'
import "bootstrap/dist/css/bootstrap.min.css"

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Profile = () => {

  const { user, setUser } = useUser();
  useEffect(() => {
    const findUser = async () => {
      const [error, latestUser] = await userById(user.id);
      if (error === null) {
        storageSave(STORAGE_KEY_USER, latestUser)
        setUser(latestUser)
      }
    }
    //findUser()
  }, [setUser, user.id])
  return (
    <>
      <section className="text-center">
        <div className="p-5 bg-image mb-300px"
          style={{
            backgroundImage: `url("https://makeitfable.com/wp-content/uploads/2022/02/2022-02-17-Sign-Language-1200x654.png")`,
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

          <div className="card-body py-5 px-md-5" style={{
            background: 'linear-gradient(to left, #3a6186 , #89253e)'
          }}>

            <div>
              <button type="button" class="btn btn-success btn-lg m-2 btn-block">Profile</button>
              <button type="button" class="btn btn-warning btn-lg m-2 btn-block">Clear history</button>
              <button type="button" class="btn btn-info btn-lg m-2 btn-block">Translations</button>
              <button type="button" class="btn btn-danger btn-lg m-2 btn-block">Logout</button>
            </div>

            
            <ProfileTranslateHistory translations={user.translations}></ProfileTranslateHistory>
            



          </div>
        </div>
      </section>



      <h1>Profile</h1>
      <ProfileHeader username={user.username}></ProfileHeader>
      <ProfileActions></ProfileActions>
      <ProfileTranslateHistory translations={user.translations}></ProfileTranslateHistory>
    </>
  )
}

export default withAuth(Profile)
