import * as React from "react";
import * as Types from "./types";

declare function GridRow(props: {
  as?: React.ElementType;
  columnAlignment?:
    | "Top Left"
    | "Top Right"
    | "Top Center"
    | "Top Between"
    | "Center Left"
    | "Center Right"
    | "Center Center"
    | "Center Between"
    | "Bottom Left"
    | "Bottom Right"
    | "Bottom Center"
    | "Bottom Between";
  slotContent?: Types.Slots.SlotContent;
  advancedVisibility?: Types.Visibility.VisibilityConditions;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Basic.IdTextInput;
  advancedStyle?: Types.Builtin.Text;
  advancedCustomAttributeName?: Types.Builtin.Text;
  advancedCustomAttributeValue?: Types.Builtin.Text;
}): React.JSX.Element;
