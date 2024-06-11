import { CONTENT_ITEM_TYPE } from "@/lib/constants";
import { steps } from "framer-motion";

const fullCertification_tr = {
  title: "ourServices.fullCertification.title",
  description: [{ text: "ourServices.fullCertification.description" }],
  importance: [
    { text: "ourServices.fullCertification.importance" },
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.fullCertification.importanceItem1" },
        { text: "ourServices.fullCertification.importanceItem2" },
        { text: "ourServices.fullCertification.importanceItem3" },
        { text: "ourServices.fullCertification.importanceItem4" },
      ],
    },
  ],
  steps: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.fullCertification.step1" },
        { text: "ourServices.fullCertification.step2" },
        { text: "ourServices.fullCertification.step3" },
      ],
    },
  ],
  benefits: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.fullCertification.benefit1" },
        { text: "ourServices.fullCertification.benefit2" },
        { text: "ourServices.fullCertification.benefit3" },
      ],
    },
  ],
  recipients: [
    {
      text: "ourServices.fullCertification.recipients",
    },
  ],
};

const vatRefund_tr = {
  title: "ourServices.vatRefund.title",
  description: [{ text: "ourServices.vatRefund.description" }],
  importance: [{ text: "ourServices.vatRefund.importance" }],
  steps: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.vatRefund.step1" },
        { text: "ourServices.vatRefund.step2" },
        { text: "ourServices.vatRefund.step3" },
      ],
    },
  ],
  benefits: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.vatRefund.benefit1" },
        { text: "ourServices.vatRefund.benefit2" },
        { text: "ourServices.vatRefund.benefit3" },
      ],
    },
  ],
  recipients: [
    {
      text: "ourServices.vatRefund.recipients",
    },
  ],
};

const taxConsultancy_tr = {
  title: "ourServices.taxConsultancy.title",
  description: [{ text: "ourServices.taxConsultancy.description" }],
  importance: [{ text: "ourServices.taxConsultancy.importance" }],
  steps: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.taxConsultancy.step1" },
        { text: "ourServices.taxConsultancy.step2" },
        { text: "ourServices.taxConsultancy.step3" },
        { text: "ourServices.taxConsultancy.step4" },
        { text: "ourServices.taxConsultancy.step5" },
      ],
    },
  ],
  benefits: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.taxConsultancy.benefit1" },
        { text: "ourServices.taxConsultancy.benefit2" },
        { text: "ourServices.taxConsultancy.benefit3" },
        { text: "ourServices.taxConsultancy.benefit4" },
      ],
    },
  ],
  recipients: [
    {
      text: "ourServices.taxConsultancy.recipients",
    },
  ],
};
const otherCertification_tr = {
  title: "ourServices.otherCertification.title",
  description: [{ text: "ourServices.otherCertification.description" }],
  importance: [{ text: "ourServices.otherCertification.importance" }],
  steps: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.otherCertification.step1" },
        { text: "ourServices.otherCertification.step2" },
        { text: "ourServices.otherCertification.step3" },
        { text: "ourServices.otherCertification.step4" },
        { text: "ourServices.otherCertification.step5" },
      ],
    },
  ],
  benefits: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.otherCertification.benefit1" },
        { text: "ourServices.otherCertification.benefit2" },
        { text: "ourServices.otherCertification.benefit3" },
      ],
    },
  ],
  recipients: [
    {
      text: "ourServices.otherCertification.recipients",
    },
  ],
};

const independentAudit_tr = {
  title: "ourServices.independentAudit.title",
  description: [{ text: "ourServices.independentAudit.description" }],
  importance: [{ text: "ourServices.independentAudit.importance" }],
  steps: [
    {
      type: CONTENT_ITEM_TYPE.LIST,

      items: [
        { text: "ourServices.independentAudit.step1" },
        { text: "ourServices.independentAudit.step2" },
        { text: "ourServices.independentAudit.step3" },
        { text: "ourServices.independentAudit.step4" },
        { text: "ourServices.independentAudit.step5" },
      ],
    },
  ],
  benefits: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.otherCertification.benefit1" },
        { text: "ourServices.otherCertification.benefit2" },
        { text: "ourServices.otherCertification.benefit3" },
      ],
    },
  ],
  recipients: [
    {
      text: "ourServices.otherCertification.recipients",
    },
  ],
};

const complianceAudit_tr = {
  title: "ourServices.complianceAudit.title",
  description: [{ text: "ourServices.complianceAudit.description" }],
  importance: [{ text: "ourServices.complianceAudit.importance" }],
  steps: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.complianceAudit.step1" },
        { text: "ourServices.complianceAudit.step2" },
        { text: "ourServices.complianceAudit.step3" },
        { text: "ourServices.complianceAudit.step4" },
        { text: "ourServices.complianceAudit.step5" },
      ],
    },
  ],
  benefits: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.complianceAudit.benefit1" },
        { text: "ourServices.complianceAudit.benefit2" },
        { text: "ourServices.complianceAudit.benefit3" },
      ],
    },
  ],
  recipients: [
    {
      text: "ourServices.complianceAudit.recipients",
    },
  ],
};

