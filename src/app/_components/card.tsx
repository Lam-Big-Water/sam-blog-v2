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
    <div className="flex flex-col p-4 rounded-md bg-primary-contrast shadow-card">
      <Link
        className="text-2xl font-bold py-2 hover:text-primary-300"
        href={href}
      >
        {title}
      </Link>
      <time
        dateTime={publishedOn}
        className="text-decorative-900 font-bold text-lg py-2"
      >
        {humanizeDate}
      </time>
      <p className="m-0">
        {abstract}{" "}
        <Link
          className="underline font-bold decoration-primary-500"
          href={href}
        >
          Continue reading →
        </Link>
      </p>
    </div>
  );
};

export default Card;
