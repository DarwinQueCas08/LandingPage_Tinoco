import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, CheckCircle, Users, Award, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Sobre <span className="text-secondary">Tinoco Casas</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Un estudio jurídico peruano comprometido con la excelencia profesional, la ética y el compromiso con la
              justicia.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* History */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Nuestra Historia</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                    Tinoco Casas es un estudio jurídico peruano que brinda asesoría legal y representación en diversas
                    áreas del derecho, como civil, penal y notarial. Nos caracterizamos por ofrecer un enfoque integral
                    y ético al servicio de clientes individuales, empresas y entidades públicas.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Fundado con el objetivo de proporcionar soluciones jurídicas confiables y eficientes, el estudio se
                    ha consolidado en el sector gracias a la experiencia de su equipo profesional, su compromiso con la
                    ética y su servicio personalizado.
                  </p>
                </div>

                {/* Stats */}
                <div className="bg-secondary/5 border-l-4 border-secondary p-8 rounded-lg">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                      <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Casos Exitosos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                      <div className="text-sm text-muted-foreground">Compromiso Ético</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Disponibilidad</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission and Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-secondary/5 border-2 border-secondary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-secondary p-3 rounded-lg">
                      <Target className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Nuestra Misión</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Proporcionar asesoría jurídica integral, confiable y efectiva, promoviendo relaciones transparentes
                    con los clientes y asegurando la defensa de sus derechos e intereses.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 border-2 border-secondary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-secondary p-3 rounded-lg">
                      <Eye className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Nuestra Visión</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Ser un estudio jurídico líder en el país por su excelencia profesional, ética y compromiso con la
                    justicia, reconocido por clientes y colegas.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Nuestros Valores</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-secondary/10 p-4 rounded-lg w-fit mb-4">
                      <Award className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Excelencia</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nos comprometemos con la máxima calidad en cada aspecto de nuestro trabajo profesional.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-secondary/10 p-4 rounded-lg w-fit mb-4">
                      <CheckCircle className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Integridad</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      La ética y la transparencia son la base de todas nuestras relaciones y decisiones.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-secondary/10 p-4 rounded-lg w-fit mb-4">
                      <Users className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Dedicación</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cada cliente recibe atención personalizada y soluciones adaptadas a sus necesidades.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Future Commitment */}
            <div className="bg-secondary/5 p-8 rounded-lg border-l-4 border-secondary">
              <h2 className="text-2xl font-bold text-foreground mb-6">Nuestro Compromiso con el Futuro</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Innovación</h4>
                    <p className="text-sm text-muted-foreground">
                      Modernización continua de nuestros procesos y servicios
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Digitalización</h4>
                    <p className="text-sm text-muted-foreground">
                      Adopción de tecnología para mayor eficiencia y acceso
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Mejora Continua</h4>
                    <p className="text-sm text-muted-foreground">Capacitación permanente del equipo profesional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
