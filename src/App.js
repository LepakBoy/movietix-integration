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
import AdminRoute from "./helper/routes/adminRoutes";
import PublicRoute from "./helper/routes/publicRoutes";
import CounterClass from "./pages/Basic-React/Counter/counter.class";
import CounterFunc from "./pages/Basic-React/Counter/counter.functional";
import ManageMovie from "./pages/admin/manage-movie";
import ManageSchedule from "./pages/admin/manage-schedule";
import Profile from "./pages/User/profile";
import Dashboard from "./pages/admin/dashboard";
import Signup from "./pages/auth/Signup";
import Ticket from "./pages/Order/TIcket";
import ResetPassword from "./pages/auth/ResetPassword";
import { Provider } from "react-redux";
import { store, persistor } from "./stores/store";
import { PersistGate } from "redux-persist/integration/react";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
              <AdminRoute path="/manage-movie" exact component={ManageMovie} />
              <AdminRoute path="/manage-schedule" exact component={ManageSchedule} />
              <AdminRoute path="/dashboard" exact component={Dashboard} />
              <PrivateRoute path="/profile" exact component={Profile} />
              <PublicRoute path="/signup" restricted={true} exact component={Signup} />
              <PublicRoute path="/ticket/:id" exact component={Ticket} />
              <PublicRoute path="/reset-password" exact component={ResetPassword} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
