import Image from "next/image";
import React from "react";
import { BASE_URL } from "../utils/constant";

function MovieThumbnail({ result }) {
  return (
    <div className="cursor-pointer min-w-[250px] min-h-[170px] overflow-hidden md:min-w-[330px] md:min-h-[210px] rounded-lg shadow-xl border-[3px] border-[#f9f9f9] border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <Image
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
        width={330}
        height={210}
        objectFit="cover"
        className="rounded-lg"
        alt="poster"
      />
    </div>
  );
}

export default MovieThumbnail;
