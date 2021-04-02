import './App.css';
import { Switch, Route } from 'react-router-dom'
import Register from './views/register'

function App() {
  return (
    <div className="App">
        <div>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
