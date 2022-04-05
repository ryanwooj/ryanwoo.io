import Link from "next/link";
import { ReactElement } from "react";

export interface ExternalLinkType {
  href: string;
  children: string;
}

const ExternalLink = ({ href, children }: ExternalLinkType) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/" passHref>
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about" passHref>
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/newsletter" passHref>
            <a className="text-gray-500 hover:text-gray-600 transition">
              Newsletter
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="https://github.com/ryanwooj" passHref>
            GitHub
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses" passHref>
            <a className="text-gray-500 hover:text-gray-600 transition">Uses</a>
          </Link>
          <Link href="/guestbook" passHref>
            <a className="text-gray-500 hover:text-gray-600 transition">
              Guestbook
            </a>
          </Link>
          <Link href="/snippets" passHref>
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>
          <Link href="/tweets" passHref>
            <a className="text-gray-500 hover:text-gray-600 transition">
              Tweets
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
