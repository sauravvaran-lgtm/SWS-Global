import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { hero, services } from "./content";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = `SWS Global — ${hero.titleLead} ${hero.titleAccent}`;

const markSrc = `data:image/svg+xml;base64,${await readFile(
  join(process.cwd(), "public/images/logo/swsglobal-mark.svg"),
  "base64",
)}`;

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
          background: "linear-gradient(135deg, #042323 0%, #083636 55%, #104f4f 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -160,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(61,217,217,0.45) 0%, rgba(61,217,217,0) 70%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={markSrc} width={76} height={76} alt="" />
            <div style={{ display: "flex", fontSize: 46, fontWeight: 700, letterSpacing: 0.5 }}>
              <span style={{ color: "#30dbdb" }}>SWS</span>
              <span>GLOBAL</span>
            </div>
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
              color: "#a9eeee",
            }}
          >
            {hero.eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 64, fontWeight: 700, lineHeight: 1.12, maxWidth: 1000 }}>
          {hero.titleLead}&nbsp;<span style={{ color: "#3dd9d9" }}>{hero.titleAccent}</span>
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
