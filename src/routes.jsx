import { Route, Routes } from "react-router-dom";
import Authentication from "./pages/authentication";
import { GlobalFeed } from "./pages/globalfeed";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GlobalFeed />} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/register" element={<Authentication />} />
    </Routes>
  );
}

{
  /* <Route exact path="/" element={<GlobalFeed />} />
<Route path="/articles" element={<Articles />} /> */
}
