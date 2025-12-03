import * as React from "react";
import * as Types from "./types";

declare function Spacer(props: {
  as?: React.ElementType;
  size?: "Main" | "Small" | "Medium" | "Large";
  advancedVisibility?: Types.Visibility.VisibilityConditions;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Builtin.Text;
  advancedStyle?: Types.Builtin.Text;
}): React.JSX.Element;
