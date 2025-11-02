"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const LOGIN_URL = "http://localhost:5173/"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image src="/logo.svg" alt="Tinoco Casas Logo" width={50} height={50} className="h-12 w-auto" />
          <div className="hidden sm:block">
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

        <div className="flex items-center gap-4">
          <Link href={LOGIN_URL}>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium hidden sm:inline-flex">
              Inicia Sesión
            </Button>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-foreground hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="text-foreground hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/nosotros"
              className="text-foreground hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="text-foreground hover:text-secondary transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <Link href={LOGIN_URL} className="w-full">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-medium w-full sm:hidden">
                Inicia Sesión
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
