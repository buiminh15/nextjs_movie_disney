import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Header } from "../../components";
import { BASE_URL, YOUTUBE_URL } from "../../utils/constant";
import { fetchMovie } from "../../utils/fetchs";
import { PlusIcon, XIcon } from "@heroicons/react/solid";
import ReactPlayer from "react-player/lazy";

function Movie({ result }) {
  const router = useRouter();
  const [showPlayer, setShowPlayer] = useState(false);
  const index = result.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );
  return (
    <div>
      <Head>
        <title>{result.title || result.original_name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section>
        <div className="relative min-h-[calc(100vh-72px)]">
          <Image
            src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
            alt="poster"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {result.title || result.original_name}
            </h1>
            {/* group buttons */}
            <div className="flex space-x-3 md:space-x-5 items-center">
              <button className="flex items-center text-black py-2.5 px-6 md:text-base bg-[#f9f9f9] hover:bg-[#c6c6c6] rounded">
                <img
                  src="/images/play-icon-black.svg"
                  alt="play icon"
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  watch
                </span>
              </button>
              <button
                className="flex items-center text-[#f9f9f9] py-2.5 px-6 md:text-base hover:bg-[#c6c6c6] rounded border border-[#f9f9f9]"
                onClick={() => setShowPlayer(true)}
              >
                <img
                  src="/images/play-icon-white.svg"
                  alt="play icon"
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  trailer
                </span>
              </button>

              <div className="border-2 border-[#f9f9f9] p-2 rounded-full cursor-pointer bg-black/60">
                <PlusIcon className="h-6" />
              </div>

              <div className="bg-black/60 cursor-pointer h-11 w-11 border-2 border-[#f9f9f9] rounded-full">
                <img src="/images/group-icon.svg" alt="group" />
              </div>
            </div>

            {/* lenght genres imdb */}
            <p className="text-xs md:text-sm">
              {result.release_date || result.first_air_date} •{" "}
              {Math.floor(result.runtime / 60)}h {result.runtime % 60}m •{" "}
              {result.genres.map((genre) => genre.name + " ")} •{" "}
              {result.vote_average}/10
            </p>
            <h4 className="text-sm md:text-lg max-w-4xl">{result.overview}</h4>
          </div>
        </div>

        {/* overlay */}
        {showPlayer && (
          <div className="absolute inset-0 bg-black/50 z-50">
            <div className="relative mt-[80px] max-w-[1200px] mx-auto h-[80vh]">
              <ReactPlayer
                url={`${YOUTUBE_URL}${result.videos?.results[index]?.key}`}
                width="100%"
                height="100%"
                controls
                playing={showPlayer}
              /> 

              <div
                className="absolute top-0 -right-[60px] 
                bg-[#040714] cursor-pointer p-4 opacity-50 hover:opacity-75 hover:bg-[#0f0f0f]"
                onClick={() => setShowPlayer(false)}
              >
                <XIcon className="h-5" />
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const { id, type } = context.query;
  const response = await fetchMovie(id, type).then((res) => res.json());
  return {
    props: {
      result: response,
    },
  };
}
