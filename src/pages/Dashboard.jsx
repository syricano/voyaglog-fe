import { useState, useEffect } from "react";
import voyagStyle from "../style/voyagStyle";
import UserBlogs from "../components/UserBlogs";
import HandleUsers from "../components/HandleUsers";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [successMsg, setSuccessMsg] = useState("");
  
  // Initialize user as an object to avoid uncontrolled input warnings
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
  });
  
  const [blogs, setBlogs] = useState([]);
  const [blogsError, setBlogsError] = useState("");
  const [editingBlog, setEditingBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;
    
    const fetchUserData = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/auth/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          credentials: 'include', // important if relying on cookies
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Failed to fetch user data');
        setUser({
          firstName: data.firstName ?? data.firstname ?? '',
          lastName: data.lastName ?? data.lastname ?? '',
          email: data.email ?? '',
          username: data.username ?? '',
        });
      } catch (err) {
        console.error('Error fetching user:', err);
      }
    };

    fetchUserData();
  }, [token]);

  const onNewBlogAdded = (blog) => {
    setBlogs((prev) => [blog, ...prev]);
  };

  return (
    <div className="space-y-20 px-4 md:px-0">
      <section className={voyagStyle.sectionContainer}>
        <h1 className={voyagStyle.sectionTitle}>Dashboard</h1>
      </section>

      <section className={`${voyagStyle.sectionContainer} flex flex-col md:flex-row gap-8`}>
        <div className="w-full md:w-1/3 bg-base-200 p-6 rounded shadow-md">
          <h2 className={voyagStyle.sectionTitle}>Add Blog</h2>
          <UserBlogs
            token={token}
            blogs={blogs}
            setBlogs={setBlogs}
            blogsError={blogsError}
            setBlogsError={setBlogsError}
            editingBlog={editingBlog}
            setEditingBlog={setEditingBlog}
            loading={loading}
            setLoading={setLoading}
            onNewBlogAdded={onNewBlogAdded}
            showForm={true}
            showList={false}
          />
        </div>

        <div className="w-full md:w-1/3 bg-base-200 p-6 rounded shadow-md">
          <h2 className={voyagStyle.sectionTitle}>Profile</h2>
          <HandleUsers
            token={token}
            user={user}
            setUser={setUser}
            blogs={blogs}
            setBlogs={setBlogs}
            blogsError={blogsError}
            setBlogsError={setBlogsError}
          />
        </div>
      </section>

      <section
        className={`${voyagStyle.sectionContainer} w-full md:w-2/3 mx-auto bg-base-200 p-6 rounded shadow-md`}
      >
        <h2 className={voyagStyle.sectionTitle}>My Blogs</h2>
        <UserBlogs
          token={token}
          loading={loading}
          setLoading={setLoading}
          editingBlog={editingBlog}
          setEditingBlog={setEditingBlog}
          blogs={blogs}
          setBlogs={setBlogs}
          blogsError={blogsError}
          setBlogsError={setBlogsError}
          onNewBlogAdded={onNewBlogAdded}
          showForm={false}
          showList={true}
        />
      </section>
    </div>
  );
};

export default Dashboard;
