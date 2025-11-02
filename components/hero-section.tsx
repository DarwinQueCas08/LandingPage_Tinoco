import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Award } from "lucide-react"
import Link from "next/link"

const LOGIN_URL = "http://localhost:5173/"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-background via-muted/30 to-secondary/5 py-24 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Asesoría Legal Integral y <span className="text-secondary">Confiable</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Brindamos soluciones jurídicas integrales, confiables y efectivas, promoviendo relaciones transparentes con
            nuestros clientes y asegurando la defensa de sus derechos e intereses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href={LOGIN_URL}>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                Inicia Sesión para Consultar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/servicios">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent font-semibold w-full sm:w-auto"
              >
                Conoce Nuestros Servicios
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary/10 p-5 rounded-full mb-4">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Experiencia Comprobada</h3>
              <p className="text-muted-foreground">Años de experiencia defendiendo los derechos de nuestros clientes</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary/10 p-5 rounded-full mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Atención Personalizada</h3>
              <p className="text-muted-foreground">Cada caso recibe atención dedicada y soluciones a medida</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-secondary/10 p-5 rounded-full mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Compromiso Ético</h3>
              <p className="text-muted-foreground">Actuamos con transparencia y los más altos estándares éticos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
