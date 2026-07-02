import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius:    "6px",
        }}
      >
        <div
          style={{
            display:        "flex",
            alignItems:     "baseline",
            gap:            "1px",
          }}
        >
          <span
            style={{
              color:        "#F97316",
              fontSize:     "16px",
              fontWeight:   900,
              fontFamily:   "sans-serif",
              lineHeight:   1,
              letterSpacing: "-0.5px",
            }}
          >
            B
          </span>
          <span
            style={{
              color:        "#7BC8F6",
              fontSize:     "13px",
              fontWeight:   700,
              fontFamily:   "sans-serif",
              lineHeight:   1,
              letterSpacing: "-0.5px",
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
