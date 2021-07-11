const listHelper = require('../utils/list_helper');

describe('total likes', () => {
  test('dummy returns one', () => {
    const blogs = [];

    const result = listHelper.dummy(blogs);
    expect(result).toBe(1);
  });
  const listWithBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 8,
      __v: 0,
    },
  ];
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes([listWithBlog[0]]);
    expect(result).toBe(5);
  });
  test('when list has blogs, equals the likes of total blogs', () => {
    const result = listHelper.totalLikes(listWithBlog);
    expect(result).toBe(13);
  });
});
describe('favoriteBlog', () => {
  const listWithBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0,
    },
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Book with more likes',
      author: 'pankaj singh',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 8,
      __v: 0,
    },
  ];
  test('when list has only one blog, returns that blog object', () => {
    const result = listHelper.favoriteBlog([listWithBlog[0]]);
    expect(result).toEqual({
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      likes: 5,
    });
  });
  test('when list has blogs, returns blog with most likes', () => {
    const result = listHelper.favoriteBlog(listWithBlog);
    expect(result).toEqual({
      title: 'Book with more likes',
      author: 'pankaj singh',
      likes: 8,
    });
  });
});
