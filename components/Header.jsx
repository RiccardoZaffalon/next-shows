import { useRouter } from "next/router";

import Link from "next/link";

function isHome(path) {
  return path === '/';
}

export default function Header({ query, setQuery }) {
  const router = useRouter();

  function submit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newQuery = formData.get('query');

    if (newQuery === query) return;

    if (!isHome(router.pathname)) {
      router.push('/');
    }

    setQuery(newQuery ?? '');
  }

  return (
    <header>
      <nav className="navbar py-2" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link href={'/'}>
              <a className="navbar-item">
                Next Shows
              </a>
            </Link>
          </div>

          <form onSubmit={submit} className="is-flex is-align-content-stretch is-flex-grow-1 is-flex-shrink-0">
            <div className="field has-addons ml-auto">
              <div className="control">
                <input placeholder="Search" autoComplete="off" className="input" type="search" name="query" />
              </div>
              <div className="control">
                <button className="button is-primary" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </header>
  )
}
