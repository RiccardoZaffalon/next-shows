import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

function isHome(path) {
  return path === "/";
}

export default function Search({ query, setQuery }) {
  const router = useRouter();
  const input = useRef(null);

  useEffect(() => {
    if (input && input.current) {
      input.current.focus();
    }
  }, []);

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
    <form onSubmit={submit} className="flex ml-auto">
      <input
        ref={input}
        placeholder="Search"
        autoComplete="off"
        type="search"
        name="query"
        defaultValue={query}
        className="form-input bg-zinc-700 rounded-l"
      />
      <input
        className="-m-[1px] rounded-r bg-blue-700 px-4 py-2 border border-blue-700 text-blue-100 font-medium cursor-pointer"
        type="submit"
        value="Search"
      />
    </form>
  );
}
