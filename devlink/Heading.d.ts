import * as React from "react";
import * as Types from "./types";

declare function Heading(props: {
  as?: React.ElementType;
  alignment?: "Left Align" | "Center Align";
  tag?: Types.Basic.HeadingTag;
  text?: React.ReactNode;
  advancedVisibility?: Types.Visibility.VisibilityConditions;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Builtin.Text;
  advancedStyle?: Types.Builtin.Text;
}): React.JSX.Element;
