import { ImageResponse } from "next/og";
import { siteConfig } from "@/app/site.config";

// The preview card shown when the site link is shared (LinkedIn, Slack, …).
// Generated once at build time.
export const alt = `${siteConfig.name} — ${siteConfig.role}, Budapest`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#ffffff",
          borderTop: "24px solid #2e9bb2",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            background: "#000000",
            color: "#ffffff",
            borderRadius: 999,
            padding: "10px 24px",
            fontSize: 28,
          }}
        >
          Open to part-time student roles · Budapest
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, color: "#0b0b0d", lineHeight: 1.05 }}>
            I build websites and run the server they live on.
          </div>
          <div style={{ marginTop: 24, fontSize: 32, color: "#555555" }}>
            Next.js · TypeScript · Linux hosting · ELTE foundation year
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#2e9bb2" }}>
          {siteConfig.name}
        </div>
      </div>
    ),
    { ...size },
  );
}
