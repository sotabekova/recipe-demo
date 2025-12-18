import React from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";

function Blog() {
  const posts = [
    {
      title: "10 Kitchen Tips Every Home Cook Should Know",
      image: "/images/tipsblogimg.png",
      content:
        "Cooking doesn’t have to be complicated. Prep your ingredients, keep your knives sharp, and enjoy the process.",
    },
    {
      title: "Why Italian Food Is Loved Around the World",
      image: "/images/italianblog.png",
      content:
        "Italian cuisine is all about simplicity. Fresh ingredients, tradition, and comfort make it universally loved.",
    },
    {
      title: "Baking Basics for Beginners",
      image: "/images/bakingblog.png",
      content:
        "Baking is part science, part creativity. Measure carefully, follow temperatures, and don’t rush.",
    },
  ];

  return (
    <div>
      <Navbar />

      <section className="max-w-4xl mx-auto px-5 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          Blog
        </h1>

        <div className="space-y-16">
          {posts.map((post, index) => (
            <div key={index} className="space-y-5">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-72 object-cover rounded-2xl shadow"
              />

              <h2 className="text-2xl font-semibold">
                {post.title}
              </h2>

              <p className="text-gray-700 leading-relaxed">
                {post.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
