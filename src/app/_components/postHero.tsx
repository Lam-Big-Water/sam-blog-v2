import { format } from 'date-fns';

interface PostType {
  title: string;
  publishedOn: string;
}

const BlogHero = ({ title, publishedOn }: PostType) => {
  const humanizedDate = format(
    new Date(publishedOn),
    'MMMM do, yyyy'
  );
  return (
    <header className="relative flex flex-col justify-end items-center w-full max-w-7xl m-auto">
      <div className="relative max-w-[880px] w-full m-auto p-4 pt-[calc(48px+8vw)] pb-16">
        <h1 className="text-4xl font-black py-4">{title}</h1>
        <p className="text-lg text-decorative-900 mb-0">
          <time className="font-medium" dateTime={publishedOn}>
            Published on {humanizedDate}
          </time>
        </p>
      </div>
    </header>
  );
};

export default BlogHero;
