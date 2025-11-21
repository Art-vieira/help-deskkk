import { useForm } from "react-hook-form";
import AuthCard from "../components/AuthCard";
import BgImage from "../assets/Login_Background.png";

type LoginFormData = {
  email: string;
  password: string;
};


type LoginProps = {
  onChange: () => void;
};

export default function Login({ onChange }: LoginProps) {
  const { register, handleSubmit } = useForm<LoginFormData>();

  function onSubmit(data: LoginFormData) {
    console.log("LOGIN:", data);
  }

  return (
    <div className="h-screen flex overflow-hidden z-10">

      {/* Esquerda com a imagem (grudado na esquerda, sem bordas) */}
      <div className="hidden md:flex w-1/2 h-full">
        <img
          src={BgImage}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Direita: painel branco ocupando 50% */}
      <div className="w-full md:w-1/2 h-full bg-white flex items-center justify-center p-8 shadow-2xl">
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
              <button
                type="button"
                onClick={onChange}
                className="w-full mt-2 py-2 rounded-lg border bg-gray-200"
              >
                Criar conta
              </button>
            </div>

          </form>
        </AuthCard>
      </div>
    </div>
  );
}