import SkeletonLibrary from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Skeleton({ count = 1 }) {
  return <SkeletonLibrary count={count} />;
}
