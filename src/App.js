import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Footer from './components/Footer'
import Discover from './components/Discover'
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import JoinUs from './components/JoinUs'

function App() {
  return (
     <div className ='wrapper'>
{/*       <div className = 'wrapper-img'>
        <Header />
        <LandingPage />
        <Footer />
  </div>  */ }
      <Header />
      <Contact />
      <Footer />  
    </div>
  );
}

export default App;
