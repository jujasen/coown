import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import Menu from './components/Menu';
import ScrollToTop from './utils/ScrollToTop';
import Apartments from './pages/Apartments';
import Apartment from './pages/Apartment';

function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/results' exact component={Apartments} />
        <Route path='/results/apt/:id' exact component={Apartment} />
      </Switch>
    </Router>
    
  );
}

export default App;
