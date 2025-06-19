import React from 'react'
import { Link} from 'react-router'


const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 bg-base-200">
        <h1 className="text-4xl md:text-5xl font-bold">Explore the World with Voyaglog</h1>
        <p className="mt-4 text-lg text-gray-600">Your personal travel blog and story hub</p>
        <Link to="/about" className="btn btn-primary mt-6">Learn More</Link>
      </section>

      {/* Latest Blogs (Placeholder for now) */}
      <section className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Latest Adventures</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map(id => (
            <div key={id} className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title">Blog Title {id}</h3>
                <p>A short preview of the blog content goes here...</p>
                <div className="card-actions justify-end">
                  <Link to={`/blog/${id}`} className="btn btn-sm btn-outline">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold">Want to share your journey?</h2>
        <Link to="/login" className="btn btn-secondary mt-4">Start Blogging</Link>
      </section>
    </div>
  )
}

export default Home