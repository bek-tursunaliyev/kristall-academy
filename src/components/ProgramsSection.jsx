import { Microscope, Globe, Calculator, GraduationCap } from 'lucide-react';
import '../styles/ProgramsSection.css';

function ProgramsSection() {
  const programs = [
    {
      icon: Microscope,
      title: 'Biologiya va Kimyo',
      description:
        'Zamonaviy laboratoriyalar va amaliy tajribalar bilan boyitilgan chuqur dastur',
      features: [
        'Biologiya va kimyo laboratoriyalari',
        'Eksperimentlar va loyihalar',
        'Fan olimpiadalari',
      ],
    },
    {
      icon: Globe,
      title: 'Geografiya va Ekologiya',
      description: 'Yer va tabiat fanlariga oid keng qamrovli bilimlar',
      features: [
        'Ekologik ekspeditsiyalar',
        'Tabiatni muhofaza qilish loyihalari',
        'Global iqlim o\'zgarishlari tahlili',
      ],
    },
    {
      icon: Calculator,
      title: 'Matematika',
      description:
        'Tabiiy fanlarni chuqur o\'rganishda zarur bo\'lgan mustahkam matematik baza',
      features: [
        'Olimpiadalar va musobaqalar',
        'Analiz va statistika',
        'Oliy ta\'limga tayyorlov',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Ilmiy Tadqiqotlar',
      description: 'O\'quvchilarni ilmiy loyihalar va izlanishlarga jalb qilish',
      features: [
        'Mini-tadqiqot ishlari',
        'O\'quvchi olimlar klubi',
        'Mahalliy va xalqaro ilmiy tanlovlarda ishtirok',
      ],
    },
  ];

  return (
    <section id="programs" className="programs-section">
      <div className="container">
        <div className="programs-header">
          <div className="badge">O'quv Dasturlari</div>
          <h2>Mukammal ta'lim imkoniyatlari</h2>
          <p>
            Bizning turli xil dasturlarimiz o'quvchilarni ilhomlantiradi,
            ularga yangi marralarni ochadi va kelajakdagi muvaffaqiyatlarga
            tayyorlaydi.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program, idx) => {
            const IconComponent = program.icon;
            return (
              <div key={idx} className="program-card">
                <div className="program-icon">
                  <IconComponent className="icon" />
                </div>
                <h3>{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <ul className="program-features">
                  {program.features.map((feature, featureIdx) => (
                    <li key={featureIdx}>
                      <span className="dot" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
