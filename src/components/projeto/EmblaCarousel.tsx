"use client";

import obterProjects from "@/data/service/obterProject";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

import {
  IconArrowNarrowLeftDashed,
  IconArrowNarrowRightDashed,
} from "@tabler/icons-react";

const projects = await obterProjects();

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla mx-[2%]  mx-w-lg" ref={emblaRef}>
      <div className="embla__container h-full flex justify-center flex-wrap ">
        {/* <div className="flex z-0"> */}
        {projects &&
          projects.map((project) => (
            <div className="mt-[10px] z-0 p-2 flex items-center justify-center">
              <Link href={`/projects/${project.id}`}>
                <div
                  key={project.id}
                  className="relative w-[160px] 2xl:w-[210px] 2xl:h-[280px] rounded-[8px] mt-[10px] text-center bg-[#DCC9EF] hover:bg-[#A164DE]/60 duration-200 ease-in-out shadow-md"
                >
                  <Image
                    src={project.image}
                    className="relative rounded-[8px] bg-[#BF4E83] object-cover opacity-35 2xl:w-[210px] 2xl:h-[280px]"
                    alt="capa"
                    width={160}
                    height={210}
                  />
                  <h3 className="absolute inset-0 flex items-center justify-center font-arya text-[25px] text-center text-black font-bold uppercase justify-center">
                    {project.name}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        {/* </div> */}
      </div>

      {/* <div className="flex items-center justify-center p-5 gap-8">
        <button className="embla__prev" onClick={scrollPrev}>
          <IconArrowNarrowLeftDashed size={40}/>
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <IconArrowNarrowRightDashed size={40}/>
        </button>
      </div> */}
    </div>
  );
}
