import dynamic from "next/dynamic";
import Image from "next/image";

const HeroImageBackground = dynamic(() => import("./hero-image-background"), {
  ssr: false,
});

function HeroImage() {
  return (
    <div className="relative basis-1/3 overflow-clip transition">
      <HeroImageBackground />
      <Image
        src={"/assets/img/john.webp"}
        width={1005}
        height={902}
        sizes="(max-width: 768px) 100vw, 33vw"
        alt={"John Carmack"}
        priority
      />
    </div>
  );
}

export default HeroImage;
