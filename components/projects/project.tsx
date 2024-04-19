import { Fragment, Key } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IconProps } from "@radix-ui/react-icons/dist/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectIconProps extends IconProps {}

type ProjectIcon = (props: ProjectIconProps) => JSX.Element;

function Skill(Icon: ProjectIcon, key: Key) {
  return (
    <Fragment key={key}>
      <Icon className="size-6 fill-current" />
    </Fragment>
  );
}

type ProjectProps = {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
  platforms: any[];
  skills: ProjectIcon[];
};

function Project({
  title,
  description,
  image,
  href,
  platforms,
  skills,
}: ProjectProps) {
  return (
    <Card key={href} className="rounded-md">
      <CardHeader>
        <Link aria-label={title} href={href}>
          <Image
            alt={title}
            className="aspect-video h-32 w-full rounded-md object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 639px) 100vw, 25vw"
            src={image}
            style={{
              objectFit: "cover",
              objectPosition: "0 0",
            }}
          />
        </Link>
        <CardTitle className="mt-4 text-base font-semibold">{title}</CardTitle>
        <div className="flex gap-2">{skills.map(Skill)}</div>
      </CardHeader>
      <CardContent className="text-sm">{description}</CardContent>

      <CardFooter className="flex gap-2">
        <CardDescription className="flex items-center gap-[6px]">
          {platforms.map(Skill)}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

export default Project;
