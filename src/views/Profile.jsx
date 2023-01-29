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
      <ProfileActions></ProfileActions>

    </>
  )
}

export default withAuth(Profile)
