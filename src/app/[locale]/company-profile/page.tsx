"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend
} from "recharts";
import { 
  Building2, Target, Eye, Users, ShieldAlert, Award, FileText, 
  MapPin, Clock, Globe, AwardIcon, Briefcase, Heart, ChevronRight,
  Layers, Droplets, Boxes, Wrench, GraduationCap, TrendingUp, Coins
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANY_INFO } from "@/lib/seo";

// Data for Visuals
const PRODUCTION_DATA = [
  { month: "Jan", capacity: 4200, output: 4000 },
  { month: "Feb", capacity: 4200, output: 4100 },
  { month: "Mar", capacity: 4500, output: 4300 },
  { month: "Apr", capacity: 4500, output: 4400 },
  { month: "May", capacity: 5000, output: 4800 },
  { month: "Jun", capacity: 5000, output: 4950 },
];

const RESERVE_DATA = [
  { material: "Limestone Type A", amount: 12.5 },
  { material: "Limestone Type B", amount: 8.2 },
  { material: "Calcite Reserves", amount: 4.8 },
  { material: "Dolomite Logs", amount: 3.1 },
];

const SAFETY_DATA = [
  { name: "Safe Work Hours", value: 85 },
  { name: "Training Hours", value: 12 },
  { name: "Maintenance", value: 3 },
];

const COLORS = ["#0A2540", "#00D4B5", "#6366f1", "#f59e0b"];

const TIMELINE_DATA = [
  { year: "2018", title: "Inception", desc: "Acquisition of primary mining concessions and Initial quarrying licenses." },
  { year: "2020", title: "Capacity Double", desc: "Installed fully automated 500-ton Jaw Crusher node to double throughput." },
  { year: "2022", title: "Certifications", desc: "Awarded ISO 9001 and ISO 14001 certification compliance safely." },
  { year: "2024", title: "Logistics Hub", desc: "Finalized seaport dispatch logistics links to maintain direct shipments." },
  { year: "2026", title: "Green Mining", desc: "Initiating absolute carbon offset and solar crusher automation grid." },
];

const INDUSTRIES = [
  { id: 1, title: "Steel & Metallurgy", desc: "Purity fluxes for steel smelting nodes.", icon: <Briefcase className="h-6 w-6" /> },
  { id: 2, title: "Paper & Pulp Manufacturing", desc: "Fillers providing high brightness outputs.", icon: <FileText className="h-6 w-6" /> },
  { id: 3, title: "Plastics & PVC", desc: "Extrusion fillers density reinforcements.", icon: <Layers className="h-6 w-6" /> },
  { id: 4, title: "Water Treatment", desc: "PH balances with neutralizer limestone aggregates.", icon: <Droplets className="h-6 w-6" /> },
  { id: 5, title: "Agriculture & Soil", desc: "De-acidification of soil properties layout frames.", icon: <Heart className="h-6 w-6" /> },
  { id: 6, title: "Construction Aggregates", desc: "Ready-mix concretes strength yields.", icon: <Building2 className="h-6 w-6" /> },
];

const LAB_EQUIPMENT = [
  { id: 1, name: "X-Ray Fluorescence (XRF)", type: "Chemical Analysis", desc: "Determining precise elemental oxides with 99.8% accurate thresholding." },
  { id: 2, name: "Laser Diffraction Analyzer", type: "Particle Size", desc: "Measuring Microns threshold sizes targeting d50/d90 accuracy weights." },
  { id: 3, name: "Moisture Oven Calibration", type: "Physical Inspection", desc: "Regulating LOI metrics ensuring dispatch dryness bounds." },
  { id: 4, name: "Whiteness Meter", type: "Optical Analysis", desc: "Monitoring L* a* b* color specs targeting 94%+ whiteness index." },
];

const GOVERNANCE_PRINCIPLES = [
  { title: "Transparency", desc: "Monthly audit streams guaranteeing trust.", icon: <Eye className="h-5 w-5 text-primary" /> },
  { title: "Fair Integrity", desc: "Anti-bribery enforcement safeguards mapped.", icon: <ShieldAlert className="h-5 w-5 text-primary" /> },
  { title: "Eco Efficiency", desc: "Sustainable waste reduction pipelines.", icon: <Target className="h-5 w-5 text-primary" /> },
  { title: "Workforce Care", desc: "Strict salary standard threshold alignment.", icon: <Users className="h-5 w-5 text-primary" /> },
];

