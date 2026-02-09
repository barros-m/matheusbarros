import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Matheus Barros | Senior Software Engineer",
    short_name: "Matheus Barros",
    description:
      "Portfolio of Matheus Barros - Senior Software Engineer specializing in full-stack development, ETL pipelines, and Azure cloud solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#111111",
    icons: [
      {
        src: "/mb-mark-bw.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      }
    ]
  };
}
