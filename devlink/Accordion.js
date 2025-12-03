"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { CprPromoBanner } from "./CprPromoBanner";
import * as _utils from "./utils";
import _styles from "./Accordion.module.css";

export function Accordion({
  as: _Component = _Builtin.DOM,
  titleText = "Lorem ipsum?",
  titleClass = "h4",
  groupName,
  slot,
  advancedVisibility = true,
  advancedRole = "listitem",
  advancedClass,
  advancedId,
  advancedStyle,
  advancedOpenInDesigner = "true",
  advancedOpenOnLivePage = "false",
}) {
  return advancedVisibility ? (
    <_Component
      className={_utils.cx(_styles, "accordion-item")}
      tag="details"
      slot=""
      open={advancedOpenInDesigner}
      name={groupName}
      _class={advancedClass}
      id={advancedId}
      style={advancedStyle}
      data-accordion-start-open={advancedOpenOnLivePage}
      role={advancedRole}
    >
      <_Builtin.DOM
        className={_utils.cx(_styles, "accordion-trigger")}
        tag="summary"
        slot=""
      >
        <_Builtin.DOM
          className={_utils.cx(_styles, "accordion-title")}
          tag="label"
          slot=""
          _class={titleClass}
        >
          {titleText}
        </_Builtin.DOM>
        <_Builtin.DOM
          className={_utils.cx(_styles, "accordion-icon")}
          tag="svg"
          slot=""
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 32 32"
          fill="none"
        >
          <_Builtin.DOM
            tag="path"
            slot=""
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 17L27.3137 17L27.3137 15H17V4.68631L15 4.68631L15 15H4.68629L4.68629 17L15 17V27.3137H17V17Z"
            fill="currentColor"
          />
        </_Builtin.DOM>
      </_Builtin.DOM>
      <_Builtin.Block
        className={_utils.cx(_styles, "accordion-content")}
        tag="div"
        data-accordion="content"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "accordion-content_spacer")}
          tag="div"
        >
          <CprPromoBanner />
          <_Builtin.NotSupported _atom="Slot" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  ) : null;
}
