import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import type { IconProps } from "@radix-ui/react-icons/dist/types";

import { Button } from "@/components/ui/button";

type IconType = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;

const contactLinks = [
  {
    Icon: LinkedInLogoIcon,
    href: "https://linkedin.com/in/johncarmack1984",
  },
  {
    Icon: GitHubLogoIcon,
    href: "https://github.com/johncarmack1984",
  },
];

function ContactLink({ Icon, href }: { Icon: IconType; href: string }) {
  const displayHref = href.replace(/(^\w+:|^)\/\//, "");
  return (
    <Button
      key={href}
      variant="ghost"
      className="block w-fit pl-0 text-lg"
      asChild
    >
      <a href={href}>
        <Icon className="inline" /> {displayHref}
      </a>
    </Button>
  );
}

export default function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Contact
        </h2>
        <div className="mt-4">{contactLinks.map(ContactLink)}</div>
      </div>
    </section>
  );
}
