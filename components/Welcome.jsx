import Search from "./Search";

export default function Welcome({ query, setQuery }) {
    return (
        <div className="container mx-auto px-4">
            <div className="p-6 bg-zinc-800 text-blue-100 text-center max-w-xl mx-auto rounded-lg">
                <p className="text-xl font-semibold mb-3">Welcome to Next Shows!</p>
                <p className="mb-3">We are here to help you find general information about your favourite TV shows, without risking getting any spoilers.</p>
                <p className="mb-3">We&apos;ll let you know if a series is returning or endend, and the last and next episodes&apos; airing dates.</p>
                <p className="mb-4">Try searching for a TV show by name:</p>

                <Search query={query} setQuery={setQuery} />
            </div>
        </div>
    )
}