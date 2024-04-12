import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import { Home } from "./components/Home";
import { BlogPage } from "./components/BlogPage";
import { TagPage } from "./components/TagPage";
import { CategoryPage } from "./components/CategoryPage";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [serachParms, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = serachParms.get("page") ?? 1;
    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    } else fetchBlogPosts(Number(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/blog/:blogId" element={<BlogPage/>}></Route>
      <Route path="/tags/:tag" element={<TagPage />}></Route>
      <Route path="/categories/:category" element={<CategoryPage />}></Route>
      
    </Routes>
  );
}
