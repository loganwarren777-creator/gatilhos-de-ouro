'use client';

import Link from 'next/link';
import { useState } from 'react';
import { GraduationCap, Menu, X, BookOpen, Play, Crown, LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1a1a1a] border-b border-[#d4af37]/20 sticky top-0 z-50 backdrop-blur-sm bg-[#1a1a1a]/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-[#d4af37] to-[#c9a332] p-2 rounded-lg group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-bold text-[#d4af37]">Academia Digital PRO</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/cursos"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Cursos</span>
            </Link>
            <Link
              href="/ebooks"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
            >
              <BookOpen className="w-5 h-5" />
              <span>E-books</span>
            </Link>
            <Link
              href="/videos"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
            >
              <Play className="w-5 h-5" />
              <span>Vídeo-Aulas</span>
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
            >
              <Crown className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
            >
              <LogIn className="w-5 h-5" />
              <span>Entrar</span>
            </Link>
            <Link
              href="/cadastro"
              className="flex items-center space-x-2 bg-gradient-to-r from-[#d4af37] to-[#c9a332] text-black px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              <UserPlus className="w-5 h-5" />
              <span>Cadastrar</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-[#d4af37]/20">
          <div className="px-4 py-4 space-y-2">
            <Link
              href="/cursos"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 px-4 py-3 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Cursos</span>
            </Link>
            <Link
              href="/ebooks"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 px-4 py-3 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
            >
              <BookOpen className="w-5 h-5" />
              <span>E-books</span>
            </Link>
            <Link
              href="/videos"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 px-4 py-3 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
            >
              <Play className="w-5 h-5" />
              <span>Vídeo-Aulas</span>
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 px-4 py-3 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
            >
              <Crown className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            
            {/* Auth Buttons - Mobile */}
            <div className="pt-4 border-t border-[#d4af37]/20 space-y-2">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 px-4 py-3 rounded-lg text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
              >
                <LogIn className="w-5 h-5" />
                <span>Entrar</span>
              </Link>
              <Link
                href="/cadastro"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#d4af37] to-[#c9a332] text-black px-4 py-3 rounded-lg font-semibold"
              >
                <UserPlus className="w-5 h-5" />
                <span>Cadastrar Grátis</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
