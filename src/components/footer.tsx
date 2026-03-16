import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-[var(--color-navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-[var(--color-gold)]" />
              <span className="font-[family-name:var(--font-playfair)] text-lg font-bold">
                Sementes da Misericórdia
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Arquidiocese de Santa Maria de Belém do Grão Pará
              Paróquia Basílica Santuário de N. S. de Nazaré
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[var(--color-gold)]">Navegação</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/sobre" className="hover:text-white transition-colors">Quem Somos</Link></li>
              <li><Link href="/noticias" className="hover:text-white transition-colors">Notícias</Link></li>
              <li><Link href="/eventos" className="hover:text-white transition-colors">Agenda</Link></li>
              <li><Link href="/doacao" className="hover:text-white transition-colors">Doe</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[var(--color-gold)]">Contato</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>contato@sementesdamisericordia.org</li>
              <li>(91) 99999-0000</li>
              <li>Belém, PA — Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Sementes da Misericórdia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
