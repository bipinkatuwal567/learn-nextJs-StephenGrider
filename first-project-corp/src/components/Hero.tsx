import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

type HeroProps = {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
};

const Hero = ({ imgData, imgAlt, title }: HeroProps) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image src={imgData} alt={imgAlt} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h2 className="text-center text-6xl text-white">{title}</h2>
      </div>
    </div>
  );
};

export default Hero;
