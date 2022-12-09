import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SocialHome from './pages/social.page';
import Covid from './pages/covid-info.page';
import BlogHome from './pages/blog.page';
import DetailBlog from './views/detail.blog';
import AddBlog from './views/add-new.blog';
import NotFound from './views/not.found';
import SearchPage from './pages/search.page';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Covid />} />
          <Route path='/social' element={<SocialHome />} />
          <Route path='/blog' exact element={<BlogHome />} />
          <Route path='/blog/:id' element={<DetailBlog />} />
          <Route path='/add-blog' element={<AddBlog />} />
          <Route path='/search-youtube' element={<SearchPage />} />

          <Route path='*' element={<NotFound />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
