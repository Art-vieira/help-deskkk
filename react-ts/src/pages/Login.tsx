import { useForm } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  function onSubmit(data: LoginFormData) {
    console.log("LOGIN:", data);
  }

  return (
    <div className="w-full h-100 max-w-md px-8">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Acesse o portal</h1>
        <p className="text-gray-500 mb-4">
          Entre usando seu e-mail e senha cadastrados.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            {...register("email", { required: "Informe o e-mail" })}
            type="email"
            className={`w-full px-3 py-2 border-b outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="exemplo@email.com"
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Senha
          </label>
          <input
            {...register("password", { required: "Digite a senha" })}
            type="password"
            className={`w-full px-3 py-2 border-b outline-none ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Digite sua senha"
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-black text-white rounded-lg font-semibold mt-4"
        >
          Entrar
        </button>
      </form>
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-2">Ainda não tem uma conta?</p>
        <button
          type="button"
          className="w-full py-2 rounded-lg border bg-gray-200"
        >
          Criar conta
        </button>
      </div>
    </div>
  );
}
<div
  className="min-h-screen w-full bg-cover bg-center flex justify-center items-center"
  style={{ backgroundImage: "url('/Background.png')" }}
>
  <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
    <Login />
  </div>
</div>;