const fraudAudit_tr = {
  title: "ourServices.fraudAudit.title",
  description: [{ text: "ourServices.fraudAudit.description" }],
  importance: [{ text: "ourServices.fraudAudit.importance" }],
  steps: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.fraudAudit.step1" },
        { text: "ourServices.fraudAudit.step2" },
        { text: "ourServices.fraudAudit.step3" },
        { text: "ourServices.fraudAudit.step4" },
        { text: "ourServices.fraudAudit.step5" },
      ],
    },
  ],
  benefits: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.fraudAudit.benefit1" },
        { text: "ourServices.fraudAudit.benefit2" },
        { text: "ourServices.fraudAudit.benefit3" },
      ],
    },
  ],
  recipients: [
    {
      text: "ourServices.fraudAudit.recipients",
    },
  ],
};

const financialAdvisory_tr = {
  title: "ourServices.financialAdvisory.title",
  description: [{ text: "ourServices.financialAdvisory.description" }],
  importance: [{ text: "ourServices.financialAdvisory.importance" }],
  steps: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.financialAdvisory.step1" },
        { text: "ourServices.financialAdvisory.step2" },
        { text: "ourServices.financialAdvisory.step3" },
        { text: "ourServices.financialAdvisory.step4" },
        { text: "ourServices.financialAdvisory.step5" },
      ],
    },
  ],
  benefits: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.financialAdvisory.benefit1" },
        { text: "ourServices.financialAdvisory.benefit2" },
        { text: "ourServices.financialAdvisory.benefit3" },
        { text: "ourServices.financialAdvisory.benefit4" },
      ],
    },
  ],
  recipients: [
    {
      text: "ourServices.financialAdvisory.recipients",
    },
  ],
};

const managementConsultancy_tr = {
  title: "ourServices.managementConsultancy.title",
  description: [{ text: "ourServices.managementConsultancy.description" }],
  importance: [{ text: "ourServices.managementConsultancy.importance" }],
  steps: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.managementConsultancy.step1" },
        { text: "ourServices.managementConsultancy.step2" },
        { text: "ourServices.managementConsultancy.step3" },
        { text: "ourServices.managementConsultancy.step4" },
        { text: "ourServices.managementConsultancy.step5" },
      ],
    },
  ],
  benefits: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.managementConsultancy.benefit1" },
        { text: "ourServices.managementConsultancy.benefit2" },
        { text: "ourServices.managementConsultancy.benefit3" },
        { text: "ourServices.managementConsultancy.benefit4" },
      ],
    },
  ],
  recipients: [
    {
      text: "ourServices.managementConsultancy.recipients",
    },
  ],
};

const corporateFinance_tr = {
  title: "ourServices.corporateFinance.title",
  description: [{ text: "ourServices.corporateFinance.description" }],
  importance: [{ text: "ourServices.corporateFinance.importance" }],
  steps: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.corporateFinance.step1" },
        { text: "ourServices.corporateFinance.step2" },
        { text: "ourServices.corporateFinance.step3" },
        { text: "ourServices.corporateFinance.step4" },
        { text: "ourServices.corporateFinance.step5" },
      ],
    },
  ],
  benefits: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.corporateFinance.benefit1" },
        { text: "ourServices.corporateFinance.benefit2" },
        { text: "ourServices.corporateFinance.benefit3" },
        { text: "ourServices.corporateFinance.benefit4" },
      ],
    },
  ],
  recipients: [
    {
      text: "ourServices.corporateFinance.recipients",
    },
  ],
};

const internalAudit_tr = {
  title: "ourServices.internalAudit.title",
  description: [{ text: "ourServices.internalAudit.description" }],
  importance: [{ text: "ourServices.internalAudit.importance" }],
  steps: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.internalAudit.step1" },
        { text: "ourServices.internalAudit.step2" },
        { text: "ourServices.internalAudit.step3" },
        { text: "ourServices.internalAudit.step4" },
        { text: "ourServices.internalAudit.step5" },
      ],
    },
  ],
  benefits: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.internalAudit.benefit1" },
        { text: "ourServices.internalAudit.benefit2" },
        { text: "ourServices.internalAudit.benefit3" },
        { text: "ourServices.internalAudit.benefit4" },
      ],
    },
  ],
  recipients: [
    {
      text: "ourServices.internalAudit.recipients",
    },
  ],
};

