// Updated App.tsx for Login and Register screens
import './App.css';
import bg from './assets/Login_Background.png';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState<'login' | 'register'>('login');

  return (
    <div
        className="app-container bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
      {screen === 'login' ? (
        <Login onChange={() => setScreen('register')} />
      ) : (
        <Register onChange={() => setScreen('login')} />
      )}
    </div>
  );
}
