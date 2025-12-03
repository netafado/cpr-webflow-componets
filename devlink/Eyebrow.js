"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Eyebrow.module.css";

export function Eyebrow({
  as: _Component = _Builtin.DOM,
  alignment = "Left",
  text = "Lorem ipsum",
  advancedVisibility = true,
  advancedClass,
  advancedId,
  advancedStyle,
}) {
  const _styleVariantMap = {
    Left: "",
    Center: "w-variant-21e489c6-6989-f581-d9e1-28c58641cdf8",
  };

  const _activeStyleVariant = _styleVariantMap[alignment];

  return advancedVisibility ? (
    <_Component
      className={_utils.cx(_styles, "eyebrow-component", _activeStyleVariant)}
      tag="div"
      slot=""
      _class={advancedClass}
      id={advancedId}
      style={advancedStyle}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "eyebrow", _activeStyleVariant)}
        tag="div"
      >
        {text}
      </_Builtin.Block>
    </_Component>
  ) : null;
}
