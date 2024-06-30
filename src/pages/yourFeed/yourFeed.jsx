import React, { useEffect, useRef, useState } from "react";
import Banner from "../../shared/banner";
import FeedToggler from "../../shared/feedtoggler";
import Articles from "../../shared/feed";
import fetchApi from "../../utils/fetchApiResponse";
import Pagination from "../../shared/pagination";
import { useLocation, useNavigate } from "react-router-dom";
import pagesCount from "../../utils/pagination";
import queryString from "query-string";
import PopularTags from "../../shared/populartags";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/currentUserStore/currentUserReducer";
export const YourFeed = () => {
  const [feeds, setFeeds] = useState({ articles: [], articlesCount: 0 });
  const [pages, setPages] = useState([]);
 
  const user = useSelector(state => state.currentUser.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation();
  const currentPage = Number(queryString.parse(location.search).page || 0);
  // const token = useSelector(state => state.currentUser.value.token)
  const [token,setToken] = useState("")
  useEffect(() => {
    // if (!token) {



    //   navigate('/login')
    // }
    // dispatch(getCurrentUser(token))
    if (user) {
      // setToken(user.token)  
      const token = user.token  
        const payload = 

        {
          method: "get",
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        };
        
        
        console.log(user.token,payload);
        const apiUrl = `/articles?author=${user.username}`
      fetchApi(apiUrl, payload).then((res) => {
        console.log(res)
        setFeeds(res);
        const pageCount = pagesCount(res.articlesCount, 20);

        setPages(pageCount);
      });
    }

  }, [currentPage, user]);
  
  return (
    !user ? (<div>...Is Loading</div>):
    <>
      <div className="home-page">
        <Banner />
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedToggler />
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
          </div>
        </div>
      </div>
    </>
  );
};
