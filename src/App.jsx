import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageLayout from './Layout/HomePageLayout';
import HomePage from './Layout/HomePage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import NotFound404 from './Common/NotFound404';
import CetegoryProducts from './Pages/CetegoryProducts';
import LoginForm from './Forms/LoginForm';
import Layout from './Admin/Layout/Layout';

function App() {



  return (
    <Router>
      <Routes>
        {/* every page that needs the shell sits under this layout route */}
        <Route path="/" element={<HomePageLayout />}>
          {/* index => shows up by default when url is "/" */}
          <Route index element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/category/:category" element={<CetegoryProducts />} />
          <Route path="/signIn" element={<LoginForm />} />
        </Route>
        {/* admin routes */}
        <Route path="/admin" element={<HomePageLayout />}>
          <Route index element={<Layout />} />

        </Route>

        {/* Not Found 404 Page */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;