import React from 'react';
import Image from "next/image";
import Link from "next/link";

const image_base = "https://image.tmdb.org/t/p/w342";

export default function Result({ show }) {
  return (
    <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
      <Link href={`/show/${show.id}`}>
        <a className="is-block">
          <Image
            src={image_base + show.poster_path}
            alt={show.name}
            width={185 * 2}
            height={278 * 2}
          />
          <p>{show.name}</p>
        </a>
      </Link>
    </div>
  )
}
