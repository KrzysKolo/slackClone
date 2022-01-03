import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { About, Header } from './pages'
function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path='/' exact element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
