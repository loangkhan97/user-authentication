import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NextPage from './pages/NextPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
       
      </Routes>
    </Router>
  );
}

export default App;
