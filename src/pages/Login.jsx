import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'
import voyagStyle from '../style/voyagStyle'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '', // or email depending on your backend
    password: '',
  })
  const [error, setError] = useState('')
  
  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.username || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Login failed')
      } else {
        // Assuming backend sends token here
        localStorage.setItem('token', data.token)
        navigate('/dashboard')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('Login failed. Please try again later.')
    }
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
        {error && <p className={voyagStyle.errorText}>{error}</p>}
        <form onSubmit={handleLogin} className={voyagStyle.form}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className={voyagStyle.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={voyagStyle.input}
            required
          />
          <button type="submit" className={voyagStyle.loginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
