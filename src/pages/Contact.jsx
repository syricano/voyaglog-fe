import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus(null)

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      return
    }

    // TODO: Implement sending message to backend or email service

    setStatus('success')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-lg mx-auto p-6 mt-10 bg-base-200 rounded shadow-md">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>

      {status === 'success' && (
        <p className="mb-4 text-green-600">Thanks for your message! We will get back to you soon.</p>
      )}
      {status === 'error' && (
        <p className="mb-4 text-red-600">Please fill out all fields.</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          rows={5}
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
