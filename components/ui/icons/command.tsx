import { cn } from "@/lib/utils";
import type { ProjectIcon } from "./types";

const CommandPromptIcon: ProjectIcon = ({ className, ...props }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-current", className)}
      {...props}
    >
      <title>Command Line Interface (CLI)</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6ZM5 5C4.44772 5 4 5.44772 4 6V7H20V6C20 5.44772 19.5523 5 19 5H5ZM4 18V9H20V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18ZM7.70711 11.2929C7.31658 10.9024 6.68342 10.9024 6.29289 11.2929C5.90237 11.6834 5.90237 12.3166 6.29289 12.7071L7.58579 14L6.29289 15.2929C5.90237 15.6834 5.90237 16.3166 6.29289 16.7071C6.68342 17.0976 7.31658 17.0976 7.70711 16.7071L9.70711 14.7071C10.0976 14.3166 10.0976 13.6834 9.70711 13.2929L7.70711 11.2929Z"
      />
    </svg>
  );
};

export default CommandPromptIcon;