const ROADMAP = [
  { step: "Phase 1: 2026", task: "Green Automation", desc: "Switching to solar setups powering quarry crusher machines grid." },
  { step: "Phase 2: 2027", task: "Scaling Output", desc: "Adding secondary crushing plants hitting 10,000 monthly tons." },
  { step: "Phase 3: 2029", task: "Global Shipping", desc: "Opening global distribution channels into Asia-Pacific hubs." },
];

const CSR_ACTIVITIES = [
  { id: 1, title: "Local Scholarship", metric: "50+ Students", desc: "Funding operations for surrounding district educational nodes.", icon: <GraduationCap className="h-6 w-6 text-primary" /> },
  { id: 2, title: "Reclamation Forestry", metric: "5,000+ Trees", desc: "Reforestation of post-quarrying yields sustaining local greenery.", icon: <Target className="h-6 w-6 text-primary" /> },
  { id: 3, title: "Healthcare Aid", metric: "Weekly Clinic", desc: "Providing on-site general medics for neighboring villagers safely.", icon: <Heart className="h-6 w-6 text-primary" /> },
];

const MANAGEMENT = [
  { name: "Suryono Raharjo", role: "Chief Executive Officer (CEO)", bio: "20+ years in Indonesian mineral and aggregate dispatch expansions." },
  { name: "Diana Putri", role: "Chief Financial Officer (CFO)", bio: "Expert in liquidity and transparency buffers mapping corporate strategy." },
  { name: "Budi Santoso", role: "Operations Director", bio: "Strict safety enforcer leading quarry-level layout executions." },
];

const LOCATIONS = [
  { id: 1, name: "Quarry Site A", type: "Extraction Zone", details: "Main extraction zone containing mass pure calcite aggregates nodes." },
  { id: 2, name: "Crushing Plant B", type: "Processing Hub", details: "Multi-graded grid meshes machinery setups fully operational." },
  { id: 3, name: "Barge Seaport C", type: "Dispatch Terminal", details: "Water dispatch nodes linking transport directly to anchorages." },
];

