import { Calendar, User, ArrowRight } from "lucide-react";
import { ImageHostLink } from "../variable";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Why Custom Software is a Game-Changer for Modern Enterprises",
    excerpt:
      "Explore how custom solutions outperform off-the-shelf products in flexibility, scalability, and security.",
    date: "July 1, 2025",
    author: "Instawebs",
    image: "blog1.jpg",
    readTime: "5 min read",
    category: "Enterprise"
  },
  {
    id: 2,
    title: "Top Web Development Trends to Watch in 2025",
    excerpt:
      "From serverless to edge computing and AI-driven UI—here's what's redefining web apps today.",
    date: "June 25, 2025",
    author: "Instawebs",
    image: "blog2.jpg",
    readTime: "7 min read",
    category: "Web Development"
  },
  {
    id: 3,
    title: "Crafting Delightful Mobile Apps: Our UX Process Revealed",
    excerpt:
      "See how we blend performance and design to create high-converting mobile experiences for clients worldwide.",
    date: "June 15, 2025",
    author: "Instawebs",
    image: "blog3.jpg",
    readTime: "6 min read",
    category: "Mobile Development"
  },
];

const BlogPage = () => {
  const navigate = useNavigate()
  const handlePageChange = (pageNumber) => {
    // Replace with your navigation logic
    // console.log(`Navigate to blog ${pageNumber}`);
    navigate(`/blogs/${pageNumber}`);
  };

  return (
    <div className="bg-black min-h-screen py-16 px-4 md:px-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-orange-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 mt-10">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
              Latest Insights
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Insights from{" "}
            <span className="bg-gradient-to-r from-orange-400 to-purple-400 text-transparent bg-clip-text">
             Instawebs
            </span>
          </h1>
          <p className="text-center max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
            Stay updated with industry trends, engineering insights, and innovation tips from our team of experts in software, web, and mobile development.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-gray-700/50 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              onClick={() => handlePageChange(post.id)}
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "fadeInUp 0.6s ease-out forwards"
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={`${ImageHostLink}${post.image}`}
                  alt={post.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-orange-400 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} className="text-orange-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <User size={16} className="text-purple-400" />
                      {post.author}
                    </span>
                  </div>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                
                <button className="group/btn flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-all duration-300">
                  Read More
                  <ArrowRight 
                    size={16} 
                    className="transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;