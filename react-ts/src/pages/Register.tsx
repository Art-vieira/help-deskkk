import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import BackgroundImage from "../assets/Background.png";
import LogoIdentifier from "../assets/logo.png";

type RegisterFormData = {
  nome: string;
  email: string;
  senha: string;
};

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  function onSubmit(data: RegisterFormData) {
    console.log("REGISTER:", data);

    localStorage.setItem("user", JSON.stringify(data));
    navigate("/");
  }

  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100vh',  
        backgroundColor: '#151619', 
        overflow: 'hidden' 
      }}
    >
      <img
        src={BackgroundImage}
        alt="Background"
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }}
      />
      
      <div 
        className="w-full md:w-[680px] px-6 md:px-[140px]"
        style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            right: 0,
            backgroundColor: '#F9FAFA',
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'hidden',
        }}
      >
        
        <div className="w-full flex flex-col justify-start items-start">
            <div className="flex items-center gap-3">
                <img src={LogoIdentifier} alt="HelpDesk Logo" className="w-30 h-20 object-contain" />
            </div>

            <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '12px', display: 'inline-flex' }}>
                
                <div style={{ width: '100%', height: '100%', padding: '28px', borderRadius: '10px', outline: '1px #E3E5E8 solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '40px', display: 'inline-flex' }}>
                    <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '2px', display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1E2024', fontSize: '20px', fontFamily: 'Lato', fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word' }}>Crie sua conta</div>
                        <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#535964', fontSize: '12px', fontFamily: 'Lato', fontWeight: '400', lineHeight: '16.80px', wordWrap: 'break-word' }}>Informe seu nome, e-mail e senha</div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex' }}>
                        
                        {/* Nome */}
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#535964', fontSize: '10px', fontFamily: 'Lato', fontWeight: '700', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: '0.60px', wordWrap: 'break-word' }}>Nome</div>
                            <div style={{ alignSelf: 'stretch', height: '40px', paddingTop: '8px', paddingBottom: '8px', borderBottom: '1px #E3E5E8 solid', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex' }}>
                                <input 
                                    {...register("nome", { required: "Informe o nome completo" })}
                                    className="placeholder:text-[#858B99]"
                                    style={{ flex: '1 1 0', alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1E2024', fontSize: '16px', fontFamily: 'Lato', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word', border: 'none', outline: 'none', background: 'transparent' }}
                                    placeholder="Digite o nome completo"
                                />
                            </div>
                            {errors.nome && <span className="text-[10px] text-red-500 mt-1 font-['Lato']">{errors.nome.message}</span>}
                        </div>

                        {/* E-mail */}
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#535964', fontSize: '10px', fontFamily: 'Lato', fontWeight: '700', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: '0.60px', wordWrap: 'break-word' }}>e-mail</div>
                            <div style={{ alignSelf: 'stretch', height: '40px', paddingTop: '8px', paddingBottom: '8px', borderBottom: '1px #E3E5E8 solid', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex' }}>
                                <input 
                                    {...register("email", { required: "Informe o e-mail" })}
                                    className="placeholder:text-[#858B99]"
                                    style={{ flex: '1 1 0', alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1E2024', fontSize: '16px', fontFamily: 'Lato', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word', border: 'none', outline: 'none', background: 'transparent' }}
                                    placeholder="exemplo@mail.com"
                                />
                            </div>
                            {errors.email && <span className="text-[10px] text-red-500 mt-1 font-['Lato']">{errors.email.message}</span>}
                        </div>

                        {/* Senha */}
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#535964', fontSize: '10px', fontFamily: 'Lato', fontWeight: '700', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: '0.60px', wordWrap: 'break-word' }}>senha</div>
                            <div style={{ alignSelf: 'stretch', height: '40px', paddingTop: '8px', paddingBottom: '8px', borderBottom: '1px #E3E5E8 solid', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex' }}>
                                <input 
                                    {...register("senha", { required: "Digite a senha", minLength: { value: 6, message: "Mínimo de 6 dígitos" } })}
                                    type="password"
                                    className="placeholder:text-[#858B99]"
                                    style={{ flex: '1 1 0', alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1E2024', fontSize: '16px', fontFamily: 'Lato', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word', border: 'none', outline: 'none', background: 'transparent' }}
                                    placeholder="Digite sua senha"
                                />
                            </div>
                            <div style={{ alignSelf: 'stretch', paddingLeft:'0', paddingTop: '6px', justifyContent: 'flex-start', alignItems: 'center', gap: '4px', display: 'inline-flex' }}>
                                <div style={{ flex: '1 1 0', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: errors.senha ? '#EF4444' : '#858B99', fontSize: '12px', fontFamily: 'Lato', fontStyle: 'italic', fontWeight: '400', lineHeight: '16.80px', wordWrap: 'break-word' }}>
                                    {errors.senha ? errors.senha.message : "Mínimo de 6 dígitos"}
                                </div>
                            </div>
                        </div>

                        {/* Botão Cadastrar */}
                        <button 
                            type="submit"
                            style={{ alignSelf: 'stretch', height: '40px', paddingLeft: '16px', paddingRight: '16px', background: '#1E2024', overflow: 'hidden', borderRadius: '5px', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex', cursor: 'pointer', border: 'none' }}
                        >
                            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#F9FAFA', fontSize: '14px', fontFamily: 'Lato', fontWeight: '700', lineHeight: '19.60px', wordWrap: 'break-word' }}>Cadastrar</div>
                        </button>
                    </form>
                </div>
                {/* FIM DO FORMULÁRIO FORNECIDO PELO USUÁRIO */}

                {/* Bloco de "Já possui conta?" */}
                <div style={{ alignSelf: 'stretch', padding: '24px', borderRadius: '10px', outline: '1px #E3E5E8 solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '2px', display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1E2024', fontSize: '16px', fontFamily: 'Lato', fontWeight: '700', lineHeight: '22.40px', wordWrap: 'break-word' }}>Já tem uma conta?</div>
                        <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#535964', fontSize: '12px', fontFamily: 'Lato', fontWeight: '400', lineHeight: '16.80px', wordWrap: 'break-word' }}>Entre agora mesmo</div>
                    </div>
                    <button 
                        type="button" 
                        onClick={() => navigate("/")}
                        style={{ alignSelf: 'stretch', height: '40px', paddingLeft: '16px', paddingRight: '16px', background: '#E3E5E8', overflow: 'hidden', borderRadius: '5px', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex', cursor: 'pointer', border: 'none' }}
                    >
                        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1E2024', fontSize: '14px', fontFamily: 'Lato', fontWeight: '700', lineHeight: '19.60px', wordWrap: 'break-word' }}>Acessar conta</div>
                    </button>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
}
