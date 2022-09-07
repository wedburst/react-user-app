import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./views/users/pages/Home";
import { NotFound } from "./views/users/pages/NotFound";
import Single from "./views/users/pages/Single";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/single/:userId" element={<Single />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
