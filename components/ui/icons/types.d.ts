import { IconProps } from "@radix-ui/react-icons/dist/types";

interface ProjectIconProps extends IconProps {}

type ProjectIcon = (props: ProjectIconProps) => JSX.Element;

export type { ProjectIcon, ProjectIconProps };
