'use client';

import { Course } from '@/lib/types';
import { Clock, BookOpen, Star, Users, Crown, Lock } from 'lucide-react';
import Image from 'next/image';

interface CursoCardProps {
  course: Course;
}

export default function CursoCard({ course }: CursoCardProps) {
  const isPro = course.plan === 'pro';

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {isPro && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full flex items-center space-x-1 font-semibold text-sm shadow-lg">
            <Crown className="w-4 h-4" />
            <span>PRO</span>
          </div>
        )}
        <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {course.level.toUpperCase()}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Instructor */}
        <p className="text-sm text-gray-500 mb-3">
          Por <span className="font-semibold text-gray-700">{course.instructor}</span>
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.modules} módulos</span>
          </div>
        </div>

        {/* Rating & Students */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-900">{course.rating}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <Users className="w-4 h-4" />
            <span className="text-sm">{course.students.toLocaleString()} alunos</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
            isPro
              ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 hover:from-yellow-500 hover:to-yellow-600 shadow-lg hover:shadow-xl'
              : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
          }`}
        >
          {isPro ? (
            <>
              <Lock className="w-4 h-4" />
              <span>Assinar para Acessar</span>
            </>
          ) : (
            <span>Começar Grátis</span>
          )}
        </button>
      </div>
    </div>
  );
}
