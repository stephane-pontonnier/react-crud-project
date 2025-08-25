import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route d’accueil → liste des utilisateurs */}
        <Route path="/" element={<UserList />} />

        {/* Route d’ajout */}
        <Route path="/add" element={<UserForm />} />

        {/* Route de modification avec ID */}
        <Route path="/edit/:id" element={<UserForm />} />
      </Routes>
    </Router>
  );
};

export default App;
