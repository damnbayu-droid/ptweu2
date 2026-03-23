export function SpecificationTable() {
  const specs = [
    { component: "Calcium Carbonate (CaCO3)", limestone: "98.2%", quicklime: "95.5%", hydrated: "92.0%" },
    { component: "Calcium Oxide (CaO)", limestone: "55.0%", quicklime: "85.0%+", hydrated: "71.5%" },
    { component: "Magnesium Oxide (MgO)", limestone: "0.41%", quicklime: "0.45%", hydrated: "0.50%" },
    { component: "Iron Oxide (Fe2O3)", limestone: "0.05%", quicklime: "0.06%", hydrated: "0.06%" },
    { component: "Silica (SiO2)", limestone: "0.80%", quicklime: "0.85%", hydrated: "0.90%" },
    { component: "Loss on Ignition (LOI)", limestone: "43.7%", quicklime: "0.50%", hydrated: "24.0%" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Typical Chemical Composition
          </h2>
          <p className="text-lg text-muted-foreground">
            Our materials are tested independently to meet exact industrial standards. Higher purity levels for custom batches available on request.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-2xl border border-border/50 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="px-6 py-4">Chemical Component</th>
                  <th className="px-6 py-4 text-center">Limestone</th>
                  <th className="px-6 py-4 text-center">Quicklime (CaO)</th>
                  <th className="px-6 py-4 text-center">Hydrated Lime</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50 text-muted-foreground">
                {specs.map((spec, index) => (
                  <tr key={index} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{spec.component}</td>
                    <td className="px-6 py-4 text-center">{spec.limestone}</td>
                    <td className="px-6 py-4 text-center">{spec.quicklime}</td>
                    <td className="px-6 py-4 text-center">{spec.hydrated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
