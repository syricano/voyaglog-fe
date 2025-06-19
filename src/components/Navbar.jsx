import { Link, useNavigate } from 'react-router'

const Navbar = () => {
  const navigate = useNavigate()
  const isLoggedIn = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Voyaglog</Link>

        <div className="space-x-4">
          <Link to="/" className="btn btn-ghost btn-sm">Home</Link>
          <Link to="/about" className="btn btn-ghost btn-sm">About</Link>
          {isLoggedIn && <Link to="/dashboard" className="btn btn-ghost btn-sm">Dashboard</Link>}

          {isLoggedIn ? (
            <button onClick={handleLogout} className="btn btn-error btn-sm text-white">Logout</button>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm text-white">Login</Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
