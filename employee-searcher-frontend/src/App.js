import "./App.css";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import Splash from "./components/Splash";
import NewEmployee from "./components/NewEmployee";
import UpdateEmployee from "./components/UpdateEmployee"
import EmployerHome from "./components/EmployerHome";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" className="component">
      <Header />
      <Route path="/" exact component={Splash} />
      <Route path="/new" exact component={NewEmployee} />
      <Route path="/update" exact component={UpdateEmployee} />
      <Route path="/search" exact component={EmployerHome} />
      <Footer />
    </div>
  );
}

export default App;
