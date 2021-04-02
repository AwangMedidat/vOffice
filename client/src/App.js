import './App.css';
import { Switch, Route } from 'react-router-dom'
import Register from './views/register'
import Login from './views/login'

function App() {
  return (
    <div className="App">
        <div>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
