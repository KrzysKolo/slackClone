import './App.css';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path='/about' exact component={about} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
