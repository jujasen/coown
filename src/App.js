import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import Menu from './components/Menu';
import Apartments from './pages/Apartments';
import Apartment from './pages/Apartment';
import Room from './pages/Room';
import Footer from './components/Footer';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <Menu/>
      <Chat/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/results' exact component={Apartments} />
        <Route path='/results/apt/:id' exact component={Apartment} />
        <Route path='/results/apt/:aptId/:id' exact component={Room} />
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
