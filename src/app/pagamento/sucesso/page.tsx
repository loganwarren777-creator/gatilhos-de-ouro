'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Crown, ArrowRight, Sparkles } from 'lucide-react';

export default function PagamentoSucessoPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular verificação de pagamento
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Confirmando seu pagamento...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Success Card */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl shadow-2xl p-8 md:p-12 border border-[#d4af37]/30 text-center">
          {/* Success Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#d4af37] blur-2xl opacity-50 rounded-full"></div>
              <CheckCircle className="w-24 h-24 text-[#d4af37] relative animate-bounce" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pagamento Confirmado!
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Bem-vindo ao <span className="text-[#d4af37] font-bold">Plano PRO</span>
          </p>

          {/* Benefits Unlocked */}
          <div className="bg-[#0a0a0a] rounded-2xl p-6 mb-8 border border-[#d4af37]/20">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Crown className="w-6 h-6 text-[#d4af37]" />
              <h3 className="text-xl font-bold text-[#d4af37]">Benefícios Desbloqueados</h3>
            </div>

            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-gray-300">Acesso ilimitado a todos os cursos</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-gray-300">Biblioteca completa de e-books</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-gray-300">Todas as vídeo-aulas disponíveis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-gray-300">Certificados de conclusão</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <span className="text-gray-300">Suporte prioritário</span>
              </div>
            </div>
          </div>

          {/* Session Info */}
          {sessionId && (
            <div className="bg-[#0a0a0a] rounded-xl p-4 mb-8 border border-[#d4af37]/10">
              <p className="text-xs text-gray-500 mb-1">ID da Transação</p>
              <p className="text-sm text-gray-400 font-mono break-all">{sessionId}</p>
            </div>
          )}

          {/* Next Steps */}
          <div className="space-y-4">
            <p className="text-gray-400 mb-6">
              Um email de confirmação foi enviado para você com todos os detalhes da sua assinatura.
            </p>

            <Link
              href="/videos"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#d4af37] to-[#c9a332] text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all w-full md:w-auto"
            >
              <span>Começar a Aprender</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/"
              className="block text-gray-400 hover:text-[#d4af37] transition-colors mt-4"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Precisa de ajuda? Entre em contato com nosso{' '}
            <a href="mailto:suporte@exemplo.com" className="text-[#d4af37] hover:underline">
              suporte
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
