import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBody, AppLoading, AppLoadingContents } from './style';
import { Chat } from './pages'
import { Header, Sidebar, Login } from './components';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase/config';
import Spinner from 'react-spinkit';


function App() {
  const [user, loading] = useAuthState(auth);
  if(loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
          alt="" />
          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }
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
