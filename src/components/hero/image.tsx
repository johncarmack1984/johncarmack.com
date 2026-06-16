import john from "@/assets/img/john.webp";

import HeroImageBackground from "@/components/hero/image-background";

function HeroImage() {
  return (
    <div className="relative z-10 basis-1/3 overflow-clip transition">
      <HeroImageBackground />
      <img className="relative z-20 h-auto w-full" src={john} alt="John Carmack" />
    </div>
  );
}

export default HeroImage;
