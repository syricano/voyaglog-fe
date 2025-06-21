import { useParams } from 'react-router'
import { Link } from 'react-router'
import voyagStyle from '../style/voyagStyle'

const BlogDetails = () => {
  const { id } = useParams()

  // Fake blog data
  const blog = {
    title: `Blog Title ${id}`,
    date: 'June 20, 2025',
    author: 'Anass Muhammad Ali',
    image: '/placeholder.jpg',
    content: `This is the full blog content for blog post ${id}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a risus et urna mattis finibus.`,
  }

  return (
    <div className={voyagStyle.blogDetailsWrapper}>
      <h1 className={voyagStyle.blogDetailsTitle}>{blog.title}</h1>

      <p className={voyagStyle.blogDetailsMeta}>
        {blog.date} • by {blog.author}
      </p>

      <img
        src={blog.image}
        alt={blog.title}
        className={voyagStyle.blogDetailsImage}
      />

      <p className={voyagStyle.blogDetailsContent}>{blog.content}</p>

      <div className="pt-8">
        <Link to="/" className={voyagStyle.blogDetailsBack}>
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default BlogDetails
