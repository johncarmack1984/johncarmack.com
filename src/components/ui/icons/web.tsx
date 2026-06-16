import { GlobeIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import type { SkillIcon } from "@/components/skills/skill";

const WebIcon: SkillIcon = ({ className, ...props }) => {
  return <GlobeIcon xlinkTitle="Web" className={cn(className)} {...props} />;
};

export default WebIcon;
