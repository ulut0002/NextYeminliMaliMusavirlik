import { SVG_IMAGES } from "@/lib/constants";
import { LABELS, ROUTE_PATHS } from "@/siteConfig";
import { corporateAboutUsPage } from "./corporate_about_us";
import { corporateMissionVisionPage } from "./corporate_mission_vision";

const heroImages = {
  image1: "@/public/images/hero1.jpg",
  image2: "@/public/images/hero2.jpeg",
  image3: "@/public/images/hero3.jpg",
  image4: "@/public/images/hero4.jpeg",
  image5: "@/public/images/hero5.jpeg",
  cnImage1: "@/public/images/hero-cn-1.jpeg",
  cnImage2: "@/public/images/hero-cn-2.jpeg",
  cnImage3: "@/public/images/hero-cn-3.jpeg",
  ruImage1: "@/public/images/hero-ru-1.jpeg",
  ruImage2: "@/public/images/hero-ru-2.jpeg",
  ruImage3: "@/public/images/hero-ru-3.jpeg",
};

const industryImages = {
  energy: "@/public/images/industries/energy.jpeg",
  financial: "@/public/images/industries/financial.jpeg",
  construction: "@/public/images/industries/construction.jpeg",
  pharmaceutical: "@/public/images/industries/pharmaceutical.jpeg",
  production: "@/public/images/industries/production.jpeg",
  retail: "@/public/images/industries/retail.jpeg",
  technology: "@/public/images/industries/technology.jpeg",
};

const mainCarousel = {
  tr: {
    ctaLabel: "generic.learnMore",
    items: [
      {
        title: "main.carousel.image1.title",
        description: "main.carousel.image1.description",
        href: ROUTE_PATHS.kurumsalHakkinda,
        ctaLabel: "generic.readOurStory",
        image: heroImages.image1,
      },
      {
        title: "main.carousel.image2.title",
        description: "main.carousel.image2.description",
        href: ROUTE_PATHS.hizmetlerVergi,
        image: heroImages.image2,
      },
      {
        title: "main.carousel.image3.title",
        description: "main.carousel.image3.description",
        href: ROUTE_PATHS.hizmetlerDenetim,
        image: heroImages.image3,
      },
      {
        title: "main.carousel.image4.title",
        description: "main.carousel.image4.description",
        href: ROUTE_PATHS.hizmetlerDanismanlik,
        image: heroImages.image4,
      },
      {
        title: "main.carousel.image5.title",
        description: "main.carousel.image5.description",
        href: ROUTE_PATHS.industries,
        image: heroImages.image5,
      },
    ],
  },
  zh: {
    ctaLabel: "generic.learnMore",
    items: [
      {
        title: "main.carousel.image1.title",
        description: "main.carousel.image1.description",
        href: ROUTE_PATHS.corporateAbout,
        ctaLabel: "generic.readOurStory",
        image: heroImages.cnImage1,
      },
      {
        title: "main.carousel.image2.title",
        description: "main.carousel.image2.description",
        href: ROUTE_PATHS.servicesTaxes,
        image: heroImages.cnImage2,
      },
      {
        title: "main.carousel.image3.title",
        description: "main.carousel.image3.description",
        href: ROUTE_PATHS.servicesAudit,
        image: heroImages.cnImage3,
      },
      {
        title: "main.carousel.image4.title",
        description: "main.carousel.image4.description",
        href: ROUTE_PATHS.servicesAdvisory,
        image: heroImages.image4,
      },
      {
        title: "main.carousel.image5.title",
        description: "main.carousel.image5.description",
        href: ROUTE_PATHS.industries,
        image: heroImages.image5,
      },
    ],
  },
  ru: {
    ctaLabel: "generic.learnMore",
    items: [
      {
        title: "main.carousel.image1.title",
        description: "main.carousel.image1.description",
        href: ROUTE_PATHS.corporateAbout,
        ctaLabel: "generic.readOurStory",
        image: heroImages.ruImage1,
      },
      {
        title: "main.carousel.image2.title",
        description: "main.carousel.image2.description",
        href: ROUTE_PATHS.servicesTaxes,
        image: heroImages.ruImage2,
      },
      {
        title: "main.carousel.image3.title",
        description: "main.carousel.image3.description",
        href: ROUTE_PATHS.servicesAudit,
        image: heroImages.ruImage3,
      },
      {
        title: "main.carousel.image4.title",
        description: "main.carousel.image4.description",
        href: ROUTE_PATHS.servicesAdvisory,
        image: heroImages.image4,
      },
      {
        title: "main.carousel.image5.title",
        description: "main.carousel.image5.description",
        href: ROUTE_PATHS.industries,
        image: heroImages.image5,
      },
    ],
  },

  default: {
    ctaLabel: "generic.learnMore",
    items: [
      {
        title: "main.carousel.image1.title",
        description: "main.carousel.image1.description",
        href: ROUTE_PATHS.corporateAbout,
        ctaLabel: "generic.readOurStory",
        image: heroImages.image1,
      },
      {
        title: "main.carousel.image2.title",
        description: "main.carousel.image2.description",
        href: ROUTE_PATHS.servicesTaxes,
        image: heroImages.image2,
      },
      {
        title: "main.carousel.image3.title",
        description: "main.carousel.image3.description",
        href: ROUTE_PATHS.servicesAudit,
        image: heroImages.image3,
      },
      {
        title: "main.carousel.image4.title",
        description: "main.carousel.image4.description",
        href: ROUTE_PATHS.servicesAdvisory,
        image: heroImages.image4,
      },
      {
        title: "main.carousel.image5.title",
        description: "main.carousel.image5.description",
        href: ROUTE_PATHS.industries,
        image: heroImages.image5,
      },
    ],
  },
};

