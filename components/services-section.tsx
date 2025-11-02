import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gavel, FileText, Building, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Gavel,
      title: "Derecho Civil",
      description: "Contratos, responsabilidad civil, derecho de familia, sucesiones y más.",
      features: ["Contratos y obligaciones", "Derecho de familia", "Sucesiones y testamentos", "Responsabilidad civil"],
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
      ],
    },
    {
      icon: FileText,
      title: "Derecho Notarial",
      description: "Servicios notariales y registrales para particulares y empresas.",
      features: ["Escrituras públicas", "Poderes y autorizaciones", "Constitución de empresas", "Trámites registrales"],
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Nuestras Áreas de Práctica</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofrecemos asesoría legal especializada en diversas áreas del derecho, adaptándonos a las necesidades
            actuales del entorno jurídico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-secondary/10 p-3 rounded-lg w-fit mb-4">
                  <service.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
                >
                  Más Información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
