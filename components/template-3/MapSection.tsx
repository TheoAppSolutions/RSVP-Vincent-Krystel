import { EVENT } from "@/lib/event";
import { getVenueMapSource } from "@/lib/maps";

export default function MapSection() {
  const venue = EVENT.venue;
  const mapSource = getVenueMapSource(venue);

  return (
    <section id="venues" className="venue-section section-pad" aria-labelledby="venues-title">
      <div className="section-wrap">
        <div className="section-heading split-heading">
          <div><span className="eyebrow">01 / The celebration</span><h2 id="venues-title" className="display-heading">Where our story <em>continues</em></h2></div>
          <p>One beautiful venue for our ceremony and reception. We can’t wait to share the day with you in Tacloban City.</p>
        </div>
        <div className="venue-location-heading">
          <div>
            <span className="eyebrow">Venue location</span>
            <h3>{venue.name}</h3>
          </div>
          <p>{venue.address}</p>
        </div>
        <div id="venue-map" className="venue-map">
          <iframe key={mapSource} title={`Map showing ${venue.name}`} src={mapSource} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}
