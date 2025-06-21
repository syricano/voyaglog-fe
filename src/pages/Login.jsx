import { useNavigate } from 'react-router'
import { Link } from 'react-router'
import voyagStyle from '../style/voyagStyle'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    // Fake login logic
    localStorage.setItem('token', 'demo-token')
    navigate('/dashboard')
  }

  return (
    <div className={voyagStyle.loginContainer}>
      <div className={voyagStyle.loginCard}>
        <p className={voyagStyle.loginText}>
          Don’t have an account?{' '}
          <Link to="/signup" className={voyagStyle.loginLink}>
            Sign up here
          </Link>
        </p>
        <h2 className={voyagStyle.loginTitle}>Login</h2>
        <button onClick={handleLogin} className={voyagStyle.loginButton}>
          Login as Demo User
        </button>
      </div>
    </div>
  )
}

export default Login
