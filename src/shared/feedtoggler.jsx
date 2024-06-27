import React from "react";
import { useMemo } from "react";
import currentUser from "../store/currentUserStore/selector";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function FeedToggler({ tagName }) {
  const CurrentUser = useSelector(currentUser);
  return (
    <>
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          {CurrentUser.isLoggedIn && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/yourfeed">
                Your Feed
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink className="nav-link " to="/">
              Global Feed
            </NavLink>
          </li>
          {tagName && (
            <li className="nav-item">
              <NavLink className="nav-link" >
                #{tagName}
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default FeedToggler;
