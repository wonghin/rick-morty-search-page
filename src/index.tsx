// import { render } from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
// import { ContactPage } from "./page/Contactpage";

// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       {/* <Route path="/" element={<App />} /> */}
//       <Route path="/contact" element={<ContactPage />} />
//       <Route path="/contact/${id}" element={<ContactPage />} />
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(<App />);

reportWebVitals();
