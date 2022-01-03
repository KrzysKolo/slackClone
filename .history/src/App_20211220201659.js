import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { About } from './pages'
function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' exact element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
