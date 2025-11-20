import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import AuthCard from "../components/AuthCard";
import BgImage from "../assets/Login_Background.png";


type LoginFormData = {
  email: string;
  password: string;
};


export default function Login() {
  const { register, handleSubmit } = useForm<LoginFormData>();

  function onSubmit(data: LoginFormData) {
    console.log("LOGIN:", data);
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
          title="Acesse o portal"
          subtitle="Entre usando seu e-mail e senha cadastrados."
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              Entrar
            </button>

            <div className="text-center pt-4 border-t">
              <p className="text-sm text-gray-600">Ainda não tem uma conta?</p>
              <Link
                className="w-full block mt-2 py-2 rounded-lg border bg-gray-200"
                to="/register"
              >
                Criar conta
              </Link>
            </div>
          </form>
        </AuthCard>
      </div>
    </div>
  );
}
