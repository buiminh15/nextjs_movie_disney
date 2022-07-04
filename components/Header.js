import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../firebase";
import {
  clearStorage,
  KEYS,
  saveValueStorage,
  userAccessToken,
} from "../utils/storage";
import {
  SearchIcon,
  HomeIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";

function Header({ loggedInUser }) {
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const signIn = async () => {
    const { user } = await signInWithPopup(auth, provider);
    const { refreshToken, providerData } = user;
    saveValueStorage(KEYS.ACCESS_TOKEN, refreshToken);
    saveValueStorage(KEYS.USER, providerData);

    router.push("/");
  };

  const signOut = async () => {
    clearStorage();
    await auth.signOut();
  };

  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center justify-between h-[72px] px-10">
      <Image
        className="cursor-pointer"
        src={"/images/logo.svg"}
        width={72}
        height={72}
        alt="logo"
        onClick={() => router.push("/")}
      />
      {loggedInUser && (
        <div className="hidden md:flex items-center space-x-6 ml-10">
          <a className="header-link group">
            <HomeIcon className="h-4" />
            <span onClick={() => router.push("/")} className="span">
              Home
            </span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span onClick={() => router.push("/search")} className="span">
              Search
            </span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>
        </div>
      )}
      {!loggedInUser ? (
        <button
          className="uppercase border px-4 rounded py-1.5 tracking-wide hover:bg-white hover:text-black transition duration-200"
          onClick={signIn}
        >
          Login
        </button>
      ) : (
        <img
          className=" h-12 w-12 rounded-full object-cover cursor-pointer"
          src={loggedInUser.photoURL}
          onClick={signOut}
          alt="profile"
        />
      )}
    </header>
  );
}

export default Header;
