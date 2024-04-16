import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "John Carmack",
    short_name: "John Carmack",
    description: "Senior Software Engineer with 26 Years of Experience",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  };
}
