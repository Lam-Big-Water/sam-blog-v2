import { format } from "date-fns";
import Link from "next/link";

interface PostType {
  slug: string;
  title: string;
  abstract: string;
  publishedOn: string;
}

const Card = ({ slug, title, abstract, publishedOn }: PostType) => {
  const href = `/${slug}`;
  const humanizeDate = format(new Date(publishedOn), "MMMM do, yyyy");
  return (
    <div className="p-4 border bg-black">
      <h3 className="text-3xl font-bold text-amber-50 py-2">
        <Link href={href}>{title}</Link>
      </h3>
      <time
        dateTime={publishedOn}
        className="text-purple-300 font-bold text-lg py-2"
      >
        {humanizeDate}
      </time>
      <p className="text-amber-50 font-bold py-2">
        {abstract}
        <Link className="underline decoration-amber-300" href={href}>
          Continue reading →
        </Link>
      </p>
    </div>
  );
};

export default Card;
