export type LegalPage = {
  slug: string;
  title: string;
  pageNumber: string;
  status: string;
  sections: { heading: string; body: string }[];
};

export const legalNavigation = [
  { href: '/impressum', page: '901', label: 'IMPRINT' },
  { href: '/privacy', page: '902', label: 'PRIVACY POLICY' }
];

export const legalPages: Record<string, LegalPage> = {
  impressum: {
    slug: 'impressum',
    title: 'IMPRINT',
    pageNumber: '901',
    status: 'LEGAL INFORMATION',
    sections: [
      {
        heading: 'INFORMATION ACCORDING TO § 5 DDG',
        body: `
          <p>
            Marcus Hartelt<br />
            Louisenstr. 31<br />
            01099 Dresden<br />
            Germany
          </p>
          <p>
            VAT Identification Number: DE369411057<br />
            according to § 27a UStG
          </p>
        `
      },
      {
        heading: 'CONTACT',
        body: `
          <p>
            Phone: +49 160 5667422<br />
            E-Mail: hi(at)marcushartelt.com
          </p>
        `
      },
      {
        heading: 'COPYRIGHT',
        body: `
          <p>
            All content on this website is subject to German copyright law.
            Reproduction, editing, or distribution requires the written consent
            of the author. Downloads are permitted for private, non-commercial
            use only. Please notify us of any copyright infringements at
            hi(at)marcushartelt.com.
          </p>
        `
      },
      {
        heading: 'LIABILITY',
        body: `
          <p>
            The content of this website has been compiled with care. However, no
            guarantee is given for accuracy or completeness. Links to external
            websites are beyond our control; their operators are solely
            responsible for their content.
          </p>
        `
      },
      {
        heading: 'UNSOLICITED CONTACT',
        body: `
          <p>
            The use of contact details published in this imprint for sending
            unsolicited advertising is expressly prohibited. Legal action will be
            taken in the event of such use.
          </p>
        `
      }
    ]
  },

  privacy: {
    slug: 'privacy',
    title: 'PRIVACY POLICY',
    pageNumber: '902',
    status: 'DATA PROTECTION',
    sections: [
      {
        heading: 'GENERAL',
        body: `
          <p>
            This website does not use cookies, advertising trackers, or
            third-party analytics services such as Google Analytics. No
            personally identifiable information is collected automatically by
            Marcus Hartelt for advertising or tracking purposes when you visit
            this site.
          </p>
        `
      },
      {
        heading: 'WEBSITE HOSTING',
        body: `
          <p>
            This website is a static portfolio website built with Astro and
            hosted via Vercel. When you visit the website, technical access data
            may be processed by the hosting provider in order to deliver the
            website, maintain security, and ensure reliable operation. This may
            include technical information such as the requested page, date and
            time of access, browser information, and IP address.
          </p>
          <p>
            This technical data is not used by Marcus Hartelt for advertising,
            personal profiling, or visitor tracking.
          </p>
        `
      },
      {
        heading: 'CONTACT',
        body: `
          <p>
            If you contact us voluntarily via email or phone, the data you
            provide will be used solely to respond to your inquiry and will not
            be shared with third parties. You may request information,
            correction, or deletion of any data at any time by contacting
            hi(at)marcushartelt.com.
          </p>
        `
      },
      {
        heading: 'YOUR RIGHTS',
        body: `
          <p>
            Under GDPR, you have the right to access, correct, delete, and
            restrict the processing of your personal data, as well as the right
            to data portability and the right to lodge a complaint with a
            supervisory authority.
          </p>
        `
      }
    ]
  }
};
