import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.brandName,
    short_name: SITE_CONFIG.brandName,
    description: SITE_CONFIG.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#07080c",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
