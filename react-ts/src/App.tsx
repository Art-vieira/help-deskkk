// src/App.tsx
import "./App.css";
import bg from "./assets/Background.png";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <div className="app-layout">
      <div
        className="app-left"
        style={{ backgroundImage: `url(${bg})` }}
      />

      <div className="app-right">
        <Login />
      </div>
    </div>
  );
};
