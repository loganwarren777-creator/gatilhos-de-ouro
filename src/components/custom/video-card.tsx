import { VideoLesson } from '@/lib/types';
import { Play, Eye, Star, Sparkles, Crown } from 'lucide-react';

interface VideoCardProps {
  video: VideoLesson;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-[#d4af37]/20 transition-all duration-300 hover:scale-105 border border-[#d4af37]/20">
      {/* Thumbnail */}
      <div className="relative group">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/80 transition-all flex items-center justify-center">
          <div className="bg-[#d4af37] rounded-full p-4 group-hover:scale-110 transition-transform shadow-2xl">
            <Play className="w-8 h-8 text-black fill-black" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 bg-black/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[#d4af37] text-sm font-semibold border border-[#d4af37]/30">
          {video.duration}
        </div>

        {/* AI Badge */}
        {video.aiGenerated && (
          <div className="absolute top-3 left-3 bg-[#d4af37] px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg">
            <Sparkles className="w-4 h-4 text-black" />
            <span className="text-black text-xs font-bold">IA</span>
          </div>
        )}

        {/* Plan Badge */}
        {video.plan === 'pro' && (
          <div className="absolute top-3 right-3 bg-black px-3 py-1 rounded-full flex items-center space-x-1 shadow-lg border border-[#d4af37]">
            <Crown className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-xs font-bold">PRO</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#d4af37] mb-2 line-clamp-2 hover:text-white transition-colors">
          {video.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {video.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2 mb-4">
          {video.topics.slice(0, 3).map((topic, index) => (
            <span
              key={index}
              className="bg-[#d4af37]/10 text-[#d4af37] px-2 py-1 rounded-lg text-xs font-medium border border-[#d4af37]/30"
            >
              {topic}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-[#d4af37]/20">
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{video.views.toLocaleString('pt-BR')}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
            <span className="font-semibold text-[#d4af37]">{video.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
