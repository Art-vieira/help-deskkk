import { useForm } from "react-hook-form";
import BackgroundImage from "../assets/Background.png";
import LogoIdentifier from "../assets/logo.png";

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

    <div 
      style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'relative', 
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
        className="w-full md:w-[680px]"
        style={{
            position: 'absolute',
            top: '16px',
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
            paddingTop: '24px',
            paddingBottom: '24px',
            paddingLeft: '140px',
            paddingRight: '140px',
        }}
      >
        
        <div className="w-full flex flex-col gap-3 justify-start items-start">

            <div className="flex items-center gap-3">
                <img src={LogoIdentifier} alt="HelpDesk Logo" className="w-10 h-10 object-contain" />
                <h1 className="text-[#2E3DA3] text-2xl font-bold font-['Lato'] leading-[33.60px]"></h1>
            </div>


            <div style={{ width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '12px', display: 'inline-flex' }}>
                

                <div style={{ alignSelf: 'stretch', padding: '24px', borderRadius: '10px', outline: '1px #E3E5E8 solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '24px', display: 'flex' }}>
                    

                    <div className="self-stretch flex flex-col justify-start items-center md:items-start gap-0.5">
                        <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1E2024', fontSize: '20px', fontFamily: 'Lato', fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word' }}>
                            Acesse o portal
                        </div>
                        <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#535964', fontSize: '12px', fontFamily: 'Lato', fontWeight: '400', lineHeight: '16.80px', wordWrap: 'break-word' }}>
                            Entre usando seu e-mail e senha cadastrados
                        </div>
                    </div>


                    <form onSubmit={handleSubmit(onSubmit)} style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex' }}>
                        

                        <div className="self-stretch flex flex-col justify-center items-center md:items-start">
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#535964', fontSize: '10px', fontFamily: 'Lato', fontWeight: '700', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: '0.60px', wordWrap: 'break-word' }}>
                                e-mail
                            </div>
                            <div style={{ alignSelf: 'stretch', height: '40px', paddingTop: '8px', paddingBottom: '8px', borderBottom: '1px #E3E5E8 solid', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex' }}>
                                <input 
                                    {...register("email", { required: "Informe o e-mail" })}
                                    type="email" 
                                    placeholder="exemplo@mail.com"
                                    style={{ flex: '1 1 0', alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#858B99', fontSize: '16px', fontFamily: 'Lato', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word', border: 'none', outline: 'none', background: 'transparent' }}
                                />
                            </div>
                            {errors.email && <span className="text-xs text-red-500 mt-1 font-['Lato']">{errors.email.message}</span>}
                        </div>


                        <div className="self-stretch flex flex-col justify-center items-center md:items-start">
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#535964', fontSize: '10px', fontFamily: 'Lato', fontWeight: '700', textTransform: 'uppercase', lineHeight: '14px', letterSpacing: '0.60px', wordWrap: 'break-word' }}>
                                senha
                            </div>
                            <div style={{ alignSelf: 'stretch', height: '40px', paddingTop: '8px', paddingBottom: '8px', borderBottom: '1px #E3E5E8 solid', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex' }}>
                                <input 
                                    {...register("password", { required: "Digite a senha" })}
                                    type="password"
                                    placeholder="Digite sua senha"
                                    style={{ flex: '1 1 0', alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#858B99', fontSize: '16px', fontFamily: 'Lato', fontWeight: '400', lineHeight: '22.40px', wordWrap: 'break-word', border: 'none', outline: 'none', background: 'transparent' }}
                                />
                            </div>
                            {errors.password && <span className="text-xs text-red-500 mt-1 font-['Lato']">{errors.password.message}</span>}
                        </div>


                        <button type="submit" style={{ alignSelf: 'stretch', height: '40px', paddingLeft: '16px', paddingRight: '16px', background: '#1E2024', overflow: 'hidden', borderRadius: '5px', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex', cursor: 'pointer', border: 'none' }}>
                             <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#F9FAFA', fontSize: '14px', fontFamily: 'Lato', fontWeight: '700', lineHeight: '19.60px', wordWrap: 'break-word' }}>Entrar</div>
                        </button>

                    </form>
                </div>


                <div style={{ alignSelf: 'stretch', padding: '24px', borderRadius: '10px', outline: '1px #E3E5E8 solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '16px', display: 'flex' }}>
                    <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '2px', display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1E2024', fontSize: '16px', fontFamily: 'Lato', fontWeight: '700', lineHeight: '22.40px', wordWrap: 'break-word' }}>Ainda não tem uma conta?</div>
                        <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#535964', fontSize: '12px', fontFamily: 'Lato', fontWeight: '400', lineHeight: '16.80px', wordWrap: 'break-word' }}>Cadastre agora mesmo</div>
                    </div>
                    <button type="button" style={{ alignSelf: 'stretch', height: '40px', paddingLeft: '16px', paddingRight: '16px', background: '#E3E5E8', overflow: 'hidden', borderRadius: '5px', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex', cursor: 'pointer', border: 'none' }}>
                        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#1E2024', fontSize: '14px', fontFamily: 'Lato', fontWeight: '700', lineHeight: '19.60px', wordWrap: 'break-word' }}>Criar conta</div>
                    </button>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
}
