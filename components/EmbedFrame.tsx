import React from "react";

type EmbedFrameProps = {
  src: string;
  // title: string;
  width?: string | number;
  height?: string | number;
  allowFullScreen?: boolean;
};

export default function EmbedFrame({
  src,
  // title,
  width = "100%",
  height = "100%",
  allowFullScreen = true,
}: EmbedFrameProps) {
  return (
    <iframe
      src={src}
      // title={title}
      width={width}
      style={{ 
        height: height,
        border: "none"
      }}
      allowFullScreen={allowFullScreen}
      loading="lazy"
    />
  );
}
