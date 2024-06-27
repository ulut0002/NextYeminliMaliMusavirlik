import { CONTENT_ITEM_TYPE } from "@/lib/constants";
import { contactUsLinks } from "./socialMedia";

const navHeaderContent = {
  tr: {
    contactInfo: [
      {
        type: CONTENT_ITEM_TYPE.PHONE,
        text: contactUsLinks.tr.phone,
        value: contactUsLinks.tr.phoneNumber,
      },
      {
        type: CONTENT_ITEM_TYPE.FAX,
        text: contactUsLinks.tr.fax,
        value: contactUsLinks.tr.faxNumber,
      },
      {
        type: CONTENT_ITEM_TYPE.EMAIL,
        text: contactUsLinks.tr.email,
        value: contactUsLinks.tr.email,
      },
    ],
    socialMedia: [
      {
        type: CONTENT_ITEM_TYPE.SOCIAL_MEDIA,
        text: contactUsLinks.tr.linkedin,
      },
      {
        type: CONTENT_ITEM_TYPE.SOCIAL_MEDIA,
        text: contactUsLinks.tr.facebook,
      },
    ],
  },
  default: {
    contactInfo: [
      {
        type: CONTENT_ITEM_TYPE.PHONE,
        text: contactUsLinks.default.phone,
        value: contactUsLinks.default.phoneNumber,
      },
      {
        type: CONTENT_ITEM_TYPE.FAX,
        text: contactUsLinks.default.fax,
        value: contactUsLinks.default.faxNumber,
      },
      {
        type: CONTENT_ITEM_TYPE.EMAIL,
        text: contactUsLinks.default.email,
        value: contactUsLinks.default.email,
      },
    ],
  },
};

export { navHeaderContent };
