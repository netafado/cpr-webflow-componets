import * as React from "react";
import * as Types from "./types";

declare function Modal(props: {
  as?: React.ElementType;
  buttonVariant?: "Primary" | "Secondary";
  buttonText?: React.ReactNode;
  /** Add any value to open the modal to view and edit its contents.*/
  modalShowModal?: Types.Builtin.Text;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Builtin.Text;
  advancedStyle?: Types.Builtin.Text;
  slot?: Types.Slots.SlotContent;
}): React.JSX.Element;
