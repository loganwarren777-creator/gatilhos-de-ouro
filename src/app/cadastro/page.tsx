'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserPlus, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    setIsLoading(true);
    
    // Simulação de cadastro
    setTimeout(() => {
      alert('Cadastro realizado com sucesso!');
      setIsLoading(false);
      window.location.href = '/dashboard';
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#d4af37] to-[#c9a332] rounded-2xl mb-4 shadow-lg">
            <UserPlus className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-3xl font-bold text-[#d4af37] mb-2">
            Crie sua conta grátis
          </h1>
          <p className="text-gray-400">
            Comece sua jornada de aprendizado hoje
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl p-8 border border-[#d4af37]/20">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-400 mb-2">
                Nome completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  className="w-full bg-[#0a0a0a] text-white pl-11 pr-4 py-3 rounded-xl border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full bg-[#0a0a0a] text-white pl-11 pr-4 py-3 rounded-xl border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-400 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full bg-[#0a0a0a] text-white pl-11 pr-12 py-3 rounded-xl border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#d4af37] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-400 mb-2">
                Confirmar senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full bg-[#0a0a0a] text-white pl-11 pr-12 py-3 rounded-xl border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#d4af37] transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-1 rounded border-[#d4af37]/30 bg-[#0a0a0a] text-[#d4af37] focus:ring-[#d4af37]/20"
              />
              <label className="text-sm text-gray-400">
                Concordo com os{' '}
                <Link href="/termos" className="text-[#d4af37] hover:text-[#c9a332] transition-colors">
                  Termos de Uso
                </Link>{' '}
                e{' '}
                <Link href="/privacidade" className="text-[#d4af37] hover:text-[#c9a332] transition-colors">
                  Política de Privacidade
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#c9a332] text-black py-3 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? 'Criando conta...' : 'Criar conta grátis'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#d4af37]/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#1a1a1a] text-gray-400">ou</span>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-400">
              Já tem uma conta?{' '}
              <Link href="/login" className="text-[#d4af37] font-semibold hover:text-[#c9a332] transition-colors">
                Faça login
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </main>
  );
}
