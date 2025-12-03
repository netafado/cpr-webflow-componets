import * as React from "react";
import * as Types from "./types";

declare function FlexCardComponent(props: {
  as?: React.ElementType;
  image?: Types.Asset.Image;
  heading?: React.ReactNode;
  subHeading?: React.ReactNode;
  paragraph?: React.ReactNode;
}): React.JSX.Element;
