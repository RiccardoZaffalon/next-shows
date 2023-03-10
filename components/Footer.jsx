import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto p-8 md:pt-12 text-sm text-center text-zinc-400">
      <p className="max-w-sm mx-auto">This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
      <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
        <Image
          src="/tmdb.svg"
          alt="TMDB"
          width={48}
          height={32} />
      </a>
    </footer>
  );
}
