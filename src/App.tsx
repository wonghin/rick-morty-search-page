import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ContactPage } from "./page/Contactpage";
import { Routes, Route, Link, HashRouter, BrowserRouter } from "react-router-dom";
import { ContactDetailsPage } from "./page/ContactDetailsPage";
import { Test } from "./page/Test";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/:id" element={<ContactPage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
