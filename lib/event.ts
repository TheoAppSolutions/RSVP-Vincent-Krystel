export type Venue = { label: string; name: string; address: string };

export const EVENT = {
  honoree: "Vincent & Krystel",
  groom: "Vincent",
  bride: "Krystel",
  initials: "V & K",
  dateLong: "Sunday, February 20, 2027",
  dateShort: "02 · 20 · 2027",
  time: "3:00 PM",
  dateISO: "2027-02-20T15:00:00+08:00",
  rsvpDeadline: "January 5, 2027",
  theme: "Minimalist",
  color: "Dusty Blue",
  dressCode: "Semi-formal",
  venue: { label: "Wedding venue", name: "Pacific Point", address: "Tacloban City, Leyte" },
};

export const VENUES = [EVENT.venue] as const;
export const EVENT_TIMESTAMP = new Date(EVENT.dateISO).getTime();

export const MEDIA = {
  tagline: "Two hearts, one beautiful beginning. Join us as we say “I do.”",
  hero: "/hero.webp",
  music: { src: "/music/background_music.mp3", volume: 0.5 },
  gallery: Array.from({ length: 12 }, (_, i) => `/gallery/${String(i + 1).padStart(2, "0")}.webp`),
};

export const GIFT = {
  title: "Gift Policy",
  message: "Your presence at our wedding is the greatest gift of all. Should you wish to bless us further, a monetary gift would be warmly appreciated as we begin our life together.",
  qr: "/gift-qr.webp" as string | null,
  qrLabel: "Gift QR Code",
};
