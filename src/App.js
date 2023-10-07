import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import NextPage from './pages/NextPage';
import { useAuth } from './contexts/AuthContext';



function App() {
  const {isLoggedIn} = useAuth();
  console.log(isLoggedIn)
  return (
    <Router>
      <Routes>
         {isLoggedIn ? 
         (<Route path="/login" element={<Login />} />)
         : 
         (<Route path="/NextPage" element={<NextPage />}/>)
         }
      
      </Routes>
    </Router>
  );
}

export default App;
