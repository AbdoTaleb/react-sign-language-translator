import ProfileActions from '../components/Profile/ProfileActions'
import ProfileHeader from '../components/Profile/ProfileHeader'
import ProfileTranslateHistory from '../components/Profile/ProfileTranslateHistory'
import { useUser } from '../context/UserContext'
import withAuth from '../hoc/withAuth'


const Profile = () => {

  const {user} = useUser();
  
  return (
    <>
      <h1>Profile</h1>
      <ProfileHeader username={user.username}></ProfileHeader>
      <ProfileActions></ProfileActions>
      <ProfileTranslateHistory translations={user.translations}></ProfileTranslateHistory>
    </>
  )
}

export default withAuth(Profile)
