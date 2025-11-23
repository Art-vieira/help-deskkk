// src/components/AuthCard.tsx
import logo from "../assets/logo.png";

type AuthCardProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="bg-white/95 rounded-xl shadow-lg p-8 w-full max-w-md">
      <header className="mb-6 text-center">
        <img src={logo} alt="Logo" className="mx-auto mb-3 h-12" />
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </header>
      {children}
    </div>
  );
}
