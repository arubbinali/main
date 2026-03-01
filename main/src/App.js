import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import First from "./pages/first";
import Lit from "./pages/lit";
import Page404 from "./pages/404";

function App() {
  return (
    <Router>
      <Routes>
      {/* Redirect root to lit page */}
      <Route path="/" element={<Navigate to="/lit" replace />} />
      <Route path="/lit" element={<Lit />} />
      <Route path="/main" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/first" element={<First />} />
      <Route path="/404" element={<Page404 />} />
      {/* fallback: show 404 for truly unknown routes */}
      <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
