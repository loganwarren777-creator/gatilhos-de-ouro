'use client';

import Link from 'next/link';
import { GraduationCap, BookOpen, Crown, Sparkles, TrendingUp, Users, CheckCircle, ArrowRight, Play } from 'lucide-react';
import { VideoCard } from '@/components/custom/video-card';
import { videoLessons } from '@/lib/data';

export default function Home() {
  // Pegar apenas os 3 primeiros vídeos gratuitos para preview
  const featuredVideos = videoLessons.filter(v => v.plan === 'free').slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-black text-[#d4af37] py-20 px-4 border-b border-[#d4af37]/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-[#d4af37]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#d4af37]/30">
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            <span className="text-sm font-semibold text-[#d4af37]">Teste Grátis + Acesso PRO Disponível</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#d4af37]">
            Transforme sua Carreira em<br />
            <span className="text-white">Marketing e Vendas</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Cursos completos, e-books práticos e vídeo-aulas geradas por IA para você dominar o marketing digital e vendas presenciais, do zero ao profissional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/cadastro"
              className="w-full sm:w-auto bg-[#d4af37] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#c9a332] transition-all hover:scale-105 shadow-2xl flex items-center justify-center space-x-2"
            >
              <span>Começar Grátis</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pagamento"
              className="w-full sm:w-auto bg-transparent backdrop-blur-sm border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d4af37]/10 transition-all flex items-center justify-center space-x-2"
            >
              <Crown className="w-5 h-5" />
              <span>Ver Planos PRO</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-1">15+</div>
              <div className="text-sm sm:text-base text-gray-400">Cursos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-1">20+</div>
              <div className="text-sm sm:text-base text-gray-400">E-books</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-1">10k+</div>
              <div className="text-sm sm:text-base text-gray-400">Alunos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#d4af37] mb-12">
            Por que escolher a Academia Digital PRO?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-[#0a0a0a] border border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:shadow-2xl hover:shadow-[#d4af37]/20 transition-all">
              <div className="bg-gradient-to-br from-[#d4af37] to-[#c9a332] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GraduationCap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-[#d4af37] mb-3">Cursos Completos</h3>
              <p className="text-gray-400">
                Aprenda do zero ao avançado com cursos estruturados e práticos, criados por especialistas do mercado.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-[#0a0a0a] border border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:shadow-2xl hover:shadow-[#d4af37]/20 transition-all">
              <div className="bg-gradient-to-br from-[#d4af37] to-[#c9a332] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-[#d4af37] mb-3">E-books em PDF</h3>
              <p className="text-gray-400">
                Material complementar em PDF para você estudar offline e ter sempre à mão quando precisar.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-[#0a0a0a] border border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:shadow-2xl hover:shadow-[#d4af37]/20 transition-all">
              <div className="bg-gradient-to-br from-[#d4af37] to-[#c9a332] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Play className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-[#d4af37] mb-3">Vídeo-Aulas com IA</h3>
              <p className="text-gray-400">
                Conteúdo educacional de alta qualidade criado por inteligência artificial para acelerar seu aprendizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Lessons Preview Section */}
      <section className="py-16 px-4 bg-[#0a0a0a] border-t border-[#d4af37]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#d4af37] text-black px-4 py-2 rounded-full mb-4 shadow-lg">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-bold">Vídeo-Aulas Geradas por IA</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-[#d4af37] mb-4">
              Aprenda com Vídeos Inteligentes
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Conteúdo educacional criado por inteligência artificial para acelerar seu aprendizado
            </p>
          </div>

          {/* Featured Videos Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              href="/videos"
              className="inline-flex items-center space-x-2 bg-[#d4af37] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#c9a332] transition-all hover:scale-105 shadow-xl"
            >
              <Play className="w-5 h-5" />
              <span>Ver Todas as Vídeo-Aulas</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-4 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#d4af37] mb-4">
            Escolha seu Plano
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Comece grátis e evolua para o PRO quando quiser
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-[#0a0a0a] rounded-3xl shadow-xl p-8 border-2 border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#d4af37] mb-2">Plano Gratuito</h3>
                <div className="text-4xl font-bold text-white mb-2">R$ 0</div>
                <p className="text-gray-400">Para sempre</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Acesso a cursos gratuitos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">E-books básicos em PDF</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Vídeo-aulas gratuitas com IA</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Comunidade de alunos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Certificados de conclusão</span>
                </li>
              </ul>

              <Link
                href="/cadastro"
                className="block w-full bg-[#d4af37] text-black text-center py-3 rounded-xl font-semibold hover:bg-[#c9a332] transition-colors"
              >
                Começar Grátis
              </Link>
            </div>

            {/* PRO Plan */}
            <div className="bg-gradient-to-br from-[#d4af37] to-[#c9a332] rounded-3xl shadow-2xl p-8 text-black relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-black text-[#d4af37] px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                <Crown className="w-4 h-4" />
                <span>POPULAR</span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Plano PRO</h3>
                <div className="text-4xl font-bold mb-2">R$ 97</div>
                <p className="text-black/70">por mês</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <span>Tudo do plano gratuito</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <span>Acesso a TODOS os cursos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <span>Biblioteca completa de e-books</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <span>Todas as vídeo-aulas com IA</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <span>Suporte prioritário</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <span>Atualizações mensais</span>
                </li>
              </ul>

              <Link
                href="/pagamento"
                className="block w-full bg-black text-[#d4af37] text-center py-3 rounded-xl font-bold hover:bg-black/90 transition-colors shadow-xl"
              >
                Assinar PRO Agora
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#d4af37] to-[#c9a332] text-black">
        <div className="max-w-4xl mx-auto text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Junte-se a mais de 10.000 alunos
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Comece hoje mesmo sua jornada rumo ao sucesso em marketing e vendas
          </p>
          <Link
            href="/cadastro"
            className="inline-flex items-center space-x-2 bg-black text-[#d4af37] px-8 py-4 rounded-xl font-bold text-lg hover:bg-black/90 transition-all hover:scale-105 shadow-2xl"
          >
            <span>Explorar Cursos Grátis</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
