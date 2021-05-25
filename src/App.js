import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import Home from './pages/Home';
import Menu from './components/Menu';
import ScrollToTop from './utils/ScrollToTop';
import Apartments from './pages/Apartments';

function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/apt' exact component={Apartments} />
      </Switch>
    </Router>
    
  );
}

export default App;
