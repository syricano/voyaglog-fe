import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center py-24 bg-base-200 rounded-lg shadow-lg mx-4 md:mx-0">
        <h1
          className="
            text-5xl 
            font-extrabold 
            mb-8
            bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
            bg-clip-text
            text-transparent
            drop-shadow-lg
            animate-bounceOnce
            select-none
          "
        >
          Explore the World with Voyaglog
        </h1>
        <p className="mt-4 text-lg text-base-content/70 transition-colors duration-300">
          Your personal travel blog and story hub
        </p>
        <Link
          to="/about"
          className="btn btn-primary mt-8 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          Learn More
        </Link>
      </section>

      {/* Latest Blogs */}
      <section className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl font-semibold mb-6 text-base-content select-none">
          Latest Adventures
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map(id => (
            <div
              key={id}
              className="
                card bg-base-100 shadow-md rounded-lg 
                hover:shadow-xl 
                transition-shadow duration-300
                cursor-pointer
                flex flex-col
                "
            >
              <div className="card-body flex flex-col flex-grow">
                <h3 className="card-title text-xl font-bold text-base-content select-none">
                  Blog Title {id}
                </h3>
                <p className="flex-grow text-base-content/70 mt-2">
                  A short preview of the blog content goes here...
                </p>
                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/blog/${id}`}
                    className="btn btn-sm btn-outline hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold text-base-content select-none">
          Want to share your journey?
        </h2>
        <Link
          to="/login"
          className="btn btn-secondary mt-6 px-10 py-3 text-lg font-semibold shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          Start Blogging
        </Link>
      </section>
    </div>
  )
}

export default Home
