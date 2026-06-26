import { cn } from "@/lib/utils";
import type { SkillIcon } from "@/components/skills/skill";

// AWS CDK has no monochrome brand mark: two stacked tiles, for composable constructs.
const CdkIcon: SkillIcon = ({ className, ...props }) => {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} {...props}>
      <title>AWS CDK</title>
      <rect x="7" y="4" width="13" height="13" rx="2"></rect>
      <rect x="4" y="7" width="13" height="13" rx="2"></rect>
    </svg>
  );
};

export default CdkIcon;