export default function CompanyProfilePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-background">
      {/* 1. Hero Profile */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/80 z-10" />
        <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center">
          <span className="inline-flex px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full mb-4 backdrop-blur-sm">
            Corporate Statement
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Company Profile
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            PT Wira Energi Utama: An integrated perspective towards sustainable mining, high-purity aggregates, and global scalability.
          </p>
        </div>
      </section>

      {/* 2. Executive Summary / CEO Message */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-muted shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-background/10 z-10" />
              {/* Profile Image Placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-secondary">
                <Users className="h-24 w-24 text-primary/40" />
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-sm font-bold text-primary uppercase tracking-widest">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Vision & Leadership Value
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PT Wira Energi Utama was founded with a mission to bridge Indonesian mineral resources with global industry standards. We specialize in high-grade limestone extraction and calcium carbonate derivatives.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground font-medium text-lg my-6">
                "Our operational guidelines enforce safety and green ecology. We don't just mine; we supply the foundation for modern manufacturing foundations."
              </blockquote>
              <div>
                <p className="font-bold text-foreground text-lg">Board Of Directors</p>
                <p className="text-sm text-muted-foreground">PT Wira Energi Utama Executive committee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision, Mission & Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-border/40 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become the leading producer and primary strategic partner for high-purity limestone and calcium carbonate derivatives in Southeast Asia, ensuring responsible mining models.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/40 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Eye className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-4">
                  <li>Delivering consistent chemical specifications for industrial users.</li>
                  <li>Maintaining zero-accident safety benchmarks covering our workforce.</li>
                  <li>Executing periodic land reclamation protecting natural local ecology.</li>
                  <li>Expanding logistics pipelines to maximize client satisfaction rate.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Graphical Visualizations (Recharts) */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Operational Analytics</h2>
            <p className="text-slate-400">Data transparency showcasing monthly volumes, reserve capacities, and risk mitigations stats.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Chart 1: Production Output */}
            <Card className="bg-slate-900 border-slate-800 text-slate-100">
              <CardHeader>
                <CardTitle className="text-lg">Monthly Production & Output (Tons)</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={PRODUCTION_DATA}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="month" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155", color: "#f8fafc" }} />
                      <Legend />
                      <Line type="monotone" dataKey="capacity" stroke="#00D4B5" strokeWidth={3} name="Limit Cap" />
                      <Line type="monotone" dataKey="output" stroke="#6366f1" strokeWidth={3} name="Output Output" />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>

            {/* Chart 2: Geological reserves and weights */}
            <Card className="bg-slate-900 border-slate-800 text-slate-100">
              <CardHeader>
                <CardTitle className="text-lg">Structural Reserves (Million Tons)</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={RESERVE_DATA}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="material" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155", color: "#f8fafc" }} />
                      <Bar dataKey="amount" fill="#00D4B5" radius={[6, 6, 0, 0]} name="Volume" />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Chart 3: Safety Percentage Pie Chart */}
          <div className="flex justify-center mt-12">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col items-center">
              <h3 className="font-bold text-md mb-4 text-slate-200">Total Safety Allocation (%)</h3>
              <div className="h-64 w-full">
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={SAFETY_DATA} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                        {SAFETY_DATA.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Legal and Clearances Table */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Legal Standards & Permits</h2>
            <p className="text-muted-foreground">Full transparency of our operating certificates compliance list.</p>
          </div>
          <div className="border border-border/50 rounded-xl shadow-sm overflow-hidden bg-card">
            <table className="w-full text-sm text-left">
              <thead className="bg-primary text-primary-foreground font-semibold">
                <tr>
                  <th className="px-6 py-4">Documentation No.</th>
                  <th className="px-6 py-4">Verification Certificate</th>
                  <th className="px-6 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-foreground">IUP/A2-182</td>
                  <td className="px-6 py-4">Mining Business License (Operation & Production)</td>
                  <td className="px-6 py-4 text-center"><span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs">Verified</span></td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-foreground">AMDAL/105-B</td>
                  <td className="px-6 py-4">Environmental Impact Assessment Clearance</td>
                  <td className="px-6 py-4 text-center"><span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs">Verified</span></td>
                </tr>
                <tr className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-foreground">SKAB/302-NW</td>
                  <td className="px-6 py-4">Certificate of Origin (Product Dispatch Validation)</td>
                  <td className="px-6 py-4 text-center"><span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs">Verified</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Assets showcase & Infrastructure list */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Machinery & Operational Fleet</h2>
            <p className="text-muted-foreground">We run specialized components covering mass grading and extraction logistics correctly.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, title: "Mobile Crushing Plant", count: "2 Units", desc: "For direct quarry aggregate grid mesh processing." },
              { id: 2, title: "Hydraulic Excavators", count: "8 Units", desc: "Ensuring continuous high tonnage bucket loads." },
              { id: 3, title: "Dump Truck 20T Fleet", count: "15 Units", desc: "Safe land-hauling cycles on structured mining parameters." },
              { id: 4, title: "Static Screening Plant", count: "4 Units", desc: "Providing multi-graded limestone derivatives standard checks." },
            ].map((asset) => (
              <div key={asset.id} className="p-6 bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                <p className="text-sm font-bold text-primary mb-1">{asset.count}</p>
                <h3 className="font-bold text-lg text-foreground mb-2">{asset.title}</h3>
                <p className="text-xs text-muted-foreground">{asset.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Corporate History Timeline */}
      <section className="py-16 bg-background border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-2">Our Journey</h2>
            <p className="text-muted-foreground">Key milestones that defined our growth and scale.</p>
          </div>
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-12">
            {TIMELINE_DATA.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <span className="text-sm font-bold text-primary mb-1 block">{item.year}</span>
                <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Industries & Markets served */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Industries & Markets Served</h2>
            <p className="text-muted-foreground">Supplying exact purity thresholds to diverse manufacturing segments.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {INDUSTRIES.map((industry) => (
              <div key={industry.id} className="p-5 bg-card rounded-2xl border border-border/50 hover:shadow-md transition-all flex items-start gap-4">
                <div className="p-2 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="font-bold text-md text-foreground mb-1">{industry.title}</h3>
                  <p className="text-xs text-muted-foreground">{industry.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Quality Control Laboratory */}
      <section className="py-16 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">R&D Capabilities</span>
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">In-House Testing Laboratory</h2>
              <p className="text-muted-foreground mb-6">Our quality control lab operates continuous X-Ray Fluorescence inspections safeguarding that every single dispatcher cargo complies strictly to clients’ requested mesh dimensions.</p>
              <div className="space-y-3">
                {LAB_EQUIPMENT.map((eq) => (
                  <div key={eq.id} className="p-3 bg-muted/40 rounded-xl border border-border/50">
                    <h4 className="font-bold text-semibold text-foreground text-sm flex items-center gap-2">
                       <Wrench className="h-4 w-4 text-primary" />
                       {eq.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">{eq.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video rounded-3xl bg-secondary overflow-hidden items-center justify-center flex">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background/10" />
               <div className="p-8 text-center max-w-sm">
                 <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                   <GraduationCap className="h-8 w-8 text-primary" />
                 </div>
                 <h3 className="text-xl font-bold text-foreground">Advanced QA/QC</h3>
                 <p className="text-sm text-muted-foreground mt-2">Testing chemical mesh consistency targeting absolute mesh 1500+ standards.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Corporate Governance (Ethics) */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-2">Corporate Governance</h2>
            <p className="text-slate-400">Maintaining transparent trust buffers for stakeholder security triggers.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {GOVERNANCE_PRINCIPLES.map((principle, index) => (
              <div key={index} className="p-5 bg-slate-900 rounded-xl border border-slate-800 hover:border-primary/50 transition-all">
                <div className="mb-4">{principle.icon}</div>
                <h3 className="font-bold text-md mb-1">{principle.title}</h3>
                <p className="text-xs text-slate-400">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. STRATEGIC ROADMAP */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Strategic Roadmap 2026+</h2>
            <p className="text-muted-foreground">Our future targets driving automation growth.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {ROADMAP.map((item, index) => (
              <div key={index} className="p-6 bg-card rounded-2xl border border-border/50 relative overflow-hidden group hover:border-primary/50 transition-all flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full translate-x-12 -translate-y-12 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-xs font-bold text-primary tracking-wider">{item.step}</span>
                  <h3 className="font-bold text-lg text-foreground mt-2 mb-1">{item.task}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 12. Corporate Social Responsibility (CSR) */}
      <section className="py-16 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Social Responsibility & Impact</h2>
            <p className="text-muted-foreground">Empowering local districts through educational and medical aids.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CSR_ACTIVITIES.map((activity) => (
              <div key={activity.id} className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-primary/10 mb-4">
                  {activity.icon}
                </div>
                <span className="text-xs font-bold text-primary tracking-wider mb-1 uppercase">{activity.metric}</span>
                <h3 className="font-bold text-lg text-foreground mb-1">{activity.title}</h3>
                <p className="text-xs text-muted-foreground">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Executive Management Structure */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Management & Leadership</h2>
            <p className="text-muted-foreground">Strict governance standards led by experienced industrial professionals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {MANAGEMENT.map((leader, index) => (
              <div key={index} className="p-6 bg-card rounded-xl border border-border/50 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-8 w-8 text-primary/40" />
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-md text-foreground">{leader.name}</h3>
                  <p className="text-xs text-primary font-semibold mb-2">{leader.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Geolocational Infrastructure */}
      <section className="py-16 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Location & Infrastructure Layout</h2>
            <p className="text-muted-foreground">Strategic coordinates allowing prompt logistics updates to client ports.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="p-5 bg-card rounded-xl border border-border/50">
                <span className="inline-flex px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full mb-3">{loc.type}</span>
                <h3 className="font-bold text-md text-foreground mb-1">{loc.name}</h3>
                <p className="text-xs text-muted-foreground">{loc.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
