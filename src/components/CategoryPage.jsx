import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Pagination from "./Pagination";
import Blogs from "./Blogs";

export const CategoryPage = () => {
  const navigation = useNavigate();
  const location=useLocation();
  const category=location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigation(-1)}>Back</button>
        <h2>Blog Posted on <span>{category}</span></h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
};
