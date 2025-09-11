import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo va tavsif */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/kristall-logo.png"
                alt="Kristall Akademiyasi Logotipi"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <div>
                <h3 className="text-lg font-bold">Kristall Akademiyasi</h3>
                <p className="text-xs text-primary-foreground/80">
                  Ta’limda yuksaklik sari
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Maktablar son-mingta dersiz. Ammo raqobat borasida bunday deyish
              notog'ri. Sababi Kristall haqiqiy "kristal" bolalar uchun
              ochilgan.
            </p>
            <div className="flex space-x-3">
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Tezkor havolalar */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Tezkor havolalar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  O‘quv dasturlari
                </a>
              </li>
              <li>
                <a
                  href="#admissions"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Qabul jarayoni
                </a>
              </li>
              <li>
                <a
                  href="#faculty"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  O‘qituvchilar va xodimlar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Talabalar hayoti
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Bitiruvchilar
                </a>
              </li>
            </ul>
          </div>

          {/* Aloqa ma’lumotlari */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Aloqa</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary" />
                <div>
                  <p className="text-primary-foreground/80">123, Toshkent</p>
                  <p className="text-primary-foreground/80">
                    {/* Akademik shahar, AC 12345 */}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <p className="text-primary-foreground/80">(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <p className="text-primary-foreground/80">
                  info@kristallacademy.edu
                </p>
              </div>
            </div>
          </div>

          {/* Yangiliklar byulleteni */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              Yangiliklardan xabardor bo‘ling
            </h4>
            <p className="text-sm text-primary-foreground/80">
              Tadbirlar, yutuqlar va yangiliklardan xabardor bo‘lish uchun
              byulletenimizga obuna bo‘ling.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email manzilingizni kiriting"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Obuna bo‘lish
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Kristall Akademiyasi. Barcha huquqlar himoyalangan. |
            Maxfiylik siyosati | Foydalanish shartlari
          </p>
        </div>
      </div>
    </footer>
  );
}
