import { Users, Truck, Mountain, ShieldCheck } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <Truck className="h-8 w-8 text-primary" />,
      value: "5,000+",
      label: "Tons Monthly Capacity",
      labelId: "Kapasitas Bulanan (Ton)",
      description: "Ready to supply large-scale industrial needs.",
    },
    {
      id: 2,
      icon: <Mountain className="h-8 w-8 text-primary" />,
      value: "200+",
      label: "Hectares Mining Area",
      labelId: "Hektar Area Tambang",
      description: "Sustainable reserve for long-term supply security.",
    },
    {
      id: 3,
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "150+",
      label: "Skilled Workforce",
      labelId: "Tenaga Kerja Ahli",
      description: "Local & professional teams driving standard workflow.",
    },
    {
      id: 4,
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      value: "100%",
      label: "Standard Compliance",
      labelId: "Kepatuhan Standar",
      description: "Strict quality control from quarry to delivery.",
    },
  ];

  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center text-primary-foreground p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4 backdrop-blur-sm">
                {stat.icon}
              </div>
              <p className="text-4xl font-extrabold mb-2 tracking-tight">{stat.value}</p>
              <h3 className="text-lg font-bold mb-1">{stat.label}</h3>
              <p className="text-sm text-primary-foreground/80">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
