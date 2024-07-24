import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import AllBlogs from "./Pages/AllBlogs/AllBlogs";
import NoPage from "./Pages/NoPage/Nopage";
import BlogInfo from "./Pages/BlogInfo/BlogInfo";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import MyState from "./Context/data/MyState";
import CreateBlog from "./Pages/Admin/CreateBlog/createBlog";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/AllBlogs" element={<AllBlogs />} />
          <Route path="/BlogInfo/:id" element={<BlogInfo />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster/>
      </Router>
      </MyState>
  )
}

export default App