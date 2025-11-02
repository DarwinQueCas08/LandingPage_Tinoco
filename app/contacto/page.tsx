import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
              <span className="text-secondary">Contáctanos</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground text-pretty px-4">
              Estamos disponibles para responder tus consultas y brindarte la asesoría legal que necesitas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
              {/* Teléfono Card */}
              <Card className="bg-card border-border hover:shadow-lg transition-all hover:border-secondary h-full">
                <CardContent className="p-6 md:p-8 flex flex-col">
                  <div className="bg-secondary/10 p-3 md:p-4 rounded-lg w-fit mb-4">
                    <Phone className="h-6 md:h-8 w-6 md:w-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg md:text-xl mb-4">Teléfono</h3>
                  <div className="space-y-3 flex-1">
                    <p className="text-muted-foreground font-medium text-sm md:text-base">+51 1 234-5678</p>
                    <p className="text-muted-foreground font-medium text-sm md:text-base">+51 987-654-321</p>
                  </div>
                </CardContent>
              </Card>

              {/* Email Card */}
              <Card className="bg-card border-border hover:shadow-lg transition-all hover:border-secondary h-full">
                <CardContent className="p-6 md:p-8 flex flex-col">
                  <div className="bg-secondary/10 p-3 md:p-4 rounded-lg w-fit mb-4">
                    <Mail className="h-6 md:h-8 w-6 md:w-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg md:text-xl mb-4">Email</h3>
                  <div className="space-y-3 flex-1">
                    <p className="text-muted-foreground font-medium text-sm md:text-base break-all">
                      contacto@tinococasas.com
                    </p>
                    <p className="text-muted-foreground font-medium text-sm md:text-base break-all">
                      consultas@tinococasas.com
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Dirección Card */}
              <Card className="bg-card border-border hover:shadow-lg transition-all hover:border-secondary h-full">
                <CardContent className="p-6 md:p-8 flex flex-col">
                  <div className="bg-secondary/10 p-3 md:p-4 rounded-lg w-fit mb-4">
                    <MapPin className="h-6 md:h-8 w-6 md:w-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg md:text-xl mb-4">Dirección</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base flex-1">
                    Av. Javier Prado Este 123
                    <br className="my-1" />
                    San Isidro, Lima
                    <br className="my-1" />
                    Perú
                  </p>
                </CardContent>
              </Card>

              {/* Horarios Card */}
              <Card className="bg-card border-border hover:shadow-lg transition-all hover:border-secondary h-full">
                <CardContent className="p-6 md:p-8 flex flex-col">
                  <div className="bg-secondary/10 p-3 md:p-4 rounded-lg w-fit mb-4">
                    <Clock className="h-6 md:h-8 w-6 md:w-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg md:text-xl mb-4">Horarios</h3>
                  <div className="space-y-2 flex-1">
                    <p className="text-muted-foreground font-medium text-sm md:text-base">
                      Lun - Vie: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-muted-foreground font-medium text-sm md:text-base">Sáb: 9:00 AM - 1:00 PM</p>
                    <p className="text-muted-foreground font-medium text-sm md:text-base">Dom: Cerrado</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="bg-secondary/5 border-2 border-secondary rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">¿Listo para comenzar?</h2>
              <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Inicia sesión para hacer tu consulta y ver el estado de ella en tiempo real. Nuestro equipo está
                disponible para brindarte la mejor asesoría.
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full sm:w-auto"
              >
                <Send className="mr-2 h-5 w-5" />
                Inicia Sesión para Consultar
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
