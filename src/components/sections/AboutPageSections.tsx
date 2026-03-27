"use client";

import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Users, MapPin, Globe, CheckCircle, TrendingUp, ShieldCheck, Zap, Leaf } from "lucide-react";

const TIMELINE_DATA = [
  { year: "2015", title: "Company Founded", description: "PT Wira Energi Utama was officially established in Sulawesi Utara." },
  { year: "2018", title: "First Major Expansion", description: "Opened our second major limestone quarry and doubled production capacity." },
  { year: "2020", title: "National Recognition", description: "Awarded as one of the best emerging mining companies in Eastern Indonesia." },
  { year: "2023", title: "Sustainability Initiative", description: "Launched our green mining program to minimize environmental impact." },
  { year: "2026", title: "Global Export Launch", description: "Began exporting high-grade Calcium Carbonate to international markets." },
];

export function CompanyTimeline() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A decade of excellence, growth, and commitment to delivering the best limestone products.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded"></div>
          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => (
              <div key={item.year} className={`flex items-center w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <div className={`relative w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full z-10 ${index % 2 === 0 ? "right-[-8px]" : "left-[-8px]"}`}></div>
                  <Card className="hover:shadow-lg transition-shadow border-primary/10">
                    <CardContent className="p-6">
                      <span className="text-primary font-bold text-xl mb-2 block">{item.year}</span>
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const VALUES_DATA = [
  { icon: ShieldCheck, title: "Integrity", description: "We conduct our business with the highest ethical standards and transparency." },
  { icon: Zap, title: "Excellence", description: "Committed to producing premium grade limestone for various industrial needs." },
  { icon: Leaf, title: "Sustainability", description: "Prioritizing eco-friendly mining practices and environmental preservation." },
  { icon: Trophy, title: "Reliability", description: "Ensuring consistent supply and timely delivery for all our partners." },
];

export function CoreValuesCards() {
  return (
    <section className="py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The fundamental beliefs that drive our operations and shape our corporate culture.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES_DATA.map((val, idx) => {
            const Icon = val.icon;
            return (
              <Card key={idx} className="group hover:-translate-y-2 transition-transform duration-300 hover:border-primary/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                  <p className="text-sm text-muted-foreground">{val.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StatsChart() {
  return (
    <section className="py-20 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-5xl font-bold tracking-tighter">10+</h3>
            <p className="text-primary-foreground/80 font-medium">Years of Experience</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-bold tracking-tighter">50K+</h3>
            <p className="text-primary-foreground/80 font-medium">Tons Monthly Capacity</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-bold tracking-tighter">500+</h3>
            <p className="text-primary-foreground/80 font-medium">B2B Partners</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-bold tracking-tighter">99%</h3>
            <p className="text-primary-foreground/80 font-medium">Client Satisfaction</p>
          </div>
        </div>
        
        <div className="mt-16 bg-background/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-primary-foreground/20">
          <h3 className="text-2xl font-bold mb-8 text-center">Production Growth (Last 5 Years)</h3>
          <div className="flex h-48 items-end justify-between gap-2 sm:gap-4 w-full">
            {[45, 60, 75, 90, 100].map((height, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                <div 
                  className="w-full bg-primary-foreground/30 rounded-t-sm relative overflow-hidden group-hover:bg-primary-foreground/50 transition-colors"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute inset-x-0 bottom-0 bg-primary-foreground/40 w-full animate-pulse" style={{ height: '30%' }}></div>
                </div>
                <span className="text-sm font-medium">{2022 + idx}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function GlobalReachMap() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Global Reach & Distribution</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
          Serving domestic industrial needs across Indonesia and exporting high-quality minerals to international markets.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-secondary/20">
            <CardContent className="p-8">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sulawesi Utara</h3>
              <p className="text-sm text-muted-foreground">Main Quarry & Mining Hub</p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/20 border-primary/30">
            <CardContent className="p-8">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Nationwide Coverage</h3>
              <p className="text-sm text-muted-foreground">Logistics to all major Indonesian islands</p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/20">
            <CardContent className="p-8">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Export Markets</h3>
              <p className="text-sm text-muted-foreground">Supplying Southeast Asia & beyond</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const AWARDS = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "Best Mining Practice Award 2024",
  "Green Industry Certification",
  "Zero Accident Award - Ministry of Manpower",
  "Top Export Contributor 2025"
];

export function AwardsGrid() {
  return (
    <section className="py-20 lg:py-24 bg-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Certifications & Awards</h2>
            <p className="text-muted-foreground mb-6">
              Our commitment to quality, safety, and environmental stewardship is recognized by national and international institutions.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AWARDS.map((award, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="font-medium text-foreground">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
