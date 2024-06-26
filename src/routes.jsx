import { Route, Routes } from "react-router-dom";
import Authentication from "./pages/authentication";
import { GlobalFeed } from "./pages/globalfeed";
import { TagFeed } from "./pages/tagFeed/tagFeed";
import Article from "./pages/article/article";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GlobalFeed />} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/register" element={<Authentication />} />
      <Route path="/tags/:slug" element={<TagFeed />} />
      <Route path="/articles/:slug" element={<Article />} />
    </Routes>
  );
}

{
  /* <Route exact path="/" element={<GlobalFeed />} />
<Route path="/articles" element={<Articles />} /> */
}
