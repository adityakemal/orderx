import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import ListProduct from './pages/products/ListProduct';
import AddMenu from './pages/menu/AddMenu';
import Register from './pages/auth/Register';
import AddQR from './pages/qrcode/AddQR';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/add-qr' component={AddQR} />
          <Route exact path='/add-menu' component={AddMenu} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/products/:idResto/:idTable' component={ListProduct} />
          <Route exact path='*' component={()=> <div className='fof'><h2><b>404</b>  | Page not found..</h2></div>} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
