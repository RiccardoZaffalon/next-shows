import useSWR from "swr";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home({ api_key }) {
  // const url = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&page=1&query=dragon&include_adult=false`;
  const url = "/api/mock/search";
  const image_base = "https://image.tmdb.org/t/p/w185";
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // render data
  return (
    <>
      <Head>
        <title>Next Shows</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        {data.results.map((show, i) => {
          return (
            <Link key={i} href={`/show/${show.id}`}>
              <a>
                <Image
                  src={image_base + show.poster_path}
                  alt={show.name}
                  width={185}
                  height={278}
                />
                {show.name}
              </a>
            </Link>
          );
        })}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      api_key: process.env.TMDB_API_KEY,
    },
  };
}
