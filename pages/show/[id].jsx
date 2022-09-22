import axios from "axios";
import Link from "next/link";

export default function Show({ show }) {
  const image_base = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <img src={image_base + show.backdrop_path} alt={show.name} />
      <h1>{show.name}</h1>
    </>
  );
}

export async function getServerSideProps({ query }) {
  //   const url = `https://api.themoviedb.org/3/tv/${query.id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
  //   const { data: show } = await axios.get(url);
  const show = require("../../show");

  return {
    props: {
      show,
    },
  };
}
