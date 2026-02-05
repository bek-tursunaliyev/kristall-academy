import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import AdmissionsSection from './components/AdmissionsSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <div className="container-wrapper">
        <Header />
      </div>
      <main>
        <HeroSection />
        <div className="container-wrapper">
          <AboutSection />
          <ProgramsSection />
          <AdmissionsSection />
          <LocationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