const trainingServices_tr = {
  title: "ourServices.trainingServices.title",
  description: [{ text: "ourServices.trainingServices.description" }],
  importance: [{ text: "ourServices.trainingServices.importance" }],
  steps: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.trainingServices.step1" },
        { text: "ourServices.trainingServices.step2" },
        { text: "ourServices.trainingServices.step3" },
        { text: "ourServices.trainingServices.step4" },
        { text: "ourServices.trainingServices.step5" },
      ],
    },
  ],
  benefits: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.trainingServices.benefit1" },
        { text: "ourServices.trainingServices.benefit2" },
        { text: "ourServices.trainingServices.benefit3" },
        { text: "ourServices.trainingServices.benefit4" },
      ],
    },
  ],
  recipients: [
    {
      text: "ourServices.trainingServices.recipients",
    },
  ],
};

const amlConsultancy_tr = {
  title: "ourServices.amlConsultancy.title",
  description: [{ text: "ourServices.amlConsultancy.description" }],
  importance: [{ text: "ourServices.amlConsultancy.importance" }],
  steps: [
    {
      type: CONTENT_ITEM_TYPE.LIST,
      items: [
        { text: "ourServices.amlConsultancy.step1" },
        { text: "ourServices.amlConsultancy.step2" },
        { text: "ourServices.amlConsultancy.step3" },
        { text: "ourServices.amlConsultancy.step4" },
        { text: "ourServices.amlConsultancy.step5" },
      ],
    },
  ],
  benefits: [
    {
      type: CONTENT_ITEM_TYPE.LIST,

      items: [
        { text: "ourServices.amlConsultancy.benefit1" },
        { text: "ourServices.amlConsultancy.benefit2" },
        { text: "ourServices.amlConsultancy.benefit3" },
        { text: "ourServices.amlConsultancy.benefit4" },
      ],
    },
  ],
  recipients: [
    {
      text: "ourServices.amlConsultancy.recipients",
    },
  ],
};

const fullCertification = {
  tr: fullCertification_tr,
  default: fullCertification_tr,
};

const vatRefund = {
  tr: vatRefund_tr,
  default: vatRefund_tr,
};

const taxConsultancy = {
  tr: taxConsultancy_tr,
  default: taxConsultancy_tr,
};

const otherCertification = {
  tr: otherCertification_tr,
  default: otherCertification_tr,
};

const independentAudit = {
  tr: independentAudit_tr,
  default: independentAudit_tr,
};

const complianceAudit = {
  tr: complianceAudit_tr,
  default: complianceAudit_tr,
};

const fraudAudit = {
  tr: fraudAudit_tr,
  default: fraudAudit_tr,
};

const financialAdvisory = {
  tr: financialAdvisory_tr,
  default: financialAdvisory_tr,
};

const managementConsultancy = {
  tr: managementConsultancy_tr,
  default: managementConsultancy_tr,
};

const corporateFinance = {
  tr: corporateFinance_tr,
  default: corporateFinance_tr,
};

const internalAudit = {
  tr: internalAudit_tr,
  default: internalAudit_tr,
};

const trainingServices = {
  tr: trainingServices_tr,
  default: trainingServices_tr,
};

const amlConsultancy = {
  tr: amlConsultancy_tr,
  default: amlConsultancy_tr,
};

const ourTaxServices = {
  tr: {
    title: "ourServices.tax.title",
    description: "ourServices.tax.description",
    items: [
      fullCertification.tr,
      vatRefund.tr,
      taxConsultancy.tr,
      otherCertification.tr,
    ],
  },
  default: {
    title: "ourServices.tax.title",
    description: "ourServices.tax.description",
    items: [
      fullCertification.default,
      vatRefund.default,
      taxConsultancy.default,
      otherCertification.default,
    ],
  },
};

const ourAuditServices = {
  tr: {
    title: "ourServices.audit.title",
    description: "ourServices.audit.description",
    items: [independentAudit.tr, complianceAudit.tr, fraudAudit.tr],
  },
  default: {
    title: "ourServices.audit.title",
    description: "ourServices.audit.description",
    items: [
      independentAudit.default,
      complianceAudit.default,
      fraudAudit.default,
    ],
  },
};

const ourAdvisoryServices = {
  tr: {
    title: "ourServices.advisory.title",
    description: "ourServices.advisory.description",
    items: [
      financialAdvisory.tr,
      managementConsultancy.tr,
      corporateFinance.tr,
      internalAudit.tr,
    ],
  },
  default: {
    title: "ourServices.advisory.title",
    description: "ourServices.advisory.description",
    items: [
      financialAdvisory.default,
      managementConsultancy.default,
      corporateFinance.default,
      internalAudit.default,
    ],
  },
};

const ourOtherServices = {
  tr: {
    title: "ourServices.advisory.title",
    description: "ourServices.advisory.description",
    items: [trainingServices.tr, amlConsultancy.tr],
  },
  default: {
    title: "ourServices.advisory.title",
    description: "ourServices.advisory.description",
    items: [
      internalAudit.default,
      trainingServices.default,
      amlConsultancy.default,
    ],
  },
};

export {
  ourTaxServices,
  ourAuditServices,
  ourAdvisoryServices,
  ourOtherServices,
};
