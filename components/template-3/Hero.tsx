"use client";

import Image from "next/image";
import { EVENT, MEDIA } from "@/lib/event";
import { useMusic } from "./MusicPlayer";

export default function Hero() {
  const { enter, entered, play } = useMusic();
  const groom = EVENT.groom.split(" ")[0];
  const bride = EVENT.bride.split(" ")[0];

  function goToRsvp() {
    if (entered) {
      play();
      document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    enter();
    requestAnimationFrame(() => {
      document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  function enterInvitation() {
    enter();
    requestAnimationFrame(() => {
      document.getElementById("countdown")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <header id="top" className="hero">
      <Image src={MEDIA.hero} alt={`${EVENT.honoree} embracing outdoors`} fill priority quality={90} sizes="100vw" className="hero-image" />
      <div className="hero-shade" aria-hidden="true" />

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#top" className="nav-brand" aria-label={`${EVENT.honoree}, top of page`}>{EVENT.initials}</a>
        <div className="nav-links">
          <a href="#venues" tabIndex={entered ? 0 : -1}>The day</a>
          <a href="#gallery" tabIndex={entered ? 0 : -1}>Our story</a>
          <a href="#details" tabIndex={entered ? 0 : -1}>Details</a>
        </div>
        <button type="button" onClick={goToRsvp} className="nav-rsvp">RSVP <span aria-hidden="true">↗</span></button>
      </nav>

      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-title-group">
            <p className="hero-kicker">Together with their families</p>
            <h1 aria-label={EVENT.honoree}>
              <span>{groom}</span>
              <span className="hero-name-last"><i aria-hidden="true">&amp;</i>{bride}</span>
            </h1>
          </div>
          <div className="hero-details">
            <p className="hero-invite">Joyfully invite you to celebrate their wedding and the beginning of their forever.</p>
            <div className="hero-meta">
              <span>{EVENT.dateLong}</span>
              <span>{EVENT.time} · Pacific Point, Tacloban City</span>
            </div>
            <button type="button" onClick={goToRsvp} className="primary-link">Kindly RSVP <span aria-hidden="true">↗</span></button>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        {!entered ? (
          <button type="button" onClick={enterInvitation} className="enter-invitation">
            <span>VIEW INVITATION</span><span aria-hidden="true">↓</span>
          </button>
        ) : (
          <a href="#venues">Discover the celebration <span aria-hidden="true">↓</span></a>
        )}
      </div>
    </header>
  );
}
