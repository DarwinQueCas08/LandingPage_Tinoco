import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="Tinoco Casas Logo" width={40} height={40} className="h-10 w-auto" />
              <div>
                <h3 className="text-lg font-bold">Tinoco Casas</h3>
                <p className="text-sm opacity-80">Estudio Jurídico</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4 max-w-md">
              Brindamos asesoría legal integral, confiable y efectiva, promoviendo relaciones transparentes con nuestros
              clientes y asegurando la defensa de sus derechos e intereses.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+51 1 234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contacto@tinococasas.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Av. Javier Prado Este 123</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/servicios" className="hover:opacity-100 transition-opacity">
                  Derecho Civil
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:opacity-100 transition-opacity">
                  Derecho Penal
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:opacity-100 transition-opacity">
                  Derecho Notarial
                </Link>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Inicia Sesión
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/" className="hover:opacity-100 transition-opacity">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:opacity-100 transition-opacity">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:opacity-100 transition-opacity">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:opacity-100 transition-opacity">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">© 2025 Tinoco Casas Estudio Jurídico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
