import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { MENUS, users } from "./util/data";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  function loginChecker(userName, password) {
    users.map((user) => {
      if (user.name === userName && user.password === password) {
        setShowProfile(true);
      }
    });
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
        <Route path={MENUS[1].url} element={<About />} />

        <Route
          path={MENUS[2].url}
          element={
            showProfile ? (
              <Profile />
            ) : (
              <Login login={loginChecker} showProfile={showProfile} />
            )
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
