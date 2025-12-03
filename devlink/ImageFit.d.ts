import * as React from "react";
import * as Types from "./types";

declare function ImageFit(props: {
  as?: React.ElementType;
  imageFit?:
    | "Cover - Center"
    | "Cover - Center Left"
    | "Cover - Center Right"
    | "Cover - Top Left"
    | "Cover - Top Center"
    | "Cover - Top Right"
    | "Cover - Bottom Left"
    | "Cover - Bottom Center"
    | "Cover - Bottom Right";
  altText?: Types.Basic.AltText;
  image?: Types.Asset.Image;
  loading?: Types.Builtin.Text;
  fetchPriority?: Types.Builtin.Text;
}): React.JSX.Element;
