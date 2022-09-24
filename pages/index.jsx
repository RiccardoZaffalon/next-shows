import useSWR from "swr";
import Head from "next/head";
import Result from "../components/Result";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Results({ error, data }) {
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading</div>;
  if (!data.results || !data.results.length) return <div>no results</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.results.map((show, i) =>
        show.poster_path ? <Result key={i} show={show} /> : null
      )}
    </div>
  );
}

export default function Home({ query, api_key }) {
  // const url =
  //   query && api_key
  //     ? `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&page=1&query=${query}&include_adult=false`
  //     : undefined;
  const url = "/api/mock/search";
  const { data, error } = useSWR(url, fetcher);

  return (
    <>
      <Head>
        <title>Next Shows</title>
      </Head>

      <main>
        <div className="container mx-auto px-4">
          <Results data={data} error={error} />
        </div>
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
