// src/pages/Register.tsx
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

const savedData = localStorage.getItem("registerFormData");
const defaultValues: Partial<RegisterFormData> = savedData
  ? JSON.parse(savedData)
  : {};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({ defaultValues });

  const navigate = useNavigate();

  function onSubmit(data: RegisterFormData) {
    const toSave = {
      nome: data.name,
      email: data.email,
      senha: data.password,
    };
    localStorage.setItem("registerFormData", JSON.stringify(toSave));
    reset();
    navigate("/login");
  }

  return (
    <AuthCard
      title="Crie sua conta"
      subtitle="Informe seu nome, e-mail e senha"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            {...register("name", { required: "Informe o nome" })}
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            placeholder="Seu nome completo"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

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
            placeholder="Crie uma senha"
          />
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full mt-2 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
        >
          Cadastrar
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Acessar conta
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
