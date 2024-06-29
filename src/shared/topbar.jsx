import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  const isLoggedIn = useSelector((state) => state.currentUser.value);
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          conduit
        </NavLink>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/">
              Home
            </NavLink>
          </li>
        {isLoggedIn ===  null  && ( 
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Sign Up
                </NavLink>
              </li>
            </>
          ) 
        }
          { isLoggedIn &&
            (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/newpost">
                    New Post
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/settings">
                    Settings
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
              </>
            )
          } 
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
