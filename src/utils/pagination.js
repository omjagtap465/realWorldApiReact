const pages = (articlesCount, limit) => {
  const pageCount = Math.ceil(articlesCount / limit);
  const arr = [...Array(pageCount).keys()].map((ele) => ele + 1);
  console.log(arr);
  return arr;
};
export default pages;
