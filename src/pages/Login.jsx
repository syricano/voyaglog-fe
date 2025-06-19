import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    // Fake login logic
    localStorage.setItem('token', 'demo-token')
    navigate('/dashboard')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <button onClick={handleLogin} className="btn btn-primary w-full">
          Login as Demo User
        </button>
      </div>
    </div>
  )
}

export default Login
