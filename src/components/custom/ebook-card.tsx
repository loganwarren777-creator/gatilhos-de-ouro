'use client';

import { Ebook } from '@/lib/types';
import { FileText, Download, Star, Crown, Lock } from 'lucide-react';
import Image from 'next/image';

interface EbookCardProps {
  ebook: Ebook;
}

export default function EbookCard({ ebook }: EbookCardProps) {
  const isPro = ebook.plan === 'pro';

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
      <div className="flex flex-col sm:flex-row">
        {/* Cover */}
        <div className="relative w-full sm:w-40 h-56 sm:h-auto flex-shrink-0">
          <Image
            src={ebook.cover}
            alt={ebook.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {isPro && (
            <div className="absolute top-3 right-3 bg-yellow-400 text-purple-900 p-2 rounded-full shadow-lg">
              <Crown className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
            {ebook.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {ebook.description}
          </p>

          {/* Author */}
          <p className="text-sm text-gray-500 mb-3">
            Por <span className="font-semibold text-gray-700">{ebook.author}</span>
          </p>

          {/* Stats */}
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <FileText className="w-4 h-4" />
              <span>{ebook.pages} páginas</span>
            </div>
            <div className="flex items-center space-x-1">
              <Download className="w-4 h-4" />
              <span>{ebook.downloads.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{ebook.rating}</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
              isPro
                ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 hover:from-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-xl'
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {isPro ? (
              <>
                <Lock className="w-4 h-4" />
                <span>Assinar PRO</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Baixar Grátis</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
