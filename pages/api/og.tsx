/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const archivoFont = fetch(
  new URL("../../public/fonts/Archivo-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());
const bentogaFont = fetch(
  new URL("../../public/fonts/Bentoga-Thin.otf", import.meta.url)
).then((res) => res.arrayBuffer());

const DefaultOgImage = async () => {
  const archivoFontData = await archivoFont;
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
          backgroundColor: "#fff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            margin: 0,
            fontSize: 130,
            fontStyle: "normal",
            fontFamily: '"Archivo"',
            fontWeight: 700,
            color: "#0f172a",
            padding: "0 120px",
            lineHeight: 1.4,
            whiteSpace: "pre-line",
            letterSpacing: "-0.025em",
          }}
        >
          Shaping
          <br />
          the future of
          <br />
          <div
            style={{
              fontFamily: '"Bentoga"',
              padding: 16,
              paddingTop: 2,
              paddingBottom: 2,
              backgroundImage:
                "linear-gradient(180deg, #62ffa6 94%, #da0000 100%, #6248ff)",
            }}
          >
            Wine
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Archivo",
          data: archivoFontData,
          style: "normal",
        },
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
