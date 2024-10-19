import { useEffect, useState } from "react";
import Blog from "./Blog";
import { data } from "autoprefixer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="py-10">
      <h3 className="text-center text-3xl font-bold py-5" data-aos="fade-right" data-aos-duration="2000">
        Estates {blogs.length}
      </h3>

      <div className="grid mx-10 md:grid-cols-3 lg:mx-20 gap-5">
        {blogs.slice(0, showAll ? data.length : 6).map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
      {blogs.length > 6 ? (
        <div className="text-center pt-10 pb-4">
          <button onClick={() => setShowAll(!showAll)} className="btn btn-outline btn-error text-xl">
            {!showAll ? "Show All" : "Show Less"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Blogs;