const ourServices = {
  tr: [
    {
      title: "main.ourServices.tax.title",
      description: "main.ourServices.tax.description",
      image: "",
      href: ROUTE_PATHS.hizmetlerVergi,
    },
    {
      title: "main.ourServices.advisory.title",
      description: "main.ourServices.advisory.description",
      image: "",
      href: ROUTE_PATHS.hizmetlerDanismanlik,
    },
    {
      title: "main.ourServices.audit.title",
      description: "main.ourServices.audit.description",
      image: "",
      href: ROUTE_PATHS.hizmetlerDenetim,
    },
    {
      title: "main.ourServices.other.title",
      description: "main.ourServices.other.description",
      image: "",
      href: ROUTE_PATHS.hizmetlerDiger,
    },
  ],
  default: [
    {
      title: "main.ourServices.tax.title",
      description: "main.ourServices.tax.description",
      image: "",
      href: ROUTE_PATHS.servicesTaxes,
    },
    {
      title: "main.ourServices.advisory.title",
      description: "main.ourServices.advisory.description",
      image: "",
      href: ROUTE_PATHS.servicesAdvisory,
    },
    {
      title: "main.ourServices.audit.title",
      description: "main.ourServices.audit.description",
      image: "",
      href: ROUTE_PATHS.servicesAdvisory,
    },
    {
      title: "main.ourServices.other.title",
      description: "main.ourServices.other.description",
      image: "",
      href: ROUTE_PATHS.servicesOther,
    },
  ],
};

const ourIndustries = {
  tr: {
    mainTitle: "main.ourIndustries.mainTitle",
    title: "main.ourIndustries.title",
    description: "main.ourIndustries.description",
    ctaLabelAllIndustries: "generic.viewAllIndustries",
    ctaLabelOneIndustry: "generic.viewOneIndustry",
    items: [
      {
        title: LABELS.industries_production,
        description: "main.ourIndustries.production.description",
        image: industryImages.production,
        href: ROUTE_PATHS.sektorlerUretim,
        icon: SVG_IMAGES.PRODUCTION,
      },
      {
        title: LABELS.industries_energy,
        description: "main.ourIndustries.energy.description",
        image: industryImages.energy,
        href: ROUTE_PATHS.sektorlerEnerji,
        icon: SVG_IMAGES.ENERGY,
      },
      {
        title: LABELS.industries_financial,
        description: "main.ourIndustries.financial.description",
        image: industryImages.financial,
        href: ROUTE_PATHS.sektorlerFinans,
        icon: SVG_IMAGES.FINANCIAL,
      },
      {
        title: LABELS.industries_construction,
        description: "main.ourIndustries.construction.description",
        image: industryImages.construction,
        href: ROUTE_PATHS.sektorlerInsaat,
        icon: SVG_IMAGES.CONSTRUCTION,
      },
      {
        title: LABELS.industries_pharmaceutical,
        description: "main.ourIndustries.pharmaceutical.description",
        image: industryImages.pharmaceutical,
        href: ROUTE_PATHS.sektorlerSaglik,
        icon: SVG_IMAGES.PHARMACEUTICAL,
      },
      {
        title: LABELS.industries_technology,
        description: "main.ourIndustries.technology.description",
        image: industryImages.technology,
        href: ROUTE_PATHS.sektorlerTeknoloji,
        icon: SVG_IMAGES.TECHNOLOGY,
      },
      {
        title: LABELS.industries_retail,
        description: "main.ourIndustries.retail.description",
        image: industryImages.retail,
        href: ROUTE_PATHS.sektorlerPerakende,
        icon: SVG_IMAGES.RETAIL,
      },
    ],
  },
  default: {
    mainTitle: "main.ourIndustries.mainTitle",
    title: "main.ourIndustries.title",
    description: "main.ourIndustries.description",
    ctaLabelAllIndustries: "generic.viewAllIndustries",
    ctaLabelOneIndustry: "generic.viewOneIndustry",
    items: [
      {
        title: LABELS.industries_production,
        description: "main.ourIndustries.production.description",
        image: industryImages.production,
        href: ROUTE_PATHS.industriesProduction,
        icon: SVG_IMAGES.PRODUCTION,
      },
      {
        title: LABELS.industries_energy,
        description: "main.ourIndustries.energy.description",
        image: industryImages.energy,
        href: ROUTE_PATHS.industriesEnergy,
        icon: SVG_IMAGES.ENERGY,
      },
      {
        title: LABELS.industries_financial,
        description: "main.ourIndustries.financial.description",
        image: industryImages.financial,
        href: ROUTE_PATHS.industriesFinancial,
        icon: SVG_IMAGES.FINANCIAL,
      },
      {
        title: LABELS.industries_construction,
        description: "main.ourIndustries.construction.description",
        image: industryImages.construction,
        href: ROUTE_PATHS.industriesConstruction,
        icon: SVG_IMAGES.CONSTRUCTION,
      },
      {
        title: LABELS.industries_pharmaceutical,
        description: "main.ourIndustries.pharmaceutical.description",
        image: industryImages.pharmaceutical,
        href: ROUTE_PATHS.industriesPharmaceutical,
        icon: SVG_IMAGES.PHARMACEUTICAL,
      },
      {
        title: LABELS.industries_technology,
        description: "main.ourIndustries.technology.description",
        image: industryImages.technology,
        href: ROUTE_PATHS.industriesTechnology,
        icon: SVG_IMAGES.TECHNOLOGY,
      },
      {
        title: LABELS.industries_retail,
        description: "main.ourIndustries.retail.description",
        image: industryImages.retail,
        href: ROUTE_PATHS.industriesRetail,
        icon: SVG_IMAGES.RETAIL,
      },
    ],
  },
};

