
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export interface IProject {
    title: string;
    link: string;
    desc: string;
    img: string;
    imgtech: string;
}

export default function ThreeDCardDemo({ data }: { data: IProject }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 shadow-md relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl xl:text-3xl font-bold text-neutral-600 dark:text-white "
        >
          {data.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm sm:text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
        {data.desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={data.img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={data.link}
            target="_blank"
            className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            as="div">
            <Image src={data.imgtech} alt={data.title} width={500} height={500} className="w-[4rem]" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
