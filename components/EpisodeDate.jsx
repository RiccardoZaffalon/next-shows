import { format, formatDistanceToNow } from "date-fns";

function num({ episode_number, season_number }) {
  const episode = episode_number < 10 ? `0${episode_number}` : episode_number;

  return `S${season_number}×${episode}`;
}

function Copy({ episode, type, date }) {
  if (type === "next") {
    return (
      <span>
        Next episode <small className="text-sm">({num(episode)})</small> will
        air on {date}
      </span>
    );
  }

  return (
    <span>
      Last episode <small className="text-sm">({num(episode)})</small> aired on{" "}
      {date}
    </span>
  );
}

export default function EpisodeDate({ episode, type }) {
  if (!episode?.air_date) return null;

  const date = new Date(episode.air_date);

  return (
    <div className="text-zinc-300">
      <Copy episode={episode} type={type} date={format(date, "dd MMMM yyyy")} />

      <small className="text-sm">
        {" "}
        ({formatDistanceToNow(date, { addSuffix: true })})
      </small>
    </div>
  );
}
