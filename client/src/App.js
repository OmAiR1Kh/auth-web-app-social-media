import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import ProfileLayout from "./layouts/ProfileLayout/profileLayout";
import ResetLayout from "./layouts/resetLayout/ResetLayout.js";
import ActivateLayout from "./layouts/ActivateLayout/ActivateLayout";

import "./App.css";

function App() {
  const isLoggenIn = true;
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact="true"
          element={isLoggenIn ? <ProfileLayout /> : <AuthLayout />}
        />
        <Route
          path="/auth/reset-password/:token"
          exact="true"
          element={<ResetLayout />}
        />
        <Route
          path="/api/auth/activate/:activate_token"
          exact="true"
          element={<ActivateLayout />}
        />
      </Routes>
    </Router>
  );
}

export default App;
