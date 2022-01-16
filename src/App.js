import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/HomePage/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import Book from './pages/Others/Book/Book';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
     <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route  path="/home">
           <Home></Home>
          </Route>
          <Route path="/book/:bookingId">
           <Book></Book>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/dashboard">
            <DashboardHome></DashboardHome>
          </Route>
      </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
