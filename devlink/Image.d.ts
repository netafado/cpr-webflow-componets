import * as React from "react";
import * as Types from "./types";

declare function Image(props: {
  as?: React.ElementType;
  /** For custom aspect ratio, set it with aspect-ratio on the style prop to match the image's dimensions.*/
  aspectRatio?:
    | "4x3"
    | "3x4"
    | "16x9"
    | "9x16"
    | "1x1"
    | "Custom Aspect Ratio"
    | "Background";
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
  image?: Types.Asset.Image;
  altText?: Types.Basic.AltText;
  advancedVisibility?: Types.Visibility.VisibilityConditions;
  advancedLoading?: Types.Builtin.Text;
  advancedFetchPriority?: Types.Builtin.Text;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Basic.IdTextInput;
  advancedStyle?: Types.Builtin.Text;
}): React.JSX.Element;
