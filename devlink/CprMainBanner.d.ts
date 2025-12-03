import * as React from "react";
import * as Types from "./types";

declare function CprMainBanner(props: {
  as?: React.ElementType;
  headerBadge?: React.ReactNode;
  headerTitle?: React.ReactNode;
  headerLocationCtaText?: React.ReactNode;
  headerLocationText?: React.ReactNode;
  headerBannerImage?: Types.Asset.Image;
}): React.JSX.Element;
