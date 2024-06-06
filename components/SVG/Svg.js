import { SVG_IMAGES } from "@/lib/constants";
import FinancialServicesSvg from "./FinancialServicesSvg";
import HealthcareSvg from "./HealthcareSvg";
import RetailSvg from "./RetailSvg";
import TechnologySvg from "./TechnologySvg";
import ConstructionSvg from "./ConstructionSvg";
import ProductionSvg from "./ProductionSvg";
import EnergySvg from "./EnergySvg";

export default function Svg({ icon, style }) {
  if (icon === SVG_IMAGES.FINANCIAL) {
    return <FinancialServicesSvg style={style} />;
  } else if (icon === SVG_IMAGES.PHARMACEUTICAL) {
    return <HealthcareSvg style={style} />;
  } else if (icon === SVG_IMAGES.RETAIL) {
    return <RetailSvg style={style} />;
  } else if (icon === SVG_IMAGES.TECHNOLOGY) {
    return <TechnologySvg style={style} />;
  } else if (icon === SVG_IMAGES.CONSTRUCTION) {
    return <ConstructionSvg style={style} />;
  } else if (icon === SVG_IMAGES.PRODUCTION) {
    return <ProductionSvg style={style} />;
  } else if (icon === SVG_IMAGES.ENERGY) {
    return <EnergySvg style={style} />;
  }
  // return an error
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-file-alert'
      width='44'
      height='44'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='#2c3e50'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M14 3v4a1 1 0 0 0 1 1h4' />
      <path d='M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z' />
      <path d='M12 17l.01 0' />
      <path d='M12 11l0 3' />
    </svg>
  );
}
