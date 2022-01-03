import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBody } from './style';
import { Chat } from './pages'
import { Header, Sidebar } from './components';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase/config';

function App() {
  const [user, loading] = useAuthState(auth);
  return (
    <Router>
    {!user ? (
      <Login />
    ) : (
      <>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route path='/' exact element={<Chat />}  />
          </Routes>
        </AppBody>
      </>
    )}
    </Router>
  );
}

export default App;
