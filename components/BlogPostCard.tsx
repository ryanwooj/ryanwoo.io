import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

interface BlogPostCard {
  title: string;
  slug: string;
  gradient: string;
  image: string;
}

export default function BlogPostCard({
  title,
  slug,
  gradient,
  image,
}: BlogPostCard) {
  return (
    <Link href={`/featured/${slug}`}>
      <a
        className={cn(
          "transform hover:scale-[1.05] transition-all",
          "rounded-xl w-full md:w-2/5 bg-gradient-to-r p-1",
          gradient
        )}
      >
        <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-lg font-medium mb-2 sm:mb-2 w-full text-gray-900 dark:text-gray-100 tracking-tight">
              {title}
            </h4>
          </div>
          <div className="relative flex flex-col md:flex-row justify-center align-center">
            <Image
              src={image}
              alt={title}
              layout="intrinsic"
              width={640}
              height={480}
            />
          </div>
        </div>
      </a>
    </Link>
  );
}
