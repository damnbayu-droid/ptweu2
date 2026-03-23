import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      id: "faq-1",
      question: "What is the monthly production capacity of PT Wira Energi Utama?",
      answer: "Our current capacity reaches 5,000+ tons of processed limestone and calcium carbonate derivatives monthly, supported by a state-of-the-art crushing plant.",
    },
    {
      id: "faq-2",
      question: "Where is the mining site (quarry) located?",
      answer: "Our mining extraction zones and processing facilities are strategically placed in North Sulawesi, Indonesia, enabling direct logistics connects to multiple ports.",
    },
    {
      id: "faq-3",
      question: "Do you supply customized chemical mesh or powder sizes?",
      answer: "Yes, we offer custom Mesh 325-2500 for Calcium Carbonate depending on your manufacturing standards (Paint, Plastics, Pharmaceutical grade).",
    },
    {
      id: "faq-4",
      question: "How do you guarantee environmental safety during extraction?",
      answer: "We strictly enforce post-mine reclamation policies with systematic reforestation and water recycling setups keeping local flora and fauna balanced.",
    },
    {
      id: "faq-5",
      question: "What is the lead time for domestic shipments?",
      answer: "For general aggregates, shipment takes 3-7 days depending on destination port capacities and current weather logs. Prompt dispatch available.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Quick answers to some common inquiries about our operations, materials, and delivery pipelines.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b last:border-0 border-border/50">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
