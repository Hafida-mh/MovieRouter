
import './App.css';
import Nav from './components/Nav.js'
import Home from './components/Home.js'
import Popularmovie from './components/Popularmovie.js'
import Detail from './components/Detail.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import {useState} from 'react'

function App() {

  return (

    <div className="App">
     
        <Router>
   
      
          <Switch>
            
          <Route exact path="/">
          <Redirect
            to={{
              pathname: "/popular",
            }}
          />
          </Route>
          <div className="boxContentMovies">
            <Route path="/:page" component={Home} />
          </div>
          {/* <Route path="/popular" component={Popularmovie} /> */}
         
         
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
          </Switch>
          
          
        </Router>
   
    </div>
  );
}

export default App;
