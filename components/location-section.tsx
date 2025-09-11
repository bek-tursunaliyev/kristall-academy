import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function LocationSection() {
  return (
    <section id="location" className="py-20 bg-white container mx-auto">
      {/* Map */}
      <div className="lg:sticky lg:top-8">
        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d759.5608728966411!2d71.78727337232061!3d40.40345638313495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb8386cb7c46db%3A0x604532031ba97f1b!2sTerra%20Nova!5e0!3m2!1sru!2s!4v1757579890502!5m2!1sru!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://goo.gl/maps/rYcdYaNt8T6YW9sf7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            <MapPin className="h-5 w-5" />
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
