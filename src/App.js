import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./componets/SignIn";
import SignUp from "./componets/SignUp";
import Checkout from "./componets/Checkout";
import Crud from "./componets/Crud";
import UserUpdate from "./componets/UserUpdate";
import Reservation from "./componets/Reservation"


function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/Crud" element={<Crud/>} />
          <Route path="/Update/:id" element={<UserUpdate/>} />
          <Route path="/Reservation/" element={<Reservation/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));