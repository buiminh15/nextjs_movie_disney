import Image from "next/image";
import React from "react";

function Brands() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 mb-8">
      <div className="brand group">
        <Image
          src="/images/disnep.png"
          layout="fill"
          objectFit="cover"
          alt="disney"
        />
        <video
          autoPlay={true}
          loop
          playsInline
          width={300}
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>{" "}
      </div>

      <div className="brand group">
        <Image
          src="/images/pixar.png"
          layout="fill"
          objectFit="cover"
          alt="pixar"
        />
        <video
          autoPlay
          loop
          playsInline
          width={300}
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>{" "}
      </div>
      <div className="brand group">
        <Image
          src="/images/starwars.png"
          layout="fill"
          objectFit="cover"
          alt="starr-wars"
        />
        <video
          autoPlay
          loop
          playsInline
          width={300}
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="brand group">
        <Image
          src="/images/marvel.png"
          layout="fill"
          objectFit="cover"
          alt="marvel"
        />
        <video
          autoPlay
          loop
          playsInline
          width={300}
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>{" "}
      </div>
      <div className="brand group">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
          alt="national-geographic"
        />
        <video
          autoPlay
          loop
          playsInline
          width={300}
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Brands;
