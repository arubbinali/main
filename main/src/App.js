import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import First from "./pages/first";
import Lit from "./pages/lit";

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/main" element={<Main />} />
  <Route path="/about" element={<About />} />
  <Route path="/first" element={<First />} />
  <Route path="/lit" element={<Lit />} />
        {/* Redirect any unknown path to /main */}
        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
