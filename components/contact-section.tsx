import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, LogIn } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Contáctanos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Inicia sesión para hacer tu consulta y ver el estado de ella misma. Nuestro equipo te atenderá con
            dedicación y profesionalismo.
          </p>
          <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground flex items-center gap-2 mx-auto">
            <LogIn className="h-5 w-5" />
            Inicia Sesión para Hacer tu Consulta
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Teléfono</h3>
                  <p className="text-muted-foreground">+51 1 234-5678</p>
                  <p className="text-muted-foreground">+51 987-654-321</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">contacto@tinococasas.com</p>
                  <p className="text-muted-foreground">consultas@tinococasas.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Dirección</h3>
                  <p className="text-muted-foreground">
                    Av. Javier Prado Este 123
                    <br />
                    San Isidro, Lima - Perú
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">Horarios</h3>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 9:00 AM - 6:00 PM
                    <br />
                    Sábados: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
