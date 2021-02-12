import { Switch, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import AboutUs from './components/AboutUs'
import Discover from './components/Discover'
import Footer from './components/Footer'
import JoinUs from './components/JoinUs'
import LogIn from './components/LogIn'
import Contact from './components/Contact'
import ScrollToTopRoute from './components/ScrollToTopRoute'

function App() {
  const location = useLocation();

  return (
      <div className ='wrapper'>
        <div className = {location.pathname === '/' ? 'wrapper-img' : ''}>
          <Header />
          <Switch>
            <ScrollToTopRoute path='/' exact component={LandingPage} />
            <ScrollToTopRoute path='/about' component={AboutUs} />
            <ScrollToTopRoute path='/discover' component={Discover} />
            <ScrollToTopRoute path='/join-us' component={JoinUs} />
            <ScrollToTopRoute path='/log-in' component={LogIn} />
            <ScrollToTopRoute path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </div>  
      </div>
  );
}

export default App;
