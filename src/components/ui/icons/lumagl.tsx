import { cn } from "@/lib/utils";
import type { SkillIcon } from "@/components/skills/skill";

// luma.gl has no brand mark — a triangle, the GPU rendering primitive it sits on.
const LumaGlIcon: SkillIcon = ({ className, ...props }) => {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} {...props}>
      <title>luma.gl</title>
      <path d="M12 3 L21 20 L3 20 Z"></path>
    </svg>
  );
};

export default LumaGlIcon;
