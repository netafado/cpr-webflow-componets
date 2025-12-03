import * as React from "react";
import * as Types from "./types";

declare function Accordion(props: {
  as?: React.ElementType;
  titleText?: React.ReactNode;
  titleClass?: Types.Builtin.Text;
  groupName?: Types.Builtin.Text;
  slot?: Types.Slots.SlotContent;
  advancedVisibility?: Types.Visibility.VisibilityConditions;
  advancedRole?: Types.Builtin.Text;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Builtin.Text;
  advancedStyle?: Types.Builtin.Text;
  /** Remove the value completely to default it closed both in Designer and on live page.*/
  advancedOpenInDesigner?: Types.Builtin.Text;
  /** Change to "true" if you want it to start open on the live page.*/
  advancedOpenOnLivePage?: Types.Builtin.Text;
}): React.JSX.Element;
