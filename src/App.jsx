import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Index />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <Navigation />
              <Team />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
