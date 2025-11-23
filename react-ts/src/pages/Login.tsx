// src/pages/Login.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";

type LoginFormData = {
  email: string;
  password: string;
};

const savedData = localStorage.getItem("loginFormData");
const defaultValues: Partial<LoginFormData> = savedData
  ? JSON.parse(savedData)
  : {};

export function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>({ defaultValues });

  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  function onSubmit(data: LoginFormData) {
    // salva último login digitado
    localStorage.setItem("loginFormData", JSON.stringify(data));

    const userDataRaw = localStorage.getItem("registerFormData");
    if (!userDataRaw) {
      setLoginError("Usuário não cadastrado!");
      return;
    }

    const userData = JSON.parse(userDataRaw);
    if (data.email === userData.email && data.password === userData.senha) {
      setLoginError("");
      localStorage.removeItem("loginFormData");
      reset();
      navigate("/"); // ou outra rota se quiser
    } else {
      setLoginError("Email ou senha incorretos.");
    }
  }

  return (
    <AuthCard
      title="Acesse o portal"
      subtitle="Entre usando seu e-mail e senha cadastrados"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            {...register("email", { required: "Informe o e-mail" })}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            placeholder="exemplo@dominio.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            type="password"
            {...register("password", { required: "Informe a senha" })}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            placeholder="Digite sua senha"
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {loginError && (
          <p className="text-sm text-red-600 text-center">{loginError}</p>
        )}

        <button
          type="submit"
          className="w-full mt-2 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          Entrar
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Ainda não tem uma conta?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Criar conta
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
