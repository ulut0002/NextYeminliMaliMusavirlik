const LABELS = {
  home: "nav.home.title",
  corporate: "nav.corporate.title",
  services: "nav.services.title",
  industries: "nav.industries.title",
  publications: "nav.publications.title",
  tools: "nav.tools.title",
  contactUs: "nav.contactUs.title",

  corporate_about: "nav.corporate.about.title",
  corporate_missionVision: "nav.corporate.missionVision.title",
  corporate_ourDirectors: "nav.corporate.ourDirectors.title",
  corporate_ourTeam: "nav.corporate.ourTeam.title",
  corporate_foundationDocuments: "nav.corporate.foundationDocuments.title",
  corporate_transparencyReports: "nav.corporate.transparencyReports.title",
  corporate_getQuote: "nav.corporate.getQuote.title",
  services_taxes: "nav.services.taxes.title",
  services_audit: "nav.services.audit.title",
  services_advisory: "nav.services.advisory.title",
  services_other: "nav.services.other.title",
  industries_production: "nav.industries.industry.title",
  industries_energy: "nav.industries.energy.title",
  industries_financial: "nav.industries.financial.title",
  industries_construction: "nav.industries.construction.title",
  industries_pharmaceutical: "nav.industries.pharmaceutical.title",
  industries_retail: "nav.industries.retail.title",
  industries_technology: "nav.industries.technology.title",
  publications_news: "nav.publications.news.title",
  publications_circulars: "nav.publications.circulars.title",
};

const ROUTE_PATHS = {
  home: "/",
  corporate: "/corporate",
  services: "/services",
  industries: "/industries",
  publications: "/publications",
  tools: "/tools",
  contactUs: "/contact-us",
  corporateAbout: "/corporate/about",
  corporateTeam: "/corporate/our-team",
  corporateMissionVision: "/corporate/mission-vision",
  corporateGetQuote: "/corporate/get-quote",

  corporateOurDirectors: "/corporate/our-directors",
  corporateFoundingDocuments: "/corporate/founding-documents",
  corporateTransparencyReports: "/corporate/transparency-reports",
  servicesTaxes: "/services/taxes",
  servicesAudit: "/services/audit",
  servicesAdvisory: "/services/advisory",
  servicesOther: "/services/other",
  industriesProduction: "/industries/production",
  industriesEnergy: "/industries/energy",
  industriesFinancialServices: "/industries/financial-services",

  industriesConstruction: "/industries/construction",
  industriesPharmaceutical: "/industries/pharmaceutical",
  industriesTechnology: "/industries/technology",
  industriesRetail: "/industries/retail",
  publicationNews: "/publications/news",
  publicationCirculars: "/publications/circulars",
  tools: "/tools",
  contactUs: "/contact-us",
  kurumsal: "/kurumsal",

  hizmetler: "/hizmetler",
  sektorler: "/sektorler",
  yayinlar: "/yayinlar",
  araclar: "/araclar",
  iletisim: "/iletisim",
  kurumsalHakkinda: "/kurumsal/hakkimizda",
  kurumsalEkip: "/kurumsal/ekibimiz",
  kurumsalMisyonVizyon: "/kurumsal/misyon-vizyon",
  kurumsalTeklifAl: "/kurumsal/teklif-al",
  kurumsalYonetimKurulu: "/kurumsal/yonetim-kurulu",
  kurumsalKurulusBelgeleri: "/kurumsal/kurulus-belgeleri",
  kurumsalSaydamlıkRaporları: "/kurumsal/seffaflik-raporlari",
  hizmetlerVergi: "/hizmetler/vergi",
  hizmetlerDenetim: "/hizmetler/denetim",
  hizmetlerDanismanlik: "/hizmetler/danismanlik",
  hizmetlerDiger: "/hizmetler/diger",
  sektorlerUretim: "/sektorler/uretim",
  sektorlerEnerji: "/sektorler/enerji",
  sektorlerFinans: "/sektorler/finansal-hizmetler",
  sektorlerInsaat: "/sektorler/insaat",
  sektorlerSaglik: "/sektorler/saglik-ilac",
  sektorlerTeknoloji: "/sektorler/teknoloji",
  sektorlerPerakende: "/sektorler/perakende",
  yayinlarHaberler: "/yayinlar/haberler",
  yayinlarSirkuler: "/yayinlar/sirkuler",
};

