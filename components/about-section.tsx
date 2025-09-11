import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-secondary/20 text-primary">
              Kristall Akademiyasi haqida
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Ta’limdagi yutuqlar merosi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              2022-yilda tashkil etilgan Kristall Akademiyasi tabiiy fanlarni
              o'rganish qiyin deb o'ylovchi, yoki aynan shu fanlarga qiziquvchi
              o'quvchilar uchun Kristall Academy o'z faoliatini boshladi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">
                  Bizning missiyamiz
                </h3>
                <p className="text-muted-foreground">
                  “Kristall Academy”ning asosiy maqsadi — o‘quvchilarga tabiiy
                  fanlarni chuqur o‘rgatish, ilmiy izlanishlarga qiziqishini
                  kuchaytirish va zamonaviy laboratoriyalar orqali tajribaviy
                  bilim berishdir. Biz o‘quvchilarni nafaqat nazariy bilimlar
                  bilan, balki amaliy tajribalar orqali ham
                  qo‘llab-quvvatlaymiz. Har bir o‘quvchining ilm-fanga
                  bo‘lgan qiziqishini uyg‘otib, kelajakda jamiyatga foydali
                  olim, muhandis va tadqiqotchilar yetishib chiqishini maqsad
                  qilamiz.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">
                  Bizning qadriyatlarimiz
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Yuksaklik:</strong> Har bir ishda eng yuqori
                      standartlarga intilish
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Halollik:</strong> Rostgo‘ylik va axloqiy jasorat
                      bilan ish tutish
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Innovatsiya:</strong> Ijodkorlik va oldinga
                      qarashni qabul qilish
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>
                      <strong>Hamjamiyat:</strong> Mustahkam munosabatlar va
                      hamkorlikni qurish
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">
                    Oliy o‘quv yurtiga qabul darajasi
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold text-primary">12:1</div>
                  <div className="text-sm text-muted-foreground">
                    Talaba-o‘qituvchi nisbati
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold text-primary">450</div>
                  <div className="text-sm text-muted-foreground">
                    Umumiy talabalar soni
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="space-y-2">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">
                    Yutuqlar yillari
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
