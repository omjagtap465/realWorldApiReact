import { Route, Routes } from "react-router-dom";
import Authentication from "./pages/authentication";
import { GlobalFeed } from "./pages/globalfeed";
import { TagFeed } from "./pages/tagFeed/tagFeed";
import Article from "./pages/article/article";
import { YourFeed } from "./pages/yourFeed/yourFeed";
import ArticleForm from "./shared/articleForm";
import Settings from "./pages/settings/settings";
import UserProfile from "./profile/profile";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GlobalFeed />} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/register" element={<Authentication />} />
      <Route path="/tags/:slug" element={<TagFeed />} />
      <Route path="/article/:slug" element={<Article />} />
      <Route path="/yourfeed" element={<YourFeed />} />
      <Route path="/newpost" element={<ArticleForm />} />
      <Route path="/editor" element={<ArticleForm />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/settings" element={<Settings/>} />
    </Routes>
  );
}

{
  /* <Route exact path="/" element={<GlobalFeed />} />
<Route path="/articles" element={<Articles />} /> */
}
