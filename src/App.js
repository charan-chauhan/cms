import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About'

import Header from './Header'
import Icon from './Icon'
import Home from './Home'
import Product from './Product'

import Footer from './Footer'
import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Contact from './Contact';
import Blog from './Blog'
import Productlist from './Productlist';
import Services from './Services'




function App() {
  return (
    
    <div className="App">
      
      <Router>
      <Header />
      
 
 
 <Switch>
 <Route path="/home">
            <Home />
          </Route>
          <Route path="/pages/about">
            <About />
          </Route>
          <Route path="/productlist">
            <Productlist />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          
        </Switch>
        <Footer />     
 </Router>    
    </div>
   
    
  );
}

export default App;
