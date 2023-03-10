import Link from "next/link";
import Image from "next/image";
import Search from "./Search";

export default function Header({ query, setQuery }) {
  return (
    <header className="py-4 md:py-6">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-center">
          <Link href={"/"}>
            <a>
              <span className="sr-only">Next Shows</span>
              <Image
                src="/next-shows.svg"
                alt="Next Shows"
                width={48}
                height={32} />
            </a>
          </Link>

          {
            query ? <Search query={query} setQuery={setQuery} /> : null
          }
        </div>
      </div>
    </header>
  );
}
