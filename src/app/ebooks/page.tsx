'use client';

import { useState } from 'react';
import { ebooks } from '@/lib/data';
import EbookCard from '@/components/custom/ebook-card';
import { Filter, Search } from 'lucide-react';

export default function EbooksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'marketing' | 'vendas' | 'ambos'>('all');
  const [planFilter, setPlanFilter] = useState<'all' | 'free' | 'pro'>('all');

  const filteredEbooks = ebooks.filter(ebook => {
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ebook.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || ebook.category === categoryFilter;
    const matchesPlan = planFilter === 'all' || ebook.plan === planFilter;
    
    return matchesSearch && matchesCategory && matchesPlan;
  });

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Biblioteca de E-books
          </h1>
          <p className="text-gray-600 text-lg">
            Material complementar em PDF para você estudar onde e quando quiser
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filtros</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar e-books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as any)}
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
            >
              <option value="all">Todas as Categorias</option>
              <option value="marketing">Marketing Digital</option>
              <option value="vendas">Vendas Presenciais</option>
              <option value="ambos">Marketing + Vendas</option>
            </select>

            {/* Plan Filter */}
            <select
              value={planFilter}
              onChange={(e) => setPlanFilter(e.target.value as any)}
              className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
            >
              <option value="all">Todos os Planos</option>
              <option value="free">Gratuitos</option>
              <option value="pro">PRO</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando <span className="font-semibold text-gray-900">{filteredEbooks.length}</span> e-book(s)
          </p>
        </div>

        {/* Ebooks List */}
        {filteredEbooks.length > 0 ? (
          <div className="space-y-6">
            {filteredEbooks.map(ebook => (
              <EbookCard key={ebook.id} ebook={ebook} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum e-book encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar os filtros ou buscar por outros termos
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
