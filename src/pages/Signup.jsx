import { useState } from 'react'
import { useNavigate } from 'react-router'
import voyagStyle from '../style/voyagStyle'

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (!formData.email || !formData.username || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    // TODO: Call your signup API here

    alert('Signup successful! Please login.')
    navigate('/login')
  }

  return (
    <div className={voyagStyle.signupWrapper}>
      <h2 className={voyagStyle.signupTitle}>Sign Up</h2>
      {error && <p className={voyagStyle.errorText}>{error}</p>}
      <form onSubmit={handleSubmit} className={voyagStyle.form}>
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
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={voyagStyle.input}
          required
        />
        <button type="submit" className={voyagStyle.submitButton}>
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup
