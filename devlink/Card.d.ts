import * as React from "react";
import * as Types from "./types";

declare function Card(props: {
  as?: React.ElementType;
  linkOverlayVisibility?: Types.Visibility.VisibilityConditions;
  linkOverlayLink?: Types.Basic.Link;
  linkOverlayScreenReaderText?: React.ReactNode;
  hoverStyle?: "None" | "Hoverable";
  slot?: Types.Slots.SlotContent;
  advancedVisibility?: Types.Visibility.VisibilityConditions;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Basic.IdTextInput;
  advancedStyle?: Types.Builtin.Text;
  /** Set as "_blank" to open in new tab if link is bound to CMS item.*/
  linkOverlayTarget?: Types.Builtin.Text;
}): React.JSX.Element;
