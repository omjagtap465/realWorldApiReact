import React from "react";
import { useMemo } from "react";
import currentUser from "../store/currentUserStore/selector";
import { useSelector } from "react-redux";

function FeedToggler() {
  const CurrentUser = useSelector(currentUser);
  return (
    <>
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          {CurrentUser.isLoggedIn && (
            <li className="nav-item">
              <a className="nav-link" href="">
                Your Feed
              </a>
            </li>
          )}
          <li className="nav-item">
            <a className="nav-link active" href="">
              Global Feed
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FeedToggler;
