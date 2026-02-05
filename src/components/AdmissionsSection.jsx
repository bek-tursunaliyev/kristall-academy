import { FileText, Calendar, CheckCircle } from 'lucide-react';
import '../styles/AdmissionsSection.css';

function AdmissionsSection() {
  const steps = [
    {
      icon: FileText,
      title: 'Ariza topshirish',
      description: 'Onlayn ariza formasini to\'ldiring',
      timeline: 'Qabul yil davomida',
      number: 1,
    },
    {
      icon: Calendar,
      title: 'Baholash kuni',
      description: 'Akademik sinov va suhbat o\'tkaziladi',
      timeline: 'Individuallik asosida belgilanadi',
      number: 2,
    },
    {
      icon: CheckCircle,
      title: 'Qabul qarori',
      description: 'Qabul qarori va ro\'yxatdan o\'tish ma\'lumotlarini oling',
      timeline: '1 hafta ichida',
      number: 3,
    },
  ];

  const requirements = [
    'Shaxsiy bayonot bilan to\'ldirilgan ariza formasi',
    'Oldingi maktablardan rasmiy transkriptlar',
    'Ikki tavsiyanoma xati',
    'Standart test natijalari (agar bo\'lsa)',
    'Portfolio yoki ijodiy ko\'rik (san\'at dasturlari uchun)',
  ];

  const dates = [
    { label: 'Ariza topshirish muddati', date: '15-Mart, 2024', variant: 'primary' },
    { label: 'Baholash kunlari', date: '1-15 Aprel, 2024', variant: 'outline' },
    { label: 'Qabul qarorlari', date: '30-Aprel, 2024', variant: 'outline' },
    { label: 'Ro\'yxatdan o\'tish muddati', date: '15-May, 2024', variant: 'primary' },
  ];

  return (
    <section id="admissions" className="admissions-section">
      <div className="container">
        <div className="admissions-header">
          <div className="badge">Qabul jarayoni</div>
          <h2>Akademiyamizga qo'shiling</h2>
          <p>
            Biz o'qishga chanqoq, rivojlanishni istaydigan va faol jamoamizga
            hissa qo'shadigan o'quvchilarni kutib olamiz. Qabul jarayonimiz
            Kristall Akademiyasida muvaffaqiyat qozonadigan talabalarni tanlab
            olish uchun yaratilgan.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.number} className="step-card">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">
                  <IconComponent className="icon" />
                </div>
                <h3>{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-timeline">{step.timeline}</div>
              </div>
            );
          })}
        </div>

        <div className="info-grid">
          <div className="info-card">
            <h3>Ariza uchun talablar</h3>
            <ul className="requirements-list">
              {requirements.map((req, idx) => (
                <li key={idx}>
                  <CheckCircle className="icon" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h3>Muhim sanalar</h3>
            <div className="dates-list">
              {dates.map((item, idx) => (
                <div key={idx} className="date-item">
                  <span className="date-label">{item.label}</span>
                  <span className={`date-badge ${item.variant}`}>{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="admissions-footer">
          <button className="btn btn-primary btn-lg">Ariza topshirish</button>
          <p>
            Savollaringiz bormi? Qabul bo'limimizga murojaat qiling:{' '}
            <a href="mailto:admissions@kristallacademy.edu">
              admissions@kristallacademy.edu
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AdmissionsSection;
