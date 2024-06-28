import Topbar from "./shared/topbar";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import AppRoutes from "./routes";
import { getCurrentUser } from "./store/currentUserStore/currentUserReducer";
import { useEffect } from "react";
function App() {
  const dispatch   = useDispatch()
  const token  =   localStorage.getItem("token");
  useEffect(()=>{
    dispatch(getCurrentUser(token))
  },[])
  
  return (
    <>
      <Router>
        <Topbar  />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
