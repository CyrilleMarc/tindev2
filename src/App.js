import React from "react";
import "./App.css";
import RegisterRecruteur from "./components/RegisterRecruteur";
import LoginRecruteur from "./components/LoginRecruteur";
import RegisterDeveloppeur from "./components/RegisterDeveloppeur";
import LoginDeveloppeur from "./components/LoginDeveloppeur";
import HomePage from "./components/HomePage";
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";
import EditRecruteur from "./components/EditRecruteur";
import QuestionnaireDeveloppeur from "./components/QuestionnaireDeveloppeur";
import QuestionnaireRecruteur from './components/QuestionnaireRecruteur';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" 
          element={<HomePage />}></Route>
          <Route path="/usersList" 
          element={<UsersList />}></Route>
          <Route path="/edit/:id" 
          element={<EditUser />} />
          <Route
            path="/editRecruteur/:id"
            element={<EditRecruteur />}
          ></Route>
          <Route
            path="/registerRecruteur"
            element={<RegisterRecruteur />}
          ></Route>
          <Route path="/loginRecruteur" 
          element={<LoginRecruteur />}></Route>
          <Route
            path="/registerDeveloppeur"
            element={<RegisterDeveloppeur />}
          ></Route>
          <Route
            path="/loginDeveloppeur"
            element={<LoginDeveloppeur />}
          ></Route>
          <Route
            path="/questionnaireDeveloppeur"
            element={<QuestionnaireDeveloppeur />}
          ></Route>
          <Route
            path="/questionnaireRecruteur"
            element={<QuestionnaireRecruteur />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
