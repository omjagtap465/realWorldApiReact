import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import fetchApi from '../utils/fetchApiResponse';
import Articles from '../shared/feed';
import pagesCount from "../utils/pagination"
const Profile = () => {

  const currentUser = useSelector(state => state.currentUser);
  const [feeds, setFeeds] = useState({ articles: [], articlesCount: 0 });
  const [pages, setPages] = useState([]);
    
  const location = useLocation();
  const [favorite,setFavorite] = useState(false)
//   let  apiUrl = `/articles?author=ayushjagtap2006`
//   const  payload = {
//     method: "get",
//     headers: {
//       'Authorization': `Bearer ${token}`,
//     }
//   };
  
  useEffect(() => {
    if (currentUser) {
        const token = currentUser.token  
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
    setUser(currentUser.value);
    if(location.pathname.includes("favorites")){
        setFavorite(true)
    }
    if(favorite){
        // apiUrl = `/articles?favorited=${}`
        fetchApi(apiUrl, payload).then((res) => { 
            setFeeds(res);
            const pageCount = pagesCount(res.articlesCount, 20);
            setPages(pageCount);
          })
          return 
    }
    else {

        fetchApi(apiUrl, payload).then((res) => { 
            setFeeds(res);
            const pageCount = pagesCount(res.articlesCount, 20);
            setPages(pageCount);
          })
    }


   
  }, [currentUser]);


 if(!user){
    return <div>Loading...</div>;
 }

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <img className="user-img" src={user.image} alt={user.username} />
              <h4>{user.username}</h4>
              <p>{user.bio}</p>
              <div>
                {/* FOLLOW USER BUTTON */}
                <Link to="/settings" className="btn btn-sm btn-outline-secondary action-btn">
                  Edit Profile Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggler">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <NavLink
                    to={`/profiles/${user.username}`}
                    className="nav-link"
                  >
                    My Posts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={`/profiles/${user.username}/favorites`}
                    className="nav-link"
                  >
                    Favorites Posts
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
                <Articles></Articles>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
