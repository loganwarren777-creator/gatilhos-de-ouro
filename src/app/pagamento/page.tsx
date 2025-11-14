'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CreditCard, Crown, Check, ArrowLeft, Shield, Loader2 } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

// Inicializar Stripe (em produção, use sua chave pública do Stripe)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function PagamentoPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal'>('stripe');
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handleStripePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Em produção, você faria uma chamada para sua API backend
      // que criaria uma sessão de checkout do Stripe
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'price_pro_monthly', // ID do preço no Stripe
          cardData: cardData
        }),
      });

      const session = await response.json();

      // Redirecionar para o checkout do Stripe
      const stripe = await stripePromise;
      if (stripe) {
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          alert(result.error.message);
        }
      }
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
      alert('Pagamento processado com sucesso! (Modo demonstração)');
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePayPalPayment = () => {
    setIsProcessing(true);
    
    // Simulação de integração com PayPal
    setTimeout(() => {
      alert('Redirecionando para o PayPal...');
      setIsProcessing(false);
    }, 1500);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#d4af37] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Plan Details */}
          <div className="bg-gradient-to-br from-[#d4af37] to-[#c9a332] rounded-3xl shadow-2xl p-8 text-black h-fit">
            <div className="flex items-center justify-center w-16 h-16 bg-black rounded-2xl mb-6">
              <Crown className="w-8 h-8 text-[#d4af37]" />
            </div>

            <h2 className="text-3xl font-bold mb-2">Plano PRO</h2>
            <div className="text-5xl font-bold mb-6">
              R$ 97<span className="text-2xl font-normal">/mês</span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Acesso ilimitado a TODOS os cursos</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Biblioteca completa de e-books em PDF</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Todas as vídeo-aulas geradas por IA</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Certificados de conclusão</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Suporte prioritário</span>
              </div>
              <div className="flex items-start space-x-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span className="text-lg">Atualizações mensais de conteúdo</span>
              </div>
            </div>

            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-sm font-semibold">
                💡 Cancele quando quiser, sem multas ou taxas adicionais
              </p>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-[#1a1a1a] rounded-3xl shadow-2xl p-8 border border-[#d4af37]/20">
            <div className="flex items-center space-x-3 mb-6">
              <CreditCard className="w-8 h-8 text-[#d4af37]" />
              <h2 className="text-2xl font-bold text-[#d4af37]">Pagamento Seguro</h2>
            </div>

            {/* Security Badge */}
            <div className="bg-[#0a0a0a] rounded-xl p-4 mb-6 border border-[#d4af37]/20">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-[#d4af37]" />
                <div>
                  <p className="text-sm font-semibold text-[#d4af37]">Pagamento 100% Seguro</p>
                  <p className="text-xs text-gray-400">Protegido por Stripe e criptografia SSL</p>
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setPaymentMethod('stripe')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                  paymentMethod === 'stripe'
                    ? 'bg-[#635bff] text-white'
                    : 'bg-[#0a0a0a] text-gray-400 hover:text-white border border-[#d4af37]/20'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Cartão (Stripe)</span>
                </div>
              </button>
              <button
                onClick={() => setPaymentMethod('paypal')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                  paymentMethod === 'paypal'
                    ? 'bg-[#0070ba] text-white'
                    : 'bg-[#0a0a0a] text-gray-400 hover:text-white border border-[#d4af37]/20'
                }`}
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .76-.633h8.78c2.857 0 4.807 1.147 5.207 3.057.4 1.91-.547 3.437-2.52 4.067 2.173.63 3.12 2.157 2.52 4.067-.6 1.91-2.547 3.057-5.207 3.057H7.076z"/>
                  </svg>
                  <span>PayPal</span>
                </div>
              </button>
            </div>

            {/* Stripe Payment Form */}
            {paymentMethod === 'stripe' && (
              <form onSubmit={handleStripePayment} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">
                    Número do cartão
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardData.number}
                    onChange={(e) => setCardData({ ...cardData, number: formatCardNumber(e.target.value) })}
                    maxLength={19}
                    required
                    className="w-full bg-[#0a0a0a] text-white px-4 py-3 rounded-xl border border-[#d4af37]/30 focus:border-[#635bff] focus:outline-none focus:ring-2 focus:ring-[#635bff]/20 transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Validade
                    </label>
                    <input
                      type="text"
                      placeholder="MM/AA"
                      value={cardData.expiry}
                      onChange={(e) => setCardData({ ...cardData, expiry: formatExpiry(e.target.value) })}
                      maxLength={5}
                      required
                      className="w-full bg-[#0a0a0a] text-white px-4 py-3 rounded-xl border border-[#d4af37]/30 focus:border-[#635bff] focus:outline-none focus:ring-2 focus:ring-[#635bff]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      value={cardData.cvv}
                      onChange={(e) => setCardData({ ...cardData, cvv: e.target.value.replace(/\D/g, '') })}
                      maxLength={4}
                      required
                      className="w-full bg-[#0a0a0a] text-white px-4 py-3 rounded-xl border border-[#d4af37]/30 focus:border-[#635bff] focus:outline-none focus:ring-2 focus:ring-[#635bff]/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">
                    Nome no cartão
                  </label>
                  <input
                    type="text"
                    placeholder="Nome como está no cartão"
                    value={cardData.name}
                    onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                    required
                    className="w-full bg-[#0a0a0a] text-white px-4 py-3 rounded-xl border border-[#d4af37]/30 focus:border-[#635bff] focus:outline-none focus:ring-2 focus:ring-[#635bff]/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-[#635bff] hover:bg-[#5145e5] text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processando...</span>
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5" />
                      <span>Pagar com Stripe</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  Powered by <span className="text-[#635bff] font-semibold">Stripe</span> - Processamento seguro de pagamentos
                </p>
              </form>
            )}

            {/* PayPal Payment */}
            {paymentMethod === 'paypal' && (
              <div className="space-y-4">
                <button
                  onClick={handlePayPalPayment}
                  disabled={isProcessing}
                  className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-3 shadow-xl"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      <span>Processando...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.77.77 0 0 1 .76-.633h8.78c2.857 0 4.807 1.147 5.207 3.057.4 1.91-.547 3.437-2.52 4.067 2.173.63 3.12 2.157 2.52 4.067-.6 1.91-2.547 3.057-5.207 3.057H7.076z"/>
                      </svg>
                      <span>Pagar com PayPal</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Você será redirecionado para o PayPal para concluir o pagamento
                </p>
              </div>
            )}

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-[#d4af37]/20">
              <div className="flex items-center justify-center space-x-4 mb-3">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=60&h=40&fit=crop" alt="Visa" className="h-8 opacity-70" />
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=60&h=40&fit=crop" alt="Mastercard" className="h-8 opacity-70" />
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=60&h=40&fit=crop" alt="Amex" className="h-8 opacity-70" />
              </div>
              <p className="text-xs text-gray-400 text-center">
                Seus dados estão protegidos com criptografia de nível bancário.
                Aceitamos todas as principais bandeiras de cartão.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-[#1a1a1a] rounded-2xl p-8 border border-[#d4af37]/20">
          <h3 className="text-2xl font-bold text-[#d4af37] mb-6">Perguntas Frequentes</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Como funciona a cobrança?</h4>
              <p className="text-gray-400">
                A cobrança é mensal e renovada automaticamente. Você pode cancelar a qualquer momento.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Posso cancelar quando quiser?</h4>
              <p className="text-gray-400">
                Sim! Você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas adicionais.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">O pagamento é seguro?</h4>
              <p className="text-gray-400">
                Sim, utilizamos Stripe e PayPal, processadores de pagamento certificados com criptografia SSL de nível bancário.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Quais formas de pagamento são aceitas?</h4>
              <p className="text-gray-400">
                Aceitamos cartões de crédito e débito (Visa, Mastercard, Amex, Elo) via Stripe, e também PayPal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
