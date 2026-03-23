import { ShieldAlert, Activity, Heart, Eye } from "lucide-react";

export function HSESection() {
  const safetyMetrics = [
    {
      id: "incidents",
      icon: <ShieldAlert className="h-10 w-10 text-destructive" />,
      value: "0",
      label: "Fatal Incidents",
      description: "Targeting zero harm across all mining extraction shifts.",
    },
    {
      id: "safe-hours",
      icon: <Activity className="h-10 w-10 text-primary" />,
      value: "20,000+",
      label: "Safe Work Hours",
      description: "Continuous operation without major time-loss failures.",
    },
    {
      id: "medical",
      icon: <Heart className="h-10 w-10 text-red-500" />,
      value: "100%",
      label: "Medical Coverage",
      description: "Regular checkups and certified on-site emergency aides.",
    },
    {
      id: "training",
      icon: <Eye className="h-10 w-10 text-amber-500" />,
      value: "Weekly",
      label: "Safety Drills",
      description: "Mandatory hazard identification & evacuation standardizing.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-destructive/5 dark:bg-destructive/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texts */}
          <div className="space-y-6">
            <div>
              <span className="inline-flex px-3 py-1 bg-destructive/10 text-destructive text-xs font-semibold rounded-full mb-3">
                Health, Safety & Environment (HSE)
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Prioritizing Human Safety Above All
              </h2>
              <p className="text-lg text-muted-foreground">
                We believe that every worker should return home safely at the end of every shift. Our strict K3 (Occupational Health & Safety) enforcement ensures the highest security standards on site.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {safetyMetrics.map((item) => (
                <div key={item.id} className="p-5 bg-card rounded-2xl border border-border/50 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-muted">{item.icon}</div>
                    <p className="text-2xl font-bold text-foreground">{item.value}</p>
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visuals */}
          <div className="relative aspect-square md:aspect-video rounded-3xl bg-secondary overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-primary/10" />
             <div className="p-8 text-center max-w-sm">
               <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                 <ShieldAlert className="h-8 w-8 text-destructive" />
               </div>
               <h3 className="text-xl font-bold text-foreground">K3 Compliance Verified</h3>
               <p className="text-sm text-muted-foreground mt-2">Passed full Indonesian Ministry standard audits for Quarry Safe Procedures.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
