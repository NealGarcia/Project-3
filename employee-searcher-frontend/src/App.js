import "./App.css";
import { Route } from "react-router-dom";
import React, { useContext, createContext } from 'react';
import Splash from "./components/Splash";
import NewEmployee from "./components/NewEmployee";
import UpdateEmployee from "./components/UpdateEmployee"
import EmployerHome from "./components/EmployerHome";
import Details from "./components/Details";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmployeeLogin from "./components/EmployeeLogin";
import InitializerUpdateEmp from "./components/InitializerUpdateEmp";

const UrlContext = createContext()

function App() {

  // Global URL variable
  const url = `http://localhost:8000/api/`
  
  return (
    <div className="App component">
      <Header />
      <UrlContext.Provider value={url}>
        <Route path="/" exact component={Splash} />
        <Route path="/new" exact component={NewEmployee} />
        <Route path="/update" exact component={EmployeeLogin} />
        <Route path="/update/:user" component={InitializerUpdateEmp} />
        <Route path="/search" exact component={EmployerHome}/>
        <Route path="/details/:_id" component={Details} />
      </UrlContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
