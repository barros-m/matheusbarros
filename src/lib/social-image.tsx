import { ImageResponse } from "next/og";

const bg = "#ffffff";
const fg = "#111111";
const muted = "#374151";

function Monogram() {
  return (
    <svg width="230" height="230" viewBox="0 0 256 256" fill="none">
      <rect width="256" height="256" rx="52" fill="#ffffff" stroke="#111111" strokeWidth="10" />
      <g fill="#111111">
        <rect x="20" y="96" width="38" height="14" rx="7" />
        <rect x="20" y="126" width="38" height="14" rx="7" />
        <path d="M70 176V80H94L126 124L158 80H182V176H160V118L126 166L92 118V176H70Z" />
        <path d="M152 80H196C218 80 234 94 234 113C234 126 227 136 216 141C230 146 242 158 242 175C242 199 223 214 196 214H152V192H195C208 192 220 185 220 174C220 163 208 156 195 156H152V134H192C204 134 212 127 212 116C212 105 204 102 192 102H152V80Z" />
      </g>
    </svg>
  );
}

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: fg,
          padding: "72px"
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "3px solid #e5e7eb",
            borderRadius: "28px",
            display: "flex",
            alignItems: "center",
            gap: "48px",
            padding: "56px 62px"
          }}
        >
          <Monogram />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 82,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1
              }}
            >
              Matheus Barros
            </div>
            <div
              style={{
                marginTop: "20px",
                fontSize: 36,
                fontWeight: 600,
                color: muted,
                lineHeight: 1.2
              }}
            >
              Senior Software Engineer
            </div>
            <div
              style={{
                marginTop: "14px",
                fontSize: 26,
                fontWeight: 500,
                color: muted,
                lineHeight: 1.2
              }}
            >
              Full Stack • Azure • ETL • Data Systems
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
