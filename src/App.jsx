import Topbar from "./shared/topbar";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routes";
function App() {
  return (
    <>
      <Router>
        <Topbar />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
