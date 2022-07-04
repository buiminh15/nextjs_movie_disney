import Head from "next/head";
import { Brands, Header, Hero, MovieCollection, Slider } from "../components";
import { useAppContext } from "../context/state";
import useUserStatus from "../hooks/useUserStatus";
import { TITLES } from "../utils/constant";
import { CATEGORIES, fetchMovies, TYPES } from "../utils/fetchs";

export default function Home({
  nowPlayingMovies,
  popularMovies,
  popularShows,
  top_ratedMovies,
  top_ratedShows,
}) {
  useUserStatus();
  const { user } = useAppContext();

  return (
    <div>
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header loggedInUser={user} />
      {!user ? (
        <Hero />
      ) : (
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
          <Slider />
          <Brands />
          <MovieCollection
            title={TITLES.NOW_PLAYING}
            results={nowPlayingMovies}
            typeCategory={TYPES.MOVIE}
          />
          <MovieCollection
            title={TITLES.POPULAR_MOVIES}
            results={popularMovies}
            typeCategory={TYPES.MOVIE}
          />
          <MovieCollection
            title={TITLES.POPULAR_SHOWS}
            results={popularShows}
            typeCategory={TYPES.TV}
          />
          <MovieCollection
            title={TITLES.TOP_RATED_MOVIES}
            results={top_ratedMovies}
            typeCategory={TYPES.MOVIE}
          />
          <MovieCollection
            title={TITLES.TOP_RATED_SHOWS}
            results={top_ratedShows}
            typeCategory={TYPES.TV}
          />
        </main>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const [
    nowPlayingMoviesRes,
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetchMovies(TYPES.MOVIE, CATEGORIES.NOW_PLAYING),
    fetchMovies(TYPES.MOVIE, CATEGORIES.POPULAR),
    fetchMovies(TYPES.TV, CATEGORIES.POPULAR),
    fetchMovies(TYPES.MOVIE, CATEGORIES.TOP_RATED),
    fetchMovies(TYPES.TV, CATEGORIES.TOP_RATED),
  ]);

  const [
    nowPlayingMovies,
    popularMovies,
    popularShows,
    top_ratedMovies,
    top_ratedShows,
  ] = await Promise.all([
    nowPlayingMoviesRes.json(),
    popularMoviesRes.json(),
    popularShowsRes.json(),
    top_ratedMoviesRes.json(),
    top_ratedShowsRes.json(),
  ]);

  return {
    props: {
      nowPlayingMovies: nowPlayingMovies.results,
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      top_ratedMovies: top_ratedMovies.results,
      top_ratedShows: top_ratedShows.results,
    },
  };
}
