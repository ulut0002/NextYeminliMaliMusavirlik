import { LABELS, ROUTE_PATHS } from "@/siteConfig";

const heroImages = {
  image1: "@/public/images/hero1.jpg",
  image2: "@/public/images/hero2.jpeg",
  image3: "@/public/images/hero3.jpg",
  image4: "@/public/images/hero4.jpeg",
  image5: "@/public/images/hero5.jpeg",
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
        image: "",
        href: ROUTE_PATHS.sektorlerUretim,
      },
      {
        title: LABELS.industries_energy,
        description: "main.ourIndustries.energy.description",
        image: "",
        href: ROUTE_PATHS.sektorlerEnerji,
      },
      {
        title: LABELS.industries_financial,
        description: "main.ourIndustries.financial.description",
        image: "",
        href: ROUTE_PATHS.sektorlerFinans,
      },
      {
        title: LABELS.industries_construction,
        description: "main.ourIndustries.construction.description",
        image: "",
        href: ROUTE_PATHS.sektorlerInsaat,
      },
      {
        title: LABELS.industries_pharmaceutical,
        description: "main.ourIndustries.pharmaceutical.description",
        image: "",
        href: ROUTE_PATHS.sektorlerSaglik,
      },
      {
        title: LABELS.industries_technology,
        description: "main.ourIndustries.technology.description",
        image: "",
        href: ROUTE_PATHS.sektorlerTeknoloji,
      },
      {
        title: LABELS.industries_retail,
        description: "main.ourIndustries.retail.description",
        image: "",
        href: ROUTE_PATHS.sektorlerPerakende,
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
        image: "",
        href: ROUTE_PATHS.industriesProduction,
      },
      {
        title: LABELS.industries_energy,
        description: "main.ourIndustries.energy.description",
        image: "",
        href: ROUTE_PATHS.industriesEnergy,
      },
      {
        title: LABELS.industries_financial,
        description: "main.ourIndustries.financial.description",
        image: "",
        href: ROUTE_PATHS.industriesFinancial,
      },
      {
        title: LABELS.industries_construction,
        description: "main.ourIndustries.construction.description",
        image: "",
        href: ROUTE_PATHS.industriesConstruction,
      },
      {
        title: LABELS.industries_pharmaceutical,
        description: "main.ourIndustries.pharmaceutical.description",
        image: "",
        href: ROUTE_PATHS.industriesPharmaceutical,
      },
      {
        title: LABELS.industries_technology,
        description: "main.ourIndustries.technology.description",
        image: "",
        href: ROUTE_PATHS.industriesTechnology,
      },
      {
        title: LABELS.industries_retail,
        description: "main.ourIndustries.retail.description",
        image: "",
        href: ROUTE_PATHS.industriesRetail,
      },
    ],
  },
};

const CONTENT = {
  main: {
    carousel: {
      tr: mainCarousel.tr,
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
};

export { CONTENT };
