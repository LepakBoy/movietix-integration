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

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/basic-react" exact component={BasicReact} />
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/coba" exact component={Coba} />
          <Route path="/movie-detail" exact component={MovieDetailPage} />
          <Route path="/order" exact component={OrderPage} />
        </Switch>
      </Router>
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
