import { useForm } from "react-hook-form";
import AuthCard from "../components/AuthCard";
import BgImage from "../assets/Login_Background.png";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

type RegisterProps = {
  onChange: () => void;
};

export default function Register({ onChange }: RegisterProps) {
  const { register, handleSubmit } = useForm<RegisterFormData>();

  function onSubmit(data: RegisterFormData) {
    console.log("REGISTER:", data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="hidden md:flex w-1/2">
        <img
          src={BgImage}
          alt="background"
          className="w-full h-full object-cover rounded-l-2xl"
        />
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center p-6">
        <AuthCard
          title="Crie sua conta"
          subtitle="Informe seus dados para criar seu acesso."
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Nome</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="w-full border rounded-lg px-3 py-2 mt-1"
                placeholder="Digite o nome completo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">E-mail</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full border rounded-lg px-3 py-2 mt-1"
                placeholder="exemplo@gmail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Senha</label>
              <input
                {...register("password", { required: true })}
                type="password"
                className="w-full border rounded-lg px-3 py-2 mt-1"
                placeholder="Digite sua senha"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-lg font-semibold"
            >
              Cadastrar
            </button>

            <div className="text-center pt-4 border-t">
              <p className="text-sm text-gray-600">Já tem uma conta?</p>
              <button
                type="button"
                onClick={onChange}
                className="w-full block mt-2 py-2 rounded-lg border bg-gray-200"
              >
                Acessar conta
              </button>
            </div>
          </form>
        </AuthCard>
      </div>
    </div>
  );
}
