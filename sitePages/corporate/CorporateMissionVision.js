import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { CONTENT } from "@/content/content";
import { CONTENT_ITEM_TYPE } from "@/lib/constants";
import { getBreadcrumbData } from "@/lib/uiUtils";
import { BREADCRUMB_PATHS } from "@/siteConfig";
import { produce } from "immer";
import { useLocale, useTranslations } from "next-intl";

export default function CorporateMissionVision() {
  const t = useTranslations();
  const locale = useLocale();

  const breadcrumbs = getBreadcrumbData(
    BREADCRUMB_PATHS.corporateMissionVision,
    locale,
    t
  );

  let content =
    CONTENT.corporate.missionVision[locale] ||
    CONTENT.corporate.missionVision.default ||
    null;

  if (!content) {
    return <p>Not Found</p>;
  }

  content = produce(content, (draft) => {
    draft.mission.title = t(draft.mission.title);
    draft.vision.title = t(draft.vision.title);

    draft.mission.items = draft.mission.items.map((item) => {
      item.type = item.type ? item.type : CONTENT_ITEM_TYPE.PARAGRAPH;
      item.text = t(item.text);
      return item;
    });

    draft.vision.items = draft.vision.items.map((item) => {
      item.type = item.type ? item.type : CONTENT_ITEM_TYPE.PARAGRAPH;
      item.text = t(item.text);
      return item;
    });
  });

  return (
    <div>
      {breadcrumbs}

      <div>
        <div>
          <h2>{content.mission.title}</h2>
          <div>
            {content.mission.items.map((item, index) => {
              return <p key={index}>{item.text}</p>;
            })}
          </div>
        </div>

        <div>
          <h2>{content.vision.title}</h2>
          <div>
            {content.vision.items.map((item, index) => {
              return <p key={index}>{item.text}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
