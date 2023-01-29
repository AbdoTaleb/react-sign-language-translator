import { useEffect } from 'react'
import ProfileActions from '../components/Profile/ProfileActions'
import { useUser } from '../context/UserContext'
import withAuth from '../hoc/withAuth'
import "bootstrap/dist/css/bootstrap.min.css"

const Profile = () => {

  const { user, setUser } = useUser();
  useEffect(() => {
    
  }, [setUser, user.id])
  return (
    <>
      <ProfileActions></ProfileActions>

    </>
  )
}

export default withAuth(Profile)
