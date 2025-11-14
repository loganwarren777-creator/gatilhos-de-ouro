"use client";

import { useState, useEffect } from "react";
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Download, 
  Lock, 
  Play, 
  Star, 
  TrendingUp,
  Award,
  BarChart3,
  FileText
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";

export default function DashboardPage() {
  const [userPlan, setUserPlan] = useState<"free" | "pro">("free");
  const [completedCourses, setCompletedCourses] = useState<number[]>([]);

  // Carregar dados do localStorage
  useEffect(() => {
    const savedPlan = localStorage.getItem("userPlan") as "free" | "pro" | null;
    const savedCompleted = localStorage.getItem("completedCourses");
    
    if (savedPlan) setUserPlan(savedPlan);
    if (savedCompleted) setCompletedCourses(JSON.parse(savedCompleted));
  }, []);

  // Salvar plano
  const handleUpgradeToPro = () => {
    setUserPlan("pro");
    localStorage.setItem("userPlan", "pro");
  };

  // Marcar curso como concluído
  const toggleCourseCompletion = (courseId: number) => {
    const newCompleted = completedCourses.includes(courseId)
      ? completedCourses.filter(id => id !== courseId)
      : [...completedCourses, courseId];
    
    setCompletedCourses(newCompleted);
    localStorage.setItem("completedCourses", JSON.stringify(newCompleted));
  };

  const myCourses = [
    {
      id: 1,
      title: "Fundamentos de Vendas",
      progress: 75,
      duration: "8 horas",
      lessons: 24,
      completedLessons: 18,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop",
      free: true
    },
    {
      id: 2,
      title: "Marketing Digital para Iniciantes",
      progress: 45,
      duration: "10 horas",
      lessons: 32,
      completedLessons: 14,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      free: false
    },
    {
      id: 3,
      title: "Gestão de Redes Sociais",
      progress: 20,
      duration: "9 horas",
      lessons: 28,
      completedLessons: 6,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
      free: true
    }
  ];

  const stats = [
    {
      icon: BookOpen,
      label: "Cursos Ativos",
      value: myCourses.length,
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: CheckCircle,
      label: "Cursos Concluídos",
      value: completedCourses.length,
      color: "from-green-600 to-green-700"
    },
    {
      icon: Clock,
      label: "Horas de Estudo",
      value: "23h",
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: Award,
      label: "Certificados",
      value: completedCourses.length,
      color: "from-yellow-600 to-yellow-700"
    }
  ];

  const recentEbooks = [
    {
      title: "Guia Completo de Vendas",
      pages: 120,
      free: true
    },
    {
      title: "Marketing Digital na Prática",
      pages: 150,
      free: true
    },
    {
      title: "50 Scripts de Vendas",
      pages: 85,
      free: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Meu Painel de Aprendizado
            </h1>
            <p className="text-gray-600">
              Acompanhe seu progresso e continue aprendendo
            </p>
          </div>

          {/* Plan Badge */}
          <div className="mb-8">
            {userPlan === "free" ? (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Teste Grátis
                      </span>
                      <span className="text-sm text-gray-600">5 dias restantes</span>
                    </div>
                    <p className="text-gray-700">
                      Aproveite seu período de teste! Upgrade para PRO e tenha acesso ilimitado.
                    </p>
                  </div>
                  <button 
                    onClick={handleUpgradeToPro}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap"
                  >
                    Assinar PRO
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 fill-white" />
                      <span className="font-bold text-lg">Plano PRO Ativo</span>
                    </div>
                    <p className="text-white/90">
                      Você tem acesso ilimitado a todos os cursos e e-books!
                    </p>
                  </div>
                  <Award className="w-12 h-12 text-white/50" />
                </div>
              </div>
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className={`bg-gradient-to-br ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* My Courses */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Meus Cursos</h2>
                  <Link 
                    href="/cursos"
                    className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                  >
                    Ver todos
                  </Link>
                </div>

                <div className="space-y-4">
                  {myCourses.map((course) => (
                    <div 
                      key={course.id}
                      className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all"
                    >
                      <div className="flex gap-4">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="font-bold text-gray-900 truncate">
                              {course.title}
                            </h3>
                            {!course.free && userPlan === "free" && (
                              <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                            )}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Play className="w-4 h-4" />
                              <span>{course.completedLessons}/{course.lessons} aulas</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{course.duration}</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Progresso</span>
                              <span className="font-medium text-gray-900">{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all"
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                          </div>

                          <div className="flex gap-2 mt-3">
                            <button 
                              className={`flex-1 py-2 rounded-lg font-medium text-sm transition-all ${
                                course.free || userPlan === "pro"
                                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                              }`}
                              disabled={!course.free && userPlan === "free"}
                            >
                              Continuar
                            </button>
                            {course.progress === 100 && (
                              <button 
                                onClick={() => toggleCourseCompletion(course.id)}
                                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                                  completedCourses.includes(course.id)
                                    ? 'bg-green-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                              >
                                {completedCourses.includes(course.id) ? (
                                  <CheckCircle className="w-5 h-5" />
                                ) : (
                                  'Concluir'
                                )}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Chart */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Seu Progresso</h2>
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600">Continue estudando para ver suas estatísticas!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* E-books */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">E-books Recentes</h3>
                <div className="space-y-3">
                  {recentEbooks.map((ebook, index) => (
                    <div 
                      key={index}
                      className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 text-sm mb-1 truncate">
                            {ebook.title}
                          </h4>
                          <p className="text-xs text-gray-600 mb-2">{ebook.pages} páginas</p>
                          <button 
                            className={`w-full py-1.5 rounded-lg text-xs font-medium transition-all ${
                              ebook.free || userPlan === "pro"
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                            disabled={!ebook.free && userPlan === "free"}
                          >
                            <Download className="w-3 h-3 inline mr-1" />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link 
                  href="/cursos"
                  className="block text-center text-blue-600 font-medium text-sm mt-4 hover:text-blue-700 transition-colors"
                >
                  Ver todos os e-books
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                <TrendingUp className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Continue Aprendendo!</h3>
                <p className="text-white/90 text-sm mb-4">
                  Você está no caminho certo. Complete mais cursos para desbloquear certificados.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm font-medium">Meta Semanal</p>
                  <p className="text-2xl font-bold">3/5 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
