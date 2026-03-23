import { Leaf, TreePine, Droplets, ShieldCheck } from "lucide-react";

export function SustainabilitySection() {
  const initiatives = [
    {
      id: "reclamation",
      icon: <TreePine className="h-10 w-10 text-emerald-600" />,
      title: "Land Reclamation",
      description: "We are committed to re-greening mined areas to restore local biodiversity and ecosystems.",
    },
    {
      id: "emission",
      icon: <Leaf className="h-10 w-10 text-emerald-600" />,
      title: "Emission Control",
      description: "Utilizing modern processing machinery to minimize dust and carbon emissions.",
    },
    {
      id: "water",
      icon: <Droplets className="h-10 w-10 text-emerald-600" />,
      title: "Water Management",
      description: "Recycling industrial water and utilizing sediment ponds to protect local water tables.",
    },
    {
      id: "community",
      icon: <ShieldCheck className="h-10 w-10 text-emerald-600" />,
      title: "Community Growth",
      description: "Empowering surrounding societies through educational aids and job-creations.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-emerald-50/30 dark:bg-emerald-950/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visuals */}
          <div className="relative aspect-video rounded-3xl bg-secondary overflow-hidden items-center justify-center flex">
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-primary/10" />
             <div className="p-8 text-center max-w-sm">
               <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mx-auto mb-4">
                 <Leaf className="h-8 w-8 text-emerald-600" />
               </div>
               <h3 className="text-xl font-bold text-foreground">Carbon Balanced Mining</h3>
               <p className="text-sm text-muted-foreground mt-2">Targeting 35% emission reductions by 2028 with green logistics.</p>
             </div>
          </div>

          {/* Texts */}
          <div className="space-y-6">
            <div>
              <span className="inline-flex px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-full mb-3">
                ESG & Sustainability
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Preserving Ecology For Future Generations
              </h2>
              <p className="text-lg text-muted-foreground">
                PT Wira Energi Utama operates with full awareness of ecological responsibilities. Our extraction processes incorporate post-mining reclamation to ensure nature can thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {initiatives.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-background border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
