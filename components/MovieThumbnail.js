import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BASE_URL } from "../utils/constant";

function MovieThumbnail({ result, typeCategory }) {
  const router = useRouter();
  return (
    <div
      className="flex min-w-[250px] min-h-[180px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform transition duration-300"
      onClick={() => router.push(`/movies/${result.id}?type=${typeCategory}`)}
    >
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
