import React from "react";
import "materialize-css";
import { useRoutes } from "./routes";
import { BrowserRouter as Route } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

function App() {
  const { login, logout, token, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  if (!ready) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider
      value={{ login, logout, token, userId, isAuthenticated }}
    >
      <Route>
        {isAuthenticated && <Navbar />}
        <div className="container">{routes}</div>
      </Route>
    </AuthContext.Provider>
  );
}

export default App;
