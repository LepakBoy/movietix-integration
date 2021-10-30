import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicReact from "./pages/Basic-React";
import HomePage from "./pages/home";
import LoginPage from "./pages/auth/Login";
import Coba from "./pages/index";
import MovieDetailPage from "./pages/User/MovieDetail";
import OrderPage from "./pages/Order";
import PaymentPage from "./pages/Payment";
import PrivateRoute from "./helper/routes/privateRoutes";
import PublicRoute from "./helper/routes/publicRoutes";
import CounterClass from "./pages/Basic-React/Counter/counter.class";
import CounterFunc from "./pages/Basic-React/Counter/counter.functional";
import ManageMovie from "./pages/admin/manage-movie";
import ManageSchedule from "./pages/admin/manage-schedule";
import Profile from "./pages/User/profile";
import Dashboard from "./pages/admin/dashboard";

import { Provider } from "react-redux";
import store from "./stores/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* <Route path="/basic-react" exact component={BasicReact} /> */}
            <PublicRoute path="/basic-react" exact component={BasicReact} />
            <PublicRoute path="/" exact component={HomePage} />
            {/* restricted = true : jika sudah login maka tidak bisa masuk ke halaman login */}
            <PublicRoute path="/login" restricted={true} exact component={LoginPage} />
            <Route path="/coba" exact component={Coba} />
            <Route path="/movie-detail/:id" exact component={MovieDetailPage} />
            <PrivateRoute path="/order" exact component={OrderPage} />
            <PrivateRoute path="/payment" exact component={PaymentPage} />
            <PrivateRoute path="/basic-counter-class" exact component={CounterClass} />
            <PublicRoute path="/basic-counter-func" exact component={CounterFunc} />
            <Route path="/manage-movie" exact component={ManageMovie} />
            <Route path="/manage-schedule" exact component={ManageSchedule} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

// function App() {
//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </>
//   );
// }

export default App;