const corporationPage = {
  tr: {
    title: "corporate.index.title",
    description: "corporate.index.description",
    items: [
      {
        title: "corporate.index.about.title",
        description: "corporate.index.about.description",
        href: ROUTE_PATHS.kurumsalHakkinda,
      },
      {
        title: "corporate.index.mission.title",
        description: "corporate.index.mission.description",
        href: ROUTE_PATHS.kurumsalMisyonVizyon,
      },
      {
        title: "corporate.index.leadership.title",
        description: "corporate.index.leadership.description",
        href: ROUTE_PATHS.kurumsalYonetimKurulu,
      },

      {
        title: "corporate.index.ourTeam.title",
        description: "corporate.index.ourTeam.description",
        href: ROUTE_PATHS.kurumsalEkip,
      },
      {
        title: "corporate.index.foundingDocuments.title",
        description: "corporate.index.foundingDocuments.description",
        href: ROUTE_PATHS.kurumsalKurulusBelgeleri,
      },
      {
        title: "corporate.index.transparencyReports.title",
        description: "corporate.index.transparencyReports.description",
        href: ROUTE_PATHS.kurumsalSaydamlıkRaporları,
      },
      {
        title: "corporate.index.requestQuote.title",
        description: "corporate.index.requestQuote.description",
        href: ROUTE_PATHS.kurumsalTeklifAl,
      },
    ],
  },
  default: {
    title: "corporate.index.title",
    description: "corporate.index.description",
    items: [
      {
        title: "corporate.index.about.title",
        description: "corporate.index.about.description",
        href: ROUTE_PATHS.corporateAbout,
      },
      {
        title: "corporate.index.mission.title",
        description: "corporate.index.mission.description",
        href: ROUTE_PATHS.corporateMissionVision,
      },
      {
        title: "corporate.index.leadership.title",
        description: "corporate.index.leadership.description",
        href: ROUTE_PATHS.corporateOurDirectors,
      },

      {
        title: "corporate.index.ourTeam.title",
        description: "corporate.index.ourTeam.description",
        href: ROUTE_PATHS.corporateTeam,
      },
      {
        title: "corporate.index.foundingDocuments.title",
        description: "corporate.index.foundingDocuments.description",
        href: ROUTE_PATHS.corporateFoundingDocuments,
      },
      {
        title: "corporate.index.transparencyReports.title",
        description: "corporate.index.transparencyReports.description",
        href: ROUTE_PATHS.corporateTransparencyReports,
      },
      {
        title: "corporate.index.requestQuote.title",
        description: "corporate.index.requestQuote.description",
        href: ROUTE_PATHS.corporateGetQuote,
      },
    ],
  },
};

const corporate = {
  tr: corporationPage.tr,
  default: corporationPage.default,
};

const CONTENT = {
  main: {
    carousel: {
      tr: mainCarousel.tr,
      zh: mainCarousel.zh,
      ru: mainCarousel.ru,
      default: mainCarousel.default,
    },
    ourServices: {
      tr: ourServices.tr,
      default: ourServices.default,
    },
    ourIndustries: {
      tr: ourIndustries.tr,
      default: ourIndustries.default,
    },
  },
  corporate: {
    main: {
      tr: corporate.tr,
      default: corporate.default,
    },
    aboutUs: {
      tr: corporateAboutUsPage.tr,
      default: corporateAboutUsPage.default,
    },
    missionVision: {
      tr: corporateMissionVisionPage.tr,
      default: corporateMissionVisionPage.default,
    },
  },
};

export { CONTENT };
