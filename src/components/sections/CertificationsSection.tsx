import { BadgeCheck, ShieldAlert, Award, FileText } from "lucide-react";

export function CertificationsSection() {
  const certifications = [
    {
      id: "sni",
      icon: <BadgeCheck className="h-10 w-10 text-primary" />,
      title: "SNI (Standar Nasional Indonesia)",
      description: "Compliance with Indonesian national quality and safety standards.",
    },
    {
      id: "iso9001",
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "ISO 9001:2015",
      description: "Quality Management System for consistent manufacturing output.",
    },
    {
      id: "iso14001",
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "ISO 14001:2015",
      description: "Environmental Management System to reduce ecological footprint.",
    },
    {
      id: "k3",
      icon: <ShieldAlert className="h-10 w-10 text-primary" />,
      title: "K3 (OHS Management)",
      description: "Occupational Health and Safety standards to ensure zero accident target.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Certifications & Compliance
          </h2>
          <p className="text-lg text-muted-foreground">
            We are committed to the highest standards of quality, safety, and environmental management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group p-6 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {cert.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
