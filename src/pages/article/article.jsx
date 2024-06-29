import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import fetchApi from "../../utils/fetchApiResponse";
import { useNavigate } from "react-router-dom";
function Article() {
  const location = useLocation();
  const articleSlug = location.pathname.split("/")[2];
  const apiUrl = `/articles/${articleSlug}`;
  const payload = {
    method: "get",
  };
  const navigate = useNavigate()
  const handleEdit = () => {
    navigate("/editor", { state: { article } });
  };
  console.log(articleSlug);
  const [article, setArticle] = useState(null);
  useEffect(() => {
    fetchApi(apiUrl, payload).then((res) => {
      setArticle(res.article);
      console.log(article);
    });
  }, []);
  return (
    <>
      {article ? (
        <div className="article-page">
          <div className="banner">
            <div className="container">
                <h1>{article.title}</h1>
              <div className="article-meta">
                <a href={`/profile/${article.author.username}`}>
                  <img src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                <div className="info">
                  <Link href={`/profile/${article.author.username}`} className="author">
                    {article.author.username}
                  </Link>
                  <span className="date">{article.createdAt.slice(0,10)}</span>
                </div>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ion-plus-round"></i>
                  &nbsp; Follow {article.author.username}{" "}
                  <span className="counter"></span>
                </button>
                &nbsp;&nbsp;
                <button className="btn btn-sm btn-outline-primary">
                  <i className="ion-heart"></i>
                  &nbsp; Favorite Post <span className="counter">{article.favoritesCount}</span>
                </button>
                <button className="btn btn-sm btn-outline-secondary" onClick={handleEdit}>                  <i className="ion-edit"></i> Edit Article
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  <i className="ion-trash-a"></i> Delete Article
                </button>
              </div>
                
            </div>
          </div>

          <div className="container page">
            <div className="row article-content">
              <div className="col-md-12">
                <p>
                </p>
                <h2 id="introducing-ionic">{article.title}</h2>
                <p>
                {article.body}
               
                </p>
                <ul className="tag-list">
                  {article.tagList.map((tag,index) =>
                    <li key ={index}  className="tag-default tag-pill tag-outline">
                    {tag}
                  </li>
                   )}
                  
                  
                </ul>
              </div>
            </div>

            <hr />

            {/* <div className="article-actions">
              <div className="article-meta">
                <a href="profile.html">
                  <img src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                <div className="info">
                  <a href="" className="author">
                    Eric Simons
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ion-plus-round"></i>
                  &nbsp; Follow Eric Simons
                </button>
                &nbsp;
                <button className="btn btn-sm btn-outline-primary">
                  <i className="ion-heart"></i>
                  &nbsp; Favorite Article <span className="counter">(29)</span>
                </button>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ion-edit"></i> Edit Article
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  <i className="ion-trash-a"></i> Delete Article
                </button>
              </div> 
            </div>*/}

            {/* <div className="row">
              <div className="col-xs-12 col-md-8 offset-md-2">
                <form className="card comment-form">
                  <div className="card-block">
                    <textarea
                      className="form-control"
                      placeholder="Write a comment..."
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="card-footer">
                    <img
                      src="http://i.imgur.com/Qr71crq.jpg"
                      className="comment-author-img"
                    />
                    <button className="btn btn-sm btn-primary">
                      Post Comment
                    </button>
                  </div>
                </form>

                <div className="card">
                  <div className="card-block">
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="/profile/author" className="comment-author">
                      <img
                        src="http://i.imgur.com/Qr71crq.jpg"
                        className="comment-author-img"
                      />
                    </a>
                    &nbsp;
                    <a href="/profile/jacob-schmidt" className="comment-author">
                      Jacob Schmidt
                    </a>
                    <span className="date-posted">Dec 29th</span>
                  </div>
                </div>

                <div className="card">
                  <div className="card-block">
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="/profile/author" className="comment-author">
                      <img
                        src="http://i.imgur.com/Qr71crq.jpg"
                        className="comment-author-img"
                      />
                    </a>
                    &nbsp;
                    <a href="/profile/jacob-schmidt" className="comment-author">
                      Jacob Schmidt
                    </a>
                    <span className="date-posted">Dec 29th</span>
                    <span className="mod-options">
                      <i className="ion-trash-a"></i>
                    </span>
                  </div>
                </div> 
              </div>
            </div>*/}
          </div>
        </div>
      ) : (
        <div>...Is Loading</div>
      )}
    </>
  );
}

export default Article;
