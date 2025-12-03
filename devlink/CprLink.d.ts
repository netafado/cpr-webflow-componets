import * as React from "react";
import * as Types from "./types";

declare function CprLink(props: {
  as?: React.ElementType;
  label?: Types.Builtin.Text;
  link?: Types.Basic.Link;
  variant?: "default" | "megamenu" | "button" | "dropdown";
  megamenuContent?: Types.Slots.SlotContent;
  sublink1?: Types.Basic.Link;
  sublink1Name?: Types.Builtin.Text;
  sublink2?: Types.Basic.Link;
  sublink2Name?: Types.Builtin.Text;
  sublink3?: Types.Basic.Link;
  sublink3Name?: Types.Builtin.Text;
  sublink4?: Types.Basic.Link;
  sublink4Name?: Types.Builtin.Text;
}): React.JSX.Element;
