import './App.css';
import { Signup } from './components/Signup'
import { Success } from './components/Success'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Signup />
        </Route>
        <Route path='/success'>
          <Success />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
