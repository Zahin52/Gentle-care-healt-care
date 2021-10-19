import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Services from './components/services/services'
import Notfound from './components/notfound/notfound'
import Footer from './components/Footer/Footer'
import About from './components/about/about'
import Whyus from './components/whyus/whyus'
import Register from './components/register/Register'
import Login from './components/login/Login'
import AuthProvider from './context/authProvider'

function App() {
   return (
      <div className="App">
         <AuthProvider>
            <Router>
               <Header />
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route exact path="/about">
                     <About />
                  </Route>
                  <Route exact path="/services/:id">
                     <Services />
                  </Route>
                  <Route exact path="/whyus">
                     <Whyus />
                  </Route>
                  <Route exact path="/signup">
                     <Register />
                  </Route>
                  <Route exact path="/login">
                     <Login />
                  </Route>
                  <Route path="*">
                     <Notfound />
                  </Route>
               </Switch>
               <Footer />
            </Router>
         </AuthProvider>
      </div>
   )
}

export default App
