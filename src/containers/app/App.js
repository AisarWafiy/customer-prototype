import React from "react";
import { BrowserRouter as Router, Switch, useRouteMatch  } from "react-router-dom";
import logo from "../../logo.svg";
import { Counter } from "../../features/counter/Counter";
import "./App.css";
import Routes from "../router/Routes";
import PrivateRoutes from "../router/PrivateRoutes";
import RouteContext from "../router/RouteContext";
import routes from "../router/AllRoutes";
import { ThemeProvider } from '@material-ui/core'
import { theme } from "../../assets/theme/theme";
import Layout from "../../components/layout/Layout";

function App() {


  return (

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>

    <>
    <RouteContext.Provider value={routes}>
      <ThemeProvider theme={theme}>
      <Router>
        <Layout>
        <Routes />
        </Layout>
      </Router>
      </ThemeProvider>
      </RouteContext.Provider>
    </>
  );
}

export default App;
