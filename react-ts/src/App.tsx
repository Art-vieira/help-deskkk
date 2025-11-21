import "./App.css";
import bg from "./assets/Background.png";
import { Login } from "./pages/Login";
// import { AuthCard } from "./components/AuthCard";

export const App = () => {
  return (
    <div
      className="flex h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hidden md:block md:w-1/2 h-full relative">
        <div className="absolute inset-0"></div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-end">
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
};
