import { useLocale } from "next-intl";

export default async function Home() {
  const locale = useLocale();
  return <h1>Main page in {locale}</h1>;
}
