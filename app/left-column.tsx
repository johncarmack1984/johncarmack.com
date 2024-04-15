import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { H1 } from "@/components/ui/typography/H1";
import { P } from "@/components/ui/typography/P";

export default function LeftColumn() {
  return (
    <>
      <Card variant="primary">
        <CardHeader>
          <H1 className="text-primary-foreground">John Carmack</H1>
          <CardDescription className="text-foreground text-base">
            Software Engineer
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Separator />
        </CardFooter>
      </Card>
      <div className="grid grid-cols-2 gap-8">
        <Card variant="secondary" className="text-center">
          <CardHeader className="text-xs capitalize">
            LIBEKY
            <br />
            &lt;&lt;ADHAK&gt;&gt;
          </CardHeader>
          <CardContent>LGKR</CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="mt-6 font-bold">
            KCDEKH
            <br />
            PIONWN
            <br />
            FASES
            <br />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <Card variant="muted">
          <CardContent className="pt-6">
            <Separator />
            <Separator />
          </CardContent>
        </Card>
        <Card className="bg-muted">
          <CardContent className="pt-6">
            <Separator />
            <Separator />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <Card className="h-[100px] overflow-clip" variant="default">
          <CardContent className="text-primary-foreground/50 leading-1 mt-6 text-justify text-[12px]">
            WE INABI BNI ELE ONAG NTBY VEJV OFTIPDAL ILL VFCNEN CIES
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="max-h-[100px] break-before-all overflow-clip pt-5 text-justify text-[5px] leading-[6px] tracking-[-.1px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </CardContent>
        </Card>
      </div>

      <Card variant="muted" className="rounded-t-lg">
        <CardHeader className="pt-6">
          <Separator className="mb-2 h-2 rounded-full" decorative />
          <Separator className="h-2 rounded-full" decorative />
        </CardHeader>
      </Card>
      <div className="grid grid-cols-11 gap-4">
        <Card
          className="col-span-10 rounded-tl-2xl rounded-br-lg"
          variant="muted"
        >
          <CardHeader className="pt-6">
            <Separator className="mb-2 h-2 rounded-full" decorative />
            <Separator className="mb-2 h-2 rounded-full" decorative />
            <Separator className="h-2 rounded-full" decorative />
          </CardHeader>
        </Card>
        <Card className="col-span-1" variant="muted" />
      </div>
      <Card variant="accent">
        <CardContent className="pt-6">
          <P>betor</P>
        </CardContent>
      </Card>
      <Card variant="muted">
        <CardContent className="pt-6">
          <P>Fort</P>
        </CardContent>
      </Card>
      <Card variant="secondary">
        <CardContent className="pt-6">
          <P>Fort</P>
        </CardContent>
      </Card>
    </>
  );
}
