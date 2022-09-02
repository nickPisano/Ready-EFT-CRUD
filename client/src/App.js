import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SocketContext, socket } from "./context/socket";

import Header from "./components/Header";
import Home from "./pages/Home";
import Group from "./pages/Group";
import Footer from "./components/Footer";

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div>
        <Router>
          <div>
            <Header />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/main" element={<Group />} />
            </Routes>
          </div>
          <div>
            <Footer />
          </div>
        </Router>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
