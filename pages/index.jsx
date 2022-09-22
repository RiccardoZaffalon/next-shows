import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const url =
    "https://api.themoviedb.org/3/search/tv?api_key=&language=en-US&page=1&query=dragon&include_adult=false";
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);

  // render data
  return <div>hello world!</div>;
}
