import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/services/services';
import Notfound from './components/notfound/notfound';
import Footer from './components/Footer/Footer';
import About from './components/about/about';
import Whyus from './components/whyus/whyus'


function App() {
   return (
      <div className="App">
         <Router>
            <Header />
            <Switch>
               <Route exact path="/">
                  <Home />
               </Route>
               <Route exact path="/about">
                  <About />
               </Route>
               <Route exact path="/services">
                  <Services />
               </Route>
               <Route exact path="/whyus">
                  <Whyus />
               </Route>
               <Route path="*">
                  <Notfound />
               </Route>
            </Switch>
            <Footer />
         </Router>
      </div>
   )
}

export default App
