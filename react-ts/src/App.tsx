// Updated App.tsx for Login and Cadastro screens
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState<'login' | 'register'>('login');

  return (
    <div className="app-container">
      {screen === 'login' ? (
        <Login onChange={() => setScreen('register')} />
      ) : (
        <Register onChange={() => setScreen('login')} />
      )}
    </div>
  );
}