const ROUTES = {
  //Root
  home: { path: ROUTE_PATHS.home, breadcrumbs: [] }, // Home page

  // Level 1 - en
  corporate: {
    path: ROUTE_PATHS.corporate,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.corporate, label: LABELS.corporate },
    ],
  },
  services: {
    path: ROUTE_PATHS.services,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.services, label: LABELS.services },
    ],
  },
  industries: {
    path: ROUTE_PATHS.industries,
    breadcrumbs: [LABELS.home, LABELS.industries],
  },
  publications: {
    path: ROUTE_PATHS.publications,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.publications, label: LABELS.publications },
    ],
  },
  tools: {
    path: ROUTE_PATHS.tools,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.tools, label: LABELS.tools },
    ],
  },
  contactUs: {
    path: ROUTE_PATHS.contactUs,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.contactUs, label: LABELS.contactUs },
    ],
  },

  // Level 1 = tr
  kurumsal: {
    path: ROUTE_PATHS.kurumsal,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.kurumsal, label: LABELS.corporate },
    ],
  },
  hizmetler: {
    path: ROUTE_PATHS.hizmetler,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.hizmetler, label: LABELS.services },
    ],
  },
  sektorler: {
    path: ROUTE_PATHS.sektorler,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.sektorler, label: LABELS.industries },
    ],
  },
  yayinlar: {
    path: ROUTE_PATHS.yayinlar,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.yayinlar, label: LABELS.publications },
    ],
  },
  araclar: {
    path: ROUTE_PATHS.araclar,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.araclar, label: LABELS.tools },
    ],
  },
  iletisim: {
    path: ROUTE_PATHS.iletisim,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.iletisim, label: LABELS.contactUs },
    ],
  },
  // Level 2 - en
  corporateAbout: {
    path: ROUTE_PATHS.corporateAbout,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.corporate, label: LABELS.corporate },
      { path: ROUTE_PATHS.corporateAbout, label: LABELS.corporate_about },
    ],
  },
  corporateTeam: {
    path: ROUTE_PATHS.corporateTeam,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.corporate, label: LABELS.corporate },
      { path: ROUTE_PATHS.corporateTeam, label: LABELS.corporate_ourTeam },
    ],
  },
  corporateMissionVision: {
    path: ROUTE_PATHS.corporateMissionVision,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.corporate, label: LABELS.corporate },
      {
        path: ROUTE_PATHS.corporateMissionVision,
        label: LABELS.corporate_missionVision,
      },
    ],
  },
  corporateGetQuote: {
    path: ROUTE_PATHS.corporateGetQuote,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.corporate, label: LABELS.corporate },
      { path: ROUTE_PATHS.corporateGetQuote, label: LABELS.corporate_getQuote },
    ],
  },
  corporateOurDirectors: {
    path: ROUTE_PATHS.corporateOurDirectors,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.corporate, label: LABELS.corporate },
      {
        path: ROUTE_PATHS.corporateOurDirectors,
        label: LABELS.corporate_ourDirectors,
      },
    ],
  },
  corporateFoundingDocuments: {
    path: ROUTE_PATHS.corporateFoundingDocuments,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.corporate, label: LABELS.corporate },
      {
        path: ROUTE_PATHS.corporateFoundingDocuments,
        label: LABELS.corporate_foundationDocuments,
      },
    ],
  },
  corporateTransparencyReports: {
    path: ROUTE_PATHS.corporateTransparencyReports,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.corporate, label: LABELS.corporate },
      {
        path: ROUTE_PATHS.corporateTransparencyReports,
        label: LABELS.transparencyReports,
      },
    ],
  },

  servicesTaxes: {
    path: ROUTE_PATHS.servicesTaxes,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.services, label: LABELS.services },
      { path: ROUTE_PATHS.servicesTaxes, label: LABELS.services_taxes },
    ],
  },
  servicesAudit: {
    path: ROUTE_PATHS.servicesAudit,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.services, label: LABELS.services },
      { path: ROUTE_PATHS.servicesAudit, label: LABELS.services_audit },
    ],
  },
  servicesAdvisory: {
    path: ROUTE_PATHS.servicesAdvisory,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.services, label: LABELS.services },
      { path: ROUTE_PATHS.servicesAdvisory, label: LABELS.services_advisory },
    ],
  },
  servicesOther: {
    path: ROUTE_PATHS.servicesOther,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.services, label: LABELS.services },
      { path: ROUTE_PATHS.servicesOther, label: LABELS.services_other },
    ],
  },

  industriesProduction: {
    path: ROUTE_PATHS.industriesProduction,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.industries, label: LABELS.industries },
      {
        path: ROUTE_PATHS.industriesProduction,
        label: LABELS.industries_production,
      },
    ],
  },
  industriesEnergy: {
    path: ROUTE_PATHS.industriesEnergy,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.industries, label: LABELS.industries },
      { path: ROUTE_PATHS.industriesEnergy, label: LABELS.industries_energy },
    ],
  },
  industriesFinancialServices: {
    path: ROUTE_PATHS.industriesFinancialServices,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.industries, label: LABELS.industries },
      {
        path: ROUTE_PATHS.industriesFinancialServices,
        label: LABELS.industries_financial,
      },
    ],
  },
  industriesConstruction: {
    path: ROUTE_PATHS.industriesConstruction,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.industries, label: LABELS.industries },
      {
        path: ROUTE_PATHS.industriesConstruction,
        label: LABELS.industries_construction,
      },
    ],
  },
  industriesPharmaceutical: {
    path: ROUTE_PATHS.industriesPharmaceutical,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.industries, label: LABELS.industries },
      {
        path: ROUTE_PATHS.industriesPharmaceutical,
        label: LABELS.industries_pharmaceutical,
      },
    ],
  },
  industriesTechnology: {
    path: ROUTE_PATHS.industriesTechnology,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.industries, label: LABELS.industries },
      {
        path: ROUTE_PATHS.industriesTechnology,
        label: LABELS.industries_technology,
      },
    ],
  },
  industriesRetail: {
    path: ROUTE_PATHS.industriesRetail,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.industries, label: LABELS.industries },
      {
        path: ROUTE_PATHS.industriesRetail,
        label: LABELS.industries_retail,
      },
    ],
  },

  publicationNews: {
    path: ROUTE_PATHS.publicationNews,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.publications, label: LABELS.publications },
      {
        path: ROUTE_PATHS.publicationNews,
        label: LABELS.publications_news,
      },
    ],
  },
  publicationCirculars: {
    path: ROUTE_PATHS.publicationCirculars,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.publications, label: LABELS.publications },
      {
        path: ROUTE_PATHS.publicationCirculars,
        label: LABELS.publications_circulars,
      },
    ],
  },

  // Level 2 - tr
  kurumsalHakkinda: {
    path: ROUTE_PATHS.kurumsalHakkinda,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.kurumsal, label: LABELS.corporate },
      { path: ROUTE_PATHS.kurumsalHakkinda, label: LABELS.corporate_about },
    ],
  },
  kurumsalEkip: {
    path: ROUTE_PATHS.kurumsalEkip,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.kurumsal, label: LABELS.corporate },
      { path: ROUTE_PATHS.kurumsalEkip, label: LABELS.corporate_ourTeam },
    ],
  },
  kurumsalMisyonVizyon: {
    path: ROUTE_PATHS.kurumsalMisyonVizyon,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.kurumsal, label: LABELS.corporate },
      {
        path: ROUTE_PATHS.kurumsalMisyonVizyon,
        label: LABELS.corporate_missionVision,
      },
    ],
  },
  kurumsalTeklifAl: {
    path: ROUTE_PATHS.kurumsalTeklifAl,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.kurumsal, label: LABELS.corporate },
      { path: ROUTE_PATHS.kurumsalTeklifAl, label: LABELS.corporate_getQuote },
    ],
  },
  kurumsalYonetimKurulu: {
    path: ROUTE_PATHS.kurumsalYonetimKurulu,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.kurumsal, label: LABELS.corporate },
      {
        path: ROUTE_PATHS.kurumsalYonetimKurulu,
        label: LABELS.corporate_ourDirectors,
      },
    ],
  },
  kurumsalKurulusBelgeleri: {
    path: ROUTE_PATHS.kurumsalKurulusBelgeleri,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.kurumsal, label: LABELS.corporate },
      {
        path: ROUTE_PATHS.kurumsalKurulusBelgeleri,
        label: LABELS.corporate_foundationDocuments,
      },
    ],
  },
  kurumsalSaydamlıkRaporları: {
    path: ROUTE_PATHS.kurumsalSaydamlıkRaporları,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.kurumsal, label: LABELS.corporate },
      {
        path: ROUTE_PATHS.kurumsalSaydamlıkRaporları,
        label: LABELS.corporate_foundationDocuments,
      },
    ],
  },

  hizmetlerVergi: {
    path: ROUTE_PATHS.hizmetlerVergi,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.hizmetler, label: LABELS.services },
      {
        path: ROUTE_PATHS.hizmetlerVergi,
        label: LABELS.services_taxes,
      },
    ],
  },
  hizmetlerDenetim: {
    path: ROUTE_PATHS.hizmetlerDenetim,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.hizmetler, label: LABELS.services },
      { path: ROUTE_PATHS.hizmetlerDenetim, label: LABELS.services_audit },
    ],
  },
  hizmetlerDanismanlik: {
    path: ROUTE_PATHS.hizmetlerDanismanlik,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.hizmetler, label: LABELS.services },
      {
        path: ROUTE_PATHS.hizmetlerDanismanlik,
        label: LABELS.services_advisory,
      },
    ],
  },
  hizmetlerDiger: {
    path: ROUTE_PATHS.hizmetlerDiger,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.hizmetler, label: LABELS.services },
      { path: ROUTE_PATHS.hizmetlerDiger, label: LABELS.services_other },
    ],
  },

  sektorlerUretim: {
    path: ROUTE_PATHS.sektorlerUretim,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.sektorler, label: LABELS.industries },
      {
        path: ROUTE_PATHS.sektorlerUretim,
        label: LABELS.industries_production,
      },
    ],
  },
  sektorlerEnerji: {
    path: ROUTE_PATHS.sektorlerEnerji,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.sektorler, label: LABELS.industries },
      { path: ROUTE_PATHS.sektorlerEnerji, label: LABELS.industries_energy },
    ],
  },
  sektorlerFinans: {
    path: ROUTE_PATHS.sektorlerFinans,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.sektorler, label: LABELS.industries },
      {
        path: ROUTE_PATHS.sektorlerFinans,
        label: LABELS.industries_financial,
      },
    ],
  },
  sektorlerInsaat: {
    path: ROUTE_PATHS.sektorlerInsaat,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.sektorler, label: LABELS.industries },
      {
        path: ROUTE_PATHS.sektorlerInsaat,
        label: LABELS.industries_construction,
      },
    ],
  },
  sektorlerSaglik: {
    path: ROUTE_PATHS.sektorlerSaglik,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.sektorler, label: LABELS.industries },
      {
        path: ROUTE_PATHS.sektorlerSaglik,
        label: LABELS.industries_pharmaceutical,
      },
    ],
  },
  sektorlerTeknoloji: {
    path: ROUTE_PATHS.sektorlerTeknoloji,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.sektorler, label: LABELS.industries },
      {
        path: ROUTE_PATHS.sektorlerTeknoloji,
        label: LABELS.industries_technology,
      },
    ],
  },
  sektorlerPerakende: {
    path: ROUTE_PATHS.sektorlerPerakende,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.sektorler, label: LABELS.industries },
      {
        path: ROUTE_PATHS.sektorlerPerakende,
        label: LABELS.industries_technology,
      },
    ],
  },

  yayinlarHaberler: {
    path: ROUTE_PATHS.yayinlarHaberler,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.yayinlar, label: LABELS.publications },
      {
        path: ROUTE_PATHS.yayinlarHaberler,
        label: LABELS.publications_news,
      },
    ],
  }, // Publications News page
  yayinlarSirkuler: {
    path: ROUTE_PATHS.yayinlarSirkuler,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.yayinlar, label: LABELS.publications },
      {
        path: ROUTE_PATHS.yayinlarSirkuler,
        label: LABELS.publications_circulars,
      },
    ],
  },

  araclar: {
    path: ROUTE_PATHS.araclar,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.araclar, label: LABELS.tools },
    ],
  },
  iletisim: {
    path: ROUTE_PATHS.iletisim,
    breadcrumbs: [
      { path: ROUTE_PATHS.home, label: LABELS.home },
      { path: ROUTE_PATHS.iletisim, label: LABELS.contactUs },
    ],
  },
};

