const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: [true, "Please enter the author's name"],
  },

  blogCategory: {
    type: String,
    required: [true, "Please enter the blog category"],
  },
  blogTitle: {
    type: String,
    required: [true, "Please enter the blog title"],
  },
  blogContent: {
    type: String,
    required: [true, "Please enter the blog content"],
  },
  blogImage: {
    type: String,
    required: [true, "Please enter the blog image"],
  },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

module.exports = Blog;
