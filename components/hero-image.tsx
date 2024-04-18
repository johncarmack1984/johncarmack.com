import dynamic from "next/dynamic";
import Image from "next/image";
import john from "@/public/assets/img/john.webp";

const HeroImageBackground = dynamic(() => import("./hero-image-background"), {
  ssr: false,
});

function HeroImage() {
  return (
    <div className="relative basis-1/3 overflow-clip transition">
      <HeroImageBackground />
      <Image
        src={john}
        sizes="(max-width: 768px) 100vw, 33vw"
        alt={"John Carmack"}
        priority
      />
    </div>
  );
}

export default HeroImage;
