import Link from "next/link";

export default function ServiceCard(props) {
  const { text = "", image = null, href = "/" } = props;
  return (
    <div className='flex flex-col justify-center '>
      <h3>{text}</h3>
      <Link href={href}>Link</Link>
    </div>
  );
}
