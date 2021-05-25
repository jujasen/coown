import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import Home from './pages/Home';
import Menu from './components/Menu';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <Menu/>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
    
  );
}

export default App;
