/* ════════════════════════════════════════════════════════
   data.js — Alle Inhalte zentral bearbeiten
   ════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────
   KONTAKT
   ────────────────────────────────────────────────────── */
const kontaktData = [
  {
    label: "E-Mail",
    desc: "Schreib uns direkt – wir antworten schnell!",
    href: "mailto:info@cello.band",
    icon: "mail"
  },
  {
    label: "Facebook",
    desc: "Folg uns für aktuelle News & Konzerttermine.",
    href: "https://www.facebook.com/die.cello.band",
    icon: "facebook",
    target: "_blank"
  },
  {
    label: "Instagram",
    desc: "Behind the Scenes, Konzertfotos & mehr.",
    href: "https://www.instagram.com/die.cello.band",
    icon: "instagram",
    target: "_blank"
  }
];

/* ──────────────────────────────────────────────────────
   NEWS / EVENTS
   ────────────────────────────────────────────────────── */
const newsData = [
  {
    id: 1,
    kategorie: "konzerte",
    title: "Konzert im Konzerthaus Karlsruhe",
    text: "Unser nächstes großes Konzert – Karten ab sofort im Vorverkauf.",
    date: "12. März 2024",
    dialogTitle: "Konzert im Konzerthaus Karlsruhe",
    dialogText: "Wir freuen uns, euch zu unserem Frühjahrskonzert im prachtvollen Konzerthaus Karlsruhe einzuladen. Auf dem Programm stehen Werke von Bach, Dvořák sowie unsere eigenen Cello-Arrangements moderner Popsongs.\n\nEinlass ab 19:00 Uhr, Konzertbeginn 20:00 Uhr. Im Anschluss gibt es die Möglichkeit, die Band beim Meet & Greet persönlich kennenzulernen.",
    dialogDate: "12. März 2024 · Konzerthaus Karlsruhe, Festsaal",
    dialogImage: "",
    dialogLink: "#tickets",
    dialogLinkLabel: "Tickets kaufen"
  },
  {
    id: 2,
    kategorie: "berichte",
    title: "Album-Aufnahmen haben begonnen",
    text: "Im Februar starteten wir mit unserem zweiten Studioalbum. Erscheint Herbst 2024.",
    date: "8. Februar 2024",
    dialogTitle: "Unser zweites Studioalbum",
    dialogText: "Nach dem Erfolg unseres Debütalbums \"Saiten der Zeit\" betreten wir wieder das Studio. Das neue Album trägt den Arbeitstitel \"Resonanz\" und wird 12 Tracks umfassen.\n\nAufgenommen wird im renommierten Tonstudio Schwarzwald in Freiburg. Die Veröffentlichung ist für Oktober 2024 geplant.",
    dialogDate: "Aufnahmen: Feb–Apr 2024 · Veröffentlichung: Oktober 2024",
    dialogImage: "",
    dialogLink: "",
    dialogLinkLabel: ""
  },
  {
    id: 3,
    kategorie: "berichte",
    title: "Auszeichnung beim Deutschen Musikpreis",
    text: "2. Platz in der Kategorie Kammermusik – wir sind überglücklich!",
    date: "20. Januar 2024",
    dialogTitle: "2. Platz beim Deutschen Musikpreis 2024",
    dialogText: "Bei der diesjährigen Verleihung des Deutschen Musikpreises in Berlin wurden wir in der Kategorie Kammermusik mit dem zweiten Platz ausgezeichnet.\n\n\"Die Cello Band beweist, dass Kammermusik lebendig, aufregend und zeitgemäß sein kann\" – Jurymitglied Prof. Dr. Hanna Bauer, Hochschule für Musik Karlsruhe.",
    dialogDate: "20. Januar 2024 · Konzerthaus Berlin",
    dialogImage: "",
    dialogLink: "",
    dialogLinkLabel: ""
  },
  {
    id: 4,
    kategorie: "allgemeines",
    title: "Herzlich willkommen, Laura Bergmann!",
    text: "Laura verstärkt uns ab sofort als zweite Cellistin.",
    date: "5. Januar 2024",
    dialogTitle: "Neues Ensemblemitglied: Laura Bergmann",
    dialogText: "Wir freuen uns riesig, Laura Bergmann als neues Mitglied unseres Ensembles vorstellen zu dürfen. Laura studierte Violoncello an der Hochschule für Musik Karlsruhe und schloss ihr Masterstudium mit Auszeichnung ab.\n\nMit Laura gewinnen wir nicht nur eine herausragende Musikerin, sondern auch eine kreative Mitstreiterin, die unser Klangbild bereichern wird.",
    dialogDate: "Ab Januar 2024 im Ensemble",
    dialogImage: "",
    dialogLink: "",
    dialogLinkLabel: ""
  },
  {
    id: 5,
    kategorie: "konzerte",
    title: "Open Air Sommer-Konzert am Schloss",
    text: "Wir spielen am 14. Juli unter freiem Himmel – eintritt frei!",
    date: "28. Mai 2024",
    dialogTitle: "Open Air am Karlsruher Schloss",
    dialogText: "Ein besonderer Abend unter freiem Himmel: Wir spielen auf der Außenbühne am Karlsruher Schlossplatz. Das Programm umfasst klassische Werke sowie populäre Stücke in unseren Cello-Arrangements.\n\nEintritt frei – Spenden willkommen. Bringt Decken und gute Laune mit!",
    dialogDate: "14. Juli 2024 · Schlossplatz Karlsruhe, 20:00 Uhr",
    dialogImage: "",
    dialogLink: "",
    dialogLinkLabel: ""
  },
  {
    id: 6,
    kategorie: "allgemeines",
    title: "Neue Probenräume in der Südstadt",
    text: "Ab März üben wir in unseren neuen Räumlichkeiten in Karlsruhe-Südstadt.",
    date: "1. März 2024",
    dialogTitle: "Neue Heimat für die Cello Band",
    dialogText: "Wir freuen uns, ab März 2024 unsere neuen Probenräume in der Karlsruher Südstadt zu beziehen. Die großzügigen Räumlichkeiten bieten uns endlich die Möglichkeit, regelmäßig zu proben und auch kleine Veranstaltungen zu veranstalten.\n\nWer uns besuchen möchte: nach Voranmeldung gerne willkommen!",
    dialogDate: "Ab März 2024 · Südstadt Karlsruhe",
    dialogImage: "",
    dialogLink: "",
    dialogLinkLabel: ""
  }
];

