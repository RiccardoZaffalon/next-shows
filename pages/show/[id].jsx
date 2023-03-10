import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Badge from "../../components/Badge";
import EpisodeDate from "../../components/EpisodeDate";

export default function Show({ show }) {
  const image_base = "https://image.tmdb.org/t/p/w780";
  const [spoiler, setSpoiler] = useState(false);
  const isReturning = show.status.toLowerCase().indexOf('return') > -1;

  return (
    <>
      <Head>
        <title>{'Next Shows: ' + show.name}</title>
      </Head>

      <article className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-2 md:gap-8">
          <div className="relative">
            <Image
              src={image_base + show.backdrop_path}
              alt={show.name}
              width={780}
              height={439}
              className="rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-sm md:mb-4 text-zinc-400">
              {show.number_of_seasons} seasons, {show.number_of_episodes}{" "}
              episodes
            </h2>

            <h1 className="text-3xl mb-3 md:flex md:items-center md:gap-6">
              <Badge returning={isReturning}>{show.status}</Badge>
              <span className="block mt-2 md:mt-0 md:order-first md:inline">{show.name}</span>
            </h1>

            <EpisodeDate episode={show.next_episode_to_air} type="next" />
            <EpisodeDate episode={show.last_episode_to_air} type="last" />

            <div className="mt-4 border border-zinc-700 rounded p-4">
              <button className="bg-blue-700 text-blue-100 px-3 py-2 rounded"
                onClick={() => setSpoiler(!spoiler)}>
                {spoiler
                  ? "Hide overview"
                  : "Show overview (may contain spoilers)"}
              </button>

              {spoiler ? <p className="mt-4 text-zinc-300">{show.overview}</p> : null}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const url = `https://api.themoviedb.org/3/tv/${query.id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
  const { data: show } = await axios.get(url);

  return {
    props: {
      show,
    },
  };
}
