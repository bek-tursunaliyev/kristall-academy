import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/5">
      <div className="absolute inset-0 bg-[url('/prestigious-private-school-campus-with-classical-a.jpg')] bg-cover bg-center opacity-10" />

      <div className="container relative z-10 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Ertangining
              <span className="text-primary"> yetakchilarini</span>{" "}
              tarbiyalaymiz
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Maktablar son-mingta dersiz. Ammo raqobat borasida bunday deyish
              notog'ri. Sababi Kristall haqiqiy "kristal" bolalar uchun
              ochilgan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Maktabga tashrif buyuring
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Batafsil ma'lumot
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Ilmiy yutuqlar</h3>
              <p className="text-sm text-muted-foreground text-center">
                Yuqori darajadagi dastur va shaxsiylashtirilgan o'quv
                yondashuvlari
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Kichik sinflar</h3>
              <p className="text-sm text-muted-foreground text-center">
                Har bir o'quvchiga e'tibor (Har 12 nafar o'quvchiga bitta o'qituvchi)
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Kompleks rivojlanish</h3>
              <p className="text-sm text-muted-foreground text-center">
                San'at, sport va xarakter tarbiyasi dasturlari
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
