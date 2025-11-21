import "./App.css";
import bg from "./assets/Background.png"; // ou use o caminho público

import { Login } from "./pages/Login";

export const App = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <Login />
      </div>
    </div>
  );
};
