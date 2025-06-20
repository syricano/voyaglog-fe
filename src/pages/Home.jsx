import React from 'react'
import { Link } from 'react-router'
import voyagStyle from '../style/voyagStyle'

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className={voyagStyle.heroSection}>
        <h1
          className={voyagStyle.heroTitle}
        >
          Explore the World with Voyaglog
        </h1>
        <p className={voyagStyle.heroSubtitle}>
          Your personal travel blog and story hub
        </p>
        <Link
          to="/about"
          className={voyagStyle.heroButton}
        >
          Learn More
        </Link>
      </section>

      {/* Latest Blogs */}
      <section className={voyagStyle.sectionContainer}>
        <h2 className={voyagStyle.sectionTitle}>
          Latest Adventures
        </h2>
        <div className={voyagStyle.blogGrid}>
          {[1, 2, 3].map(id => (
            <div
              key={id}
              className= {voyagStyle.blogContainer}>
              <div className={voyagStyle.blogCard}>
                <h3 className={voyagStyle.blogTitle}>
                  Blog Title {id}
                </h3>
                <p className={voyagStyle.blogContent}>
                  A short preview of the blog content goes here...
                </p>
                <div className="card-actions justify-end mt-4">
                  <Link to={`/blog/${id}`} className={voyagStyle.readMoreButton}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={voyagStyle.ctaSection}>
        <h2 className={voyagStyle.ctaTitle}>
          Want to share your journey?
        </h2>
        <Link to="/login" className={voyagStyle.ctaButton}>
          Start Blogging
        </Link>
      </section>
    </div>
  )
}

export default Home
