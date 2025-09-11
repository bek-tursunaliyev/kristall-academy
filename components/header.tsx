import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/kristall-logo.png"
            alt="Kristall Akademiyasi Logotipi"
            width={40}
            height={40}
            className="rounded-sm"
          />
          <div>
            <h1 className="text-xl font-bold text-primary">
              Kristall Akademiyasi
            </h1>
            <p className="text-xs text-muted-foreground">
              Ta'limda yuksaklik sari
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#about"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Biz haqimizda
          </a>
          <a
            href="#programs"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Dasturlar
          </a>
          <a
            href="#admissions"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Qabul
          </a>
          {/* <a
            href="#faculty"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            O‘qituvchilar
          </a> */}
          <a
            href="#contact"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Aloqa
          </a>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Hozir ariza topshiring
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
