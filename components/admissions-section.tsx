import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users, CheckCircle } from "lucide-react";

export function AdmissionsSection() {
  const steps = [
    {
      icon: FileText,
      title: "Ariza topshirish",
      description: "Onlayn ariza formasini to'ldiring",
      timeline: "Qabul yil davomida",
    },
    {
      icon: Calendar,
      title: "Baholash kuni",
      description: "Akademik sinov va suhbat o'tkaziladi",
      timeline: "Individuallik asosida belgilanadi",
    },
    {
      icon: CheckCircle,
      title: "Qabul qarori",
      description: "Qabul qarori va ro'yxatdan o'tish ma’lumotlarini oling",
      timeline: "1 hafta ichida",
    },
  ];

  return (
    <section id="admissions" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-secondary/20 text-primary">
              Qabul jarayoni
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Akademiyamizga qo'shiling
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Biz o'qishga chanqoq, rivojlanishni istaydigan va faol jamoamizga
              hissa qo'shadigan o'quvchilarni kutib olamiz. Qabul jarayonimiz
              Kristall Akademiyasida muvaffaqiyat qozonadigan talabalarni tanlab
              olish uchun yaratilgan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {step.timeline}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Ariza uchun talablar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    Shaxsiy bayonot bilan to'ldirilgan ariza formasi
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    Oldingi maktablardan rasmiy transkriptlar
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    Ikki tavsiyanoma xati
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    Standart test natijalari (agar bo'lsa)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    Portfolio yoki ijodiy ko'rik (san’at dasturlari uchun)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl text-primary">
                  Muhim sanalar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      Ariza topshirish muddati
                    </span>
                    <Badge variant="secondary">15-Mart, 2024</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      Baholash kunlari
                    </span>
                    <Badge variant="outline">1-15 Aprel, 2024</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Qabul qarorlari</span>
                    <Badge variant="outline">30-Aprel, 2024</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      Ro'yxatdan o'tish muddati
                    </span>
                    <Badge variant="secondary">15-May, 2024</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Ariza topshirish
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Savollaringiz bormi? Qabul bo'limimizga murojaat qiling:{" "}
              <a
                href="mailto:admissions@kristallacademy.edu"
                className="text-primary hover:underline"
              >
                admissions@kristallacademy.edu
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
