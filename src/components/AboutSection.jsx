import '../styles/AboutSection.css';

function AboutSection() {
  const stats = [
    { value: '98%', label: 'Oliy o\'quv yurtiga qabul darajasi' },
    { value: '12:1', label: 'Talaba-o\'qituvchi nisbati' },
    { value: '450', label: 'Umumiy talabalar soni' },
    { value: '3', label: 'Yutuqlar yillari' },
  ];

  const values = [
    {
      title: 'Yuksaklik',
      description: 'Har bir ishda eng yuqori standartlarga intilish'
    },
    {
      title: 'Halollik',
      description: 'Rostgo\'ylik va axloqiy jasorat bilan ish tutish'
    },
    {
      title: 'Innovatsiya',
      description: 'Ijodkorlik va oldinga qarashni qabul qilish'
    },
    {
      title: 'Hamjamiyat',
      description: 'Mustahkam munosabatlar va hamkorlikni qurish'
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <div className="badge">Kristall Akademiyasi haqida</div>
          <h2>Ta'limdagi yutuqlar merosi</h2>
          <p>
            2022-yilda tashkil etilgan Kristall Akademiyasi tabiiy fanlarni
            o'rganish qiyin deb o'ylovchi, yoki aynan shu fanlarga qiziquvchi
            o'quvchilar uchun Kristall Academy o'z faoliatini boshladi.
          </p>
        </div>

        <div className="about-content">
          <div className="about-left">
            <div className="mission-box">
              <h3>Bizning missiyamiz</h3>
              <p>
                "Kristall Academy"ning asosiy maqsadi — o'quvchilarga tabiiy
                fanlarni chuqur o'rgatish, ilmiy izlanishlarga qiziqishini
                kuchaytirish va zamonaviy laboratoriyalar orqali tajribaviy
                bilim berishdir. Biz o'quvchilarni nafaqat nazariy bilimlar
                bilan, balki amaliy tajribalar orqali ham
                qo'llab-quvvatlaymiz. Har bir o'quvchining ilm-fanga
                bo'lgan qiziqishini uyg'otib, kelajakda jamiyatga foydali
                olim, muhandis va tadqiqotchilar yetishib chiqishini maqsad
                qilamiz.
              </p>
            </div>

            <div className="values-box">
              <h3>Bizning qadriyatlarimiz</h3>
              <ul className="values-list">
                {values.map((value, idx) => (
                  <li key={idx}>
                    <span className="dot" />
                    <div>
                      <strong>{value.title}:</strong> {value.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-right">
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
