import { IconProps } from "@radix-ui/react-icons/dist/types";

import { Card } from "@/components/ui/card";

interface SkillIconProps extends IconProps {}

type SkillIcon = (props: SkillIconProps) => JSX.Element;

function Skill({ Icon, name }: { Icon: SkillIcon; name: string }) {
  return (
    <Card key={name} className="flex items-center gap-4 rounded-md p-4">
      <Icon className="inline size-12 fill-current" />
      <h3 className="font-semibold">{name}</h3>
    </Card>
  );
}

export type { SkillIcon };
export default Skill;
