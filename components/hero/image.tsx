import Image from "next/image";
import john from "@/public/assets/img/john.webp";

import HeroImageBackground from "@/components/hero/image-background";

function HeroImage() {
  return (
    <div className="relative z-10 basis-1/3 overflow-clip transition">
      <HeroImageBackground />
      <Image
        className="relative z-20"
        src={john}
        sizes="(max-width: 768px) 95vw, 25vw"
        alt={"John Carmack"}
        priority
      />
    </div>
  );
}

export default HeroImage;
