import * as AllIcons from "@expo/vector-icons";
import React from "react";

export default function Icon({
  family = "Ionicons",
  name = "Home",
  color = "#ffffff",
  size = 24,
  style,
}) {
  const ExtractedIcon = AllIcons[family];

  if (!ExtractedIcon) return null;

  return (
    <ExtractedIcon
      type={family}
      name={name}
      color={color}
      size={size}
      style={style}
    />
  );
}
