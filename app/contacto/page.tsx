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
      <section className="bg-gradient-to-br from-background via-background to-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              <span className="text-secondary">Contáctanos</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Estamos disponibles para responder tus consultas y brindarte la asesoría legal que necesitas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="bg-card border-border hover:shadow-lg transition-all hover:border-secondary">
                <CardContent className="p-8">
                  <div className="bg-secondary/10 p-4 rounded-lg w-fit mb-4">
                    <Phone className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3">Teléfono</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground font-medium">+51 1 234-5678</p>
                    <p className="text-muted-foreground font-medium">+51 987-654-321</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-all hover:border-secondary">
                <CardContent className="p-8">
                  <div className="bg-secondary/10 p-4 rounded-lg w-fit mb-4">
                    <Mail className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3">Email</h3>
                  <div className="space-y-2">
                    <p className="text-muted-foreground font-medium break-all">contacto@tinococasas.com</p>
                    <p className="text-muted-foreground font-medium break-all">consultas@tinococasas.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-all hover:border-secondary">
                <CardContent className="p-8">
                  <div className="bg-secondary/10 p-4 rounded-lg w-fit mb-4">
                    <MapPin className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3">Dirección</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    Av. Javier Prado Este 123
                    <br />
                    San Isidro, Lima
                    <br />
                    Perú
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:shadow-lg transition-all hover:border-secondary">
                <CardContent className="p-8">
                  <div className="bg-secondary/10 p-4 rounded-lg w-fit mb-4">
                    <Clock className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3">Horarios</h3>
                  <div className="space-y-1">
                    <p className="text-muted-foreground font-medium">Lun - Vie: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground font-medium">Sáb: 9:00 AM - 1:00 PM</p>
                    <p className="text-muted-foreground font-medium">Dom: Cerrado</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="bg-secondary/5 border-2 border-secondary rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">¿Listo para comenzar?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Inicia sesión para hacer tu consulta y ver el estado de ella en tiempo real. Nuestro equipo está
                disponible para brindarte la mejor asesoría.
              </p>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
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
