import React from "react";
import { Routes, Route } from "react-router-dom";
import RecentArticles from "./views/recent/RecentArticles.js";
import Single from "./views/single/single.js";
import NavBar from "./components/NavBar/NavBar";
import EditForm from "./views/edit-form/EditForm";
import NewForm from "./views/new-form/NewForm";

import TheLogin from "./views/login/Login";

import TableArticles from "./views/table-articles/TableArticles";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<RecentArticles />} exact />
        <Route path="/single/:singleId" element={<Single />} />
        <Route path="/table-article" element={<TableArticles />} />
        <Route path="/edit-form" element={<EditForm />} />
        <Route path="/new-form" element={<NewForm />} />
        <Route path="/login" element={<TheLogin />} />
      </Routes>
    </div>
  );
}

export default App;
