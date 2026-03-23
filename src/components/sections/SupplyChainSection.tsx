import { Truck, Ship, Factory, Fuel } from "lucide-react";

export function SupplyChainSection() {
  const steps = [
    {
      id: 1,
      icon: <Fuel className="h-6 w-6 text-primary" />,
      title: "Extraction & Blasting",
      description: "Careful mining at our quarry to supply high-purity limestone feeds.",
    },
    {
      id: 2,
      icon: <Factory className="h-6 w-6 text-primary" />,
      title: "Crushing & Grading",
      description: "Our in-house crushing plants break down sizes for targeted industry meshes.",
    },
    {
      id: 3,
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Land Transportation",
      description: "Operational fleet ensures speedy delivery to local storage or ports.",
    },
    {
      id: 4,
      icon: <Ship className="h-6 w-6 text-primary" />,
      title: "Domestic shipping",
      description: "Direct seaport links loaded safely with high capacity barge routes.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Logistics & Supply Chain
          </h2>
          <p className="text-lg text-muted-foreground">
            From the core of the earth to your manufacturing plant, we run a synchronized supply pipeline guaranteeing timeliness.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center group">
                {/* Step Circle */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {step.icon}
                </div>
                {/* Text Layout */}
                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1">
                  Step {step.id}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
