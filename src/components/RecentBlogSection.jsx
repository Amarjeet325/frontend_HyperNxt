import { useState } from "react";

const blogData = [
  {
    id: 1,
    title: "Top 10 casual look ideas to dress up your kids",
    category: "TIPS & TRICKS",
    date: "22 AUG 2021",
    image: "/images/blog/blog1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
  },
  {
    id: 2,
    title: "Latest trends of wearing street wears supremely",
    category: "TRENDING",
    date: "25 AUG 2021",
    image: "/images/blog/blog2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
  },
  {
    id: 3,
    title: "10 Different Types of comfortable clothes ideas for women",
    category: "INSPIRATION",
    date: "28 AUG 2021",
    image: "/images/blog/blog3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...",
  },
];

const RecentBlogSection = () => {
  const [blogs] = useState(blogData);

  const handleReadMore = (blog) => {
    // Dummy navigation logic
    alert(`Opening blog: ${blog.title}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-light text-gray-700">
          Our Recent Blog
        </h2>

        <button className="text-sm text-gray-500 hover:text-black">
          Read All Articles →
        </button>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => handleReadMore(blog)}
          >
            {/* Image */}
            <div className="rounded-t-2xl overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  📅 {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  📂 {blog.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-gray-800 mb-3 leading-snug">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentBlogSection;
