import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, CheckCircle } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Sobre Tinoco Casas</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Un estudio jurídico peruano comprometido con la excelencia profesional, la ética y el compromiso con la
              justicia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Nuestra Historia</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Tinoco Casas es un estudio jurídico peruano que brinda asesoría legal y representación en diversas áreas
                del derecho, como civil, penal y notarial. Nos caracterizamos por ofrecer un enfoque integral y ético al
                servicio de clientes individuales, empresas y entidades públicas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fundado con el objetivo de proporcionar soluciones jurídicas confiables y eficientes, el estudio se ha
                consolidado en el sector gracias a la experiencia de su equipo profesional, su compromiso con la ética y
                su servicio personalizado.
              </p>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Casos Exitosos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Compromiso Ético</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Atención al Cliente</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Nuestra Visión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser un estudio jurídico líder en el país por su excelencia profesional, ética y compromiso con la
                  justicia.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Nuestra Misión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proporcionar asesoría jurídica integral, confiable y efectiva, promoviendo relaciones transparentes
                  con los clientes y asegurando la defensa de sus derechos e intereses.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-primary/5 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Nuestro Compromiso con el Futuro</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Modernización</h4>
                  <p className="text-sm text-muted-foreground">Modernización continua de nuestros procesos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Digitalización</h4>
                  <p className="text-sm text-muted-foreground">Digitalización de servicios para mayor eficiencia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Mejora Continua</h4>
                  <p className="text-sm text-muted-foreground">Mejora continua en la calidad del servicio al cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
