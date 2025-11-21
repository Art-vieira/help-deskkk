// Updated App.tsx for Login and Register screens
import './App.css';
import bg from './assets/Login_Background.png';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';

export default function App() {
  const [screen, setScreen] = useState<'login' | 'register'>('login');

  return (
  <>
    {/* BACKGROUND fixo e sempre atrás */}
    <div
      className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    />

    {/* Conteúdo normal do app (Login, Register, etc) */}
    <div className="relative z-10 min-h-screen">
      {screen === "login" ? (
        <Login onChange={() => setScreen('register')} />
      ) : (
        <Register onChange={() => setScreen('login')} />
      )}
    </div>
  </>
);
}
