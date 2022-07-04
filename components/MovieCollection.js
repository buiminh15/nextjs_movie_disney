import React from "react";
import MovieThumbnail from "./MovieThumbnail";
function MovieCollection({ title, results, type }) {
  return (
    <section className="px-20 mb-8">
      <h2 className="font-semibold mb-3">{title}</h2>
      <div className="flex space-x-6 overflow-x-scroll overflow-y-hidden">
          {results.map((r) => (
            <MovieThumbnail key={r.id} result={r} type={type}/>
          ))}
      </div>
    </section>
  );
}

export default MovieCollection;
