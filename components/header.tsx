import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/logo.svg" alt="Tinoco Casas Logo" width={50} height={50} className="h-12 w-auto" />
          <div>
            <h1 className="text-xl font-bold text-foreground">Tinoco Casas</h1>
            <p className="text-sm text-muted-foreground">Estudio Jurídico</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-secondary transition-colors font-medium">
            Inicio
          </Link>
          <Link href="/servicios" className="text-foreground hover:text-secondary transition-colors font-medium">
            Servicios
          </Link>
          <Link href="/nosotros" className="text-foreground hover:text-secondary transition-colors font-medium">
            Nosotros
          </Link>
          <Link href="/contacto" className="text-foreground hover:text-secondary transition-colors font-medium">
            Contacto
          </Link>
        </nav>

        <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium">
          Inicia Sesión
        </Button>
      </div>
    </header>
  )
}
