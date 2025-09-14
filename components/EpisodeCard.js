import Link from 'next/link';

export default function EpisodeCard({ ep }) {
  return (
    <article className="p-5 rounded-xl bg-white shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold">{ep.title}</h4>
          <div className="text-xs text-gray-500">{ep.date} • {ep.duration}</div>
          <p className="mt-2 text-gray-700 text-sm">{ep.description}</p>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <div className="text-xs text-gray-500">Episode {ep.id}</div>
          <a className="btn" href={`/episodes/${ep.id}`}>Open</a>
        </div>
      </div>
      <div className="mt-4">
        <audio controls className="w-full" src={ep.sampleAudio}>
          Your browser does not support the audio element.
        </audio>
      </div>
    </article>
  );
}
