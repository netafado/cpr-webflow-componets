import * as React from "react";
import * as Types from "./types";

declare function Border(props: {
  as?: React.ElementType;
  advancedVisibility?: Types.Visibility.VisibilityConditions;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Builtin.Text;
  advancedStyle?: Types.Builtin.Text;
  spacing?: "Main" | "Small" | "Medium" | "Large" | "None";
}): React.JSX.Element;
