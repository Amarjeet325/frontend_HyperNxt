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
    alert(`Opening blog: ${blog.title}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-xl sm:text-2xl font-light text-gray-700">
          Our Recent Blog
        </h2>

        <button className="text-sm text-gray-500 hover:text-black whitespace-nowrap">
          Read All Articles →
        </button>
      </div>

      {/* Blog Grid */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6 sm:gap-8
        "
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => handleReadMore(blog)}
            className="
              bg-white rounded-2xl
              shadow-sm hover:shadow-md
              transition cursor-pointer
              overflow-hidden
              flex flex-col
            "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="
                  w-full
                  h-48 sm:h-52 md:h-56
                  object-cover
                  hover:scale-105 transition
                "
              />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  📅 {blog.date}
                </span>
                <span className="flex items-center gap-1">
                  📂 {blog.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-3 leading-snug">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
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
