import React, { useEffect } from "react";
import Pagination from "./pagination";
function Articles({ articles }) {
  // const articles = [];
  useEffect(() => {}, [articles]);
  return (
    <>
      {articles.map((article, index) => (
        <div className="article-preview" key={index}>
          <div className="article-meta">
            <a href={`/profile/${article.author.username}`}>
              <img src={article.author.image} alt={article.author.username} />
            </a>
            <div className="info">
              <a
                href={`/profile/${article.author.username}`}
                className="author"
              >
                {article.author.username}
              </a>
              <span className="date">
                {new Date(article.createdAt).toDateString()}
              </span>
            </div>
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
              <i className="ion-heart"></i> {article.favoritesCount}
            </button>
          </div>
          <a href={`/article/${article.slug}`} className="preview-link">
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <span>Read more...</span>
            <ul className="tag-list">
              {article.tagList.map((tag) => (
                <li key={tag} className="tag-default tag-pill tag-outline">
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        </div>
      ))}
    </>
  );
}

export default Articles;
