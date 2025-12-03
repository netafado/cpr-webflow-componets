import * as React from "react";
import * as Types from "./types";

declare function Eyebrow(props: {
  as?: React.ElementType;
  alignment?: "Left" | "Center";
  text?: React.ReactNode;
  advancedVisibility?: Types.Visibility.VisibilityConditions;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Basic.IdTextInput;
  advancedStyle?: Types.Builtin.Text;
}): React.JSX.Element;
