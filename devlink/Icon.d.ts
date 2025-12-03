import * as React from "react";
import * as Types from "./types";

declare function Icon(props: {
  as?: React.ElementType;
  size?: "1 EM" | "SM" | "MD" | "LG";
  color?: "Inherit" | "Primary" | "Yellow" | "Blue";
  /** Get the specific class name getting the "Web" settings for the icon of choice on phosphoricons.com*/
  iconClass?: Types.Builtin.Text;
  advancedVisibility?: Types.Visibility.VisibilityConditions;
  advancedParentClass?: Types.Builtin.Text;
  advancedId?: Types.Builtin.Text;
  advancedStyle?: Types.Builtin.Text;
}): React.JSX.Element;