const TOP_NAVIGATION = {
  tr: {
    items: [
      { text: LABELS.home, path: ROUTE_PATHS.home },
      {
        text: LABELS.corporate,
        path: ROUTE_PATHS.kurumsal,
        columns: 2,
        subItems: [
          {
            text: LABELS.corporate_about,
            description: "nav.corporate.about.description",
            path: ROUTE_PATHS.kurumsalHakkinda,
          },
          {
            text: LABELS.corporate_missionVision,
            description: "nav.corporate.missionVision.description",
            path: ROUTE_PATHS.kurumsalMisyonVizyon,
          },
          {
            text: LABELS.corporate_ourDirectors,
            description: "nav.corporate.ourDirectors.description",
            path: ROUTE_PATHS.kurumsalYonetimKurulu,
          },
          {
            text: LABELS.corporate_ourTeam,
            description: "nav.corporate.ourTeam.description",
            path: ROUTE_PATHS.kurumsalEkip,
          },

          {
            text: LABELS.corporate_foundationDocuments,
            description: "nav.corporate.foundationDocuments.description",
            path: ROUTE_PATHS.kurumsalKurulusBelgeleri,
          },
          {
            text: LABELS.corporate_transparencyReports,
            description: "nav.corporate.transparencyReports.description",
            path: ROUTE_PATHS.kurumsalSaydamlıkRaporları,
          },
          {
            text: LABELS.corporate_getQuote,
            description: "nav.corporate.getQuote.description",
            path: ROUTE_PATHS.kurumsalTeklifAl,
          },
        ],
      },
      {
        text: "nav.services.title",
        path: ROUTE_PATHS.hizmetler,
        subItems: [
          {
            text: LABELS.services_taxes,
            description: "nav.services.taxes.description",
            path: ROUTE_PATHS.hizmetlerVergi,
          },
          {
            text: LABELS.services_audit,
            description: "nav.services.audit.description",
            path: ROUTE_PATHS.hizmetlerDenetim,
          },
          {
            text: LABELS.services_advisory,
            description: "nav.services.advisory.description",
            path: ROUTE_PATHS.hizmetlerDanismanlik,
          },
          {
            text: LABELS.services_other,
            description: "nav.services.other.description",
            path: ROUTE_PATHS.hizmetlerDiger,
          },
        ],
      },
      {
        text: LABELS.industries,
        path: ROUTE_PATHS.sektorler,
        columns: 2,
        subItems: [
          {
            text: LABELS.industries_production,
            description: "nav.industries.industry.description",
            path: ROUTE_PATHS.sektorlerUretim,
          },
          {
            text: LABELS.industries_energy,
            description: "nav.industries.energy.description",
            path: ROUTE_PATHS.sektorlerEnerji,
          },
          {
            text: LABELS.industries_financial,
            description: "nav.industries.financial.description",
            path: ROUTE_PATHS.sektorlerFinans,
          },
          {
            text: LABELS.industries_construction,
            description: "nav.industries.construction.description",
            path: ROUTE_PATHS.sektorlerInsaat,
          },
          {
            text: LABELS.industries_pharmaceutical,
            description: "nav.industries.pharmaceutical.description",
            path: ROUTE_PATHS.sektorlerSaglik,
          },
          {
            text: LABELS.industries_technology,
            description: "nav.industries.technology.description",
            path: ROUTE_PATHS.sektorlerTeknoloji,
          },
        ],
      },
      {
        text: LABELS.publications,
        path: ROUTE_PATHS.yayinlar,
        subItems: [
          {
            text: LABELS.publications_news,
            description: "nav.publications.news.description",
            path: ROUTE_PATHS.yayinlarHaberler,
          },
          {
            text: LABELS.publications_circulars,
            description: "nav.publications.circulars.description",
            path: ROUTE_PATHS.yayinlarSirkuler,
          },
        ],
      },
      {
        text: LABELS.tools,
        path: ROUTE_PATHS.araclar,
      },
      {
        text: LABELS.contactUs,
        path: ROUTE_PATHS.iletisim,
      },
    ],
  },
  fallback: {
    items: [
      {
        text: "Corporate",
        path: ROUTE_PATHS.corporate,
        subItems: [
          {
            text: LABELS.corporate_about,
            description: "nav.corporate.about.description",
            path: ROUTE_PATHS.corporateAbout,
          },
          {
            text: LABELS.corporate_ourTeam,
            description: "nav.corporate.ourTeam.description",
            path: ROUTE_PATHS.corporateTeam,
          },
          {
            text: LABELS.corporate_missionVision,
            description: "nav.corporate.missionVision.description",
            path: ROUTE_PATHS.corporateMissionVision,
          },
          {
            text: LABELS.corporate_getQuote,
            description: "nav.corporate.getQuote.description",
            path: ROUTE_PATHS.corporateGetQuote,
          },
          {
            text: LABELS.corporate_ourDirectors,
            description: "nav.corporate.ourDirectors.description",
            path: ROUTE_PATHS.corporateOurDirectors,
          },
          {
            text: LABELS.corporate_foundationDocuments,
            description: "nav.corporate.foundationDocuments.description",
            path: ROUTE_PATHS.corporateFoundingDocuments,
          },
          {
            text: LABELS.corporate_transparencyReports,
            description: "nav.corporate.transparencyReports.description",
            path: ROUTE_PATHS.corporateTransparencyReports,
          },
        ],
      },
      {
        text: LABELS.services,
        path: ROUTE_PATHS.services,
        subItems: [
          {
            text: LABELS.services_taxes,
            description: "nav.services.taxes.description",
            path: ROUTE_PATHS.servicesTaxes,
          },
          {
            text: LABELS.services_audit,
            description: "nav.services.audit.description",
            path: ROUTE_PATHS.servicesAudit,
          },
          {
            text: LABELS.services_advisory,
            description: "nav.services.advisory.description",
            path: ROUTE_PATHS.servicesAdvisory,
          },
          {
            text: LABELS.services_other,
            description: "nav.services.other.description",
            path: ROUTE_PATHS.servicesOther,
          },
        ],
      },
      {
        text: "Industries",
        path: ROUTE_PATHS.industries,
        columns: 2,
        subItems: [
          {
            text: LABELS.industries_production,
            description: "nav.industries.industry.description",
            path: ROUTE_PATHS.industriesProduction,
          },
          {
            text: LABELS.industries_energy,
            description: "nav.industries.energy.description",
            path: ROUTE_PATHS.industriesEnergy,
          },
          {
            text: LABELS.industries_financial,
            description: "nav.industries.financial.description",
            path: ROUTE_PATHS.industriesFinancialServices,
          },
          {
            text: LABELS.industries_construction,
            description: "nav.industries.construction.description",
            path: ROUTE_PATHS.industriesConstruction,
          },
          {
            text: LABELS.industries_pharmaceutical,
            description: "nav.industries.pharmaceutical.description",
            path: ROUTE_PATHS.industriesPharmaceutical,
          },
          {
            text: LABELS.industries_technology,
            description: "nav.industries.technology.description",
            path: ROUTE_PATHS.industriesTechnology,
          },
        ],
      },
      {
        text: "nav.publications.title",
        path: ROUTE_PATHS.publications,
        subItems: [
          {
            text: LABELS.publications_news,
            description: "nav.publications.news.description",
            path: ROUTE_PATHS.publicationNews,
          },
          {
            text: LABELS.publications_circulars,
            description: "nav.publications.circulars.description",
            path: ROUTE_PATHS.publicationCirculars,
          },
        ],
      },
      {
        text: LABELS.tools,
        path: ROUTE_PATHS.tools,
      },
      {
        text: LABELS.contactUs,
        path: ROUTE_PATHS.contactUs,
      },
    ],
  },
};

