import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        {/* Redirect any unknown path to /main */}
        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
