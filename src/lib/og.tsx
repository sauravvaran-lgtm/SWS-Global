import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hero, services } from "./content";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `SWS Global — ${hero.titleLead} ${hero.titleAccent}`;

const asset = async (file: string) =>
  `data:image/png;base64,${await readFile(join(process.cwd(), "public/images/logo", file), "base64")}`;
const markSrc = await asset("logo-mark.png");
const wordmarkSrc = await asset("wordmark-light.png");

/** Social share card (Open Graph / Twitter) rendered at build time. */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#ffffff",
          background: "#121f31",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={markSrc} width={92} height={92} alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={wordmarkSrc} width={300} height={32} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.25)",
              fontSize: 22,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#bdcfe6",
            }}
          >
            {hero.eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 1060 }}>
          {hero.titleLead}&nbsp;<span style={{ color: "#e0773d" }}>{hero.titleAccent}</span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {services.slice(0, 5).map((s) => (
            <div
              key={s.id}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 9999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                fontSize: 22,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {s.title}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
