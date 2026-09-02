import HeroImageBackground from "@/components/hero/image-background";

import john from "@/assets/img/john.avif";

function HeroImage() {
  return (
    <div className="relative z-10 basis-1/3 overflow-clip transition">
      <HeroImageBackground />
      <img
        className="relative z-20 aspect-[1005/902] h-auto w-full"
        src={john}
        alt="John Carmack, software engineer"
        width={1005}
        height={902}
        fetchPriority="high"
      />
    </div>
  );
}

export default HeroImage;
