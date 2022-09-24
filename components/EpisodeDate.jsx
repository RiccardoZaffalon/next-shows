import { format, formatDistanceToNow } from "date-fns";

export default function EpisodeDate({ episode, type }) {
  if (!episode?.air_date) return null;

  const date = new Date(episode.air_date);
  const intro =
    type === "next" ? "Next episode will air on " : "Last episode aired on ";

  return (
    <div>
      <span>{intro}</span>
      <span>{format(date, "dd MMMM yyyy")} </span>
      <small className="text-sm">
        ({formatDistanceToNow(date, { addSuffix: true })})
      </small>
    </div>
  );
}
