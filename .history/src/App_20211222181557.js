import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBody } from './style';
import { About } from './pages'
import { Header, Sidebar } from './components';

function App() {
  return (
    <Router>
      <>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route path='/' exact element={<About />} />
          </Routes>
        </AppBody>
      </>
    </Router>
  );
}

export default App;
