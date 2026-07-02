import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           "100%",
          height:          "100%",
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "center",
          background:      "#1C1917",
          borderRadius:    "36px",
        }}
      >
        <div
          style={{
            display:       "flex",
            alignItems:    "baseline",
            gap:           "2px",
          }}
        >
          <span
            style={{
              color:        "#F97316",
              fontSize:     "90px",
              fontWeight:   900,
              fontFamily:   "sans-serif",
              lineHeight:   1,
              letterSpacing: "-2px",
            }}
          >
            B
          </span>
          <span
            style={{
              color:        "#7BC8F6",
              fontSize:     "72px",
              fontWeight:   700,
              fontFamily:   "sans-serif",
              lineHeight:   1,
              letterSpacing: "-2px",
            }}
          >
            B
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
