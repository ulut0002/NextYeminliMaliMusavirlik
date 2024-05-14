const ROUTES = {
  //Root
  home: ".", // Home page

  // Level 1 - en
  corporate: "/corporate", // Corporate page
  services: "/services", // Services page
  industries: "/industries", // Industries page
  publications: "/publications", // Publications page
  tools: "/tools", // Tools page
  contactUs: "/contact-us", // Contact Us page

  // Level 1 = tr
  kurumsal: "/kurumsal", // Kurumsal page
  hizmetler: "/hizmetler", // Hizmetler page
  sektorler: "/sektorler", // Sektörler page
  yayinlar: "/yayinlar", // Yayınlar page
  araclar: "/araclar", // Araçlar page
  iletisim: "/iletisim", // İletişim page

  // Level 2 - en
  corporateAbout: "/corporate/about", // Corporate About page
  corporateTeam: "/corporate/our-team", // Corporate Team page
  corporateMissionVision: "/corporate/mission-vision", // Corporate Mission page
  corporateGetQuote: "/corporate/get-quote", // Corporate Get Quote page
  corporateOurDirectors: "/corporate/our-directors", // Corporate Our Directors page
  corporateFoundingDocuments: "/corporate/founding-documents", // Corporate Founding Documents page
  corporateTransparencyReports: "/corporate/transparency-reports", // Corporate Transparency Reports page

  servicesTaxes: "/services/taxes", // Services Taxes page
  servicesAudit: "/services/audit", // Services Audit page
  servicesAdvisory: "/services/advisory", // Services Advisory page
  servicesOther: "/services/other", // Services Other page

  industriesProduction: "/industries/production", // Industries Production page
  industriesEnergy: "/industries/energy", // Industries Energy page
  industriesFinancialServices: "/industries/financial-services", // Industries Energy page
  industriesConstruction: "/industries/construction", // Industries Construction page
  industriesPharmaceutical: "/industries/pharmaceutical", // Industries Pharmaceutical page
  industriesTechnology: "/industries/technology", // Industries Technology page
  industriesRetail: "/industries/retail", // Industries Retail page

  publicationNews: "/publications/news", // Publications News page
  publicationCirculars: "/publications/circulars", // Publications Circulars page

  // contactContactUs: "/contact/contact-form", // Contact Us page
  // contactOurLocation: "/contact/our-location", // Our Location page

  // Level 2 - tr
  kurumsalHakkinda: "/kurumsal/hakkimizda", // Kurumsal Hakkında page
  kurumsalEkip: "/kurumsal/ekibimiz", // Kurumsal Ekip page
  kurumsalMisyonVizyon: "/kurumsal/misyon-vizyon", // Kurumsal Misyon page
  kurumsalTeklifAl: "/kurumsal/teklif-al", // Kurumsal Teklif Al page
  kurumsalYonetimKurulu: "/kurumsal/yonetim-kurulu", // Kurumsal Yönetim Kurulu page
  kurumsalKurulusBelgeleri: "/kurumsal/kurulus-belgeleri", // Kurumsal Kuruluş Belgeleri page
  kurumsalSaydamlıkRaporları: "/kurumsal/seffaflik-raporlari", // Kurumsal Saydamlık Raporları page

  hizmetlerVergi: "/hizmetler/vergi", // Hizmetlerimiz Vergi page
  hizmetlerDenetim: "/hizmetler/denetim", // Hizmetlerimiz Denetim page
  hizmetlerDanismanlik: "/hizmetler/danismanlik", // Hizmetlerimiz Danışmanlık page
  hizmetlerDiger: "/hizmetler/diger", // Hizmetlerimiz Diğer page

  sektorlerUretim: "/sektorler/uretim", // Industries Production page
  sektorlerEnerji: "/sektorler/enerji", // Industries Energy page
  sektorlerFinans: "/sektorler/finansal-hizmetler", // Industries Energy page
  sektorlerInsaat: "/sektorler/insaat", // Industries Construction page
  sektorlerSaglik: "/sektorler/saglik-ilac", // Industries Pharmaceutical page
  sektorlerTeknoloji: "/sektorler/teknoloji", // Industries Technology page
  sektorlerPerakende: "/sektorler/perakende", // Industries Retail page

  yayinlarHaberler: "/yayinlar/haberler", // Publications News page
  yayinlarSirkuler: "/yayinlar/sirkuler", // Publications Circulars page
  // iletisimIletisim: "/iletisim/iletisim-formu", // Contact Us page
  // iletisimLokasyon: "/iletisim/lokasyon", // Our Location page
};

