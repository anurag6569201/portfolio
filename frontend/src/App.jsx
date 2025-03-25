import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./pages/Landing/Landing";
import PageNotFound from "./pages/Landing/PagNotFound";
import Loading from "./pages/Landing/Loading";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App
