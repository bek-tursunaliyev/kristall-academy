import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <img
                src="/images/kristall-logo.png"
                alt="Kristall Akademiyasi Logotipi"
                className="logo-img"
              />
              <div>
                <h3>Kristall Akademiyasi</h3>
                <p>Ta'limda yuksaklik sari</p>
              </div>
            </div>
            <p className="footer-description">
              Maktablar son-mingta dersiz. Ammo raqobat borasida bunday deyish
              notog'ri. Sababi Kristall haqiqiy "kristal" bolalar uchun
              ochilgan.
            </p>
            <div className="social-icons">
              <a href="#" className="social-btn" aria-label="Facebook">
                <Facebook className="icon" />
              </a>
              <a href="#" className="social-btn" aria-label="Twitter">
                <Twitter className="icon" />
              </a>
              <a href="#" className="social-btn" aria-label="Instagram">
                <Instagram className="icon" />
              </a>
              <a href="#" className="social-btn" aria-label="LinkedIn">
                <Linkedin className="icon" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Tezkor havolalar</h4>
            <ul className="footer-links">
              <li><a href="#about">Biz haqimizda</a></li>
              <li><a href="#programs">O'quv dasturlari</a></li>
              <li><a href="#admissions">Qabul jarayoni</a></li>
              <li><a href="#faculty">O'qituvchilar va xodimlar</a></li>
              <li><a href="#">Talabalar hayoti</a></li>
              <li><a href="#">Bitiruvchilar</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Aloqa</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin className="icon" />
                <div>
                  <p>123, Toshkent</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="icon" />
                <p>(555) 123-4567</p>
              </div>
              <div className="contact-item">
                <Mail className="icon" />
                <p>info@kristallacademy.edu</p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Yangiliklardan xabardor bo'ling</h4>
            <p className="newsletter-text">
              Tadbirlar, yutuqlar va yangiliklardan xabardor bo'lish uchun
              byulletenimizga obuna bo'ling.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Email manzilingizni kiriting"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Obuna bo'lish</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2024 Kristall Akademiyasi. Barcha huquqlar himoyalangan. |
            Maxfiylik siyosati | Foydalanish shartlari
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
