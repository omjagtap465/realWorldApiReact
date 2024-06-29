import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import fetchApi from "../utils/fetchApiResponse";

function ArticleForm() {
    const location = useLocation();
    const article = location.state?.article;
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [body, setBody] = useState("");
    const [tagList, setTagList] = useState([]);

    useEffect(() => {
        if (article) {
            setTitle(article.title);
            setDescription(article.description);
            setBody(article.body);
            setTagList(article.tagList);
        } else {
            setTitle("");
            setDescription("");
            setBody("");
            setTagList([]);
        }
    }, [article]);

    const handleTagChange = (e) => {
        setTagList(e.target.value.split(","));
    };

    const editArticle = (e) => {
        e.preventDefault();
        const payload = {
            method: 'put',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: {
                article: {
                    title, description, body, tagList
                }
            }
        };

        fetchApi(`/articles/${article.slug}`, payload)
            .then(res => res ? navigate(`/article/${article.slug}`) : navigate('/'));
    };

    const createArticle = (e) => {
        e.preventDefault();
        const payload = {
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: {
                article: {
                    title, description, body, tagList
                }
            }
        };

        fetchApi('/articles', payload)
            .then(res => res ? navigate(`/article/${res.article.slug}`) : navigate('/'));
    };
  
    return (
        <div className="editor-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-10 offset-md-1 col-xs-12">
                        <form onSubmit={article ? editArticle : createArticle}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Article Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="What's this article about?"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </fieldset>
                                <fieldset className="form-group">
                                    <textarea
                                        className="form-control"
                                        rows="8"
                                        placeholder="Write your article (in markdown)"
                                        value={body}
                                        onChange={(e) => setBody(e.target.value)}
                                    ></textarea>
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter tags"
                                        value={tagList.join(", ")}
                                        onChange={handleTagChange}
                                    />
                                    <div className="tag-list">
                                        {tagList.map((tag, index) => (
                                            <span key={index} className="tag-default tag-pill">
                                                <i className="ion-close-round"></i> {tag}
                                            </span>
                                        ))}
                                    </div>
                                </fieldset>
                                <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
                                    {article ? 'Update Article' : 'Publish Article'}
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArticleForm;
