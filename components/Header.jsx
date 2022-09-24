import { useRouter } from "next/router";

import Link from "next/link";

function isHome(path) {
  return path === "/";
}

export default function Header({ query, setQuery }) {
  const router = useRouter();

  function submit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newQuery = formData.get("query");

    if (newQuery === query) return;

    if (!isHome(router.pathname)) {
      router.push("/");
    }

    setQuery(newQuery ?? "");
  }

  return (
    <header className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <Link href={"/"}>
            <a>Next Shows</a>
          </Link>

          <form onSubmit={submit} className="ml-auto">
            <input
              placeholder="Search"
              autoComplete="off"
              type="search"
              name="query"
            />
            <input
              className="rounded-tr rounded-br bg-blue-500 px-4 py-2 border border-blue-600 text-white font-medium"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>
    </header>
  );
}
