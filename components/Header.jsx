import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [query, setQuery] = useState('');

    return (
        <header className="container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href={'/'}>
                        <a className="navbar-item">
                            Next Shows
                        </a>
                    </Link>
                    
                     {query}
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>

                        <a className="navbar-item">
                            Documentation
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    About
                                </a>
                                <a className="navbar-item">
                                    Jobs
                                </a>
                                <a className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="control">
                                <input className="input" value={query} onInput={(e) => setQuery(e.target.value)} type="search" name="query" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
