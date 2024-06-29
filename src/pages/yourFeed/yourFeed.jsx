import React, { useEffect, useRef, useState } from "react";
import Banner from "../../shared/banner";
import FeedToggler from "../../shared/feedtoggler";
import Articles from "../../shared/feed";
import fetchApi from "../../utils/fetchApiResponse";
import Pagination from "../../shared/pagination";
import { useLocation } from "react-router-dom";
import pagesCount from "../../utils/pagination";
import queryString from "query-string";
import PopularTags from "../../shared/populartags";
import { useSelector } from "react-redux";
export const YourFeed = () => {
  const [feeds, setFeeds] = useState({ articles: [], articlesCount: 0 });
  const [pages, setPages] = useState([]);
  const token = useSelector(state => state.currentUser.token)
  const payload = {
    method: "get",
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  };
  const location = useLocation();
  const currentPage = Number(queryString.parse(location.search).page || 0);
  const apiUrl = `/articles?author=ayushjagtap2006`
  useEffect(() => {
    fetchApi(apiUrl, payload).then((res) => {
      setFeeds(res);
      const pa = pagesCount(res.articlesCount, 20);
      setPages(pa);
    });
    console.log(token);
  }, [currentPage]);
  return (
    <>
      <div className="home-page">
        <Banner />
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedToggler  />
              <Articles articles={feeds.articles} />
              {
                <Pagination
                  pages={pages}
                  total={feeds.articlesCount}
                  limit={20}
                  currentPage={currentPage}
                />
              }
            </div>
            <PopularTags />
          </div>
        </div>
      </div>
    </>
  );
};
