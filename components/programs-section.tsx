import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Palette,
  Microscope,
  Globe,
  Music,
  Calculator,
} from "lucide-react";

export function ProgramsSection() {
  const programs = [
    {
      icon: Microscope,
      title: "Biologiya va Kimyo",
      description:
        "Zamonaviy laboratoriyalar va amaliy tajribalar bilan boyitilgan chuqur dastur",
      features: [
        "Biologiya va kimyo laboratoriyalari",
        "Eksperimentlar va loyihalar",
        "Fan olimpiadalari",
      ],
    },
    {
      icon: Globe,
      title: "Geografiya va Ekologiya",
      description: "Yer va tabiat fanlariga oid keng qamrovli bilimlar",
      features: [
        "Ekologik ekspeditsiyalar",
        "Tabiatni muhofaza qilish loyihalari",
        "Global iqlim o‘zgarishlari tahlili",
      ],
    },
    {
      icon: Calculator,
      title: "Matematika",
      description:
        "Tabiiy fanlarni chuqur o‘rganishda zarur bo‘lgan mustahkam matematik baza",
      features: [
        "Olimpiadalar va musobaqalar",
        "Analiz va statistika",
        "Oliy ta’limga tayyorlov",
      ],
    },
    {
      icon: GraduationCap,
      title: "Ilmiy Tadqiqotlar",
      description: "O‘quvchilarni ilmiy loyihalar va izlanishlarga jalb qilish",
      features: [
        "Mini-tadqiqot ishlari",
        "O‘quvchi olimlar klubi",
        "Mahalliy va xalqaro ilmiy tanlovlarda ishtirok",
      ],
    },
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-secondary/20 text-primary">
              O‘quv Dasturlari
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Mukammal ta’lim imkoniyatlari
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Bizning turli xil dasturlarimiz o‘quvchilarni ilhomlantiradi,
              ularga yangi marralarni ochadi va kelajakdagi muvaffaqiyatlarga
              tayyorlaydi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Barcha dasturlarni ko‘rish
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