const TOP_NAVIGATION = {
  tr: {
    items: [
      {
        text: "nav.corporate.title",
        path: ROUTES.kurumsal,
        subItems: [
          {
            text: "nav.corporate.about.title",
            description: "nav.corporate.about.description",
            path: ROUTES.kurumsalHakkinda,
          },
          {
            text: "nav.corporate.missionVision.title",
            description: "nav.corporate.missionVision.description",
            path: ROUTES.kurumsalMisyonVizyon,
          },
          {
            text: "nav.corporate.ourDirectors.title",
            description: "nav.corporate.ourDirectors.description",
            path: ROUTES.kurumsalYonetimKurulu,
          },
          {
            text: "nav.corporate.ourTeam.title",
            description: "nav.corporate.ourTeam.description",
            path: ROUTES.kurumsalEkip,
          },

          {
            text: "nav.corporate.foundationDocuments.title",
            description: "nav.corporate.foundationDocuments.description",
            path: ROUTES.kurumsalKurulusBelgeleri,
          },
          {
            text: "nav.corporate.transparencyReports.title",
            description: "nav.corporate.transparencyReports.description",
            path: ROUTES.kurumsalSaydamlıkRaporları,
          },
          {
            text: "nav.corporate.getQuote.title",
            description: "nav.corporate.getQuote.description",
            path: ROUTES.kurumsalTeklifAl,
          },
        ],
      },
      {
        text: "nav.services.title",
        path: ROUTES.hizmetler,
        subItems: [
          {
            text: "nav.services.taxes.title",
            description: "nav.services.taxes.description",
            path: ROUTES.hizmetlerVergi,
          },
          {
            text: "nav.services.audit.title",
            description: "nav.services.audit.description",
            path: ROUTES.hizmetlerDenetim,
          },
          {
            text: "nav.services.advisory.title",
            description: "nav.services.advisory.description",
            path: ROUTES.hizmetlerDanismanlik,
          },
          {
            text: "nav.services.other.title",
            description: "nav.services.other.description",
            path: ROUTES.hizmetlerDiger,
          },
        ],
      },
      {
        text: "nav.industries.title",
        path: ROUTES.sektorler,
        columns: 2,
        subItems: [
          {
            text: "nav.industries.industry.title",
            description: "nav.industries.industry.description",
            path: ROUTES.sektorlerUretim,
          },
          {
            text: "nav.industries.energy.title",
            description: "nav.industries.energy.description",
            path: ROUTES.sektorlerEnerji,
          },
          {
            text: "nav.industries.financial.title",
            description: "nav.industries.financial.description",
            path: ROUTES.sektorlerInsaat,
          },
          {
            text: "nav.industries.construction.title",
            description: "nav.industries.construction.description",
            path: ROUTES.sektorlerFinans,
          },
          {
            text: "nav.industries.pharmaceutical.title",
            description: "nav.industries.pharmaceutical.description",
            path: ROUTES.sektorlerSaglik,
          },
          {
            text: "nav.industries.technology.title",
            description: "nav.industries.technology.description",
            path: ROUTES.sektorlerTeknoloji,
          },
        ],
      },
      {
        text: "nav.publications.title",
        path: ROUTES.yayinlar,
        subItems: [
          {
            text: "nav.publications.news.title",
            description: "nav.publications.news.description",
            path: ROUTES.yayinlarHaberler,
          },
          {
            text: "nav.publications.circulars.title",
            description: "nav.publications.circulars.description",
            path: ROUTES.yayinlarSirkuler,
          },
        ],
      },
      {
        text: "nav.tools.title",
        path: ROUTES.araclar,
      },
      {
        text: "nav.contactUs.title",
        path: ROUTES.iletisim,
      },
    ],
  },
  fallback: {
    items: [
      {
        text: "Corporate",
        path: ROUTES.corporate,
        subItems: [
          {
            text: "nav.corporate.about.title",
            description: "nav.corporate.about.description",
            path: ROUTES.corporateAbout,
          },
          {
            text: "nav.corporate.ourTeam.title",
            description: "nav.corporate.ourTeam.description",
            path: ROUTES.corporateTeam,
          },
          {
            text: "nav.corporate.missionVision.title",
            description: "nav.corporate.missionVision.description",
            path: ROUTES.corporateMissionVision,
          },
          {
            text: "nav.corporate.getQuote.title",
            description: "nav.corporate.getQuote.description",
            path: ROUTES.corporateGetQuote,
          },
          {
            text: "nav.corporate.ourDirectors.title",
            description: "nav.corporate.ourDirectors.description",
            path: ROUTES.corporateOurDirectors,
          },
          {
            text: "nav.corporate.foundationDocuments.title",
            description: "nav.corporate.foundationDocuments.description",
            path: ROUTES.corporateFoundingDocuments,
          },
          {
            text: "nav.corporate.transparencyReports.title",
            description: "nav.corporate.transparencyReports.description",
            path: ROUTES.corporateTransparencyReports,
          },
        ],
      },
      {
        text: "nav.services.title",
        path: ROUTES.services,
        subItems: [
          {
            text: "nav.services.taxes.title",
            description: "nav.services.taxes.description",
            path: ROUTES.servicesTaxes,
          },
          {
            text: "nav.services.audit.title",
            description: "nav.services.audit.description",
            path: ROUTES.servicesAudit,
          },
          {
            text: "nav.services.advisory.title",
            description: "nav.services.advisory.description",
            path: ROUTES.servicesAdvisory,
          },
          {
            text: "nav.services.other.title",
            description: "nav.services.other.description",
            path: ROUTES.servicesOther,
          },
        ],
      },
      {
        text: "Industries",
        path: ROUTES.industries,
        columns: 2,
        subItems: [
          {
            text: "nav.industries.industry.title",
            description: "nav.industries.industry.description",
            path: ROUTES.industriesProduction,
          },
          {
            text: "nav.industries.energy.title",
            description: "nav.industries.energy.description",
            path: ROUTES.industriesEnergy,
          },
          {
            text: "nav.industries.financial.title",
            description: "nav.industries.financial.description",
            path: ROUTES.industriesConstruction,
          },
          {
            text: "nav.industries.construction.title",
            description: "nav.industries.construction.description",
            path: ROUTES.industriesFinancialServices,
          },
          {
            text: "nav.industries.pharmaceutical.title",
            description: "nav.industries.pharmaceutical.description",
            path: ROUTES.industriesPharmaceutical,
          },
          {
            text: "nav.industries.technology.title",
            description: "nav.industries.technology.description",
            path: ROUTES.industriesTechnology,
          },
        ],
      },
      {
        text: "nav.publications.title",
        path: ROUTES.publications,
        subItems: [
          {
            text: "nav.publications.news.title",
            description: "nav.publications.news.description",
            path: ROUTES.publicationNews,
          },
          {
            text: "nav.publications.circulars.title",
            description: "nav.publications.circulars.description",
            path: ROUTES.publicationCirculars,
          },
        ],
      },
      {
        text: "nav.tools.title",
        path: ROUTES.tools,
      },
      {
        text: "nav.contactUs.title",
        path: ROUTES.contactUs,
      },
    ],
  },
};

const getTopNavigation = (locale) => {
  return TOP_NAVIGATION[locale] || TOP_NAVIGATION.fallback;
};

export { ROUTES, getTopNavigation };
