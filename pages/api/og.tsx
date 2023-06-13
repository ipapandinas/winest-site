/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const bentogaFont = fetch(
  new URL("../../public/fonts/Bentoga-Thin.otf", import.meta.url)
).then((res) => res.arrayBuffer());

const DefaultOgImage = async () => {
  const bentogaFontData = await bentogaFont;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
          fontSize: 128,
          backgroundColor: "#080411",
        }}
      >
        <div
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              margin: 0,
              fontSize: 48,
              fontStyle: "normal",
              fontFamily: '"Bentoga"',
              fontWeight: 700,
              letterSpacing: 6,
              color: "white",
              marginTop: 120,
              padding: "0 120px",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
            }}
          >
            Winest Club
          </div>
          <div
            style={{
              fontSize: 24,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              color: "white",
              marginTop: 24,
              padding: "0 120px",
              lineHeight: 1.4,
              whiteSpace: "pre-wrap",
            }}
          >
            Winest Club is a Wine Club on Web3.
          </div>
          {/* <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              marginTop: 80,
              borderRadius: "8px",
            }}
          ></div> */}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Bentoga",
          data: bentogaFontData,
          style: "normal",
        },
      ],
    }
  );
};

export default DefaultOgImage;