const ROUTE_DETAIL = {
  home: { path: ROUTES.home.path, breadcrumbs: [] },
};
const getTopNavigation = (locale) => {
  return TOP_NAVIGATION[locale] || TOP_NAVIGATION.fallback;
};

const BREADCRUMB_PATHS = {
  home: { href: ROUTES.home.path, text: LABELS.home },
  corporate: { href: ROUTES.corporate.path, text: LABELS.corporate },
  kurumsal: { href: ROUTES.kurumsal.path, text: LABELS.corporate },
  services: { href: ROUTES.services.path, text: LABELS.services },
  industries: {
    href: ROUTES.industries.path,
    text: LABELS.industries,
  },
  publications: {
    href: ROUTES.publications.path,
    text: LABELS.publications,
  },
  tools: { href: ROUTES.tools.path, text: LABELS.tools },
  contactUs: { href: ROUTES.contactUs.path, text: LABELS.contactUs },
  corporateAbout: {
    href: ROUTES.corporateAbout.path,
    text: LABELS.corporate_about,
  },
  kurumsalHakkinda: {
    href: ROUTES.kurumsalHakkinda.path,
    text: LABELS.corporate_about,
  },
  corporateMissionVision: {
    href: ROUTES.corporateMissionVision.path,
    text: LABELS.corporate_missionVision,
  },
  kurumsalMisyonVizyon: {
    href: ROUTES.kurumsalMisyonVizyon.path,
    text: LABELS.corporate_missionVision,
  },
  corporateOurDirectors: {
    href: ROUTES.corporateOurDirectors.path,
    text: LABELS.corporate_ourDirectors,
  },
  kurumsalYonetimKurulu: {
    href: ROUTES.kurumsalYonetimKurulu.path,
    text: LABELS.corporate_ourDirectors,
  },
  corporateOurTeam: {
    href: ROUTES.corporateTeam.path,
    text: LABELS.corporate_ourTeam,
  },
  corporateFoundationDocuments: {
    href: ROUTES.corporateFoundingDocuments.path,
    text: LABELS.corporate_foundationDocuments,
  },
  kurumsalKurulusBelgeleri: {
    href: ROUTES.kurumsalKurulusBelgeleri.path,
    text: LABELS.corporate_foundationDocuments,
  },
  corporateTransparencyReports: {
    href: ROUTES.corporateTransparencyReports.path,
    text: LABELS.corporate_transparencyReports,
  },
  corporateGetQuote: {
    href: ROUTES.corporateGetQuote.path,
    text: LABELS.corporate_getQuote,
  },
  servicesTaxes: {
    href: ROUTES.servicesTaxes.path,
    text: LABELS.services_taxes,
  },
  servicesAudit: {
    href: ROUTES.servicesAudit.path,
    text: LABELS.services_audit,
  },
  servicesAdvisory: {
    href: ROUTES.servicesAdvisory.path,
    text: LABELS.services_advisory,
  },
  servicesOther: {
    href: ROUTES.servicesOther.path,
    text: LABELS.services_other,
  },
  industriesProduction: {
    href: ROUTES.industriesProduction.path,
    text: LABELS.industries_production,
  },
  industriesEnergy: {
    href: ROUTES.industriesEnergy.path,
    text: LABELS.industries_energy,
  },
  industriesFinancialServices: {
    href: ROUTES.industriesFinancialServices.path,
    text: LABELS.industries_financial,
  },
  industriesConstruction: {
    href: ROUTES.industriesConstruction.path,
    text: LABELS.industries_construction,
  },
  industriesPharmaceutical: {
    href: ROUTES.industriesPharmaceutical.path,
    text: LABELS.industries_pharmaceutical,
  },
  industriesTechnology: {
    href: ROUTES.industriesTechnology.path,
    text: LABELS.industries_technology,
  },

  publicationNews: {
    href: ROUTES.publicationNews.path,
    text: LABELS.publications_news,
  },
  publicationCirculars: {
    href: ROUTES.publicationCirculars.path,
    text: LABELS.publications_circulars,
  },

  contactContactUs: {
    href: ROUTES.contactUs.path,
    text: LABELS.contactUs,
  },
  // contactOurLocation: {
  //   href: ROUTES.contactOurLocation.path,
  //   text: LABELS.nav_contactUs_title,
  // },
};

const getBreadcrumbPath = (t, path = []) => {
  if (!Array.isArray(path)) path = [path];
  const result = path.map((p) => {
    return { ...p, text: t(p.text) };
  });
  return result;
};

export { ROUTES, BREADCRUMB_PATHS, getTopNavigation, getBreadcrumbPath };
