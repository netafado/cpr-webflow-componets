import * as React from "react";
import * as Types from "./types";

declare function Button(props: {
  as?: React.ElementType;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  iconLeftIcon?: Types.Visibility.VisibilityConditions;
  iconLeftIconClass?: Types.Builtin.Text;
  iconRightIcon?: Types.Visibility.VisibilityConditions;
  iconRightIconClass?: Types.Builtin.Text;
  variant?: "Primary" | "Secondary";
  advancedButtonVisibility?: Types.Visibility.VisibilityConditions;
  /** When setting component to a <button>, set this to hidden to hide the link overlay within.*/
  advancedLinkVisibility?: Types.Visibility.VisibilityConditions;
  advancedTextVisibility?: Types.Visibility.VisibilityConditions;
  /** When setting component to a <button> and hiding the Link, set this to "false" so the visible text is also what is read out to screen readers.*/
  advancedTextAria?: Types.Builtin.Text;
  /** Change to "button" to set it as a <button>*/
  advancedTag?: Types.Basic.TagType;
  advancedClass?: Types.Builtin.Text;
  advancedId?: Types.Basic.IdTextInput;
  advancedStyle?: Types.Builtin.Text;
  advancedAttributeName?: Types.Builtin.Text;
  advancedAttributeValue?: Types.Builtin.Text;
}): React.JSX.Element;
