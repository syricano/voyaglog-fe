import { BrowserRouter as Router, Routes, Route } from 'react-router';
import MainLayout from './layouts/MainLayout'
import ProtectedLayout from './layouts/ProtectedLayout'
import Home from './pages/Home'
import About from './pages/About'
import BlogDetails from './pages/BlogDetails'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/signup';



function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup/>}/>
        </Route>

        {/* Protected Routes with Auth Layout */}
        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
