import * as React from "react";
import * as Types from "./types";

declare function HeaderNavigator(props: {
  as?: React.ElementType;
  callToActionLabel?: Types.Builtin.Text;
  showRepairMenu?: Types.Boolean.Boolean;
  link2ItemPosition?: Types.Slots.SlotContent;
  link3ItemPosition?: Types.Slots.SlotContent;
  link4ItemPosition?: Types.Slots.SlotContent;
  link5ItemPosition?: Types.Slots.SlotContent;
  /** This item is always at the end of the menu*/
  link6ItemPosition?: Types.Slots.SlotContent;
}): React.JSX.Element;
