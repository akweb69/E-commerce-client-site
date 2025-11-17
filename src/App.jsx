import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageLayout from './Layout/HomePageLayout';
import HomePage from './Layout/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* every page that needs the shell sits under this layout route */}
        <Route path="/" element={<HomePageLayout />}>
          {/* index => shows up by default when url is "/" */}
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;