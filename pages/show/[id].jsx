import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import EpisodeDate from "../../components/EpisodeDate";

export default function Show({ show }) {
  const image_base = "https://image.tmdb.org/t/p/w780";
  const [spoiler, setSpoiler] = useState(false);

  return (
    <>
      <Head>
        <title>Next Shows: {show.name}</title>
      </Head>

      <article className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <Image
              src={image_base + show.backdrop_path}
              alt={show.name}
              width={500}
              height={281}
            />
          </div>

          <div>
            <h1 className="text-3xl mb-4">{show.name}</h1>

            <h2>
              {show.status} ({show.networks[0]?.name})
            </h2>
            <h2>
              {show.number_of_seasons} seasons, {show.number_of_episodes}{" "}
              episodes
            </h2>

            <EpisodeDate episode={show.next_episode_to_air} type="next" />
            <EpisodeDate episode={show.last_episode_to_air} type="last" />

            <button onClick={() => setSpoiler(!spoiler)}>
              {spoiler
                ? "Hide overview"
                : "Show overview (may contain spoilers)"}
            </button>

            {spoiler ? <p>{show.overview}</p> : null}
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
