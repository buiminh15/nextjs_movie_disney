import React from "react";
import MovieThumbnail from "./MovieThumbnail";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function MovieCollection({ title, results }) {
  return (
    <section className="px-20 mt-6">
      <h2 className="font-semibold mb-4">{title}</h2>
      <div className="flex space-x-6">
        {results.map((r) => (
          <MovieThumbnail key={r.id} result={r} />
        ))}
      </div>
    </section>
  );
}

export default MovieCollection;
