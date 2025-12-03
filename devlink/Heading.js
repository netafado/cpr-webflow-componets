"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Heading.module.css";

export function Heading({
  as: _Component = _Builtin.DOM,
  alignment = "Left Align",
  tag = "h1",
  text = "Heading",
  advancedVisibility = true,
  advancedClass,
  advancedId,
  advancedStyle,
}) {
  const _styleVariantMap = {
    "Left Align": "",
    "Center Align": "w-variant-c9a39187-19f4-c6b4-e1bc-71ad011dd980",
  };

  const _activeStyleVariant = _styleVariantMap[alignment];

  return advancedVisibility ? (
    <_Component
      className={_utils.cx(_styles, "heading-component", _activeStyleVariant)}
      tag="div"
      slot=""
      id={advancedId}
      style={advancedStyle}
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "", _activeStyleVariant)}
        tag={tag}
      >
        {text}
      </_Builtin.Heading>
    </_Component>
  ) : null;
}
