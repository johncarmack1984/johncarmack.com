import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { OL } from "@/components/ui/ol";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { H1 } from "@/components/ui/typography/H1";
import { H3 } from "@/components/ui/typography/H3";
import { P } from "@/components/ui/typography/P";
import { Small } from "@/components/ui/typography/Small";

export default function Home() {
  return (
    <>
      <Card variant="ghost" className="rounded-2xl p-1">
        <CardHeader className="bg-primary m-6 rounded-t-xl"></CardHeader>
        <CardContent className=" flex flex-col gap-4">
          <div className="grid grid-cols-2">
            <div className="bg-gradient-to-b from-gray-400 from-70% to-black to-100%" />
            <div className="bg-primary/40 py-2 px-4">
              <Small>PHRASE</Small>
              <Skeleton className="my-1 h-1 w-full" />
              <Skeleton className="my-2 h-1 w-full" />
              <Skeleton className="mt-2 mb-6 h-1 w-full" />
              <Small>REDWIWES</Small>
              <Skeleton className="my-1 h-1 w-full" />
              <Skeleton className="my-2 h-1 w-full" />
              <Skeleton className="mt-2 mb-6 h-1 w-full" />
              <Small>DABE WNO TONSBQ</Small>
              <Skeleton className="my-2 h-1 w-full" />
              <Skeleton className="my-2 h-1 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-2">
            {/* <div className="bg-primary/70" /> */}
            {/* <div className="bg-accent/80" /> */}
            <div className="from-primary/70 to-muted bg-gradient-to-b from-5% to-60%" />
            <div className="bg-primary/40 py-2 px-4">
              <Small className="mt-6 h-1 w-full">SIXEEP</Small>
              <Skeleton className="my-1 h-1 w-full" />
              <Skeleton className="my-2 h-1 w-full" />
              <Skeleton className="my-2 h-1 w-full" />
              <Skeleton className="mt-2 mb-6 h-1 w-full" />
              <Small>DABE WNOBS TSBQ</Small>
              <Skeleton className="my-2 h-1 w-full" />
              <Skeleton className="my-2 h-1 w-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="bg-primary/40 rounded-bl-xl py-2  px-3">
              <Skeleton className="my-4 h-1 w-full" />
              <Skeleton className="my-2 h-1 w-full" />
              <Skeleton className="my-2 h-1 w-full" />
            </div>
            <div className="bg-muted/70 ml-5  rounded-br-xl" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent></CardContent>
      </Card>
      <div className="text-secondary-foreground drop w-full text-justify text-8xl font-extrabold tracking-wide">
        A M I E
      </div>
      <div className="flex justify-between">
        <div className="bg-secondary/50 size-11 rounded-full" />
        <div className="bg-secondary/60 size-11 rounded-full" />
        <div className="bg-secondary/70 size-11 rounded-full" />
        <div className="bg-secondary/80 size-11 rounded-full" />
        <div className="bg-secondary/90 size-11 rounded-full" />
        <div className="bg-secondary size-11 rounded-full" />
      </div>
      <div className="flex justify-between">
        <div className="bg-accent/50 size-11 rounded-full" />
        <div className="bg-accent/60 size-11 rounded-full" />
        <div className="bg-accent/70 size-11 rounded-full" />
        <div className="bg-accent/80 size-11 rounded-full" />
        <div className="bg-accent/90 size-11 rounded-full" />
        <div className="bg-accent size-11 rounded-full" />
      </div>
      <div className="flex justify-between">
        <div className="bg-primary/50 size-11 rounded-full" />
        <div className="bg-primary/50 size-11 rounded-full" />
        <div className="bg-primary/50 size-11 rounded-full" />
        <div className="bg-primary/50 size-11 rounded-full" />
        <div className="bg-foreground/90 size-11 rounded-full" />
        <div className="bg-foreground size-11 rounded-full" />
      </div>
    </>
  );
}
