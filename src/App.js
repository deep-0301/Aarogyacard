import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Register from './Components/Register'
import Login from './Components/Login';
import Contact from './Components/Contact';
import Footer from './Components/Footer'
import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./Components/Contact.css"
const App = () => {
  return (
    <div style={{}}>
      <Navbar />
      <div >
        <Switch>
          <Route exact path='/Aarogyacard/' component={Home}></Route>
          <Route exact path='/Aarogyacard/Home' component={Home}></Route>
          <Route exact path='/Aarogyacard/Register' component={Register}></Route>
          <Route exact path='/Aarogyacard/Login' component={Login}></Route>
          <Route exact path='/Aarogyacard/Contact' component={Contact}></Route>
          <Redirect to="/Aarogyacard/"></Redirect>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
