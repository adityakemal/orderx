import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/auth/Login';
import Dashboard from './pages/cashier/Dashboard';
import ListProduct from './pages/products/ListProduct';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/products/:idResto/:idTable' component={ListProduct} />
          <Route exact path='*' component={()=> <div className='fof'><h2><b>404</b>  | Page not found..</h2></div>} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
