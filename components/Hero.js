import Head from "next/head";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section>
      <Head>
        <title>Login | Disney+</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="relative min-h-[calc(100vh-72px)] flex items-center justify-center">
        <Image
          priority
          src="/images/hero-background.jpg"
          layout="fill"
          objectFit="cover"
          alt="background image"
          className="absolute z-0"
        />

        <div className="absolute z-10 top-[20%] flex flex-col space-y-3 w-full max-w-screen-sm ">
          <Image
            src="/images/cta-logo-one.svg"
            objectFit="contain"
            width="600"
            height="150"
            alt="logo"
          />
          <button className="bg-blue-600 uppercase text-xl tracking-wide text-white font-extrabold rounded py-4 px-6 hover:bg-[#0485ee]">
            Get all there
          </button>
          <p className="text-white text-center text-xs">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 30th June 2022, the price of
            Disney+ and The Disney Bundle will increase by ₹100
          </p>
          <Image
            src={"/images/cta-logo-two.png"}
            objectFit="contain"
            width={640}
            height={70}
            alt="brands"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