/* ──────────────────────────────────────────────────────
   REPERTOIRE
   Felder:
     title   – Stücktitel
     genre   – "klassik" | "filmmusik" | "pop" | "rock"
     image   – Pfad zum Vorschaubild, z.B. "images/bach.jpg"
               Wird das Bild nicht gefunden oder ist leer,
               erscheint stattdessen das emoji als Fallback.
     emoji   – Fallback-Icon wenn kein Bild gesetzt
     bg      – Hintergrundfarbe des Fallback-Icons:
               "orange" | "mint" | "dark"
     youtube – Vollständige YouTube-URL, z.B.
               "https://www.youtube.com/watch?v=mGQLXRTl3Z0"
               oder Kurzform "https://youtu.be/mGQLXRTl3Z0"
               → öffnet eingebetteten Player im Dialog
     audio   – Pfad zur Audiodatei, z.B. "audio/bach.wav"
               → spielt Audio im Dialog ab
               (youtube hat Vorrang vor audio)
     desc    – Kurzbeschreibung für den Dialog
   ────────────────────────────────────────────────────── */
const repertoireData = [
  /* ── Klassik ── */
  {
    title: "Bach Cello Suite No. 1",
    genre: "klassik", emoji: "🎻", bg: "orange",
    image: "images/repertoire/bach-suite.jpg",
    youtube: "https://www.youtube.com/watch?v=uT3SBzmDxGk",
    audio: "",
    desc: "BWV 1007 – eines der bekanntesten Werke für Solocello. Wir spielen das Prélude in einer modernen Interpretation."
  },
  {
    title: "Schubert Quintett",
    genre: "klassik", emoji: "🎼", bg: "orange",
    image: "images/repertoire/schubert.jpg",
    youtube: "",
    audio: "audio/bach-suite-preview.wav",
    desc: "Das Streichquintett C-Dur D 956 – ein Meisterwerk der Kammermusik in unserem Arrangement für vier Celli. (Vorschau-Demo)"
  },
  {
    title: "Dvořák Cellokonzert",
    genre: "klassik", emoji: "🏛️", bg: "orange",
    image: "images/repertoire/dvorak.jpg",
    youtube: "https://www.youtube.com/watch?v=uT3SBzmDxGk",
    audio: "",
    desc: "Das h-Moll-Konzert op. 104 – romantisch, virtuos, unvergesslich."
  },
  {
    title: "Beethoven Trio",
    genre: "klassik", emoji: "📯", bg: "orange",
    image: "images/repertoire/beethoven.jpg",
    youtube: "",
    audio: "",
    desc: "Klaviertrio op. 1 Nr. 3 in unserem exklusiven Cello-Arrangement."
  },
  /* ── Filmmusik ── */
  {
    title: "The Dark Knight",
    genre: "filmmusik", emoji: "🦇", bg: "dark",
    image: "images/repertoire/dark-knight.jpg",
    youtube: "https://www.youtube.com/watch?v=uT3SBzmDxGk",
    audio: "",
    desc: "Hans Zimmers eindringliches Thema – auf vier Celli neu interpretiert."
  },
  {
    title: "Game of Thrones",
    genre: "filmmusik", emoji: "🐉", bg: "dark",
    image: "images/repertoire/got.jpg",
    youtube: "https://www.youtube.com/watch?v=uT3SBzmDxGk",
    audio: "",
    desc: "Ramin Djawadis Titelthema – episch und fesselnd."
  },
  {
    title: "Schindler's List",
    genre: "filmmusik", emoji: "🎞️", bg: "dark",
    image: "images/repertoire/schindler.jpg",
    youtube: "",
    audio: "",
    desc: "John Williams' bewegendes Thema in einer tief empfundenen Cello-Bearbeitung."
  },
  {
    title: "Interstellar",
    genre: "filmmusik", emoji: "🌌", bg: "dark",
    image: "images/repertoire/interstellar.jpg",
    youtube: "https://www.youtube.com/watch?v=uT3SBzmDxGk",
    audio: "",
    desc: "Hans Zimmers kosmisches Hauptthema – minimalistisch und atmosphärisch."
  },
  /* ── Pop & Tango ── */
  {
    title: "Libertango",
    genre: "pop", emoji: "💃", bg: "mint",
    image: "images/repertoire/libertango.jpg",
    youtube: "https://www.youtube.com/watch?v=uT3SBzmDxGk",
    audio: "",
    desc: "Astor Piazzollas Meisterwerk des Nuevo Tango – feurig und leidenschaftlich."
  },
  {
    title: "Roxanne Tango",
    genre: "pop", emoji: "🥀", bg: "mint",
    image: "images/repertoire/roxanne.jpg",
    youtube: "",
    audio: "",
    desc: "Der berühmte Tango aus Moulin Rouge! – dramatisch und unvergesslich."
  },
  {
    title: "Despacito",
    genre: "pop", emoji: "🌴", bg: "mint",
    image: "images/repertoire/despacito.jpg",
    youtube: "",
    audio: "",
    desc: "Der Weltklassiker von Luis Fonsi in einem mitreißenden Cello-Arrangement."
  },
  {
    title: "Shape of You",
    genre: "pop", emoji: "🎤", bg: "mint",
    image: "images/repertoire/shape-of-you.jpg",
    youtube: "",
    audio: "",
    desc: "Ed Sheerans Hit – neu gedacht für Cello-Ensemble."
  },
  /* ── Rock ── */
  {
    title: "Nothing Else Matters",
    genre: "rock", emoji: "🤘", bg: "dark",
    image: "images/repertoire/nothing-else.jpg",
    youtube: "https://www.youtube.com/watch?v=uT3SBzmDxGk",
    audio: "",
    desc: "Metallicas Ballade – auf dem Cello emotional wie nie zuvor."
  },
  {
    title: "Bohemian Rhapsody",
    genre: "rock", emoji: "👑", bg: "dark",
    image: "images/repertoire/bohemian.jpg",
    youtube: "https://www.youtube.com/watch?v=uT3SBzmDxGk",
    audio: "",
    desc: "Queens Opus Magnum – von vier Celli in seiner vollen Pracht gespielt."
  },
  {
    title: "Welcome to the Jungle",
    genre: "rock", emoji: "🦁", bg: "dark",
    image: "images/repertoire/jungle.jpg",
    youtube: "",
    audio: "",
    desc: "Guns N' Roses Klassiker – rauh, kraftvoll, auf dem Cello überraschend authentisch."
  },
  {
    title: "Smells Like Teen Spirit",
    genre: "rock", emoji: "⚡", bg: "dark",
    image: "images/repertoire/teen-spirit.jpg",
    youtube: "",
    audio: "",
    desc: "Nirvanas Generationshymne – im Cello-Arrangement roh und direkt."
  },
];
