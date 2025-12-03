import * as React from "react";
import * as Types from "./types";

declare function Nav(props: {
  as?: React.ElementType;
  colorMode?: "Base" | "Invert";
  navMenuVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
