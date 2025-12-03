"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Spacer.module.css";

export function Spacer({
  as: _Component = _Builtin.DOM,
  size = "Main",
  advancedVisibility = true,
  advancedClass,
  advancedId,
  advancedStyle,
}) {
  const _styleVariantMap = {
    Main: "",
    Small: "w-variant-e4fc4cad-f8e2-63d7-bb51-6c5b9af34c38",
    Medium: "w-variant-60e88f1c-8990-2b60-1d3a-e5ec07d412dc",
    Large: "w-variant-aea45f07-8b30-d181-0430-911625064b03",
  };

  const _activeStyleVariant = _styleVariantMap[size];

  return advancedVisibility ? (
    <_Component
      className={_utils.cx(_styles, "spacer-component", _activeStyleVariant)}
      tag="div"
      slot=""
      _class={advancedClass}
      ID={advancedId}
      style={advancedStyle}
    />
  ) : null;
}
