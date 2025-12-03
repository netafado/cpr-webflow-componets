import * as React from "react";
import * as Types from "./types";

declare function List(props: {
  as?: React.ElementType;
  slot?: Types.Slots.SlotContent;
  advancedVisibility?: Types.Visibility.VisibilityConditions;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Builtin.Text;
  advancedStyle?: Types.Builtin.Text;
}): React.JSX.Element;
