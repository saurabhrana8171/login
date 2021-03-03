
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Nav from './components/Nav'
import Login from'./components/Login'
import Signup from'./components/Signup'
import Dashbord from'./components/Dashbord'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  
  return (
    <>
     
      <Router>
      <Nav />
      
        <Switch>
           <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashbord" component={Dashbord} />
         
         
        </Switch>
      </Router>
    </>

  );
}

export default App;
