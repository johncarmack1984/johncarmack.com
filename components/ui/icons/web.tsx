import { GlobeIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import type { ProjectIcon } from "./types";

const WebIcon: ProjectIcon = ({ className, ...props }) => {
  return <GlobeIcon xlinkTitle="Web" className={cn(className)} {...props} />;
};

export default WebIcon;
