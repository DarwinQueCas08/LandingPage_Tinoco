import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gavel, Building, FileText, ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Gavel,
      title: "Derecho Civil",
      description: "Contratos, responsabilidad civil, derecho de familia, sucesiones y más.",
      features: [
        "Contratos y obligaciones",
        "Derecho de familia",
        "Sucesiones y testamentos",
        "Responsabilidad civil",
        "Compraventa de inmuebles",
        "Mediación y arbitraje",
      ],
      details:
        "Nuestro equipo especializado en derecho civil brinda asesoría integral en todas las áreas civiles, desde contratos comerciales hasta asuntos familiares complejos.",
    },
    {
      icon: Building,
      title: "Derecho Penal",
      description: "Defensa penal integral para personas naturales y jurídicas.",
      features: [
        "Defensa en procesos penales",
        "Asesoría en investigaciones",
        "Recursos y apelaciones",
        "Derecho penal empresarial",
        "Protección de derechos",
        "Negociaciones penales",
      ],
      details:
        "Representamos a nuestros clientes en procesos penales complejos, asegurando una defensa efectiva y el respeto de sus derechos fundamentales.",
    },
    {
      icon: FileText,
      title: "Derecho Notarial",
      description: "Servicios notariales y registrales para particulares y empresas.",
      features: [
        "Escrituras públicas",
        "Poderes y autorizaciones",
        "Constitución de empresas",
        "Trámites registrales",
        "Certificaciones",
        "Legalizaciones",
      ],
      details:
        "Ofrecemos servicios notariales completos con agilidad y eficiencia, garantizando la validez legal de todos los documentos.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section for Services */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Nuestras Áreas de <span className="text-secondary">Práctica</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Ofrecemos asesoría legal especializada en diversas áreas del derecho, adaptándonos a las necesidades
              actuales del entorno jurídico peruano.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-xl transition-shadow h-full flex flex-col"
              >
                <CardHeader>
                  <div className="bg-secondary/10 p-4 rounded-lg w-fit mb-4">
                    <service.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.details}</p>

                  <div className="mb-8 flex-grow">
                    <h4 className="font-semibold text-foreground mb-4">Servicios incluidos:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-auto">
                    Solicitar Consulta
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
