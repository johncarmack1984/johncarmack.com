import { cn } from "@/lib/utils";
import type { SkillIcon } from "@/components/skills/skill";

const SmartphoneIcon: SkillIcon = ({ className, ...props }) => {
  return (
    <svg viewBox="0 0 128 128" className={cn(className)} {...props}>
      <title>iOS</title>
      <path
        fillRule="evenodd"
        d="M46 4h36a14 14 0 0 1 14 14v92a14 14 0 0 1-14 14H46a14 14 0 0 1-14-14V18A14 14 0 0 1 46 4Zm-6 20h48v76H40V24Zm24 82a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
      ></path>
    </svg>
  );
};

export default SmartphoneIcon;
