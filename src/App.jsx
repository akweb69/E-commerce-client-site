import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageLayout from './Layout/HomePageLayout';
import HomePage from './Layout/HomePage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import NotFound404 from './Common/NotFound404';

function App() {



  return (
    <Router>
      <Routes>
        {/* every page that needs the shell sits under this layout route */}
        <Route path="/" element={<HomePageLayout />}>
          {/* index => shows up by default when url is "/" */}
          <Route index element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Route>

        {/* Not Found 404 Page */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;