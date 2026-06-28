export type LegalPage = {
  slug: string;
  title: string;
  pageNumber: string;
  status: string;
  sections: { heading: string; body: string }[];
};

export const legalNotice = 'RECHTSTEXTE SIND PLATZHALTER. FINALE INHALTE MÜSSEN VOR VERÖFFENTLICHUNG GEPRÜFT WERDEN.';

export const legalNavigation = [
  { href: '/impressum', page: '108', label: 'IMPRESSUM' },
  { href: '/privacy', page: '109', label: 'DATENSCHUTZ' },
  { href: '/terms', page: '110', label: 'AGB' },
  { href: '/copyright', page: '111', label: 'COPYRIGHT' },
  { href: '/usage-rights', page: '112', label: 'NUTZUNGSRECHTE' },
  { href: '/cookies', page: '113', label: 'COOKIES' }
];

export const legalPages: Record<string, LegalPage> = {
  impressum: {
    slug: 'impressum', title: 'IMPRESSUM', pageNumber: '108', status: 'LEGAL DOCUMENT',
    sections: [
      { heading: 'ANBIETER', body: 'Marcus Hartelt — Photography. [Operator / legal entity placeholder].' },
      { heading: 'ADRESSE', body: '[Street and number], [Postal code] Berlin, Germany.' },
      { heading: 'KONTAKT', body: 'hi@marcushartelt.com — +49 176 1234 5678.' },
      { heading: 'VERANTWORTLICH FÜR INHALTE', body: 'Marcus Hartelt, address as above (§ 18 MStV placeholder).' }
    ]
  },
  privacy: {
    slug: 'privacy', title: 'DATENSCHUTZ', pageNumber: '109', status: 'LEGAL DOCUMENT',
    sections: [
      { heading: 'DATENSCHUTZ', body: 'Overview of how personal data is handled on this site. Placeholder.' },
      { heading: 'VERARBEITUNG PERSONENBEZOGENER DATEN', body: 'Which data is processed and on what legal basis. Placeholder.' },
      { heading: 'KONTAKTAUFNAHME', body: 'What happens to data sent via email or the contact page. Placeholder.' },
      { heading: 'WEBSITE-NUTZUNG', body: 'Server logs and technical data collected during use. Placeholder.' },
      { heading: 'COOKIES', body: 'Reference to the cookie policy. Placeholder.' }
    ]
  },
  terms: {
    slug: 'terms', title: 'AGB', pageNumber: '110', status: 'LEGAL DOCUMENT',
    sections: [
      { heading: 'ALLGEMEINE GESCHÄFTSBEDINGUNGEN', body: 'Scope of these terms. Placeholder.' },
      { heading: 'BUCHUNGEN', body: 'How commissions are booked and confirmed. Placeholder.' },
      { heading: 'NUTZUNGSRECHTE', body: 'How usage rights are granted per project. Placeholder.' },
      { heading: 'ZAHLUNG', body: 'Payment terms and invoicing. Placeholder.' },
      { heading: 'LIEFERUNG', body: 'Delivery of final images. Placeholder.' },
      { heading: 'STORNIERUNG', body: 'Cancellation conditions. Placeholder.' }
    ]
  },
  copyright: {
    slug: 'copyright', title: 'COPYRIGHT', pageNumber: '111', status: 'LEGAL DOCUMENT',
    sections: [
      { heading: 'BILDRECHTE', body: 'All photographs remain the property of Marcus Hartelt. Placeholder.' },
      { heading: 'TEXTE', body: 'Copyright on all written content. Placeholder.' },
      { heading: 'WEBSITE-GRAFIK', body: 'Design and graphics are protected. Placeholder.' },
      { heading: 'NUTZUNG NUR MIT ERLAUBNIS', body: 'No use without prior written permission. Placeholder.' }
    ]
  },
  'usage-rights': {
    slug: 'usage-rights', title: 'NUTZUNGSRECHTE', pageNumber: '112', status: 'LEGAL DOCUMENT',
    sections: [
      { heading: 'PRIVATE NUTZUNG', body: 'Conditions for private use. Placeholder.' },
      { heading: 'KOMMERZIELLE NUTZUNG', body: 'Conditions for commercial use. Placeholder.' },
      { heading: 'SOCIAL MEDIA', body: 'Use on social platforms. Placeholder.' },
      { heading: 'PRINT', body: 'Use in print. Placeholder.' },
      { heading: 'WEITERGABE AN DRITTE', body: 'Transfer to third parties. Placeholder.' }
    ]
  },
  cookies: {
    slug: 'cookies', title: 'COOKIES', pageNumber: '113', status: 'LEGAL DOCUMENT',
    sections: [
      { heading: 'COOKIE-HINWEIS', body: 'This site uses minimal cookies. Placeholder.' },
      { heading: 'TECHNISCH NOTWENDIGE COOKIES', body: 'Essential cookies for basic function. Placeholder.' },
      { heading: 'OPTIONALE DIENSTE', body: 'Optional services requiring consent. Placeholder.' },
      { heading: 'ANALYSE / TRACKING', body: 'Only if enabled later. Placeholder.' }
    ]
  }
};
