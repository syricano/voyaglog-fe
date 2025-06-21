import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import voyagStyle from '../style/voyagStyle'

const Dashboard = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    firstName: 'Anass',
    lastName: 'Muhammad',
    email: 'anass@example.com',
    password: '',
    phone: '123456789',
  })

  const [blogs, setBlogs] = useState([
    { id: 1, title: 'My first blog', content: 'Hello world!' },
    { id: 2, title: 'Vacation plans', content: 'Planning a trip soon.' },
  ])

  const [editingBlog, setEditingBlog] = useState(null)
  const [newBlog, setNewBlog] = useState({ title: '', content: '' })
  const [error, setError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
  }, [navigate])

  const handleUserChange = (e) => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleUserSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!user.firstName || !user.lastName || !user.email) {
      setError('Please fill out all required fields.')
      return
    }
    alert('Personal information updated!')
  }

  const handleNewBlogChange = (e) => {
    setNewBlog(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const addBlog = () => {
    if (!newBlog.title || !newBlog.content) {
      alert('Please fill out blog title and content.')
      return
    }
    const newId = blogs.length ? blogs[blogs.length - 1].id + 1 : 1
    setBlogs([...blogs, { id: newId, ...newBlog }])
    setNewBlog({ title: '', content: '' })
  }

  const startEditing = (blog) => {
    setEditingBlog(blog)
  }

  const handleEditChange = (e) => {
    setEditingBlog(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const saveEdit = () => {
    setBlogs(blogs.map(b => (b.id === editingBlog.id ? editingBlog : b)))
    setEditingBlog(null)
  }

  const cancelEdit = () => {
    setEditingBlog(null)
  }

  const deleteBlog = (id) => {
    if (window.confirm('Delete this blog?')) {
      setBlogs(blogs.filter(b => b.id !== id))
    }
  }

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-10">
      <h1 className={voyagStyle.sectionTitle}>Dashboard</h1>

      {/* Personal Info Section */}
      <section className="bg-base-200 p-6 rounded shadow-md">
        <h2 className={voyagStyle.sectionTitle}>Personal Information</h2>
        {error && <p className={voyagStyle.errorText}>{error}</p>}
        <form onSubmit={handleUserSubmit} className={voyagStyle.form}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={user.firstName}
            onChange={handleUserChange}
            className={voyagStyle.input}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={user.lastName}
            onChange={handleUserChange}
            className={voyagStyle.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleUserChange}
            className={voyagStyle.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password (leave blank to keep)"
            value={user.password}
            onChange={handleUserChange}
            className={voyagStyle.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleUserChange}
            className={voyagStyle.input}
          />
          <button type="submit" className={voyagStyle.submitButton}>
            Update Information
          </button>
        </form>
      </section>


      <section className="bg-base-200 p-6 rounded shadow-md">
        <h2 className={voyagStyle.sectionTitle}>My Blogs</h2>


        <div className="mb-6 max-w-md space-y-2">
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={newBlog.title}
            onChange={handleNewBlogChange}
            className={voyagStyle.input}
          />
          <textarea
            name="content"
            placeholder="Blog Content"
            value={newBlog.content}
            onChange={handleNewBlogChange}
            className={voyagStyle.textarea}
            rows={4}
          />
          <button onClick={addBlog} className="btn btn-success">
            Add New Blog
          </button>
        </div>


        <div className="space-y-4 max-w-3xl">
          {blogs.length === 0 && <p>No blogs yet. Add one above!</p>}

          {blogs.map((blog) =>
            editingBlog && editingBlog.id === blog.id ? (
              <div
                key={blog.id}
                className="p-4 border rounded bg-base-100 space-y-3"
              >
                <input
                  type="text"
                  name="title"
                  value={editingBlog.title}
                  onChange={handleEditChange}
                  className={voyagStyle.input}
                />
                <textarea
                  name="content"
                  value={editingBlog.content}
                  onChange={handleEditChange}
                  className={voyagStyle.textarea}
                  rows={4}
                />
                <div className="flex space-x-2">
                  <button onClick={saveEdit} className="btn btn-primary">
                    Save
                  </button>
                  <button onClick={cancelEdit} className="btn btn-warning">
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div
                key={blog.id}
                className="p-4 border rounded bg-base-100 flex justify-between items-start"
              >
                <div>
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <p className="whitespace-pre-wrap">{blog.content}</p>
                </div>
                <div className="flex flex-col space-y-2 ml-4">
                  <button
                    onClick={() => startEditing(blog)}
                    className="btn btn-sm btn-outline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteBlog(blog.id)}
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  )
}

export default Dashboard
