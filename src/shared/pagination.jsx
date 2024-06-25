import React from "react";
import { Link } from "react-router-dom";
function Pagination({ pages, total, limit, url, currentPage }) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  }
  return (
    <>
      <ul className="pagination">
        {pages.map((page, index) => (
          <li
            className={`page-item ${currentPage == page ? "active" : ""}`}
            key={index}
          >
            <Link
              className="page-link"
              to={`?page=${page}`}
              onClick={scrollToTop}
              disabled={currentPage === page}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
      <div className="scroll to Up"></div>
    </>
  );
}

export default Pagination;
