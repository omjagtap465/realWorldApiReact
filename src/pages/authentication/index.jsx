import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { currentUserState } from "../../store/currentUserStore/reducer";
const Authentication = ({ match }) => {
  const { pathname } = useLocation();

  const isLogin = pathname == "/login" ? true : false;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const apiUrl = isLogin ? "/users/login" : "/users";
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.currentUser.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      user: { username, password, email },
      apiUrl,
    };
    dispatch(currentUserState(userData));
  };
  return (
    <>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              {isLogin ? (
                <h1 className="text-xs-center">Sign In</h1>
              ) : (
                <h1 className="text-xs-center">Sign up</h1>
              )}
              <p className="text-xs-center">
                {isLogin ? (
                  <Link to="/register">Need an account?</Link>
                ) : (
                  <Link to="/login">Have an account?</Link>
                )}
              </p>
              {/* <ul className="error-messages">
                <li>That email is already taken</li>
              </ul> */}
              <form onSubmit={onSubmit}>
                <fieldset className="form-group">
                  {!isLogin && (
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  )}
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
                {isLogin ? (
                  <button className="btn btn-lg btn-primary pull-xs-right">
                    Sign In
                  </button>
                ) : (
                  <button className="btn btn-lg btn-primary pull-xs-right">
                    Sign Up
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Authentication;
