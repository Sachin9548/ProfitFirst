const mongoose = require ('mongoose');
const blogSchema = new mongoose.Schema({
  title: String,
  category: String,
  author: String,
  date: String,
  image: String,
  content: String,
}, { timestamps: true });

// export default mongoose.model('Blog', blogSchema);
module.exports = mongoose.model('Blog', blogSchema);
