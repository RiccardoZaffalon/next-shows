import axios from "axios";
import Head from "next/head";
import Image from "next/image";

export default function Show({ show }) {
  const image_base = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <Head>
        <title>Next Shows: {show.name}</title>
      </Head>

      <article className="container">
        <Image src={image_base + show.backdrop_path} alt={show.name} width={500} height={281} />
        <h1>{show.name}</h1>

        <h2>{show.networks[0]?.name}</h2>

        <h2>{show.status}</h2>
        <h2>{show.number_of_seasons} seasons</h2>
        <h2>{show.number_of_episodes} episodes</h2>

        <h2>Next {show.next_episode_to_air?.episode_number} </h2>
        <h2>Last {show.last_episode_to_air?.episode_number} </h2>
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
