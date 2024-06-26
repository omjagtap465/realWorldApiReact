import React, { useEffect, useState } from "react";
import fetchApi from "../utils/fetchApiResponse";
import { Link } from "react-router-dom";

function PopularTags() {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const apiUrl = "/tags";
    fetchApi(apiUrl).then((res) => setTags(res.tags));
  }, []);
  return (
    <>
      <div className="col-md-3">
        <div className="sidebar">
          <p>Popular Tags</p>

          <div className="tag-list">
            {tags.map((tag, index) => (
              <Link
                to={`/tags/${tag}`}
                className="tag-pill tag-default"
                key={index}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularTags;
