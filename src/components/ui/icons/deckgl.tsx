import { cn } from "@/lib/utils";
import type { SkillIcon } from "@/components/skills/skill";

// deck.gl has no monochrome brand mark, so this is a flat-top hexagon "cell" —
// its signature HexagonLayer bin. The skill label spells out the name.
const DeckGlIcon: SkillIcon = ({ className, ...props }) => {
  return (
    <svg viewBox="0 0 24 24" className={cn(className)} {...props}>
      <title>deck.gl</title>
      <path
        fillRule="evenodd"
        d="M22.5 12 17.25 2.91 6.75 2.91 1.5 12 6.75 21.09 17.25 21.09 Z M17.5 12 14.75 7.24 9.25 7.24 6.5 12 9.25 16.76 14.75 16.76 Z"
      ></path>
    </svg>
  );
};

export default DeckGlIcon;
