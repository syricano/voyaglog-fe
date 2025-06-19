import { Navigate, Outlet } from 'react-router'

const isAuthenticated = () => {
  // Later, replace this with real auth check
  return localStorage.getItem('token')
}

const ProtectedLayout = () => {
  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  )
}

export default ProtectedLayout