'use client';

import { useState } from 'react';
import { VideoCard } from '@/components/custom/video-card';
import { videoLessons } from '@/lib/data';
import { Play, Filter, Crown } from 'lucide-react';

export default function VideosPage() {
  const [filter, setFilter] = useState<'all' | 'marketing' | 'vendas' | 'ambos'>('all');
  const [planFilter, setPlanFilter] = useState<'all' | 'free' | 'pro'>('all');

  const filteredVideos = videoLessons.filter(video => {
    const categoryMatch = filter === 'all' || video.category === filter;
    const planMatch = planFilter === 'all' || video.plan === planFilter;
    return categoryMatch && planMatch;
  });

  return (
    <main className="min-h-screen bg-[#0a0a0a] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#d4af37] text-black px-4 py-2 rounded-full mb-4 shadow-lg">
            <Play className="w-5 h-5" />
            <span className="text-sm font-bold">Vídeo-Aulas de Alta Qualidade</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-[#d4af37] mb-4">
            Aprenda com Vídeos Inteligentes
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conteúdo educacional de alta qualidade para acelerar seu aprendizado
          </p>
        </div>

        {/* Filters */}
        <div className="bg-[#1a1a1a] rounded-2xl shadow-lg p-6 mb-8 border border-[#d4af37]/20">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-[#d4af37]" />
            <h2 className="text-lg font-bold text-[#d4af37]">Filtros</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">
                Categoria
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    filter === 'all'
                      ? 'bg-[#d4af37] text-black shadow-lg'
                      : 'bg-[#0a0a0a] text-gray-400 hover:bg-[#0a0a0a]/80 border border-[#d4af37]/20'
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setFilter('marketing')}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    filter === 'marketing'
                      ? 'bg-[#d4af37] text-black shadow-lg'
                      : 'bg-[#0a0a0a] text-gray-400 hover:bg-[#0a0a0a]/80 border border-[#d4af37]/20'
                  }`}
                >
                  Marketing
                </button>
                <button
                  onClick={() => setFilter('vendas')}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    filter === 'vendas'
                      ? 'bg-[#d4af37] text-black shadow-lg'
                      : 'bg-[#0a0a0a] text-gray-400 hover:bg-[#0a0a0a]/80 border border-[#d4af37]/20'
                  }`}
                >
                  Vendas
                </button>
                <button
                  onClick={() => setFilter('ambos')}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    filter === 'ambos'
                      ? 'bg-[#d4af37] text-black shadow-lg'
                      : 'bg-[#0a0a0a] text-gray-400 hover:bg-[#0a0a0a]/80 border border-[#d4af37]/20'
                  }`}
                >
                  Ambos
                </button>
              </div>
            </div>

            {/* Plan Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">
                Plano
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setPlanFilter('all')}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    planFilter === 'all'
                      ? 'bg-[#d4af37] text-black shadow-lg'
                      : 'bg-[#0a0a0a] text-gray-400 hover:bg-[#0a0a0a]/80 border border-[#d4af37]/20'
                  }`}
                >
                  Todos
                </button>
                <button
                  onClick={() => setPlanFilter('free')}
                  className={`px-4 py-2 rounded-xl font-medium transition-all ${
                    planFilter === 'free'
                      ? 'bg-[#d4af37] text-black shadow-lg'
                      : 'bg-[#0a0a0a] text-gray-400 hover:bg-[#0a0a0a]/80 border border-[#d4af37]/20'
                  }`}
                >
                  Grátis
                </button>
                <button
                  onClick={() => setPlanFilter('pro')}
                  className={`px-4 py-2 rounded-xl font-medium transition-all flex items-center space-x-1 ${
                    planFilter === 'pro'
                      ? 'bg-[#d4af37] text-black shadow-lg'
                      : 'bg-[#0a0a0a] text-gray-400 hover:bg-[#0a0a0a]/80 border border-[#d4af37]/20'
                  }`}
                >
                  <Crown className="w-4 h-4" />
                  <span>PRO</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            <span className="font-bold text-[#d4af37]">{filteredVideos.length}</span> vídeo-aulas encontradas
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-[#1a1a1a] rounded-2xl shadow-lg p-12 max-w-md mx-auto border border-[#d4af37]/20">
              <Play className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#d4af37] mb-2">
                Nenhum vídeo encontrado
              </h3>
              <p className="text-gray-400">
                Tente ajustar os filtros para ver mais resultados
              </p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#d4af37] to-[#c9a332] rounded-3xl shadow-2xl p-8 sm:p-12 text-center text-black">
          <Crown className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Quer acesso a TODOS os vídeos?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Assine o plano PRO e tenha acesso ilimitado a todas as vídeo-aulas, cursos e e-books
          </p>
          <button className="bg-black text-[#d4af37] px-8 py-4 rounded-xl font-bold text-lg hover:bg-black/90 transition-all hover:scale-105 shadow-2xl inline-flex items-center space-x-2">
            <Crown className="w-5 h-5" />
            <span>Assinar Plano PRO</span>
          </button>
        </div>
      </div>
    </main>
  );
}
