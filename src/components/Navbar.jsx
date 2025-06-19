import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  // Check auth state (example using localStorage token)
  const isLoggedIn = Boolean(localStorage.getItem('token'))

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
    setIsOpen(false)
  }

  return (
    <nav className="bg-base-100 shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold">
            Voyaglog
          </Link>
          <ThemeToggle />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="btn btn-ghost btn-sm">Home</Link>
          <Link to="/about" className="btn btn-ghost btn-sm">About</Link>

          {isLoggedIn && (
            <Link to="/dashboard" className="btn btn-ghost btn-sm">
              Dashboard
            </Link>
          )}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="btn btn-error btn-sm text-white"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary btn-sm text-white">
                Login
              </Link>
              
              <Link to="/signup" className="btn btn-secondary btn-sm">
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden btn btn-ghost btn-square"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              // X icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-base-200 px-4 py-3 space-y-2">
          <Link
            to="/"
            className="block btn btn-ghost w-full"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block btn btn-ghost w-full"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          {isLoggedIn && (
            <Link
              to="/dashboard"
              className="block btn btn-ghost w-full"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          )}          

          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout()
                setIsOpen(false)
              }}
              className="btn btn-error w-full text-white"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="block btn btn-primary w-full text-white"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block btn btn-secondary w-full"
                onClick={() => setIsOpen(false)}
              >
                Signup
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar
