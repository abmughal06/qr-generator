"use client";

import { useState } from "react";
import { useQRCode } from "next-qrcode";
import { Input } from "@/components/ui/input";

export default function Home() {
  const { Image } = useQRCode();
  const [url, setUrl] = useState("");

  return (
    <main>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 w-[300px]">
          <h2 className="text-white text-3xl font-semibold">
            Generate QR Code
          </h2>
          {url && url.includes("https://") ? (
            // eslint-disable-next-line jsx-a11y/alt-text
            <Image
              text={url}
              options={{
                type: "image/jpeg",
                quality: 0.3,
                margin: 3,
                scale: 10,
                width: 200,
                color: {
                  dark: "#000000",
                  light: "#FFFFFF",
                },
              }}
            />
          ) : (
            <span className="text-destructive">please enter url below</span>
          )}
          <Input
            type="url"
            placeholder="Enter Url like https://google.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="p-3 text-black bg-zinc-200"
          />
          
        </div>
      </div>
    </main>
  );
}
