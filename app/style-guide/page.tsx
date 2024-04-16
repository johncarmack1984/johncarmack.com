"use client";

import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const themeColors = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "border",
  "input",
  "ring",
];

function ColorSwatch({
  name,
  theme,
}: {
  name: string;
  theme: "light" | "dark";
}) {
  return (
    <div
      className="border-border mx-auto size-8 border border-solid"
      style={{ backgroundColor: `var(--theme-color-${name})` }}
      data-theme={theme}
    />
  );
}

function StyleGuideRow(name: string) {
  return (
    <TableRow className="text-xl" key={name}>
      <TableCell>
        <ColorSwatch name={name} theme="light" />
      </TableCell>
      <TableCell>
        <ColorSwatch name={name} theme="dark" />
      </TableCell>
      <TableCell className="capitalize">{name}</TableCell>
    </TableRow>
  );
}

export default function StyleGuide() {
  return (
    <div className="mx-auto">
      <Table className="w-2xs font-serif">
        <TableHeader>
          <TableRow className=" text-2xl">
            <TableHead className="w-[25px]">Light</TableHead>
            <TableHead className="w-[25px]">Dark</TableHead>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{themeColors.map(StyleGuideRow)}</TableBody>
      </Table>
    </div>
  );
}
