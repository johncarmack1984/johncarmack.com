import { cn } from "@/lib/utils";
import type { SkillIcon } from "@/components/skills/skill";

// Axum has no brand mark: stacked service bars, for a Rust web/API server.
const AxumIcon: SkillIcon = ({ className, ...props }) => {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} {...props}>
      <title>Axum</title>
      <rect x="3" y="5.5" width="18" height="5" rx="2.5"></rect>
      <rect x="3" y="13.5" width="18" height="5" rx="2.5"></rect>
    </svg>
  );
};

export default AxumIcon;
