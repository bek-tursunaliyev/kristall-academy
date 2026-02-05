import { MapPin } from 'lucide-react';
import '../styles/LocationSection.css';

function LocationSection() {
  return (
    <section id="location" className="location-section">
      <div className="location-container">
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d759.5608728966411!2d71.78727337232061!3d40.40345638313495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb8386cb7c46db%3A0x604532031ba97f1b!2sTerra%20Nova!5e0!3m2!1sru!2s!4v1757579890502!5m2!1sru!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-iframe"
            title="Kristall Academy Location"
          />
        </div>

        <div className="map-link">
          <a
            href="https://goo.gl/maps/rYcdYaNt8T6YW9sf7"
            target="_blank"
            rel="noopener noreferrer"
            className="maps-button"
          >
            <MapPin className="icon" />
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
