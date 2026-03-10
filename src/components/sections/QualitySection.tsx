import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FlaskConical, Building, Award, FileCheck } from "lucide-react";

interface LabInfo {
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface TestingType {
  name: string;
  nameId: string;
}

const LABS: LabInfo[] = [
  {
    name: "Minertech Indonesia",
    description: "Independent mineral testing and analysis laboratory",
    icon: <FlaskConical className="h-6 w-6" />,
  },
  {
    name: "Intertek Minerals",
    description: "Global leader in testing, inspection, and certification",
    icon: <Award className="h-6 w-6" />,
  },
  {
    name: "Sucofindo",
    description: "Indonesian state-owned inspection and testing company",
    icon: <Building className="h-6 w-6" />,
  },
  {
    name: "Government Public Works Laboratory",
    description: "Official testing laboratory for construction materials",
    icon: <FileCheck className="h-6 w-6" />,
  },
];

const TESTING_TYPES: TestingType[] = [
  { name: "XRF Whole Rock Analysis", nameId: "Analisis XRF Whole Rock" },
  { name: "Chemical Composition Analysis", nameId: "Analisis Komposisi Kimia" },
  { name: "Loss on Ignition (LOI)", nameId: "Loss on Ignition (LOI)" },
  { name: "Material Density Testing", nameId: "Pengujian Kepadatan Material" },
  { name: "Abrasion Testing", nameId: "Pengujian Abrasi" },
];

export function QualitySection() {
  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Quality Assurance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our products undergo rigorous testing at certified laboratories to ensure the highest quality standards for industrial applications.
          </p>
        </div>

        {/* Testing Labs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {LABS.map((lab, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                  {lab.icon}
                </div>
                <CardTitle className="text-base">{lab.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{lab.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testing Types */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Testing & Analysis Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TESTING_TYPES.map((test, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-background border border-border/50"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">{test.name}</p>
                    <p className="text-xs text-muted-foreground">{test.nameId}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
