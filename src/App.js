import './App.css';
import Dashboard from './components/Dashboard';
import AuthProvider from './contexts/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  );
}

export default App;
