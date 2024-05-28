import { ROUTE_PATHS } from "@/siteConfig";

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

const CONTENT = {
  main: {
    ourServices: {
      tr: ourServices.tr,
      default: ourServices.default,
    },
  },
};

export { CONTENT };
