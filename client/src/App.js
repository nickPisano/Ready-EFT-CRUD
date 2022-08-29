import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from "./components/Header";
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
