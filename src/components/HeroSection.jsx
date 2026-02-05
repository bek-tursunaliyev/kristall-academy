import { ArrowRight, Award, Users, BookOpen } from 'lucide-react';
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Ertangining
            <span className="hero-highlight"> yetakchilarini</span> tarbiyalaymiz
          </h1>
          <p className="hero-subtitle">
            Maktablar son-mingta dersiz. Ammo raqobat borasida bunday deyish
            notog'ri. Sababi Kristall haqiqiy "kristal" bolalar uchun
            ochilgan.
          </p>
        </div>

        <div className="hero-buttons">
          <button className="btn btn-primary">
            Maktabga tashrif buyuring
            <ArrowRight className="icon" />
          </button>
          <button className="btn btn-outline">
            Batafsil ma'lumot
          </button>
        </div>

        <div className="hero-features">
          <div className="feature-card">
            <div className="feature-icon">
              <Award className="icon" />
            </div>
            <h3>Ilmiy yutuqlar</h3>
            <p>
              Yuqori darajadagi dastur va shaxsiylashtirilgan o'quv
              yondashuvlari
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Users className="icon" />
            </div>
            <h3>Kichik sinflar</h3>
            <p>
              Har bir o'quvchiga e'tibor (Har 12 nafar o'quvchiga bitta o'qituvchi)
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <BookOpen className="icon" />
            </div>
            <h3>Kompleks rivojlanish</h3>
            <p>
              San'at, sport va xarakter tarbiyasi dasturlari
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
