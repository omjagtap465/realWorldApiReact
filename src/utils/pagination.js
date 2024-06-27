const pages = (articlesCount, limit) => {
  const pageCount = Math.ceil(articlesCount / limit);
  const arr = [...Array(pageCount).keys()].map((ele) => ele + 1);
  return arr;
};
export default pages;
