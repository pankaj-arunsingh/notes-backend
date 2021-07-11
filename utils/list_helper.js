const dummy = () => 1;

const totalLikes = (blogs) => {
  const reducer = (acc, currentItem) => acc + currentItem.likes;
  return blogs.reduce(reducer, 0);
};
const favoriteBlog = (blogs) => {
  let [favorite] = blogs;
  for (const blog of blogs) {
    if (blog.likes > favorite.likes) {
      favorite = { ...blog };
    }
  }

  return {
    author: favorite.author,
    title: favorite.title,
    likes: favorite.likes,
  };
};
module.exports = { dummy, totalLikes, favoriteBlog };
