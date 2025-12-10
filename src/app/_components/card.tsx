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
    <div className="p-4 rounded-xl bg-primary-contrast shadow-card">
      <h3 className="text-3xl font-bold py-2">
        <Link href={href}>{title}</Link>
      </h3>
      <time
        dateTime={publishedOn}
        className="text-primary-300 font-bold text-lg py-2"
      >
        {humanizeDate}
      </time>
      <p className="  font-bold py-2">
        {abstract} {" "}
        <Link className="underline decoration-primary-500" href={href}>
          Continue reading →
        </Link>
      </p>
    </div>
  );
};

export default Card;
