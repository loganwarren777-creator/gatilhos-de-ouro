import { BookOpen, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                ProVendas Academy
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transforme sua carreira em vendas e marketing digital com cursos práticos, 
              e-books exclusivos e suporte completo para iniciantes.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@provendas.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(11) 99999-9999</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="hover:text-blue-400 transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-blue-400 transition-colors">
                  Meu Painel
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ProVendas Academy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
