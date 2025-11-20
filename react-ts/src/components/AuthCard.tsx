import { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
      <div className="text-center mb-6">
        <img
          src="/Logo_IconDark.svg"
          alt="Logo"
          className="w-12 mx-auto mb-2"
        />
        <h2 className="text-xl font-semibold">{title}</h2>
        {subtitle && <p className="text-gray-600 text-sm mt-1">{subtitle}</p>}
      </div>

      {children}
    </div>
  );
}
