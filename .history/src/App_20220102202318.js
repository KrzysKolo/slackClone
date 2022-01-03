import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBody } from './style';
import { Chat } from './pages'
import { Header, Sidebar } from './components';
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  return (
    <Router>
      <>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route path='/' exact element={<Chat />}  />
          </Routes>
        </AppBody>
      </>
    </Router>
  );
}

export default App;
